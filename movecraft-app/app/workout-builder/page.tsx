import Button from "@/components/Button";
import PromptBox from "@/components/PromptBox";
import WorkoutEditor from "@/components/WorkoutEditor";

export default function WorkoutBuilderPage() {
    return (
        <div>
            <h2>Ask AI for daily workout to share with your clients</h2>
            <PromptBox></PromptBox>
            <WorkoutEditor></WorkoutEditor>

        </div>
    )
}