import { Link, useParams } from "react-router-dom";
import { RiArrowLeftLine } from "react-icons/ri";
import PageHero from "@/components/shared/PageHero";
import { featuredStory, stories } from "@/data/newsroom";

export default function NewsStory() {
  const { storyId } = useParams();
  const story = [featuredStory, ...stories].find((item) => item.id === storyId);

  if (!story) {
    return (
      <PageHero eyebrow="Newsroom" title="Story not found" description="Browse the newsroom for the latest Foundry updates.">
        <Link to="/newsroom" className="site-button">Back to newsroom</Link>
      </PageHero>
    );
  }

  return (
    <article>
      <PageHero eyebrow={story.tag} title={story.title}>
        <p className="text-sm font-medium text-muted">{story.date}</p>
      </PageHero>
      <div className="site-container py-10 sm:py-16">
        <div className="max-w-3xl">
          <img src={story.image} alt="" className="aspect-[16/9] w-full rounded-2xl bg-surface object-cover" />
          <p className="mt-8 text-body-xl text-muted">{story.desc}</p>
          <Link to="/newsroom#latest-news" className="site-button site-button-outline mt-8">
            <RiArrowLeftLine aria-hidden="true" /> Back to the newsroom
          </Link>
        </div>
      </div>
    </article>
  );
}
