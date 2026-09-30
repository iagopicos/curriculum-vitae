import { ui, type UIKey } from "./ui";

export type Lang = keyof typeof ui;
export const defaultLang: Lang = "es";

export function getLang(locale: string | undefined): Lang {
    return locale && locale in ui ? (locale as Lang) : defaultLang;
}

export function useTranslations(lang: Lang) {
    return (key: UIKey) => ui[lang][key];
}
