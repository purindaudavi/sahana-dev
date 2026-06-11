import { createBrowserClient } from "@supabase/ssr";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseKey = process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

export const createClient = () =>
  createBrowserClient(
    "https://lwdljhiwljmojpfknowk.supabase.co",
    "sb_publishable_YgMSEPW3cdTPBZ-Mr7wv2w_xqp42hH6",
  );