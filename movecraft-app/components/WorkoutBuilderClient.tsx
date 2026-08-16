'use client'

import { useState } from "react";
import PromptBox from "./PromptBox";
import WorkoutEditor from "./WorkoutEditor";

export default function WorkoutBuilderClient() {
    const [prompt, setPrompt] = useState("")
    const [hasWorkout, setHasWorkout] = useState(false)

    function handleGenerate(): void {
        setHasWorkout(true)
    }

    return (
        <div className="flex flex-col">
            {!hasWorkout ? <PromptBox prompt={prompt} onGenerate={handleGenerate}></PromptBox> : <WorkoutEditor></WorkoutEditor>}


        </div>
    )
}