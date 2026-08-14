import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";

export const metadata: Metadata = {
  title: "Política de Privacidad",
  description: "Política de privacidad de Claudia Ruiz y tratamiento de datos enviados mediante el formulario de contacto.",
  alternates: {
    canonical: "/privacidad",
  },
};

export default function PrivacidadPage() {
  return (
    <LegalPage
      eyebrow="Protección de datos"
      title="Política de Privacidad"
      description="Aquí se explica qué datos pueden recogerse a través de la web, con qué finalidad se utilizan y cómo puedes ejercer tus derechos."
      updated="13 de agosto de 2026"
      sections={[
        {
          title: "Responsable del tratamiento",
          paragraphs: [
            "La responsable del tratamiento de los datos enviados a través de esta web es Claudia Ruiz.",
          ],
          items: [
            "Email de contacto: ruizvazquezclaudia@gmail.com",
            "Teléfono: +34 682 649 545",
            "Actividad: servicios de diseño, desarrollo y mantenimiento web.",
          ],
        },
        {
          title: "Datos que se recogen",
          paragraphs: [
            "A través del formulario de contacto pueden solicitarse datos como nombre, email, tipo de proyecto y mensaje. También puedes contactar directamente por email o teléfono.",
            "No se solicitan datos especialmente protegidos. Se recomienda no enviar información sensible a través del formulario.",
          ],
        },
        {
          title: "Finalidad del tratamiento",
          items: [
            "Responder a consultas recibidas a través del formulario o email.",
            "Preparar información, propuestas o presupuestos relacionados con servicios web.",
            "Mantener comunicación directa sobre un posible proyecto.",
            "Gestionar solicitudes relacionadas con diseño web, rediseño, landing pages o mantenimiento.",
          ],
        },
        {
          title: "Base legal",
          paragraphs: [
            "La base legal para tratar los datos es el consentimiento de la persona que contacta voluntariamente mediante el formulario, email o teléfono, así como la aplicación de medidas precontractuales cuando se solicita información sobre un servicio.",
          ],
        },
        {
          title: "Conservación de datos",
          paragraphs: [
            "Los datos se conservarán durante el tiempo necesario para responder a la consulta y gestionar la relación profesional, salvo que exista obligación legal de conservarlos durante más tiempo.",
          ],
        },
        {
          title: "Comunicación a terceros",
          paragraphs: [
            "No se venden ni ceden datos personales a terceros. El formulario puede utilizar servicios externos necesarios para enviar el mensaje, como FormSubmit, que actúa como proveedor técnico del envío.",
          ],
        },
        {
          title: "Derechos",
          paragraphs: [
            "Puedes solicitar el acceso, rectificación, supresión, oposición, limitación o portabilidad de tus datos escribiendo a ruizvazquezclaudia@gmail.com.",
            "Si consideras que tus datos no se han tratado correctamente, puedes presentar una reclamación ante la Agencia Española de Protección de Datos.",
          ],
        },
      ]}
    />
  );
}
