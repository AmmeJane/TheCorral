import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { loadEnv } from "vite";
import { z } from "astro/zod";
import path from "node:path";
import { pathToFileURL } from "node:url";

const env = loadEnv(process.env.NODE_ENV ?? "development", process.cwd(), "");
const vault = env.VAULT_PATH ?? "./vault";
console.log("Vault path:", vault);
const notesDir = pathToFileURL(path.resolve(vault, "notes") + path.sep);

const notes = defineCollection({
  loader: glob({ base: `${notesDir}`, pattern: "**/*.md" }),
  schema: z.object({
    title: z.string().optional(),
    tags: z.array(z.string()).optional(),
    specialism: z.string().optional(),
    week: z.string().optional(),
    publish: z.boolean().default(false),
  }),
});

export const collections = { notes };
