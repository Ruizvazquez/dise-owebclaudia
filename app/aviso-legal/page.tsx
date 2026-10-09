import type { Metadata } from "next";
import { headers } from "next/headers";
import LegalPage from "@/components/LegalPage";
import { legalCopyCa } from "@/lib/legal-copy-ca";
import { localeFromAcceptLanguage } from "@/lib/locale";

export async function generateMetadata(): Promise<Metadata> {
  const isCatalan = localeFromAcceptLanguage((await headers()).get("accept-language")) === "ca";
  return {
    title: isCatalan ? "Avís legal" : "Aviso Legal",
    description: isCatalan
      ? "Avís legal de Claudia Ruiz, estudi de disseny web per a petits negocis i autònoms."
      : "Aviso legal de Claudia Ruiz, estudio de diseño web para pequeños negocios y autónomos.",
    alternates: { canonical: "/aviso-legal" },
  };
}

export default async function AvisoLegalPage() {
  const isCatalan = localeFromAcceptLanguage((await headers()).get("accept-language")) === "ca";
  if (isCatalan) return <LegalPage locale="ca" {...legalCopyCa.avisoLegal} />;

  return (
    <LegalPage
      eyebrow="Información legal"
      title="Aviso Legal"
      description="En esta página encontrarás la información general sobre la titularidad y condiciones básicas de uso de esta web."
      updated="13 de agosto de 2026"
      sections={[
        {
          title: "Titular de la web",
          paragraphs: [
            "Esta web pertenece a Claudia Ruiz, estudio de diseño web especializado en páginas web para pequeños negocios y autónomos.",
          ],
          items: [
            "Email de contacto: ruizvazquezclaudia@gmail.com",
            "Teléfono: +34 682 649 545",
            "Actividad: diseño web, desarrollo web, rediseño, landing pages y mantenimiento web.",
          ],
        },
        {
          title: "Objeto de la web",
          paragraphs: [
            "El objetivo de esta web es presentar los servicios profesionales de diseño y desarrollo web de Claudia Ruiz, mostrar proyectos y facilitar un canal de contacto para personas interesadas en solicitar información o presupuesto.",
          ],
        },
        {
          title: "Uso de la web",
          paragraphs: [
            "La persona usuaria se compromete a utilizar esta web de forma adecuada, sin realizar acciones que puedan dañar, bloquear, sobrecargar o deteriorar su funcionamiento.",
            "Los contenidos de esta web se ofrecen con finalidad informativa y comercial. Claudia Ruiz se reserva el derecho de actualizar, modificar o eliminar contenidos cuando sea necesario.",
          ],
        },
        {
          title: "Propiedad intelectual",
          paragraphs: [
            "Los textos, diseño, estructura, imágenes, elementos gráficos y composición visual de esta web forman parte del portfolio y comunicación profesional de Claudia Ruiz, salvo aquellos recursos que pertenezcan a terceros o se indiquen expresamente.",
            "No está permitida la reproducción, distribución o transformación de los contenidos sin autorización previa.",
          ],
        },
        {
          title: "Responsabilidad",
          paragraphs: [
            "Claudia Ruiz trabaja para mantener la información actualizada y el correcto funcionamiento de la web, pero no puede garantizar la ausencia absoluta de errores técnicos o interrupciones puntuales.",
            "Esta página legal es una base informativa. Para un lanzamiento comercial definitivo, se recomienda validar el texto con un profesional especializado en protección de datos y normativa digital.",
          ],
        },
      ]}
    />
  );
}
