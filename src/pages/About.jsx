import AboutHero from "@/components/about/AboutHero";
import OriginStory from "@/components/about/OriginStory";
import MissionStatement from "@/components/about/MissionStatement";
import FoundryWorks from "@/components/about/FoundryWorks";
import LeadershipPreview from "@/components/about/LeadershipPreview";
import AboutCTA from "@/components/about/AboutCTA";

export default function About() {
  return (
    <main>
      <AboutHero />
      <OriginStory />
      <MissionStatement />
      <FoundryWorks />
      <LeadershipPreview />
      <AboutCTA />
    </main>
  );
}
