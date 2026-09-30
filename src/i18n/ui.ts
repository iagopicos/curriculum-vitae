export const es = {
    "nav.about": "sobre mí",
    "nav.experience": "experiencia",
    "nav.projects": "proyectos",
    "nav.contact": "contacto",
    "nav.language": "Idioma",

    "hero.subtitle": "Backend engineer · APIs, sistemas distribuidos y bases de datos",
    "hero.cta": "Ver experiencia",

    "section.about": "Sobre mí",
    "section.experience": "Experiencia",
    "section.projects": "Proyectos",
    "section.stack": "Stack",
    "section.contact": "Contacto",

    "project.repo": "→ ver repositorio",
    "contact.text": "¿Tienes un proyecto o una vacante interesante? Escríbeme y hablamos.",
    "footer.madeWith": "hecho con Astro",
} as const;

export type UIKey = keyof typeof es;

export const en: Record<UIKey, string> = {
    "nav.about": "about",
    "nav.experience": "experience",
    "nav.projects": "projects",
    "nav.contact": "contact",
    "nav.language": "Language",

    "hero.subtitle": "Backend engineer · APIs, distributed systems and databases",
    "hero.cta": "See experience",

    "section.about": "About",
    "section.experience": "Experience",
    "section.projects": "Projects",
    "section.stack": "Stack",
    "section.contact": "Contact",

    "project.repo": "→ view repository",
    "contact.text": "Have a project or an interesting role? Drop me a line.",
    "footer.madeWith": "built with Astro",
};

export const ui = { es, en };
