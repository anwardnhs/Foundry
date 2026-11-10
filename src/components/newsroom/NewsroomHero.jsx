import PageHero from "@/components/shared/PageHero";

export default function NewsroomHero() {
  return (
    <PageHero
      eyebrow="Newsroom"
      title="The latest from Foundry"
      description="Read company announcements, product updates, and investor news."
    >
      <a href="#latest-news" className="site-button">Browse news</a>
      <a href="#press-contacts" className="site-button site-button-outline">Contact press</a>
    </PageHero>
  );
}
