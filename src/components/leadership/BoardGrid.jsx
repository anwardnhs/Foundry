import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import PersonCard from "@/components/shared/PersonCard";

// ─── Asset Imports (Kept exactly as requested) ───────────────────────────────
import murigiImg from "@/assets/images/murigi.png";
import tundeImg from "@/assets/images/tunde.png";
import ovieImg from "@/assets/images/ovie.png";
import anwarImg from "@/assets/images/anwar.png";
import davidImg from "@/assets/images/saro.png";
import damilolaImg from "@/assets/images/damilola.png";
import nalediImg from "@/assets/images/naledi.png";
import taranjeetImg from "@/assets/images/taranjeet.png";
import amiraImg from "@/assets/images/amira.png";
import adeyemiImg from "@/assets/images/adeyemi.png";
import ibiereImg from "@/assets/images/ibere.png";

// ─── Board Data (Updated from your leadership.js structure) ───────────────────
const boardMembers = [
  {
    id: "murigi",
    fullName: "Mr. Murigi Kiprop",
    title: "Chairman of the Board",
    image: murigiImg,
    bio: "Kiprop is a seasoned executive with over 25 years of experience in corporate governance and strategic leadership. He has served on multiple boards across Africa and is known for his expertise in scaling businesses in emerging markets.",
    colorTheme: "bg-[#0A2540]", // Deep Brand Navy
  },
  {
    id: "tunde",
    fullName: "Mr. Tunde Adesanya",
    title: "Chief Executive Officer",
    image: tundeImg,
    bio: "Adesanya served as CEO of Bridgesoft Cloud before becoming the CEO of Bridgesoft. He has a strong background in technology and business strategy, having led several successful digital transformation initiatives across various industries.",
    colorTheme: "bg-[#0369A1]", // Ocean Blue
  },
  {
    id: "ovie",
    fullName: "Mr. Ovie Ejiro",
    title: "Chief Financial Officer",
    image: ovieImg,
    bio: "Ejiro is a finance veteran with extensive experience in corporate finance, investment banking, and financial planning. He has been instrumental in driving Bridgesoft's financial strategy and ensuring sustainable growth.",
    colorTheme: "bg-[#4338CA]", // Indigo
  },
  {
    id: "anwar",
    fullName: "Mr. Anwar Alhassan",
    title: "Co-Founder & Non-Executive Director",
    image: anwarImg,
    bio: "Alhassan is a co-founder, former CEO and Chairman of Bridgesoft and has played a pivotal role in shaping the company's vision and strategic direction. He brings a wealth of experience in technology innovation and business development.",
    colorTheme: "bg-[#B45309]", // Amber
  },
  {
    id: "david",
    fullName: "Mr. David Saro",
    title: "Co-Founder & Non-Executive Director",
    image: davidImg,
    bio: "Saro is a co-founder, former President & Chief Technology Officer of Bridgesoft and has been instrumental in the company's growth and success. With a strong background in software engineering and product development, he continues to drive innovation within the organization.",
    colorTheme: "bg-[#BE123C]", // Rose
  },
  {
    id: "damilola",
    fullName: "Mrs. Damilola Shonibar",
    title: "Independent Non-Executive Director",
    image: damilolaImg,
    bio: "Shonibar served as the Chief information Officer of the Nigerian Communications Commission (NCC) and has extensive experience in technology policy and regulatory affairs. She brings a unique perspective to the board, particularly in navigating complex regulatory environments.  ",
    colorTheme: "bg-[#0F766E]", // Teal
  },
  {
    id: "naledi",
    fullName: "Ms. Naledi Dlamini",
    title: "Independent Non-Executive Director",
    image: nalediImg,
    bio: "Dlamini is a technology and innovation expert with a strong background in digital transformation and business strategy. She has held leadership roles in several multinational companies and is passionate about driving technological advancements in Africa.  ",
    colorTheme: "bg-[#5B21B6]", // Deep Violet
  },
  {
    id: "taranjeet",
    fullName: "Mr. Taranjeet Bhatia",
    title: "Independent Non-Executive Director",
    image: taranjeetImg,
    bio: "Bhatia is the CEO of Bhatia Capital, a leading investment firm focused on emerging markets. He has extensive experience in finance, investment strategy, and corporate governance, and has served on the boards of several successful companies across Africa.",
    colorTheme: "bg-[#047857]", // Emerald
  },
  {
    id: "amira",
    fullName: "Mrs. Amira Bekele",
    title: "Independent Non-Executive Director",
    image: amiraImg,
    bio: "Bekele is a Senior Partner at Bekele & Associates, a leading law firm specializing in corporate law and international business transactions. She has advised numerous multinational corporations on regulatory compliance and corporate governance matters. ",
    colorTheme: "bg-[#C2410C]", // Orange
  },
  {
    id: "adeyemi",
    fullName: "Mr. Adeyemi Bankole",
    title: "Independent Non-Executive Director",
    image: adeyemiImg,
    bio: "Bankole is the founder and CEO of Bankole Consulting, a firm that provides strategic advisory services to businesses in Africa. He has a strong background in business development, corporate strategy, and market expansion. ",
    colorTheme: "bg-[#1D4ED8]", // Royal Blue
  },
  {
    id: "ibiere",
    fullName: "Ms. Ibiere Briggs",
    title: "Independent Non-Executive Director",
    image: ibiereImg,
    bio: "Briggs is a Cybersecurity and risk management expert with over 15 years of experience in the technology sector. She has held senior positions in several multinational companies and is passionate about promoting cybersecurity awareness and best practices across industries.  ",
    colorTheme: "bg-[#86198F]", // Fuchsia
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.2 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function BoardGrid() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-[#F6F9FC] py-24 lg:py-32 font-sans border-b border-rule overflow-hidden"
      aria-label="Board of Directors"
    >
      <div className="site-container">
        <div className="flex flex-col lg:flex-row gap-16 items-start">
          {/* ── LEFT: Sticky Editorial Section (Figma Style) ── */}
          <div className="w-full lg:w-1/3 lg:sticky lg:top-40 shrink-0">
            <motion.div
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={fadeUp}
            >
              <h2 className="text-[40px] sm:text-[48px] font-medium text-[#0A2540] leading-[1.1] tracking-tight mb-6">
                Board of <br /> Directors
              </h2>
              <p className="text-[17px] text-[#425466] leading-[1.6]">
                Our board combines decades of public sector governance with deep
                technical expertise. They provide the oversight required to
                scale Bridgesoft's infrastructure securely across highly
                regulated continental markets.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: Dynamic Color Grid ── */}
          <div className="w-full lg:w-2/3">
            <motion.div
              ref={ref}
              initial="hidden"
              animate={inView ? "show" : "hidden"}
              variants={container}
              // Using a masonry-style staggered layout
              className="grid grid-cols-1 sm:grid-cols-2 gap-6 lg:gap-8"
            >
              {boardMembers.map((person, index) => (
                <motion.div
                  key={person.id}
                  variants={fadeUp}
                  // Pushing the even columns down slightly to create an asymmetrical masonry look
                  className={index % 2 !== 0 ? "sm:mt-12" : ""}
                >
                  <PersonCard person={person} colorTheme={person.colorTheme} />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
