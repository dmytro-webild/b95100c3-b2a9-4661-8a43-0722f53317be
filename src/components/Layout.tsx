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
        <FooterBrand
      brand="Kevin Castellon - Diseño Web CR"
      columns={[
        {
          items: [
            {
              label: "Privacidad",
              href: "#",
            },
            {
              label: "Términos",
              href: "#",
            },
          ],
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
