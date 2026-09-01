import { motion } from "framer-motion";
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

export default function NewsroomHero() {
  return (
    <section
      className="relative pt-32 pb-24 lg:pt-40 lg:pb-32  overflow-hidden flex items-center justify-center border-b border-slate-800"
      aria-label="Newsroom Header"
    >
      {/* ─── Subtle Unsplash Background Texture ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Abstract background texture"
          className="w-fit h-fit object-cover opacity-[0.15] mix-blend-luminosity grayscale"
        />
        {/* Dark vignette to ensure perfect text readability */}
      </div>

      <div className="site-container relative z-10 w-full max-w-3xl mx-auto">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="flex flex-col items-center text-center"
        >
          {/* ─── Massive Serif Headline ─── */}
          <motion.h1
            variants={fadeUp}
            className="text-[48px] sm:text-[56px] lg:text-[64px] font-serif font-medium text-[#0A2540] tracking-tight mb-4"
          >
            The latest news and stories <br className="hidden sm:block" />
          </motion.h1>

          {/* ─── Subtext ─── */}
          <motion.p
            variants={fadeUp}
            className="text-[16px] sm:text-[18px] text-[#0A2540] font-medium mb-10"
          >
            Stay up to date with the latest news, press releases, and media
            coverage about Foundry Plc.
          </motion.p>

          {/* ─── Action Buttons ─── */}
          <motion.div
            variants={fadeUp}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto"
          >
            {/* Solid White Button */}
            <Button className="h-12 px-6 rounded-md bg-white hover:bg-slate-100 text-[#0A2540] font-semibold text-[14px] w-full sm:w-auto transition-colors">
              View Latest News
            </Button>

            {/* Outline Button */}
            <Button
              variant="outline"
              className="h-12 px-6 rounded-md bg-transparent border-slate-500 text-[#0A2540] hover:bg-white/10 hover:text-[#0A2540] font-semibold text-[14px] w-full sm:w-auto transition-colors"
            >
              Contact Press
            </Button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
