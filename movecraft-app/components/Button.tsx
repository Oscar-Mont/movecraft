'use client'

import { ReactNode } from "react";

type ButtonProps = {
    variant: string
    children: ReactNode
}

export default function Button({ variant, children }: ButtonProps) {
    return (
        <button className={`cursor-pointer ${applyVariant(variant)}`}>
            {children}
        </button>
    )
}

function applyVariant(variant: string) {
    if (variant === "primary") {
        return "bg-emerald-500 rounded-md p-2 text-white hover:bg-emerald-800"
    }
    if (variant === "secondary") {
        return "bg-slate-100 rounded-md p-2 text-black hover:bg-blue-500"
    }
    if (variant === "edit") {
        return "bg-cyan-400 rounded-md p-2 text-black px-8 hover:bg-cyan-800"
    }
}