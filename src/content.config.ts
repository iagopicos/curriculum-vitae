import { defineCollection } from "astro:content";
import { glob, file } from "astro/loaders";
import { z } from "astro/zod";

const localized = z.object({
    es: z.string(),
    en: z.string(),
});

const experience = defineCollection({
    loader: glob({ pattern: "**/*.yaml", base: "./src/content/experience" }),
    schema: z.object({
        company: z.string(),
        role: localized,
        location: localized,
        start: z.number().int(),
        end: z.number().int().optional(),
        highlights: z.array(localized).min(1),
        tags: z.array(z.string()),
    }),
});

const stack = defineCollection({
    loader: file("src/content/stack.yaml"),
    schema: z.object({
        order: z.number().int(),
        label: localized,
        items: z.array(z.string()).min(1),
    }),
});

const about = defineCollection({
    loader: file("src/content/about.yaml"),
    schema: z.object({
        paragraphs: z.array(localized).min(1),
        facts: z.array(
            z.object({
                label: localized,
                value: localized,
            }),
        ),
    }),
});

const projects = defineCollection({
    loader: glob({ pattern: "**/*.yaml", base: "./src/content/projects" }),
    schema: z.object({
        name: z.string(),
        order: z.number().int(),
        description: localized,
        tags: z.array(z.string()),
        repo: z.string().optional(),
        site: z.string().optional(),
    }),
});
const education = defineCollection({
    loader: file("src/content/education.yaml"),
    schema: z.object({
        order: z.number().int(),
        degree: localized,
        institution: localized,
        period: z.string(),
    }),
});

export const collections = { experience, stack, about, projects, education };

