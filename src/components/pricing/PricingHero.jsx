import { motion } from "framer-motion";
import { Switch } from "@/components/ui/switch";
import { cn } from "@/lib/utils";

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
  show: { transition: { staggerChildren: 0.1, delayChildren: 0.1 } },
};

export default function PricingHero({ isAnnual, setIsAnnual }) {
  return (
    <section
      className="relative site-page-hero bg-white overflow-hidden font-sans border-b border-slate-200"
      aria-label="Pricing Introduction"
    >
      {/* ─── Premium Unsplash Abstract Background ─── */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Soft, modern abstract liquid/gradient from Unsplash */}
        <img
          src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=2564&auto=format&fit=crop"
          alt="Abstract soft background"
          className="w-full h-full object-cover opacity-[0.15]"
        />
        {/* Gradient overlay to ensure text readability and seamless blending */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/40 via-white/80 to-white" />
      </div>

      <div className="site-container relative z-10">
        <motion.div
          initial="hidden"
          animate="show"
          variants={container}
          className="max-w-4xl mx-auto flex flex-col items-center text-center"
        >
          {/* Headline */}
          <motion.h1
            variants={fadeUp}
            className="site-page-title mb-6"
          >
            Enterprise-Grade Pricing for African Businesses
          </motion.h1>

          {/* Subtext */}
          <motion.p
            variants={fadeUp}
            className="text-[18px] sm:text-[20px] text-slate-600 leading-[1.6] max-w-2xl font-medium mb-12"
          >
            Our pricing is designed to be flexible and scalable, ensuring that
            businesses of all sizes can access the tools they need to succeed.
            Choose between our unified platform or a la carte divisions to find
            the perfect fit for your organization.
          </motion.p>

          {/* ── Elevated Monthly / Annual Toggle ── */}
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-3 bg-white/60 backdrop-blur-md border border-slate-200 p-1.5 pr-2.5 rounded-full shadow-sm ring-1 ring-black/[0.03]"
          >
            {/* Monthly Option */}
            <button
              onClick={() => setIsAnnual(false)}
              className={cn(
                "text-[14px] font-medium transition-all duration-300 px-5 py-2.5 rounded-full",
                !isAnnual
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-500 hover:text-slate-900",
              )}
            >
              Monthly
            </button>

            {/* Shadcn Switch */}
            <div className="px-1 flex items-center">
              <Switch
                checked={isAnnual}
                onCheckedChange={setIsAnnual}
                className="data-[state=checked]:bg-indigo-600 data-[state=unchecked]:bg-slate-300 shadow-inner"
              />
            </div>

            {/* Annual Option */}
            <button
              onClick={() => setIsAnnual(true)}
              className={cn(
                "flex items-center gap-2 text-[14px] font-medium transition-all duration-300 pl-4 pr-3 py-2.5 rounded-full",
                isAnnual
                  ? "bg-white text-slate-900 shadow-sm border border-slate-200"
                  : "text-slate-500 hover:text-slate-900",
              )}
            >
              Annual
              <span
                className={cn(
                  "text-[10px] font-bold uppercase tracking-wide px-2 py-0.5 rounded-full transition-colors",
                  isAnnual
                    ? "bg-emerald-100 text-emerald-700"
                    : "bg-slate-100 text-slate-500",
                )}
              >
                Save 20%
              </span>
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
