'use client'

import { useState } from "react";
import Button from "./Button"

type PromptBoxProps = {
    onGenerate: (prompt: string) => void
};

export default function PromptBox({ onGenerate }: PromptBoxProps) {
    const [prompt, setPrompt] = useState("");

    function handleSubmit(event) {
        event.preventDefault();

        const trimmedPrompt: string = prompt.trim();

        if (!trimmedPrompt) {
            return;
        }

        onGenerate(trimmedPrompt);
    }

    return (
        <form
            onSubmit={handleSubmit}
            className=" flex flex-col p-3">
            <div className="flex justify-center items-center gap-2">
                <input type="text" value={prompt}
                    onChange={(event) => setPrompt(event.target.value)}
                    placeholder="Dame una rutina de ejercicios para un paciente con tendinopatia rotuliana aguda" className="grow bg-blue-950 rounded-md p-4 text-emerald-300" />
                <Button variant="primary">Generar Rutina</Button>

            </div>
            <h3 className="m-2 text-sm italic">Pide cualquier tipo de rutina! La IA te dara una respuesta estructurada segun lo que le pidas.</h3>
        </form>
    )
}