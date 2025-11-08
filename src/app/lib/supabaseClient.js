import { createClient } from "@supabase/supabase-js";

// Supabase URL and Anon Key should be stored in environment variables for security
const SUPABASE_URL = process.env.NEXT_PUBLIC_SUPABASE_URL;
const SUPABASE_ANON_KEY = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Create the new instance of the Supabse client
const supabase = createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// Export the Supabase client for use in other part of the application

export default supabase;


// ¿Por qué esto es un Singleton?
// En el contexto de los módulos de JavaScript (como en Next.js), cualquier módulo (un archivo) se evalúa y se ejecuta una sola vez cuando se importa por primera vez en la aplicación.

// createClient() se llama solo una vez cuando el archivo supabaseClient.js es cargado.

// La instancia resultante se almacena en la variable supabase.

// Cualquier otro archivo que haga import supabase from 'lib/supabaseClient' recibirá una referencia a esa misma instancia ya creada, no creará una nueva.

// ¡Felicidades, has implementado tu primer patrón (Singleton) de forma moderna y eficiente!