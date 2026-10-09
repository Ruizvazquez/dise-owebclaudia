import type { Locale } from "@/lib/locale";

export default function WhatsAppButton({ locale = "es" }: { locale?: Locale }) {
  const message = locale === "ca"
    ? "Hola Claudia, voldria demanar informació sobre una pàgina web."
    : locale === "en"
      ? "Hi Claudia, I would like to ask about a website."
      : "Hola Claudia, me gustaría pedir información sobre una página web.";
  const whatsappUrl = `https://wa.me/34682649545?text=${encodeURIComponent(message)}`;
  const label = locale === "ca" ? "Contactar amb la Claudia per WhatsApp" : locale === "en" ? "Contact Claudia on WhatsApp" : "Contactar con Claudia por WhatsApp";
  const tooltip = locale === "ca" ? "Escriu-me" : locale === "en" ? "Message me" : "Escríbeme";
  return (
    <a
      className="whatsapp-fab"
      href={whatsappUrl}
      target="_blank"
      rel="noreferrer"
      aria-label={label}
      title={label}
    >
      <span className="whatsapp-fab-tooltip" aria-hidden="true">
        {tooltip}
      </span>
      <svg aria-hidden="true" viewBox="0 0 32 32">
        <path d="M16 3.2A12.7 12.7 0 0 0 5.1 22.4L3.4 28.6l6.4-1.7A12.8 12.8 0 1 0 16 3.2Zm0 2.2a10.6 10.6 0 1 1-5.4 19.7l-.4-.2-3.7 1 1-3.6-.3-.4A10.6 10.6 0 0 1 16 5.4Zm-4.6 4.5c-.3 0-.8.1-1.2.6-.4.5-1.6 1.6-1.6 3.9s1.7 4.5 1.9 4.8c.2.3 3.3 5.1 8.1 6.9 4 1.6 4.8 1.3 5.7 1.2.9-.1 2.8-1.2 3.2-2.3.4-1.1.4-2.1.3-2.3-.1-.2-.4-.3-.9-.6l-3.3-1.5c-.4-.2-.8-.3-1.1.3-.3.5-1.3 1.5-1.6 1.9-.3.4-.6.4-1.1.1-.5-.2-2.1-.8-4-2.5-1.5-1.3-2.5-3-2.8-3.5-.3-.5 0-.8.2-1 .2-.2.5-.6.7-.8.2-.3.3-.5.5-.8.2-.3.1-.6 0-.8l-1.5-3.5c-.4-.9-.8-.8-1.1-.8h-1.4Z" />
      </svg>
    </a>
  );
}
