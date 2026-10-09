import { headers } from "next/headers";
import GardenMount from "@/components/GardenMount";
import { localeFromAcceptLanguage } from "@/lib/locale";

export default async function Home() {
  const locale = localeFromAcceptLanguage((await headers()).get("accept-language"));
  return <GardenMount initialLocale={locale} />;
}
