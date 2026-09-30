import FooterSimpleCard from '@/components/sections/footer/FooterSimpleCard';
import NavbarCentered from '@/components/ui/NavbarCentered';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";
import SiteBackgroundSlot from "@/components/ui/SiteBackgroundSlot";
import { Outlet } from 'react-router-dom';
import { StyleProvider } from "@/components/ui/StyleProvider";

export default function Layout() {
  const navItems = [
  {
    "name": "Home",
    "href": "#hero"
  },
  {
    "name": "About",
    "href": "#about"
  },
  {
    "name": "Portfolio",
    "href": "#portfolio"
  },
  {
    "name": "Pricing",
    "href": "#pricing"
  },
  {
    "name": "Metrics",
    "href": "#metrics"
  },
  {
    "name": "Team",
    "href": "#team"
  },
  {
    "name": "Testimonials",
    "href": "#testimonials"
  }
];

  return (
    <StyleProvider buttonVariant="bounce" siteBackground="gridLines" heroBackground="lightRaysCorner">
      <SiteBackgroundSlot />
      <SectionErrorBoundary name="navbar">
        <NavbarCentered
      logo="INK & SOUL"
      ctaButton={{
        text: "Book Now",
        href: "#contact",
      }}
     navItems={navItems} />
      </SectionErrorBoundary>
      <main className="flex-grow">
        <Outlet />
      </main>
      <SectionErrorBoundary name="footer">
        <FooterSimpleCard
      brand="INK & SOUL"
      columns={[
        {
          title: "Studio",
          items: [
            {
              label: "About Us",
              href: "#about",
            },
            {
              label: "Artists",
              href: "#team",
            },
          ],
        },
        {
          title: "Services",
          items: [
            {
              label: "Pricing",
              href: "#pricing",
            },
            {
              label: "Book Now",
              href: "#contact",
            },
          ],
        },
      ]}
      copyright="© 2024 Ink & Soul Studio. All rights reserved."
      links={[
        {
          label: "Privacy Policy",
          href: "#",
        },
        {
          label: "Terms of Service",
          href: "#",
        },
      ]}
    />
      </SectionErrorBoundary>
    </StyleProvider>
  );
}
