import { useId } from "react";
import { Check, Cpu, Database, Fingerprint, Network, ShieldCheck, Users, Workflow } from "lucide-react";
import officeImage from "@/assets/images/meeting.webp";

function CloudArt() {
  const id = useId();
  return (
    <svg viewBox="0 0 620 460" className="pf-art" aria-hidden="true">
      <defs>
        <linearGradient id={id + "plane"} x2="0.9" y2="1">
          <stop stopColor="#e8f6ff" /><stop offset="1" stopColor="#91b9ff" />
        </linearGradient>
        <linearGradient id={id + "edge"} x2="1" y2="1">
          <stop stopColor="#3d7efc" /><stop offset="1" stopColor="#113bbb" />
        </linearGradient>
        <pattern id={id + "dots"} width="14" height="14" patternUnits="userSpaceOnUse">
          <circle cx="2" cy="2" r="1" fill="#5f8cd6" opacity=".3" />
        </pattern>
      </defs>
      <path d="M0 0h620v460H0z" fill={`url(#${id}dots)`} />
      <g fill="none" stroke="#79a3df" opacity=".52" strokeDasharray="4 6">
        <path d="M30 323 301 436 589 328M30 251 301 364 589 256M30 177 301 290 589 182M30 103 301 216 589 108" />
        <path d="M30 103v220m559-215v220M301 216v220" />
      </g>
      {[245, 153, 61].map((y, index) => (
        <g key={y} transform={`translate(0 ${y})`} strokeLinejoin="round">
          <path d="m106 74 195 76 213-76v19l-213 76-195-76Z" fill={`url(#${id}edge)`} stroke="#4475dd" />
          <path d="m106 74 211-74 197 74-213 76Z" fill={`url(#${id}plane)`} stroke="#537fdb" />
          <path d="m301 150 213-76v19l-213 76Z" fill="#3164e3" opacity=".65" />
          <g fill="none" stroke="#5d88da" opacity=".58">
            <path d="m154 57 196 75m-146-93 197 75m-148-92 199 75M151 91l211-74m-160 94 213-76m-162 96 214-77" />
            <path d="m166 80 70 28 82-30 59 22 70-25" stroke="#174bd5" strokeWidth="2" />
          </g>
          <g fill="#f5fbff" stroke="#2b64e1" strokeWidth="1.5">
            <circle cx="166" cy="80" r="4" /><circle cx="236" cy="108" r="4" />
            <circle cx="318" cy="78" r="5" /><circle cx="377" cy="100" r="4" /><circle cx="447" cy="75" r="4" />
          </g>
          {index === 2 && (
            <g>
              <path d="m277 69 42-15 39 15-42 15Z" fill="#2458e4" stroke="#e9f6ff" strokeWidth="2" />
              <path d="m277 69 39 15 42-15v16l-42 15-39-15Z" fill="#153aa9" stroke="#79a7ff" />
              <path d="m299 69 20-7 18 7-20 7Z" fill="#93bdff" />
            </g>
          )}
        </g>
      ))}
      <g fill="none" stroke="#2c67e9" strokeWidth="1.6" strokeDasharray="3 6">
        <path d="M166 141v183m281-188v185M236 169v184m141-192v184" />
      </g>
      <g stroke="#3a72db" strokeWidth="1" fill="#eaf6ff">
        <circle cx="30" cy="177" r="4" /><circle cx="589" cy="182" r="4" />
        <circle cx="30" cy="323" r="4" /><circle cx="589" cy="328" r="4" />
      </g>
    </svg>
  );
}

function DataArt() {
  const id = useId();
  const heights = [24, 34, 29, 54, 45, 64, 53, 77, 69, 96, 83, 111, 99, 127];
  return (
    <svg viewBox="0 0 620 460" className="pf-art" aria-hidden="true">
      <defs>
        <linearGradient id={id + "plot"} x1="0" y1="0" x2="0" y2="1">
          <stop stopColor="#6ee9ff" stopOpacity=".45" /><stop offset="1" stopColor="#6ee9ff" stopOpacity="0" />
        </linearGradient>
        <linearGradient id={id + "card"} x2="1" y2="1">
          <stop stopColor="#17358c" /><stop offset="1" stopColor="#121f5a" />
        </linearGradient>
        <pattern id={id + "grid"} width="24" height="24" patternUnits="userSpaceOnUse">
          <path d="M0 24V0h24" fill="none" stroke="#6688ec" opacity=".24" />
        </pattern>
      </defs>
      <path d="M0 0h620v460H0z" fill={`url(#${id}grid)`} />
      <g fill="none" stroke="#779ef9" opacity=".6">
        <path d="M-20 157h85q44 0 63 44l28 62h80M-20 229h92q29 0 55-23l47-47h77M-20 309h85q45 0 66-47l23-54h95M388 192h63q41 0 60-46l23-55h93M390 302h75q35 0 50-30l30-56h82M395 241h65q44 0 71 47l23 41h73" />
      </g>
      <g fill="#70dfff"><circle cx="66" cy="157" r="4" /><circle cx="73" cy="229" r="4" /><circle cx="65" cy="309" r="4" /><circle cx="561" cy="91" r="4" /><circle cx="580" cy="216" r="4" /><circle cx="578" cy="329" r="4" /></g>
      <rect x="144" y="97" width="350" height="266" rx="17" fill="#050e3c" opacity=".5" transform="translate(8 11)" />
      <rect x="144" y="97" width="350" height="266" rx="17" fill={`url(#${id}card)`} stroke="#779bff" />
      <path d="M145 142h348m-321 51h291m-291 47h291m-291 47h291m-291 47h291" stroke="#7898e7" opacity=".35" />
      <g fill="#9dbdff"><circle cx="170" cy="120" r="3" /><circle cx="181" cy="120" r="3" opacity=".65" /><circle cx="192" cy="120" r="3" opacity=".35" /></g>
      <path d="M174 300 207 278l27 8 31-37 31 9 34-35 30 8 43-37 29 9 29-28v157H174Z" fill={`url(#${id}plot)`} />
      {heights.map((height, index) => (
        <rect key={index} x={177 + index * 20} y={332 - height} width="10" height={height} rx="2" fill="#8e9cff" opacity={index % 3 === 0 ? ".68" : ".35"} />
      ))}
      <path d="M174 300 207 278l27 8 31-37 31 9 34-35 30 8 43-37 29 9 29-28" fill="none" stroke="#79eaff" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="461" cy="175" r="5" fill="#c4faff" />
    </svg>
  );
}

