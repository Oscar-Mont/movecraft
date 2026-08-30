'use client'

import { useState } from "react";
import PromptBox from "./PromptBox";
import WorkoutEditor from "./WorkoutEditor";
import { generateWorkoutAction } from "@/actions/ai.actions";
import { Workout } from "@/types/Workout";
import { mockWorkoutPlan } from "@/data/mock-data";

export default function WorkoutBuilderClient() {
    const [workout, setWorkout] = useState<Workout | null>(null);
    const [isGenerating, setIsGenerating] = useState(false);
    const [error, setError] = useState<string | null>(null);

    async function handleGenerate(prompt: string): Promise<void> {
        const testing = true;
        if (testing) {
            setWorkout(mockWorkoutPlan);
            return;
        }

        setIsGenerating(true);
        setError(null);

        try {
            const generatedWorkout = await generateWorkoutAction(prompt);
            setWorkout(generatedWorkout);
        } catch (error) {
            console.error(error);
            setError("Something went wrong while generating the workout");
        } finally {
            setIsGenerating(false);
        }
    }

    return (
        <div className="flex flex-col">
            <PromptBox onGenerate={handleGenerate}></PromptBox>
            {isGenerating && <p>Generating Workout...</p>}
            {error && <p>{error}</p>}
            {workout && <WorkoutEditor workout={workout}></WorkoutEditor>}
        </div>
    )
}