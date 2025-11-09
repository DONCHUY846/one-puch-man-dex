import { NextResponse } from "next/server";

//Import our Singleton Supabase client
import supabase from "@/app/lib/supabaseClient";

//This route handles GET requests to fetch all characters from the Supabase database
// This function GET will be called when someone visits /api/characters with a GET request
export async function GET() {
    try{

        // Logic of the Model
        // Interact with Supabase usuing our singleton client to fetch data
        const { data , error } = await supabase
        .from('characters')
        .select('*');

        // Error handling
        if(error){
            console.error('Error fetching characters:', error.message);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        // Return the fetched data as a JSON response
        return NextResponse.json(data);
    }catch(e){
        // Catch any unexpected errors
        console.error('Unexpected error:', e.message);
        return NextResponse.json({ error: 'Unexpected error occurred' }, { status: 500 });
    }
}

// In this file, it's functioning  as the Model in the MVC pattern
