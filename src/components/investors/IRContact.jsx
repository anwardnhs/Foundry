import { useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView } from "framer-motion";
import { RiMailSendLine, RiMapPin2Line } from "react-icons/ri";
import { Button } from "@/components/ui/button";

const irTeam = [
  {
    name: "Amina Waziri",
    title: "Head of Investor Relations, Africa",
    focus: "NGX & Domestic Institutional",
    location: "Lagos, Nigeria",
    email: "ir.africa@foundry.com",
  },
  {
    name: "Peter Thompson",
    title: "Vice President, Investor Relations, Global",
    focus: "LSE & International Equities",
    location: "London, United Kingdom",
    email: "ir.global@foundry.com",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function IRContact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });

  return (
    <section
      className="bg-[#F6F9FC] py-24 lg:py-32 font-sans"
      aria-label="Contact IR Team"
    >
      <div className="site-container max-w-4xl mx-auto">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="bg-white rounded-2xl p-8 sm:p-12 border border-rule shadow-sm"
        >
          <h2 className="text-[28px] sm:text-[32px] font-medium text-[#0A2540] tracking-tight mb-8 text-center sm:text-left">
            Investor Relations Desk
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 mb-10">
            {irTeam.map((exec, index) => (
              <div key={index} className="flex flex-col">
                <h3 className="text-[18px] font-bold text-[#0A2540] tracking-tight">
                  {exec.name}
                </h3>
                <div className="text-[14px] font-medium text-[#425466] mt-1 mb-4">
                  {exec.title}
                </div>

                <div className="flex flex-col gap-2 mt-auto">
                  <div className="flex items-center gap-2 text-[13px] text-subtle">
                    <RiMapPin2Line className="w-4 h-4 shrink-0" />
                    <span>
                      {exec.location} &mdash; {exec.focus}
                    </span>
                  </div>
                  <div className="flex items-center gap-2 text-[13px] text-subtle">
                    <RiMailSendLine className="w-4 h-4 shrink-0" />
                    <a
                      href={`mailto:${exec.email}`}
                      className="font-mono hover:text-accent transition-colors"
                    >
                      {exec.email}
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="pt-8 border-t border-rule flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
            <p className="text-[14px] text-[#425466] max-w-md">
              For general shareholder enquiries, institutional meeting requests,
              or transfer agent support.
            </p>
            <Button
              asChild
              className="w-full sm:w-auto bg-[#0A2540] hover:bg-accent text-white font-bold uppercase tracking-widest text-[12px] h-12 px-8 rounded-sm transition-all duration-300"
            >
              <Link to="/contact">Contact IR Team</Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
