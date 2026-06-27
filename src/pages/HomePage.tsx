import AboutText from '@/components/sections/about/AboutText';
import ContactCta from '@/components/sections/contact/ContactCta';
import FaqTabbedAccordion from '@/components/sections/faq/FaqTabbedAccordion';
import FeaturesRevealCardsBento from '@/components/sections/features/FeaturesRevealCardsBento';
import HeroBillboardTiltedCarousel from '@/components/sections/hero/HeroBillboardTiltedCarousel';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import TestimonialColumnMarqueeCards from '@/components/sections/testimonial/TestimonialColumnMarqueeCards';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroBillboardTiltedCarousel
      tag=""
      title="Tu negocio merece una página que vende"
      description="Creo páginas web modernas para negocios locales en Costa Rica. Rápidas, profesionales y diseñadas para atraer más clientes."
      primaryButton={{
        text: "💬 Escribir por WhatsApp",
        href: "https://wa.me/50664264652",
      }}
      secondaryButton={{
        text: "Ver mis trabajos →",
        href: "#features",
      }}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/office-work-computer-technology-concept_53876-133883.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/3d-rendering-website-hosting-concept_23-2149484781.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/diverse-secret-agents-examine-clues-cia-secret-base-with-green-screen_482257-119889.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-ui-ux-elements_23-2149061049.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-photo/man-switching-bulbs-using-voice-command-tablet_482257-8730.jpg",
        },
        {
          imageSrc: "http://img.b2bpic.net/free-vector/gradient-colored-ui-kit-collection_23-2149209070.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutText
      title="Diseño web enfocado en resultados locales en Costa Rica. Con años de experiencia ayudando a emprendedores, transformo ideas en plataformas digitales que convierten visitantes en clientes fieles."
    />
    </SectionErrorBoundary>
  </div>

  <div id="features" data-section="features">
    <SectionErrorBoundary name="features">
          <FeaturesRevealCardsBento
      tag="Soluciones Digitales"
      title="Servicios que impulsan tu negocio"
      description="Herramientas diseñadas para escalar tu presencia en línea."
      items={[
        {
          title: "Diseño Moderno",
          description: "Interfaces limpias, atractivas y responsive.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/fast-time-clock-ui-icon-sign-symbol-3d-rendering_56104-1926.jpg",
        },
        {
          title: "Velocidad Extrema",
          description: "Páginas optimizadas para cargar en milisegundos.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/fast-speed-broadband-accelerate-internet_53876-133585.jpg",
        },
        {
          title: "SEO Local",
          description: "Posicionamiento efectivo en Costa Rica.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/hands-holding-up-colorful-letters-forming-abbreviation-seo_53876-167038.jpg",
        },
        {
          title: "Conversión",
          description: "Diseños estratégicos para vender más.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/arrangement-with-colorful-shapes_23-2148879428.jpg",
        },
        {
          title: "Soporte Total",
          description: "Acompañamiento continuo post-entrega.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/call-center-agent-talking-headset-mic-typing-keyboard_482257-125066.jpg",
        },
        {
          title: "Integración",
          description: "Conexión directa con WhatsApp y CRM.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-photo/chat-conversation-communication-connection-concept_53876-124388.jpg",
        },
        {
          title: "Entrega Rápida",
          description: "Tu página lista en tan solo 7 días.",
          href: "#",
          imageSrc: "http://img.b2bpic.net/free-vector/pack-various-fast-service-logo-designs_52683-61830.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Impacto Medible"
      title="Resultados concretos"
      description="Elevamos los estándares de tu presencia digital."
      metrics={[
        {
          value: "+85%",
          description: "Aumento en tasa de conversión",
        },
        {
          value: "7 Días",
          description: "Tiempo promedio de entrega",
        },
        {
          value: "100%",
          description: "Diseños personalizados",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialColumnMarqueeCards
      tag="Clientes Satisfechos"
      title="Lo que dicen de mi trabajo"
      description="Testimonios reales de emprendedores en Costa Rica."
      testimonials={[
        {
          name: "Sofía Vargas",
          role: "Propietaria, Salón de Belleza",
          quote: "Excelente trabajo, mi sitio ahora vende solo.",
          imageSrc: "http://img.b2bpic.net/free-photo/serious-executive-with-short-hair-crossed-arms_1149-89.jpg",
        },
        {
          name: "Carlos Mora",
          role: "Fundador, StartUp Tech",
          quote: "La entrega fue puntual y de alta calidad.",
          imageSrc: "http://img.b2bpic.net/free-photo/happy-confident-bearded-man-brown-suit-wearing-glasses-looking-camera-smiling-cheerfully-with-arms-crossed-standing-purple-background_141793-110713.jpg",
        },
        {
          name: "Elena Torres",
          role: "Gerente, Boutique",
          quote: "Kevin entendió perfectamente la marca.",
          imageSrc: "http://img.b2bpic.net/free-photo/business-woman-banner-concept-with-copy-space_23-2149601533.jpg",
        },
        {
          name: "Javier Solís",
          role: "Restaurador",
          quote: "El sitio es muy rápido y fácil de manejar.",
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-bearded-man-holding-his-arms-crossed_23-2148737964.jpg",
        },
        {
          name: "Ana Castro",
          role: "Consultora",
          quote: "Profesionalismo de principio a fin.",
          imageSrc: "http://img.b2bpic.net/free-photo/blond-business-woman-blue-shirt_23-2148095792.jpg",
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="faq" data-section="faq">
    <SectionErrorBoundary name="faq">
          <FaqTabbedAccordion
      tag="Preguntas Frecuentes"
      title="Todo lo que necesitas saber"
      description="Resolvemos tus dudas sobre el proceso de creación web."
      categories={[
        {
          name: "Proceso",
          items: [
            {
              question: "¿Cuánto tarda la entrega?",
              answer: "Entrego proyectos completos en 7 días hábiles.",
            },
            {
              question: "¿Incluye soporte?",
              answer: "Sí, incluyo soporte técnico durante el primer mes.",
            },
          ],
        },
      ]}
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="¡Hablemos ahora!"
      text="Todo esto en español. Escríbeme y empecemos hoy mismo."
      primaryButton={{
        text: "💬 Escribir por WhatsApp",
        href: "https://wa.me/50664264652",
      }}
      secondaryButton={{
        text: "Ver trabajos",
        href: "#features",
      }}
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}
