export type Locale = "es" | "ca" | "en";

export function localeFromLanguages(languages: readonly string[] | undefined): Locale {
  const codes = (languages ?? []).map((language) => language.trim().toLowerCase().split("-")[0]);

  if (codes.includes("ca")) return "ca";

  for (const code of codes) {
    if (code === "es" || code === "en") return code;
  }

  return "en";
}

export function localeFromAcceptLanguage(header: string | null): Locale {
  if (!header) return "es";

  const languages = header
    .split(",")
    .map((entry, index) => {
      const [language, quality] = entry.trim().split(/;\s*q\s*=\s*/i);
      return { language, quality: quality ? Number(quality) : 1, index };
    })
    .filter(({ quality }) => Number.isFinite(quality) && quality > 0)
    .sort((a, b) => b.quality - a.quality || a.index - b.index)
    .map(({ language }) => language);

  return localeFromLanguages(languages);
}
