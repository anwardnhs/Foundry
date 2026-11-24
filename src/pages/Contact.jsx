import { useState } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { RiArrowRightLine, RiClipboardLine, RiMailLine } from "react-icons/ri";
import PageHero from "@/components/shared/PageHero";
import mapSvg from "@/assets/images/map.svg";
import { productPages } from "@/data/productPages";

const topics = {
  sales: "Sales and pricing",
  demo: "Enterprise demo",
  technical: "Technical integration",
  consulting: "Strategic consulting",
  ventures: "Startup ventures",
  partnership: "Partnerships",
  "customer-success": "Customer success",
};

const servicePrompts = {
  consulting: "Describe the business outcome, the current systems and any deadlines.",
  ventures: "Describe your startup, current traction and next milestone.",
  partnership: "Describe your capabilities and the opportunity you want to explore.",
  "customer-success": "Name the product, your rollout stage and the outcome you want to achieve.",
};

export default function Contact() {
  const [params] = useSearchParams();
  const topic = params.get("topic");
  const slug = params.get("product");
  const product = Object.hasOwn(productPages, slug) ? productPages[slug].name : null;
  const [draft, setDraft] = useState("");
  const [copyStatus, setCopyStatus] = useState("");

  function prepareDraft(event) {
    event.preventDefault();
    const fields = new FormData(event.currentTarget);
    setDraft([
      "Subject: " + topics[fields.get("topic")],
      ...(product ? ["Product: " + product] : []),
      "Name: " + fields.get("name"),
      "Company: " + fields.get("company"),
      "Work email: " + fields.get("email"),
      "",
      fields.get("message"),
    ].join("\n"));
    setCopyStatus("");
  }

  async function copyDraft() {
    try {
      await navigator.clipboard.writeText(draft);
      setCopyStatus("Draft copied.");
    } catch {
      setCopyStatus("Select the draft text to copy it manually.");
    }
  }

  return (
    <>
      <PageHero
        eyebrow="Contact Foundry"
        title={topic === "demo" ? "Request a demo" : "Let’s talk about your project."}
        description="Explore Foundry’s products, discuss an integration, or find the right team for your enquiry."
      />
      <section className="site-container py-10 sm:py-16" aria-label="Contact options">
        <div className="grid overflow-hidden rounded-2xl border border-rule bg-white shadow-sm lg:grid-cols-[1.4fr_1fr]">
          <div className="p-5 sm:p-8 lg:p-10">
            <h2 className="text-2xl font-semibold tracking-tight text-navy">Prepare your enquiry</h2>
            <p id="enquiry-help" className="mb-6 mt-2 text-body-md text-muted">
              Online submission is currently unavailable. You can prepare and copy a draft here.
            </p>
            <form className="grid gap-5" onSubmit={prepareDraft} aria-describedby="enquiry-help">
              <div className="grid gap-5 sm:grid-cols-2">
                <label className="grid gap-2 text-sm font-semibold text-navy">
                  Full name
                  <input name="name" autoComplete="name" className="site-field" required />
                </label>
                <label className="grid gap-2 text-sm font-semibold text-navy">
                  Company
                  <input name="company" autoComplete="organization" className="site-field" required />
                </label>
              </div>
              <label className="grid gap-2 text-sm font-semibold text-navy">
                Work email
                <input name="email" type="email" autoComplete="email" className="site-field" required />
              </label>
              <label className="grid gap-2 text-sm font-semibold text-navy">
                Enquiry type
                <select key={topic} name="topic" className="site-field" defaultValue={Object.hasOwn(topics, topic) ? topic : ""} required>
                  <option value="" disabled>Select an enquiry type</option>
                  {Object.entries(topics).map(([id, label]) => <option key={id} value={id}>{label}</option>)}
                </select>
              </label>
              <label className="grid gap-2 text-sm font-semibold text-navy">
                Project details
                <textarea name="message" rows={4} className="site-field resize-y" placeholder={Object.hasOwn(servicePrompts, topic) ? servicePrompts[topic] : undefined} required />
              </label>
              <button type="submit" className="site-button justify-self-start">
                {draft ? "Update draft" : "Prepare draft"} <RiArrowRightLine aria-hidden="true" />
              </button>
            </form>
            {draft && (
              <div className="mt-6 space-y-3 rounded-xl border border-rule bg-surface p-4">
                <p role="status" className="text-sm font-semibold text-navy">{copyStatus || "Your draft is ready to copy."}</p>
                <textarea aria-label="Enquiry draft" className="site-field" value={draft} rows={6} readOnly />
                <button type="button" className="site-button site-button-outline" onClick={copyDraft}>
                  <RiClipboardLine aria-hidden="true" /> Copy draft
                </button>
              </div>
            )}
          </div>
          <aside className="flex flex-col justify-end border-t border-rule bg-surface lg:border-l lg:border-t-0">
            <img src={mapSvg} alt="" className="hidden min-h-0 w-full flex-1 object-cover lg:block" />
            <div className="relative border-rule bg-surface p-5 sm:p-8 lg:border-t">
              <div className="flex items-center gap-2 text-navy">
                <RiMailLine aria-hidden="true" />
                <h2 className="text-lg font-semibold">Contact a team directly</h2>
              </div>
              <ul className="mt-4 space-y-3 text-sm font-semibold text-accent">
                <li><a className="hover:underline" href="mailto:press@foundry.com">Press enquiries</a></li>
                <li><Link className="hover:underline" to="/investors#investor-contacts">Investor relations</Link></li>
                <li><a className="hover:underline" href="mailto:careers@foundry.com">Careers enquiries</a></li>
              </ul>
            </div>
          </aside>
        </div>
      </section>
    </>
  );
}
