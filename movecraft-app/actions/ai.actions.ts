'use server'

import { GoogleGenAI } from "@google/genai";
import type { Workout } from "@/types/Workout";

//INITIALIZE SDK WITH API KEY
const ai = new GoogleGenAI({});


//DEFINE JSON SCHEMA FOR STRUCTURED OUTPUT
const workoutSchema = {
    type: "object",
    properties: {
        workoutName: {
            type: "string",
            description: "Un título conciso y claro para la rutina de ejercicio."
        },
        description: {
            type: "string",
            description: "Una descripción clara y corta del objetivo de la rutina."
        },
        exercises: {
            type: "array",
            description: "La lista de los ejercicios de la rutina, ordenados por su propósito (Warm-up, Workout y Cooldown).",
            items: {
                type: "object",
                properties: {
                    name: {
                        type: "string",
                        description: "Nombre del ejercicio."
                    },
                    description: {
                        type: "string",
                        description: "Instrucciones paso a paso de cómo realizar el ejercicio, en un párrafo que utilice palabras conectoras como: primero, posteriormente, por último. Añade mas conectores de ser necesario"
                    },
                    setsAndReps: {
                        type: "string",
                        description: "Las Series y repeticiones a realizar en formatos como los siguientes ejemplos: 4 series de 12 repeticiones, 4 repeticiones de 30 segundos."
                    },
                    load: {
                        type: "string",
                        description: "La intensidad prescrita, puede hacer referencia al peso del equipameinto a utilizar, a la percepción de esfuerzo o al uso del peso corporal."
                    },
                    additionalNotes: {
                        type: "string",
                        description: "Añade precauciones, aspectos del ejercicio a cuidar y cualquier otra nota importante. Puedes añadir el tempo de los ejercicios aqui mismo, por ejemplo: subir 2 segundos, mantener 2 segundos y bajar 2 segundos."
                    }
                },
                required: [
                    "name",
                    "description",
                    "setsAndReps",
                    "load",
                    "additionalNotes"
                ]
            }
        }
    },
    required: ["workoutName", "description", "exercises"]
}

const systemInstruction: string = `
Eres un sistema experto en fisioterapia deportiva, kinesiología y prescripción de ejercicio físico con más de 10 años de experiencia clínica. Tu objetivo es generar rutinas de ejercicio altamente estructuradas, seguras y adaptadas a las necesidades específicas del usuario o paciente, siguiendo el esquema especificado.

Directrices estrictas que DEBES seguir:
1. Seguridad y Criterio Clínico: Si el usuario indica alguna lesión activa, dolor agudo o restricción médica, debes adaptar los ejercicios o sugerir alternativas de bajo impacto / rangos de movimiento seguros. Nunca prescribas ejercicios contraindicados para la patología mencionada.
2. Dosificación Precisa: Cada ejercicio debe incluir parámetros claros.
3. Estructura Lógica: Toda rutina debe dividirse obligatoriamente en fases lógicas a menos que se de la situaciíon de la regla 5: 
   - Fase 1: Calentamiento: añade ejercicios de activacion o movilidad.
   - Fase 2: Workout principal: añade ejercicios que trabajen específicamente lo que te solicite el usuario.
   - Fase 3: Enfriamiento: añade ejercicios de estiramientos o de movilidad con la intención de volver a la calma.
4. Claridad en la terminología: Utiliza nombres de ejercicios claros y estándar (preferiblemente en español con su equivalente común o técnico).
5. Si el usuario te pide únicamente ejercicios de un tipo, como movilidad o estiramientos, considera solamente darle dicha lista, sin tener que consdierar calentamiento, workout y enfriamiento.
6. Tu respuesta debe ajustarse estrictamente a la estructura JSON solicitada, sin texto adicional fuera del formato.
`;

//WORKOUT GENERATOR SERVER ACTION
export async function generateWorkoutAction(prompt: string): Promise<Workout> {
    //add try catch block
    try {
        const response = await ai.interactions.create({
            model: "gemini-3.1-flash-lite",
            input: prompt,
            system_instruction: systemInstruction,
            response_format: {
                type: 'text',
                mime_type: 'application/json',
                schema: workoutSchema
            },
        });

        if (!response.output_text) {
            throw new Error("Gemini returned an empty response")
        }
        const parsedWorkout = JSON.parse(response.output_text) as Workout;
        return parsedWorkout;

    } catch (error) {
        console.error(error);
        throw new Error("Failed to generate workout.");
    }

}
