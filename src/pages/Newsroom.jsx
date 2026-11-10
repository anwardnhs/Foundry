import NewsroomHero from "@/components/newsroom/NewsroomHero";
import FeaturedStory from "@/components/newsroom/FeaturedStory";
import StoriesGrid from "@/components/newsroom/StoriesGrid";
import PressMedia from "@/components/newsroom/PressMedia";

export default function Newsroom() {
  return (
    <>
      <NewsroomHero />
      <FeaturedStory />
      <StoriesGrid />
      <PressMedia />
    </>
  );
}
