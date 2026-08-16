'use client'

import Button from "./Button"

export default function PromptBox() {
    return (
        <form action="" className=" flex flex-col  p-3 m-5 rounded-lg border-2 border-slate-200">
            <div className="flex justify-center items-center">
                <input type="text" placeholder="Patellar tendinopathy loading program" className="grow bg-slate-200 rounded-md p-2 m-2" />
                <Button variant="primary">Generate Workout</Button>
            </div>
            <h3 className="m-2">You can ask for workouts with warmups.</h3>
        </form>
    )
}