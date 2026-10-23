import { cookies } from "next/headers";
import { createClient } from "@/utils/supabase/server";

export default async function SupabaseTestPage() {
    const cookieStore = await cookies();
    const supabase = createClient(cookieStore);

    const { data, error } = await supabase
        .from("profiles")
        .select("id")
        .limit(1);

    if (error) {
        return <p>Supabase query failed: {error.message}</p>;
    }

    return <p>Supabase query succeeded. Rows returned: {data.length}</p>;
}