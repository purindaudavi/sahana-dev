import { createBrowserClient } from "@supabase/ssr";

const defaultUrl = "https://lwdljhiwljmojpfknowk.supabase.co";
const defaultKey = "sb_publishable_YgMSEPW3cdTPBZ-Mr7wv2w_xqp42hH6";

export const createClient = () =>
  createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL || defaultUrl,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY || defaultKey,
  );