import { redirect } from "@sveltejs/kit";

/** @type {import('./$types').PageServerLoad} */
export function load() {
  throw redirect(307, "/TO/zamena-masla-v-dvs");
}
