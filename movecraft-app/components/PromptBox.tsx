'use client'

import Button from "./Button"

type PromptBoxProps = {
    prompt: string
    onGenerate: () => void
};

export default function PromptBox({ prompt, onGenerate }: PromptBoxProps) {
    return (
        <form action="" className=" flex flex-col  p-3 m-5 rounded-lg border-2 border-slate-200">
            <div className="flex justify-center items-center">
                <div className="flex grow justify-center items-center bg-slate-200 p-3 rounded-lg">
                    <input type="text" placeholder="Patellar tendinopathy loading program" className="grow bg-slate-200" />
                    <Button variant="primary">Generate Workout</Button>
                </div>
            </div>
            <h3 className="m-2 text-slate-500">Ask for anything! AI will give you an organized list of exercises and details.</h3>
        </form>
    )
}