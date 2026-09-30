import AboutTextSplit from '@/components/sections/about/AboutTextSplit';
import ContactCta from '@/components/sections/contact/ContactCta';
import FeaturesTaggedCards from '@/components/sections/features/FeaturesTaggedCards';
import HeroSplitMediaGrid from '@/components/sections/hero/HeroSplitMediaGrid';
import MetricsSimpleCards from '@/components/sections/metrics/MetricsSimpleCards';
import PricingMediaCards from '@/components/sections/pricing/PricingMediaCards';
import TeamListCards from '@/components/sections/team/TeamListCards';
import TestimonialTrustCard from '@/components/sections/testimonial/TestimonialTrustCard';
import SectionErrorBoundary from "@/components/ui/SectionErrorBoundary";

export default function HomePage() {
  return (
    <>
  <div id="hero" data-section="hero">
    <SectionErrorBoundary name="hero">
          <HeroSplitMediaGrid
      tag="Master Tattoo Artist"
      title="Turn Your Vision into Permanent Art"
      description="Experience professional artistry, hygienic standards, and custom tattoo designs tailored to your soul. Book your session today."
      primaryButton={{
        text: "Book Consultation",        href: "#contact"}}
      secondaryButton={{
        text: "View Portfolio",        href: "#portfolio"}}
      items={[
        {
          imageSrc: "http://img.b2bpic.net/free-photo/tattoo-studio-with-masters-clients_23-2147834102.jpg"},
        {
          imageSrc: "http://img.b2bpic.net/free-photo/young-handsome-tattooed-man-having-breakfast-bed-open-air-outdoors-garden_1321-990.jpg"},
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="about" data-section="about">
    <SectionErrorBoundary name="about">
          <AboutTextSplit
      title="About Our Studio"
      descriptions={[
        "Located in the heart of the city, Ink & Soul is a premier destination for custom tattoo art. Our artists combine technical precision with deep artistic passion.",        "We focus on creating a comfortable, sterile, and creative environment where your ideas come to life. Whether you're getting your first piece or a full-sleeve project, we are here to guide you."]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="portfolio" data-section="portfolio">
    <SectionErrorBoundary name="portfolio">
          <FeaturesTaggedCards
      tag="Featured Art"
      title="Our Signature Pieces"
      description="Explore our portfolio of custom designs, ranging from minimalist fineline work to intricate black-and-grey realism."
      items={[
        {
          tag: "Hygiene",          title: "Sterile Excellence",          description: "We uphold the highest medical-grade sterilization standards in the industry.",          primaryButton: {
            text: "Learn More",            href: "#"},
          imageSrc: "http://img.b2bpic.net/free-photo/master-making-tattoo-studio_23-2147834008.jpg"},
        {
          tag: "Design",          title: "Custom Concepts",          description: "We work closely with you to design bespoke pieces that define your identity.",          primaryButton: {
            text: "Start Design",            href: "#contact"},
          imageSrc: "http://img.b2bpic.net/free-photo/woman-with-drawings-her-body_1122-1420.jpg"},
        {
          tag: "Realism",          title: "Artist-Level Detail",          description: "Our experts specialize in realistic, vibrant ink that stands the test of time.",          primaryButton: {
            text: "View All",            href: "#"},
          imageSrc: "http://img.b2bpic.net/free-photo/serious-woman-covering-half-face-with-hand_1122-1554.jpg"},
      ]}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>

  <div id="pricing" data-section="pricing">
    <SectionErrorBoundary name="pricing">
          <PricingMediaCards
      tag="Session Rates"
      title="Transparent Pricing"
      description="We offer clear, hourly-based pricing for all custom tattoo work."
      plans={[
        {
          tag: "Standard Session",          price: "$150",          period: "/hr",          features: [
            "Custom Design Time",            "Full Studio Hygiene",            "Aftercare Kit Included"],
          primaryButton: {
            text: "Book Session",            href: "#contact"},
          imageSrc: "http://img.b2bpic.net/free-photo/portrait-tattoed-student-girl-dressed-white-t-shirt-hat-holds-tablet-takeaway-coffee-while-leaning-table-room-with-loft-interior_613910-18314.jpg"},
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="metrics" data-section="metrics">
    <SectionErrorBoundary name="metrics">
          <MetricsSimpleCards
      tag="Our Impact"
      title="Ink Facts"
      description="Evidence of our commitment to excellence."
      metrics={[
        {
          value: "500+",          description: "Successful Custom Pieces"},
        {
          value: "99%",          description: "Client Satisfaction Rate"},
        {
          value: "15",          description: "Years of Artistic Experience"},
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="team" data-section="team">
    <SectionErrorBoundary name="team">
          <TeamListCards
      tag="Our Artists"
      title="Meet the Team"
      description="Our studio is home to some of the most talented tattoo artists."
      groups={[
        {
          title: "Studio Experts",          members: [
            {
              name: "Alex Rivers",              role: "Head Artist",              detail: "10 years of realism excellence.",              imageSrc: "http://img.b2bpic.net/free-photo/portrait-tattooed-handsome-middle-aged-man-with-beard-hairstyle-dressed-blue-shirt-tie-pose-studio-with-crossed-arms-isolated-textured-dark-background-studio_613910-5009.jpg"},
          ],
        },
      ]}
      textAnimation="slide-up"
    />
    </SectionErrorBoundary>
  </div>

  <div id="testimonials" data-section="testimonials">
    <SectionErrorBoundary name="testimonials">
          <TestimonialTrustCard
      quote="Ink & Soul transformed my idea into a masterpiece. The attention to detail and professionalism is unmatched in this city."
      rating={5}
      author="Sarah James, Professional Designer"
      avatars={[
        {
          name: "Sarah J.",          imageSrc: "http://img.b2bpic.net/free-photo/man-with-colorful-tattoos-posing-white-sheet_1321-985.jpg"},
        {
          name: "Mike D.",          imageSrc: "http://img.b2bpic.net/free-photo/medium-shot-rebellious-granny-grandfather_23-2151310193.jpg"},
        {
          name: "Lena R.",          imageSrc: "http://img.b2bpic.net/free-photo/young-couple-wearing-chain-necklace_23-2149490545.jpg"},
        {
          name: "David K.",          imageSrc: "http://img.b2bpic.net/free-photo/tattooed-man-drinking-coffee-cafe_1321-899.jpg"},
        {
          name: "Emily C.",          imageSrc: "http://img.b2bpic.net/free-photo/portrait-man-with-body-tattoos_23-2150774449.jpg"},
      ]}
      textAnimation="fade-blur"
    />
    </SectionErrorBoundary>
  </div>

  <div id="contact" data-section="contact">
    <SectionErrorBoundary name="contact">
          <ContactCta
      tag="Ready to Start?"
      text="Book your design consultation with our head artist today."
      primaryButton={{
        text: "Book My Appointment",        href: "#"}}
      secondaryButton={{
        text: "View Availability",        href: "#"}}
      textAnimation="fade"
    />
    </SectionErrorBoundary>
  </div>
    </>
  );
}