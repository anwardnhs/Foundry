import LeadershipHero from "@/components/leadership/LeadershipHero";
import BoardGrid from "@/components/leadership/BoardGrid";
import FoundersNote from "@/components/leadership/FoundersNote";
import CabinetGrid from "@/components/leadership/CabinetGrid";
import LeadershipCTA from "@/components/leadership/LeadershipCTA";

export default function Leadership() {
  return (
    <>
      <LeadershipHero />
      <BoardGrid />
      <FoundersNote />
      <CabinetGrid />
      <LeadershipCTA />
    </>
  );
}