function SecurityArt() {
  const id = useId();
  return (
    <svg viewBox="0 0 620 460" className="pf-art" aria-hidden="true">
      <defs>
        <radialGradient id={id + "radar"}>
          <stop stopColor="#1f665a" /><stop offset="1" stopColor="#092a2b" stopOpacity="0" />
        </radialGradient>
        <linearGradient id={id + "shield"} x2="1" y2="1">
          <stop stopColor="#9df4ca" stopOpacity=".44" /><stop offset="1" stopColor="#38b598" stopOpacity=".08" />
        </linearGradient>
        <pattern id={id + "mesh"} width="19" height="19" patternUnits="userSpaceOnUse">
          <path d="M0 19V0h19" stroke="#7fcbab" opacity=".13" fill="none" />
        </pattern>
      </defs>
      <path d="M0 0h620v460H0z" fill={`url(#${id}mesh)`} />
      <ellipse cx="310" cy="230" rx="280" ry="210" fill={`url(#${id}radar)`} />
      <g fill="none" stroke="#76d8b6">
        {[65, 104, 143, 181].map((radius) => <circle key={radius} cx="310" cy="230" r={radius} opacity=".42" strokeDasharray={radius === 104 ? "3 6" : undefined} />)}
        <path d="M56 230h508M310 27v406M160 80l300 300M160 380 460 80" opacity=".26" />
        <path d="M168 118a181 181 0 0 1 299 23M441 352a181 181 0 0 1-247 17" strokeWidth="2" strokeDasharray="1 5" />
        <path d="M129 230h-35l-32-32H24m467 32h34l31 33h40M310 49V19m0 392v30" opacity=".58" />
      </g>
      <g fill="#92fbd2" stroke="#123b38" strokeWidth="2">
        <circle cx="129" cy="230" r="5" /><circle cx="491" cy="230" r="5" /><circle cx="310" cy="49" r="5" /><circle cx="310" cy="411" r="5" />
        <circle cx="410" cy="128" r="6" /><circle cx="235" cy="304" r="5" /><circle cx="204" cy="133" r="4" /><circle cx="413" cy="330" r="4" />
      </g>
      <path d="M310 153c22 14 47 21 65 23v54c0 41-29 66-65 82-36-16-65-41-65-82v-54c18-2 43-9 65-23Z" fill="#0c3838" stroke="#90e7bd" strokeWidth="2" />
      <path d="M310 153c22 14 47 21 65 23v54c0 41-29 66-65 82-36-16-65-41-65-82v-54c18-2 43-9 65-23Z" fill={`url(#${id}shield)`} />
      <path d="m282 231 19 19 37-39" fill="none" stroke="#b0ffda" strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

const artByProduct = { cloud: CloudArt, data: DataArt, security: SecurityArt };
const enterpriseIcons = [Workflow, Users, Check];

export function ProductVisual({ slug, product }) {
  const Art = artByProduct[slug];

  if (slug === "enterprise") {
    return (
      <figure className="pf-visual pf-visual-photo">
        <img src={officeImage} alt="" fetchPriority="high" />
        <figcaption className="pf-visual-caption">{product.visualLabel}</figcaption>
        <div className="pf-enterprise-overlay">
          {product.heroLabels.map((label, index) => {
            const Icon = enterpriseIcons[index];
            return <div key={label}><Icon size={17} aria-hidden="true" />{label}</div>;
          })}
        </div>
      </figure>
    );
  }

  return (
    <figure className="pf-visual">
      <Art />
      <figcaption className="pf-visual-caption">{product.visualLabel}</figcaption>
      <ul className="pf-visual-legend">
        {product.heroLabels.map((label) => <li key={label}>{label}</li>)}
      </ul>
    </figure>
  );
}

const flowIcons = {
  cloud: [Cpu, Network, Database],
  data: [Database, Workflow, Check],
  enterprise: [Workflow, Users, Check],
  security: [Fingerprint, ShieldCheck, Check],
};

export function WorkflowVisual({ slug, experience }) {
  return (
    <div className="pf-flow">
      <p className="pf-flow-label">Illustrative workflow</p>
      <ol className="pf-flow-steps">
        {experience.steps.map((step, index) => {
          const Icon = flowIcons[slug][index];
          return <li key={step}><span><Icon size={22} aria-hidden="true" /></span>{step}</li>;
        })}
      </ol>
      <p className="pf-flow-result"><Check size={17} aria-hidden="true" />{experience.outcome}</p>
    </div>
  );
}

export function SpotlightVisual({ slug }) {
  if (slug === "enterprise") {
    return (
      <div className="pf-spot-art pf-handoff-art" aria-hidden="true">
        <div><Workflow /><span>Request</span></div>
        <div><Users /><span>Review</span></div>
        <div><Check /><span>Approve</span></div>
      </div>
    );
  }

  const Art = artByProduct[slug];
  return <div className="pf-spot-art"><Art /></div>;
}
