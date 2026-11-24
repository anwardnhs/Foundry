import { useEffect, useState } from "react";
import { Link, useOutletContext } from "react-router-dom";
import { Download } from "lucide-react";
import { WorkspacePage, ReferenceSection, ResourceLink } from "@/components/shared/WorkspacePage";
import { serviceLinks } from "@/data/servicePages";

const emptyDraft = { checked: [], notes: "" };

function ServiceWorksheet({ page }) {
  const worksheets = useOutletContext();
  const [selected, setSelected] = useState(() => worksheets.current[page.id]?.selected ?? page.options[0][0]);
  const [drafts, setDrafts] = useState(() => worksheets.current[page.id]?.drafts ?? {});
  useEffect(() => {
    worksheets.current[page.id] = { selected, drafts };
  }, [worksheets, page.id, selected, drafts]);
  const [, heading, detail, listTitle, items] = page.options.find(([label]) => label === selected);
  const draft = drafts[selected] || emptyDraft;

  function updateDraft(change) {
    setDrafts(previous => ({
      ...previous, [selected]: { ...(previous[selected] || emptyDraft), ...change },
    }));
  }

  function toggleItem(item) {
    const checked = draft.checked.includes(item)
      ? draft.checked.filter(value => value !== item)
      : [...draft.checked, item];
    updateDraft({ checked });
  }

  const brief = [
    page.worksheet.title, selected, "", listTitle,
    ...items.map(item => (draft.checked.includes(item) ? "[x] " : "[ ] ") + item),
    "", "Notes", draft.notes.trim() || "—",
  ].join("\n");

  function downloadBrief() {
    const url = URL.createObjectURL(new Blob([brief], { type: "text/plain;charset=utf-8" }));
    const link = document.createElement("a");
    link.href = url;
    link.download = "foundry-" + page.id + "-brief.txt";
    link.click();
    window.setTimeout(() => URL.revokeObjectURL(url), 1000);
  }

  return (
    <section className="work-tool" id="service-explorer" tabIndex={-1} aria-labelledby="worksheet-title">
      <div className="work-tool-heading">
        <h2 id="worksheet-title">{page.worksheet.title}</h2>
        <label className="work-picker">
          <span>{page.worksheet.field}</span>
          <select value={selected} onChange={event => setSelected(event.target.value)}>
            {page.options.map(([label]) => <option key={label}>{label}</option>)}
          </select>
        </label>
      </div>
      <div className="work-sheet">
        <h3>{heading}</h3><p>{detail}</p>
        <fieldset className="work-checklist">
          <legend>{listTitle}</legend>
          <div className="work-progress">
            <progress value={draft.checked.length} max={items.length} aria-label="Checklist progress" />
            <span aria-live="polite">{draft.checked.length} of {items.length} ready</span>
          </div>
          {items.map(item => <label key={item}>
            <input type="checkbox" checked={draft.checked.includes(item)} onChange={() => toggleItem(item)} />
            <span>{item}</span>
          </label>)}
        </fieldset>
        <label className="work-notes">Notes <span>(optional)</span>
          <textarea value={draft.notes} onChange={event => updateDraft({ notes: event.target.value })}
            placeholder={page.worksheet.prompt} rows={2} maxLength={5000} />
        </label>
        <div className="work-actions">
          <Link className="work-action" to={"/contact?topic=" + page.topic} state={{ enquiryBrief: brief }}>
            Use in enquiry
          </Link>
          <button type="button" className="work-secondary" onClick={downloadBrief}>
            <Download size={16} aria-hidden="true" /> Download brief
          </button>
        </div>
      </div>
    </section>
  );
}

export default function ServicePage({ page }) {
  return (
    <WorkspacePage section="Services" links={serviceLinks} path={page.path} title={page.name} description={page.intro}>
      <ServiceWorksheet page={page} />
      <ReferenceSection title={page.processTitle} rows={page.steps} />
      <ReferenceSection title="Questions" rows={page.questions} />
      <ResourceLink resource={page.resource} />
    </WorkspacePage>
  );
}
