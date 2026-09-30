export const es = {
    "nav.about": "sobre mí",
    "nav.experience": "experiencia",
    "nav.projects": "proyectos",
    "nav.contact": "contacto",
    "nav.language": "Idioma",
    "nav.menu": "Menú",
    "nav.openMenu": "Abrir menú",
    "nav.closeMenu": "Cerrar menú",

    "hero.subtitle": "Backend engineer · Go, Python y Elasticsearch",
    "hero.cta": "Ver experiencia",
    "hero.donwloadCv": "Descargar CV",

    "section.about": "Sobre mí",
    "section.experience": "Experiencia",
    "section.projects": "Proyectos",
    "section.stack": "Stack",
    "section.contact": "Contacto",

    "experience.present": "hoy",

    "project.site": "-> ver web",
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
    "nav.menu": "Menu",
    "nav.openMenu": "Open menu",
    "nav.closeMenu": "Close menu",
    "hero.subtitle": "Backend engineer · Go, Python and Elasticsearch",
    "hero.cta": "See experience",
    "hero.donwloadCv": "Download CV",

    "section.about": "About",
    "section.experience": "Experience",
    "section.projects": "Projects",
    "section.stack": "Stack",
    "section.contact": "Contact",

    "experience.present": "today",

    "project.site": "-> ver web",
    "project.repo": "→ view repository",
    "contact.text": "Have a project or an interesting role? Drop me a line.",
    "footer.madeWith": "built with Astro",
};

export const ui = { es, en };
