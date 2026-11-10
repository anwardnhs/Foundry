import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import { featuredStory, stories } from "@/data/newsroom";

const featured = [featuredStory, ...stories.slice(0, 3)];

export default function FeaturedStory() {
  const [index, setIndex] = useState(0);
  const story = featured[index];

  return (
    <section className="border-b border-rule bg-surface py-10 sm:py-16" aria-labelledby="featured-news">
      <div className="site-container max-w-6xl">
        <h2 id="featured-news" className="site-eyebrow mb-5">Featured news</h2>
        <div className="grid overflow-hidden rounded-2xl border border-rule bg-white shadow-sm lg:grid-cols-2">
          <img src={story.image} alt="" className="aspect-video h-full w-full bg-surface object-cover lg:order-last lg:aspect-[4/3]" />
          <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
            <div aria-live="polite">
              <p className="mb-3 text-sm font-semibold text-accent">{story.tag} · {story.date}</p>
              <h3 className="text-2xl font-semibold leading-tight tracking-tight text-navy sm:text-3xl">{story.title}</h3>
            </div>
            <Link to={story.href} className="site-button site-button-outline mt-5 self-start">
              Read the update <RiArrowRightLine aria-hidden="true" />
            </Link>
            <div role="group" aria-label="Select a featured story" className="mt-5 flex flex-wrap gap-2">
              {featured.map((item, itemIndex) => (
                <button
                  key={item.id}
                  type="button"
                  aria-pressed={index === itemIndex}
                  aria-label={"Featured story " + (itemIndex + 1) + " of " + featured.length}
                  onClick={() => setIndex(itemIndex)}
                  className="grid h-11 w-11 place-items-center rounded-lg border border-rule text-sm font-semibold text-navy hover:bg-surface aria-pressed:border-accent aria-pressed:bg-accent aria-pressed:text-white"
                >
                  {itemIndex + 1}
                </button>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
