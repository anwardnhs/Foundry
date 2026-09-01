import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { RiArrowRightLine, RiPlayCircleLine } from "react-icons/ri";
import { Button } from "@/components/ui/button";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

export default function CareersHero() {
  return (
    <section
      className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 bg-white overflow-hidden font-sans border-b border-slate-200"
      aria-label="Careers Hero"
    >
      <div className="site-container max-w-3xl">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* ─── Left: Massive Typography ─── */}
          <motion.div
            initial="hidden"
            animate="show"
            variants={container}
            className="lg:col-span-6 flex flex-col items-start z-10"
          >
            <motion.h1
              variants={fadeUp}
              className="text-[50px] sm:text-[50px] lg:text-[80px] xl:text-[96px] font-bold text-slate-900 leading-[0.95] tracking-tight mb-8"
            >
              Join Our Team
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="text-[18px] sm:text-[20px] lg:text-[22px] text-slate-600 leading-[1.6] max-w-lg mb-10 font-normal"
            >
              At Foundry, we’re building the future of digital
              infrastructure. If you’re passionate about technology, innovation,
              and making an impact, we’d love to hear from you.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto"
            >
              <Button
                asChild
                className="h-14 px-8 rounded-none bg-[#0A2540] hover:bg-indigo-700 text-white font-semibold text-[15px] w-full sm:w-auto shadow-sm transition-all"
              >
                <a
                  href="#open-roles"
                  className="flex items-center justify-center gap-2"
                >
                  See Open Roles
                  <RiArrowRightLine className="w-5 h-5" />
                </a>
              </Button>

              <Button
                asChild
                variant="outline"
                className="h-14 px-8 rounded-none bg-white border-slate-200 hover:bg-slate-50 text-slate-900 font-semibold text-[15px] w-full sm:w-auto shadow-sm transition-all"
              >
                <a
                  href="#culture"
                  className="flex items-center justify-center gap-2"
                >
                  Our Culture
                  <RiPlayCircleLine className="w-5 h-5 text-slate-400" />
                </a>
              </Button>
            </motion.div>
          </motion.div>

          {/* ─── Right: Structural Editorial Image ─── */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="lg:col-span-6 relative w-full"
          >
            {/* The image is treated like a crisp architectural element, exactly how Stripe handles photography */}
            <div className="relative w-full aspect-[4/3] lg:aspect-[4/4] xl:aspect-[4/3] rounded-[24px] lg:rounded-[32px] overflow-hidden bg-slate-100 shadow-[0_20px_40px_rgb(0,0,0,0.08)] ring-1 ring-slate-900/5 ml-auto max-w-[600px]">
              <img
                src="https://plus.unsplash.com/premium_photo-1689700526278-f5096144422f?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Foundry team collaborating"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Stripe-style decorative grid lines (Optional but adds to the SaaS vibe) */}
            <div className="absolute -top-12 -right-12 w-48 h-48 bg-slate-50 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-12 -left-12 w-48 h-48 bg-indigo-50 rounded-full blur-3xl -z-10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
