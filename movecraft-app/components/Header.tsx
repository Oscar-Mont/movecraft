import DashboardPage from "@/app/dashboard/page";
import Link from "next/link";

export default function Header() {
    return (
        <div className="flex justify-between shadow-md p-5">
            <Link href="/" className="text-xl font-semibold">MoveCraft</Link>
            <div className="flex gap-3">
                <Link href="/workout-builder">Builder</Link>
                <Link href="/dashboard">Dashboard</Link>

            </div>

        </div >
    )
}