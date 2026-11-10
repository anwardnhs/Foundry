import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import {
  RiArrowRightSLine,
  RiServerLine,
  RiBrainLine,
  RiShieldKeyholeLine,
  RiCheckLine,
} from "react-icons/ri";
import { cn } from "@/lib/utils";

// Assets
import BIbg from "@/assets/images/BIbg.svg";
import brigdeintel from "@/assets/images/brigdeintel.svg";
import person from "@/assets/images/person.svg";
import person2 from "@/assets/images/person2.svg";

// ─── Animation Variants ────────────────────────────────────────────────────────
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

export default function BridgeIntelligence() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  const stripeFeatures = [
    {
      icon: RiServerLine,
      title: "Private by default",
      desc: "Runs inside your environment so your policies stay in control and sensitive data never leaves your stack.",
    },
    {
      icon: RiBrainLine,
      title: "Rules-aware",
      desc: "AI answers are shaped by your compliance engine, not by generic behavior or external preferences.",
    },
    {
      icon: RiShieldKeyholeLine,
      title: "Audit-ready",
      desc: "Every response is logged, timestamped, and traceable so your operations teams can prove alignment.",
    },
  ];

  const useCases = [
    {
      title: "Operations leaders",
      description:
        "Use a single AI workflow that respects internal controls, escalates uncertainty, and turns policy into action without manual intervention.",
      image: person,
      bullets: [
        "Align cross-functional teams with consistent operational answers.",
        "Keep sensitive source systems enclosed while delivering trusted insights.",
      ],
    },
    {
      title: "Finance teams",
      description:
        "Give finance and compliance teams fast, policy-safe summaries so they can move from questions to decisions with confidence.",
      image: person2,
      bullets: [
        "Turn complex financial controls into clear, auditable outcomes.",
        "Share only compliant recommendations without exposing raw data.",
      ],
    },
  ];

  return (
    <section
      className="site-page-hero bg-white"
      aria-label="Bridge Intelligence"
    >
      <div className="site-container relative z-10">
        <motion.div
          ref={ref}
          variants={container}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          className="space-y-14 sm:space-y-24"
        >
          {/* ── 1. HERO SECTION ── */}
          <div className="flex flex-col items-center text-center max-w-4xl mx-auto pt-8">
            <motion.div variants={fadeUp} className="mb-6">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent">
                BridgeIntelligence
              </span>
            </motion.div>

            <motion.h1
              variants={fadeUp}
              className="site-page-title mb-6"
            >
              Enterprise AI that <br className="hidden sm:block" /> understands
              your rules.
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[18px] sm:text-[20px] text-[#425466] leading-relaxed max-w-3xl mx-auto mb-10"
            >
              BridgeIntelligence helps regulated teams use AI with confidence by
              making every answer policy-safe, traceable, and operationally
              meaningful.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-wrap items-center justify-center gap-4"
            >
              <Link
                to="/contact?topic=demo"
                className="group inline-flex h-14 items-center justify-center rounded-none bg-[#0A2540] px-8 text-[15px] font-bold text-white transition-all hover:bg-accent hover:-translate-y-0.5 hover:shadow-lg"
              >
                Request demo
                <RiArrowRightSLine className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="#product-preview"
                className="inline-flex h-14 items-center justify-center rounded-none border border-rule bg-white px-8 text-[15px] font-bold text-[#0A2540] transition-colors hover:bg-[#F6F9FC]"
              >
                See it in action
              </Link>
            </motion.div>
          </div>

          {/* ── 2. MAIN PRODUCT PREVIEW ── */}
          <motion.div id="product-preview" tabIndex={-1} variants={fadeUp} className="mx-auto w-full max-w-6xl focus:outline-none">
            <div className="rounded-[2rem] bg-[#F6F9FC] border border-rule p-6 sm:p-10 shadow-[0_40px_80px_rgba(10,37,64,0.08)]">
              <div className="w-full rounded-[1.75rem] bg-white p-6 flex items-center justify-center shadow-2xl shadow-black/20">
                <img
                  src={brigdeintel}
                  alt="BridgeIntelligence Interface"
                  className="w-full h-[420px] sm:h-[520px] lg:h-[620px] object-contain"
                />
              </div>
            </div>
          </motion.div>

          {/* ── 3. PLANHAT STYLE FEATURE SPLIT ── */}
          <motion.div
            variants={fadeUp}
            className="grid lg:grid-cols-2 gap-16 items-start max-w-6xl mx-auto"
          >
            <div className="space-y-6">
              <h2 className="text-[36px] sm:text-[44px] font-medium text-[#0A2540] leading-[1.1] tracking-tight">
                Built around your internal systems.
              </h2>
              <p className="text-[18px] text-[#425466] leading-[1.6]">
                BridgeIntelligence brings your policy graph, workflows, and data
                flows into one visible system so teams can move faster without
                losing governance.
              </p>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-1">
              <div className="p-8 rounded-3xl bg-[#F6F9FC] border border-rule">
                <h3 className="text-[18px] font-bold text-[#0A2540] mb-3">
                  Policy Engine
                </h3>
                <p className="text-[15px] text-[#425466] leading-[1.6]">
                  Your internal rules and workflows are codified into a policy
                  graph that guides every AI response.
                </p>
              </div>
              <div className="p-8 rounded-3xl bg-[#F6F9FC] border border-rule">
                <h3 className="text-[18px] font-bold text-[#0A2540] mb-3">
                  Audit Trail
                </h3>
                <p className="text-[15px] text-[#425466] leading-[1.6]">
                  Every AI answer is logged, timestamped, and traceable so your
                  operations teams can prove alignment and compliance.
                </p>
              </div>
            </div>
          </motion.div>

          {/* ── 4. STRIPE STYLE 3-COLUMN GRID ── */}
          <motion.div
            variants={fadeUp}
            className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16 border-t border-rule pt-20 max-w-6xl mx-auto"
          >
            {stripeFeatures.map((feature, i) => (
              <div key={i} className="space-y-5">
                <div className="w-12 h-12 rounded-xl bg-blue-50 border border-blue-100 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-accent" />
                </div>
                <h3 className="text-[20px] font-bold text-[#0A2540] tracking-tight">
                  {feature.title}
                </h3>
                <p className="text-[15px] text-[#425466] leading-[1.6]">
                  {feature.desc}
                </p>
              </div>
            ))}
          </motion.div>

          {/* ── 5. ARCHITECTURE SECTION (BIbg) ── */}
          <div className="pt-16 pb-8">
            <motion.div
              variants={fadeUp}
              className="text-center max-w-4xl mx-auto mb-20"
            >
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent mb-6 block">
                Statement
              </span>
              <h2 className="text-[40px] sm:text-[52px] font-medium text-[#0A2540] leading-[1.05] tracking-tight">
                AI that follows your policies before it follows instructions.
              </h2>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto"
            >
              <div className="space-y-6 order-2 lg:order-1">
                <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent">
                  Built around your internal systems
                </span>
                <h2 className="text-[32px] sm:text-[40px] font-medium text-[#0A2540] leading-[1.1] tracking-tight">
                  A product architecture designed for control, visibility, and
                  auditability.
                </h2>
                <p className="text-[18px] text-[#425466] leading-[1.6]">
                  BridgeIntelligence brings your policy graph, workflows, and
                  data flows into one visible system so teams can move faster
                  without losing governance.
                </p>
              </div>
              <div className="order-1 lg:order-2 rounded-[2rem] bg-[#F6F9FC] border border-rule p-8 flex items-center justify-center">
                <img
                  src={BIbg}
                  alt="Bridge Intelligence Architecture"
                  className="w-full h-auto"
                />
              </div>
            </motion.div>
          </div>

          {/* ── 6. PERSONAS / USE CASES ── */}
          <div className="space-y-24 max-w-6xl mx-auto border-t border-rule pt-20">
            {useCases.map((item, index) => (
              <motion.div
                key={item.title}
                variants={fadeUp}
                className={cn(
                  "grid gap-12 lg:gap-20 items-center lg:grid-cols-2",
                  index % 2 === 1 ? "" : "",
                )}
              >
                <div
                  className={cn(
                    "space-y-8",
                    index % 2 === 1 ? "lg:order-2" : "lg:order-1",
                  )}
                >
                  <div>
                    <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-accent block mb-4">
                      {item.title}
                    </span>
                    <h3 className="text-[32px] font-medium text-[#0A2540] leading-[1.1] tracking-tight">
                      {item.description}
                    </h3>
                  </div>
                  <div className="space-y-4">
                    {item.bullets.map((bullet, i) => (
                      <div key={i} className="flex items-start gap-3">
                        <RiCheckLine className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                        <p className="text-[16px] text-[#425466] leading-[1.6]">
                          {bullet}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                <div
                  className={cn(
                    "flex justify-center",
                    index % 2 === 1 ? "lg:order-1" : "lg:order-2",
                  )}
                >
                  {/* Clean 3D Asset Wrapper */}
                  <div className="relative w-full max-w-[420px] aspect-square rounded-[2.5rem] bg-gradient-to-b from-[#F6F9FC] to-white border border-rule shadow-sm flex items-center justify-center p-6">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain max-w-full max-h-full"
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* ── 7. BOTTOM CTA ── */}
          <motion.div
            variants={fadeUp}
            className="max-w-5xl mx-auto rounded-none bg-[#0A2540] p-12 sm:p-20 text-center relative overflow-hidden shadow-2xl"
          >
            {/* Subtle glow inside the dark CTA box */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-accent/20 rounded-full blur-[100px] pointer-events-none translate-x-1/2 -translate-y-1/2" />

            <div className="relative z-10">
              <span className="text-[12px] font-bold uppercase tracking-[0.2em] text-white/60 block mb-6">
                Ready for customers who need certainty
              </span>
              <h2 className="text-[36px] sm:text-[48px] font-medium text-white tracking-tight leading-[1.1] mb-10 max-w-2xl mx-auto">
                BridgeIntelligence is the only AI platform that guarantees
                policy-safe answers for regulated teams.
              </h2>
              <div className="flex flex-wrap items-center justify-center gap-4">
                <Link
                  to="/contact?topic=demo"
                  className="group inline-flex h-14 items-center justify-center rounded-none px-8 text-[15px] font-bold text-white transition-all"
                >
                  Request demo
                  <RiArrowRightSLine className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-1" />
                </Link>
                <Link
                  to="/contact?topic=sales"
                  className="inline-flex h-14 items-center justify-center rounded-none border border-white/20 px-8 text-[15px] font-bold text-white transition-colors hover:bg-white/10"
                >
                  Talk to sales
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
