type ExerciseType = "Warm-up" | "Workout" | "Finisher" | "Cooldown";

type Exercise = {
    type: ExerciseType;
    name: string;
    description: string;
    setsAndReps: string;
    load: string;
    additionalNotes: string;
};

export const workoutName = "Isometric Tendon Strenghtening"
export const description = "A simple workout description"

export const mockWorkoutPlan: Exercise[] = [
    {
        type: "Warm-up",
        name: "Arm Circles",
        description: "Gentle shoulder mobility drill to warm up the upper body.",
        setsAndReps: "2 x 12 each direction",
        load: "Bodyweight",
        additionalNotes: "Move slowly and keep the shoulders relaxed."
    },
    {
        type: "Warm-up",
        name: "Bodyweight Squats",
        description: "Activates the lower body and prepares the knees and hips.",
        setsAndReps: "2 x 15",
        load: "Bodyweight",
        additionalNotes: "Keep the chest tall and squat to a comfortable depth."
    },
    {
        type: "Workout",
        name: "Goblet Squat",
        description: "A compound lower-body movement that builds strength and stability.",
        setsAndReps: "4 x 10",
        load: "24 kg kettlebell",
        additionalNotes: "Brace the core and keep the knees tracking over the toes."
    },
    {
        type: "Workout",
        name: "Push-Ups",
        description: "Upper-body pressing movement targeting chest, shoulders, and triceps.",
        setsAndReps: "3 x 12",
        load: "Bodyweight",
        additionalNotes: "Use a bench or incline if standard push-ups are too difficult."
    },
    {
        type: "Workout",
        name: "Bent-Over Row",
        description: "Back-focused strength exercise that improves posture and pulling power.",
        setsAndReps: "4 x 10",
        load: "20 kg dumbbells",
        additionalNotes: "Keep the spine neutral and avoid jerking the weight."
    },
    {
        type: "Finisher",
        name: "Jumping Lunges",
        description: "High-intensity conditioning movement to finish strong.",
        setsAndReps: "3 x 20 total reps",
        load: "Bodyweight",
        additionalNotes: "Take a brief rest between rounds if needed."
    },
    {
        type: "Cooldown",
        name: "Standing Hamstring Stretch",
        description: "Lengthens the posterior chain and reduces tightness after training.",
        setsAndReps: "2 x 30 seconds per side",
        load: "Bodyweight",
        additionalNotes: "Stretch gently and avoid bouncing."
    }
];