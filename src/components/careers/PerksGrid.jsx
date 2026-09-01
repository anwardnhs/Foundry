import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  RiWallet3Line,
  RiLineChartLine,
  RiHomeSmileLine,
  RiBookOpenLine,
  RiHeartPulseLine,
  RiFlightTakeoffLine,
} from "react-icons/ri";

// ─── Data ─────────────────────────────────────────────────────────────────────
const perks = [
  {
    title: "Competitive Salary",
    desc: "We offer market-leading compensation packages that reflect your experience and the value you bring to the team.",
    icon: RiWallet3Line,
  },
  {
    title: "Equity for All",
    desc: "Participate in our success with stock options for every employee. As we grow, so does your ownership in the company.",
    icon: RiLineChartLine,
  },
  {
    title: "Outstanding Culture",
    desc: "A supportive, inclusive environment where your voice is heard, your ideas matter, and your well-being is a top priority.",
    icon: RiHomeSmileLine,
  },
  {
    title: "Research & Development Grant",
    desc: "Support for pursuing innovative projects and staying at the forefront of your field. We provide resources and funding to explore new ideas and technologies.",
    icon: RiBookOpenLine,
  },
  {
    title: "Comprehensive Health Insurance",
    desc: "We care about your well-being. Our health insurance plans cover medical, dental, and vision care, ensuring you and your family have access to quality healthcare.",
    icon: RiHeartPulseLine,
  },
  {
    title: "Entrepreneurship & Innovation Hub",
    desc: "We foster a culture of innovation and entrepreneurship. Employees have the opportunity to pitch new ideas, lead projects, and receive support to turn their visions into reality.",
    icon: RiFlightTakeoffLine,
  },
];

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function PerksAndBenefits() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-slate-50 py-20 lg:py-32 font-sans border-t border-slate-200"
      aria-label="Perks and Benefits"
    >
      <div className="site-container max-w-7xl">
        {/* ─── Section Header ─── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="mb-16 lg:mb-20 text-center flex flex-col items-center"
        >
          <h2 className="text-[32px] sm:text-[40px] font-semibold text-slate-900 tracking-tight mb-4">
            We take care of our team.
          </h2>
          <p className="text-[18px] text-slate-600 max-w-2xl">
            At Foundry, we believe that a great workplace is more than just a
            paycheck. We offer a comprehensive benefits package designed to
            support your health, growth, and work-life balance. Here are just a
            few of the perks you can enjoy as part of our team
          </p>
        </motion.div>

        {/* ─── Grid ─── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8"
        >
          {perks.map((perk, index) => {
            const Icon = perk.icon;
            return (
              <motion.div
                key={index}
                variants={fadeUp}
                className="bg-white p-8 lg:p-10 rounded-[24px] shadow-sm ring-1 ring-slate-900/5 hover:shadow-md transition-shadow duration-300 flex flex-col items-start"
              >
                {/* Clean, unboxed icon */}
                <div className="mb-6 w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center">
                  <Icon className="w-6 h-6 text-indigo-600" />
                </div>

                <h3 className="text-[18px] font-semibold text-slate-900 tracking-tight mb-3">
                  {perk.title}
                </h3>

                <p className="text-[15px] text-slate-600 leading-[1.6]">
                  {perk.desc}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
