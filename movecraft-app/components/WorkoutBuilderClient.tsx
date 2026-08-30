'use client'

import { useState } from "react";
import PromptBox from "./PromptBox";
import WorkoutEditor from "./WorkoutEditor";

export default function WorkoutBuilderClient() {
    const [hasWorkout, setHasWorkout] = useState(true);

    function handleGenerate(prompt: string): void {
        console.log(prompt);
        //code to call the server action
        //generateWorjoutAction(prompt)
        //how will the action receive the prompt if that is on promptbox component?
    }

    return (
        <div className="flex flex-col">
            <PromptBox onGenerate={handleGenerate}></PromptBox>
            <WorkoutEditor></WorkoutEditor>

        </div>
    )
}