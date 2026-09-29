import { defaultTheme, hunters } from "@/data/hunters";
import { FAVORITE_KEY } from "@/lib/storage";
import { hunterIds, type HunterTheme } from "@/types";

function decl(theme: HunterTheme) {
  return `--theme-primary:${theme.primary};--theme-secondary:${theme.secondary};--theme-soft:${theme.soft};--theme-glow:${theme.glow};--theme-background-accent:${theme.backgroundAccent};`;
}

export function buildThemeCss() {
  const root = `:root{${decl(defaultTheme)}}`;
  const themed = hunters.map((hunter) => `html[data-hunter="${hunter.id}"]{${decl(hunter.theme)}}`).join("");
  return root + themed;
}

export const THEME_BOOT = `try{var h=localStorage.getItem(${JSON.stringify(FAVORITE_KEY)});var ok=${JSON.stringify([...hunterIds])};if(h&&ok.indexOf(h)!==-1)document.documentElement.setAttribute("data-hunter",h);}catch(e){}`;
