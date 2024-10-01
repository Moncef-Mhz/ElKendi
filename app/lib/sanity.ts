import { createClient } from "next-sanity";

import { sources } from "next/dist/compiled/webpack/webpack";
export const client = createClient({
  apiVersion: "2024-09-13",
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  useCdn: false,
});
