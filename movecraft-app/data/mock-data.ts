import { Exercise } from "@/types/Exercise";

export const workoutName = "Isometric Tendon Strenghtening";
export const description = "A simple workout description";

export const mockWorkoutPlan: Exercise[] = [
    {
        name: "Arm Circles",
        description: "Gentle shoulder mobility drill to warm up the upper body.",
        setsAndReps: "2 x 12 each direction",
        load: "Bodyweight",
        additionalNotes: "Move slowly and keep the shoulders relaxed.",
        linkToVideo: "https://www.youtube.com/watch?v=4j6iU4B3G3A"
    },
    {
        name: "Bodyweight Squats",
        description: "Activates the lower body and prepares the knees and hips.",
        setsAndReps: "2 x 15",
        load: "Bodyweight",
        additionalNotes: "Keep the chest tall and squat to a comfortable depth.",
        linkToVideo: "https://www.youtube.com/watch?v=aclHkVaku9U"
    },
    {
        name: "Goblet Squat",
        description: "A compound lower-body movement that builds strength and stability.",
        setsAndReps: "4 x 10",
        load: "24 kg kettlebell",
        additionalNotes: "Brace the core and keep the knees tracking over the toes.",
        linkToVideo: "https://www.youtube.com/watch?v=MeI6QJ4aN5M"
    },
    {
        name: "Push-Ups",
        description: "Upper-body pressing movement targeting chest, shoulders, and triceps.",
        setsAndReps: "3 x 12",
        load: "Bodyweight",
        additionalNotes: "Use a bench or incline if standard push-ups are too difficult.",
        linkToVideo: "https://www.youtube.com/watch?v=IODxDxX7oi4"
    },
    {
        name: "Bent-Over Row",
        description: "Back-focused strength exercise that improves posture and pulling power.",
        setsAndReps: "4 x 10",
        load: "20 kg dumbbells",
        additionalNotes: "Keep the spine neutral and avoid jerking the weight.",
        linkToVideo: "https://www.youtube.com/watch?v=9M6kFvK0VqM"
    },
    {
        name: "Jumping Lunges",
        description: "High-intensity conditioning movement to finish strong.",
        setsAndReps: "3 x 20 total reps",
        load: "Bodyweight",
        additionalNotes: "Take a brief rest between rounds if needed.",
        linkToVideo: "https://www.youtube.com/watch?v=zhvA7DC9Ld8"
    },
    {
        name: "Standing Hamstring Stretch",
        description: "Lengthens the posterior chain and reduces tightness after training.",
        setsAndReps: "2 x 30 seconds per side",
        load: "Bodyweight",
        additionalNotes: "Stretch gently and avoid bouncing.",
        linkToVideo: "https://www.youtube.com/watch?v=QFJ8B0dV7Xg"
    }
];