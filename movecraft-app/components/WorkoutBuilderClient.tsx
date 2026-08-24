'use client'

import { useState } from "react";
import PromptBox from "./PromptBox";
import WorkoutEditor from "./WorkoutEditor";

export default function WorkoutBuilderClient() {
    const [prompt, setPrompt] = useState("");
    const [hasWorkout, setHasWorkout] = useState(true);

    function handleGenerate(): void {
        setHasWorkout(true);
        //code to call the server action
        //generateWorjoutAction(prompt)
        //how will the action receive the prompt if that is on promptbox component?
    }

    return (
        <div className="flex flex-col">
            {!hasWorkout ? <PromptBox prompt={prompt} onGenerate={handleGenerate}></PromptBox> : <WorkoutEditor></WorkoutEditor>}


        </div>
    )
}