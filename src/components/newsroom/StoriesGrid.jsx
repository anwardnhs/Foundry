import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import CategoryFilter from "@/components/newsroom/CategoryFilter";
import { featuredStory, stories } from "@/data/newsroom";

const allStories = [featuredStory, ...stories].sort(
  (first, second) => new Date(second.date) - new Date(first.date),
);
const pageSize = 5;

export default function StoriesGrid() {
  const [category, setCategory] = useState("all");
  const [query, setQuery] = useState("");
  const [visibleCount, setVisibleCount] = useState(pageSize);
  const search = query.trim().toLowerCase();
  const filtered = allStories.filter((story) =>
    (category === "all" || category === story.category) &&
    [story.title, story.desc].some((text) => text.toLowerCase().includes(search)),
  );
  const displayed = filtered.slice(0, visibleCount);

  return (
    <section id="latest-news" tabIndex={-1} className="bg-white py-12 focus:outline-none sm:py-20" aria-labelledby="latest-news-title">
      <div className="site-container max-w-6xl">
        <h2 id="latest-news-title" className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Latest news</h2>
        <div className="mb-6 mt-5 flex flex-wrap items-end justify-between gap-4">
          <CategoryFilter activeCategory={category} setActiveCategory={(value) => {
            setCategory(value);
            setVisibleCount(pageSize);
          }} />
          <label className="grid w-full gap-1 text-sm font-semibold text-navy sm:w-auto">
            Search news
            <input type="search" className="site-field sm:w-60" placeholder="Search by keyword" value={query} onChange={(event) => {
              setQuery(event.target.value);
              setVisibleCount(pageSize);
            }} />
          </label>
        </div>
        <p role="status" className="mb-3 text-sm text-muted">
          {filtered.length ? "Showing " + displayed.length + " of " + filtered.length + " stories" : "No stories match these filters."}
        </p>
        <ul className="divide-y divide-rule border-y border-rule">
          {displayed.map((story) => (
            <li key={story.id}>
              <Link to={story.href} className="group grid items-center gap-3 rounded-xl py-4 hover:bg-surface sm:grid-cols-[8rem_1fr_8rem] sm:gap-5 sm:px-3 sm:py-5">
                <span className="text-sm text-muted">{story.date}</span>
                <div>
                  <p className="text-sm font-semibold text-accent">{story.tag}</p>
                  <h3 className="mt-1 font-semibold leading-snug text-navy group-hover:text-accent sm:text-lg">{story.title}</h3>
                </div>
                <img src={story.image} alt="" loading="lazy" className="hidden aspect-video w-full rounded-lg bg-surface object-cover sm:block" />
              </Link>
            </li>
          ))}
        </ul>
        {visibleCount < filtered.length && (
          <button type="button" className="site-button site-button-outline mt-6" onClick={() => setVisibleCount((count) => count + pageSize)}>
            Load more stories <RiArrowRightLine aria-hidden="true" />
          </button>
        )}
      </div>
    </section>
  );
}
