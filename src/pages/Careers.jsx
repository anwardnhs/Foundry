import CareersHero from "@/components/careers/CareersHero";
import WhyFoundry from "@/components/careers/WhyFoundry";
import LifeAtFoundry from "@/components/careers/LifeAtFoundry";
import OpenRoles from "@/components/careers/OpenRoles";
import HiringProcess from "@/components/careers/HiringProcess";
import PerksGrid from "@/components/careers/PerksGrid";
import CareersCTA from "@/components/careers/CareersCTA";

export default function Careers() {
  return (
    <main>
      <CareersHero />
      <WhyFoundry />
      <LifeAtFoundry />
      <OpenRoles />
      <HiringProcess />
      <PerksGrid />
      <CareersCTA />
    </main>
  );
}
