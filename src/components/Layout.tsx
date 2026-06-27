import FooterBrand from '@/components/sections/footer/FooterBrand';
import NavbarDropdown from '@/components/ui/NavbarDropdown';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Inicio",
    "href": "#hero"
  },
  {
    "name": "Servicios",
    "href": "#features"
  },
  {
    "name": "Resultados",
    "href": "#metrics"
  },
  {
    "name": "Testimonios",
    "href": "#testimonials"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Faq",
    "href": "#faq"
  },
  {
    "name": "Contact",
    "href": "#contact"
  }
];

  return (
    <StyleProvider buttonVariant="arrow" siteBackground="gridLines" heroBackground="horizonGlow">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarDropdown
      logo="Kevin Castellon"
      ctaButton={{
        text: "WhatsApp",
        href: "https://wa.me/50664264652",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <footer className="w-full py-12 bg-background">
          <div className="w-content-width mx-auto flex flex-col items-center gap-6">
            <div className="text-xl font-medium text-foreground">Kevin Castellon - Diseño Web CR</div>
            <div className="flex flex-wrap justify-center gap-6 text-sm text-accent">
              <a href="#hero" className="hover:text-foreground transition-colors">Inicio</a>
              <a href="#features" className="hover:text-foreground transition-colors">Servicios</a>
              <a href="#metrics" className="hover:text-foreground transition-colors">Resultados</a>
              <a href="#testimonials" className="hover:text-foreground transition-colors">Testimonios</a>
              <a href="#faq" className="hover:text-foreground transition-colors">FAQ</a>
              <a href="#contact" className="hover:text-foreground transition-colors">Contacto</a>
            </div>
            <div className="flex flex-wrap justify-center gap-6 text-xs text-accent/60 mt-4">
              <a href="#" className="hover:text-foreground transition-colors">Política de Privacidad</a>
              <a href="#" className="hover:text-foreground transition-colors">Términos y Condiciones</a>
              <span>© {new Date().getFullYear()} Kevin Castellon. Todos los derechos reservados.</span>
            </div>
          </div>
        </footer>
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
