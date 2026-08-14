import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Cookies",
  description: "Información sobre el uso de cookies en la web de Claudia Ruiz.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
  return (
    <LegalPage
      eyebrow="Cookies"
      title="Política de Cookies"
      description="Esta página explica qué son las cookies y cómo se gestionan en esta web."
      updated="13 de agosto de 2026"
      sections={[
        {
          title: "Qué son las cookies",
          paragraphs: [
            "Las cookies son pequeños archivos que una web puede almacenar en el navegador para recordar información técnica, mejorar la navegación o medir el uso de la página.",
          ],
        },
        {
          title: "Uso actual de cookies",
          paragraphs: [
            "Actualmente esta web no incorpora cookies analíticas, publicitarias ni de seguimiento configuradas por Claudia Ruiz.",
            "La web puede utilizar funcionalidades técnicas propias del navegador o del proveedor de alojamiento necesarias para cargar correctamente la página y mantener su seguridad.",
          ],
        },
        {
          title: "Cookies de terceros",
          paragraphs: [
            "Si en el futuro se añaden herramientas como analítica web, píxeles publicitarios, mapas, vídeos incrustados, chat o servicios similares, esta política se actualizará y, cuando corresponda, se mostrará un banner de consentimiento.",
          ],
        },
        {
          title: "Cómo gestionar cookies",
          paragraphs: [
            "Puedes permitir, bloquear o eliminar cookies desde la configuración de tu navegador. Cada navegador ofrece sus propias opciones de privacidad y seguridad.",
          ],
          items: [
            "Google Chrome: configuración de privacidad y seguridad.",
            "Safari: preferencias de privacidad.",
            "Firefox: ajustes de privacidad y protección contra rastreo.",
            "Microsoft Edge: cookies y permisos del sitio.",
          ],
        },
        {
          title: "Actualización de esta política",
          paragraphs: [
            "Esta política podrá actualizarse si cambia la configuración técnica de la web o se incorporan nuevas herramientas que impliquen el uso de cookies.",
          ],
        },
      ]}
    />
  );
}
