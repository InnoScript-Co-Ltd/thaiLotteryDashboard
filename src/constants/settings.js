export const CURRENT_LANG = "CURRENT_LANG";

export const DEFAULT_LANG = "eng";

export const currentLang = localStorage.getItem(CURRENT_LANG) ? localStorage.getItem(CURRENT_LANG) : DEFAULT_LANG;