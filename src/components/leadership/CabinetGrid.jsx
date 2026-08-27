import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PersonCard from "@/components/shared/PersonCard";

// ─── Asset Imports ────────────────────────────────────────────────────────────
import tundeImg from "@/assets/images/tunde.png";
import ovieImg from "@/assets/images/ovie.png";
import aaravImg from "@/assets/images/aarav.png";
import felixImg from "@/assets/images/felix.png";
import emekaImg from "@/assets/images/emeka.png";
import solaImg from "@/assets/images/sola.png";
import adamuImg from "@/assets/images/adamu.png";
import angelaImg from "@/assets/images/angela.png";
import tomiyeImg from "@/assets/images/tomiye.png";

// ─── The Operators Data (AWS/Stripe Enterprise Tone) ──────────────────────────
const cabinet = [
  {
    id: "tunde",

    fullName: "Mr. Tunde Adesanya",
    title: "Chief Executive Officer",
    bio: "Previously served as CEO of Bridgesoft Cloud, Tunde brings a wealth of experience in technology and business strategy, having led several successful digital transformation initiatives across various industries.  ",
    image: tundeImg,
    colorTheme: "bg-[#0A2540]", // Navy
  },
  {
    id: "ovie",

    fullName: "Mr. Ovie Ejiro",
    title: "Chief Financial Officer",
    bio: "Ejiro is a finance veteran with extensive experience in corporate finance, investment banking, and financial planning. He has been instrumental in driving Bridgesoft's financial strategy and ensuring sustainable growth. ",
    image: ovieImg,
    colorTheme: "bg-[#4338CA]", // Indigo
  },
  {
    id: "aarav",

    fullName: "Mr. Aarav Kumar Sharma",
    title: "Chief Operating Officer",
    bio: "Sharam is a seasoned operations executive with a proven track record in scaling technology companies. He oversees Bridgesoft's operational strategy, ensuring efficiency and excellence across all business functions.  ",
    image: aaravImg,
    colorTheme: "bg-[#047857]", // Emerald
  },
  {
    id: "felix",

    fullName: "Mr. Felix Onwudiwe",
    title: "Chief Technology Officer",
    bio: "Onwudiew was the former CEO of Bridgesoft Enterprise before becoming the CTO of Bridgesoft. He has a strong background in software engineering, cloud architecture, and technology innovation, leading the development of cutting-edge solutions for clients across Africa. ",
    image: felixImg,
    colorTheme: "bg-[#B45309]", // Amber
  },
  {
    id: "emeka",

    fullName: "Mr. Emeka Osagie",
    title: "Chief Product Officer",
    bio: "Osagie is responsible for product strategy, roadmap, and innovation, ensuring that Bridgesoft's offerings meet the evolving needs of clients and the market.  ",
    image: emekaImg,
    colorTheme: "bg-[#0369A1]", // Ocean Blue
  },
  {
    id: "sola",

    fullName: "Mr. Sola Adegbite",
    title: "Chief Revenue Officer",
    bio: "Adegbite is responsible for driving revenue growth, sales strategy, and market expansion across Africa. He brings a wealth of experience in business development and strategic partnerships.    ",
    image: solaImg,
    colorTheme: "bg-[#BE123C]", // Rose
  },
  {
    id: "adamu",

    fullName: "Mr. Adamu Suleiman",
    title: "General Counsel & Corporate Secretary",
    bio: "Suleiman is an accomplished legal professional with extensive experience in corporate law, regulatory compliance, and governance. He provides strategic legal counsel to the executive team and ensures that Bridgesoft operates within the bounds of applicable laws and regulations.    ",
    image: adamuImg,
    colorTheme: "bg-[#0F766E]", // Teal
  },
  {
    id: "angela",

    fullName: "Ms. Angela Ikpeama",
    title: "Chief Communications Officer",
    bio: "Ikpeama is responsible for shaping Bridgesoft's brand narrative, public relations, and internal communications. She has a strong background in corporate communications and has successfully led campaigns that enhance brand visibility and stakeholder engagement.    ",
    image: angelaImg,
    colorTheme: "bg-[#86198F]", // Fuchsia
  },
  {
    id: "tomiye",

    fullName: "Mrs. Tomiye Alagoa",
    title: "Chief People Officer",
    bio: "Alagoa leads over 14000 employees across Africa, focusing on talent acquisition, employee engagement, and organizational development. She has a proven track record in human resources management and is dedicated to fostering a positive and inclusive workplace culture.   ",
    image: tomiyeImg,
    colorTheme: "bg-[#5B21B6]", // Deep Violet
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function CabinetGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-white py-24 lg:py-32 border-b border-rule font-sans overflow-hidden"
      aria-label="Executive Management"
    >
      <div className="site-container">
        {/* ── Section Header ── */}
        <div className="max-w-2xl mb-16 lg:mb-24 relative z-10">
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
          >
            <div className="mb-6 flex items-center gap-3">
              <div className="w-8 h-px bg-accent" />
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent">
                Executive Management
              </span>
            </div>

            <h2 className="text-[40px] sm:text-[48px] font-medium text-[#0A2540] leading-[1.1] tracking-tight mb-6">
              Powering the Bridge: The Executive Team
            </h2>
            <p className="text-[18px] text-[#425466] leading-[1.6]">
              The core executive team responsible for executing our continental
              mandate. Each leader brings a unique expertise, but together they
              form the strategic brain trust driving Bridgesoft's growth and
              innovation across Africa.
            </p>
          </motion.div>
        </div>

        {/* ── 9-Card Dynamic Geometric Grid ── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          // Utilizing a dynamic 3-column stagger to match the Figma energy
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {cabinet.map((person, index) => {
            // Create a visually stunning cascading masonry effect for the 3 columns
            let staggerClass = "";
            if (index % 3 === 1) staggerClass = "lg:mt-12";
            if (index % 3 === 2) staggerClass = "lg:mt-24";

            return (
              <motion.div
                key={person.id}
                variants={fadeUp}
                className={staggerClass}
              >
                <PersonCard person={person} colorTheme={person.colorTheme} />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
