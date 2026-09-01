import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { RiArrowRightLine, RiMailSendLine } from "react-icons/ri";
import { Badge } from "@/components/ui/badge";

// ─── Mock Data (In production, move this to a data file) ──────────────────────
const jobs = [
  {
    id: 1,
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote (EMEA)",
    type: "Full-time",
  },
  {
    id: 2,
    title: "Backend Systems Engineer",
    department: "Engineering",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
  {
    id: 3,
    title: "Product Manager, Cloud Infrastructure",
    department: "Product",
    location: "London, UK",
    type: "Full-time",
  },
  {
    id: 4,
    title: "Lead Product Designer",
    department: "Design",
    location: "Remote (Global)",
    type: "Contract",
  },
  {
    id: 5,
    title: "Enterprise Account Executive",
    department: "Sales",
    location: "Nairobi, Kenya",
    type: "Full-time",
  },
  {
    id: 6,
    title: "Cloud Security Architect",
    department: "Engineering",
    location: "Remote (EMEA)",
    type: "Full-time",
  },
  {
    id: 7,
    title: "HR Business Partner",
    department: "Operations",
    location: "Lagos, Nigeria",
    type: "Full-time",
  },
];

const departments = [
  "All",
  "Engineering",
  "Product",
  "Design",
  "Sales",
  "Operations",
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

export default function OpenRoles() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [activeTab, setActiveTab] = useState("All");

  // Filter Logic
  const filteredJobs =
    activeTab === "All"
      ? jobs
      : jobs.filter((job) => job.department === activeTab);

  return (
    <section
      id="open-roles"
      className="bg-white py-20 lg:py-32 font-sans scroll-mt-24"
    >
      <div className="site-container max-w-5xl">
        {/* ─── Section Header & Tabs ─── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12"
        >
          <div>
            <h2 className="text-[32px] sm:text-[40px] font-semibold text-slate-900 tracking-tight mb-2">
              Open Roles
            </h2>
            <p className="text-[16px] text-slate-500">
              Join us in building the future of digital infrastructure.
            </p>
          </div>

          {/* Simulated shadcn TabsList for instant compatibility */}
          <div className="inline-flex h-10 items-center justify-center rounded-md bg-slate-100 p-1 text-slate-500 overflow-x-auto no-scrollbar max-w-full">
            {departments.map((dept) => {
              const isActive = activeTab === dept;
              return (
                <button
                  key={dept}
                  onClick={() => setActiveTab(dept)}
                  className={`inline-flex items-center justify-center whitespace-nowrap rounded-sm px-4 py-1.5 text-[14px] font-medium transition-all focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50 ${
                    isActive
                      ? "bg-white text-slate-950 shadow-sm"
                      : "hover:text-slate-900 hover:bg-slate-200/50"
                  }`}
                >
                  {dept}
                </button>
              );
            })}
          </div>
        </motion.div>

        {/* ─── Job List ─── */}
        <div className="border-t border-slate-200">
          <AnimatePresence mode="popLayout">
            {filteredJobs.length === 0 ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="py-12 text-center text-slate-500"
              >
                No open roles in this department right now. Check back later!
              </motion.div>
            ) : (
              filteredJobs.map((job) => (
                <motion.div
                  key={job.id}
                  layout
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.3 }}
                >
                  <Link
                    to={`/careers/apply?role=${job.id}`}
                    className="group flex flex-col md:flex-row md:items-center justify-between py-6 px-4 -mx-4 border-b border-transparent hover:border-slate-200 hover:bg-slate-50/50 rounded-xl hover:-translate-y-[2px] transition-all duration-300"
                  >
                    {/* Left: Title & Department */}
                    <div className="mb-4 md:mb-0 md:w-5/12">
                      <h3 className="text-[18px] font-semibold text-slate-900 tracking-tight group-hover:text-indigo-600 transition-colors">
                        {job.title}
                      </h3>
                      <p className="text-[14px] text-slate-500 font-medium mt-1">
                        {job.department}
                      </p>
                    </div>

                    {/* Middle: Location & Type */}
                    <div className="flex items-center gap-4 mb-4 md:mb-0 md:w-4/12">
                      <span className="text-[14px] text-slate-600">
                        {job.location}
                      </span>
                      {/* Using standard shadcn Badge structure */}
                      <Badge
                        variant="secondary"
                        className="bg-slate-100 text-slate-700 hover:bg-slate-200 font-medium rounded-full px-3"
                      >
                        {job.type}
                      </Badge>
                    </div>

                    {/* Right: CTA */}
                    <div className="md:w-3/12 flex justify-start md:justify-end">
                      <div className="flex items-center text-[14px] font-semibold text-indigo-600 group-hover:text-indigo-700">
                        Apply
                        <RiArrowRightLine className="ml-1 w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </div>
                    </div>
                  </Link>
                </motion.div>
              ))
            )}
          </AnimatePresence>
        </div>

        {/* ─── Bottom CTA: Send CV ─── */}
        <motion.div
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={fadeUp}
          className="mt-16 p-8 rounded-[20px] bg-[#F6F9FC] border border-slate-200/60 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6"
        >
          <div>
            <h4 className="text-[18px] font-semibold text-slate-900 mb-1">
              Don't see your perfect role?
            </h4>
            <p className="text-[15px] text-slate-600">
              We are always looking for exceptional talent. Send us your CV and
              we'll keep you in mind.
            </p>
          </div>
          <a
            href="mailto:careers@foundry.com"
            className="shrink-0 flex items-center gap-2 h-11 px-6 rounded-full bg-white border border-slate-200 hover:border-slate-300 text-slate-900 font-semibold text-[14px] shadow-sm hover:shadow transition-all"
          >
            <RiMailSendLine className="w-4 h-4 text-slate-500" />
            Send your CV
          </a>
        </motion.div>
      </div>
    </section>
  );
}
