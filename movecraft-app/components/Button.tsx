'use client'

import { ReactNode } from "react"

type ButtonProps = {
    variant: string
    children: ReactNode
}

export default function Button({ variant, children }: ButtonProps) {
    return (
        <button className={applyVariant(variant)}>
            {children}
        </button>
    )
}

function applyVariant(variant: string) {
    if (variant === "primary") {
        return "bg-blue-500 rounded-md p-2 text-white"
    }
    if (variant === "secondary") {
        return "bg-slate-100 rounded-md p-2 text-black"
    }
    if (variant === "edit") {
        return "bg-green-200 rounded-md p-2 text-black px-8"
    }
}