import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RiArrowRightLine,
  RiShieldKeyholeLine,
  RiTimeLine,
  RiCheckboxCircleLine,
  RiHeartPulseLine,
  RiHospitalLine,
  RiFileList3Line,
  RiUserHeartLine,
} from "react-icons/ri";
import { getSolutionBySlug } from "@/data/solutions";
import { cn } from "@/lib/utils";
import TrustStrip from "@/components/solutions/TrustStrip";
import SolutionWhoWeHelpSection from "@/components/solutions/SolutionWhoWeHelpSection";

import doctorImage from "@/assets/images/doctor.jpg";
import healthGraphic from "@/assets/images/health.svg";
import heartGraphic from "@/assets/images/heart.svg";
import brainGraphic from "@/assets/images/brain.svg";
import aidGraphic from "@/assets/images/aid.svg";
import hiconGraphic from "@/assets/images/hicon.svg";

const data = getSolutionBySlug("healthcare");

const fadeUp = {
  hidden: { opacity: 0, y: 22 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] },
  },
};

const stagger = {
  hidden: { opacity: 0 },
  show: { opacity: 1, transition: { staggerChildren: 0.08 } },
};

const whoWeHelp = [
  {
    title: "Hospital networks",
    description:
      "Connect inpatient, outpatient, and emergency records so teams can see the full picture at every facility.",
    image:
      "https://plus.unsplash.com/premium_vector-1682270087470-b1e5aac279d1?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvc3BpdGFsfGVufDB8fDB8fHww",
  },
  {
    title: "Public health authorities",
    description:
      "Track capacity, wait times, and service delivery across districts with less back and forth.",
    image:
      "https://plus.unsplash.com/premium_vector-1682306895029-1c07dc2c0dfc?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aG9zcGl0YWx8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Clinics and outpatient care",
    description:
      "Share referrals, results, and care plans between sites without duplicate work or paperwork.",
    image:
      "https://plus.unsplash.com/premium_vector-1726062951813-9dc592ec3a79?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTB8fGhvc3BpdGFsJTIwYnVpbGRpbmd8ZW58MHx8MHx8fDA%3D",
  },
  {
    title: "Health tech platforms",
    description:
      "Embed the tools hospitals and partners already use into one cleaner workflow.",
    image:
      "https://plus.unsplash.com/premium_vector-1682310608698-02d7ef747d95?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTl8fGhlYWx0aGNhcmV8ZW58MHx8MHx8fDA%3D",
  },
];

function SectionLabel({ children, className }) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.34em] text-[#0A2540]",
        className,
      )}
    >
      {children}
    </p>
  );
}

function PrimaryButton({ children, href = "/contact", className }) {
  return (
    <Link
      to={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-[#0A2540] px-6 py-3 text-sm font-medium text-white shadow-[0_10px_24px_rgba(10,37,64,0.14)] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#08223a]",
        className,
      )}
    >
      {children}
    </Link>
  );
}

function SecondaryButton({ children, href = "/products", className }) {
  return (
    <Link
      to={href}
      className={cn(
        "inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-medium text-[#0A2540] ring-1 ring-[#E6ECF5] transition-all duration-200 hover:-translate-y-[1px] hover:bg-[#F6F9FC]",
        className,
      )}
    >
      {children}
      <RiArrowRightLine className="h-4 w-4" />
    </Link>
  );
}

function InfoPill({ icon: Icon, children }) {
  return (
    <div className="inline-flex items-center gap-2 rounded-full border border-[#E6ECF5] bg-white px-4 py-2 text-[13px] font-medium text-[#0A2540] shadow-sm">
      <Icon className="h-4 w-4 text-[#0A2540]" />
      {children}
    </div>
  );
}

function FeatureCard({ icon: Icon, title, body, asset }) {
  return (
    <motion.article
      variants={fadeUp}
      className="rounded-[1.5rem] border border-[#E6ECF5] bg-white p-6 shadow-[0_14px_40px_rgba(10,37,64,0.05)]"
    >
      <div className="flex items-center gap-4">
        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-[#F6F9FC] text-[#0A2540]">
          <Icon className="h-5 w-5" />
        </div>
        <div>
          <h3 className="text-[18px] font-semibold text-[#0A2540]">{title}</h3>
        </div>
      </div>
      <div className="mt-5 grid gap-5 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <p className="text-[15px] leading-[1.75] text-[#0A2540]">{body}</p>
        <div className="overflow-hidden rounded-[1.25rem] border border-[#EEF2F7] bg-[#FAFBFC] p-4">
          <img src={asset} alt="" className="h-36 w-full object-contain" />
        </div>
      </div>
    </motion.article>
  );
}

export default function HealthcareSolution() {
  const { hero, trustBar } = data;

  const features = [
    {
      icon: RiHeartPulseLine,
      title: "Keep care moving",
      body: "Help staff find patient information faster and keep day-to-day work from feeling scattered.",
      asset: healthGraphic,
    },
    {
      icon: RiHospitalLine,
      title: "One view across sites",
      body: "Bring records, referrals, and service updates into one place so teams stay aligned.",
      asset: doctorImage,
    },
    {
      icon: RiFileList3Line,
      title: "Clear records",
      body: "Make it easier to track activity, review history, and keep the right people informed.",
      asset: brainGraphic,
    },
  ];

  return (
    <main className="bg-white font-sans text-[#0A2540] selection:bg-[#635BFF]/15">
      <section className="relative overflow-hidden bg-white pt-24 lg:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <img
            src="https://images.unsplash.com/photo-1557682250-33bd709cbe85?q=80&w=1600&auto=format&fit=crop"
            alt=""
            className="h-full w-full object-cover opacity-[0.14]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/80 via-white/92 to-white" />
          <div className="absolute right-[-10%] top-[10%] h-[30rem] w-[30rem] rounded-full bg-[#635BFF]/8 blur-[120px]" />
        </div>

        <div className="site-container relative z-10 pb-16 lg:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.92fr] lg:gap-16">
            <motion.div
              initial="hidden"
              animate="show"
              variants={stagger}
              className="max-w-2xl"
            >
              <motion.div variants={fadeUp} className="mb-6">
                <SectionLabel>{hero.eyebrow}</SectionLabel>
              </motion.div>

              <motion.h1
                variants={fadeUp}
                className="text-[44px] font-semibold leading-[1.02] tracking-tight text-[#0A2540] sm:text-[58px] lg:text-[68px]"
              >
                Simple software for better care teams.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-[18px] leading-[1.8] text-[#425466] sm:text-[20px]"
              >
                Foundry helps hospitals, clinics, and public health teams
                keep records clear, work aligned, and daily care easier to
                manage.
              </motion.p>

              <motion.div
                variants={fadeUp}
                className="mt-8 flex flex-wrap gap-3"
              >
                <PrimaryButton href={hero.ctas?.[0]?.href ?? "/contact"}>
                  {hero.ctas?.[0]?.label ?? "Request a Demo"}
                </PrimaryButton>
                <SecondaryButton href="/products">See Products</SecondaryButton>
              </motion.div>

              <motion.div
                variants={fadeUp}
                className="mt-10 flex flex-wrap gap-3"
              >
                <InfoPill icon={RiShieldKeyholeLine}>
                  Built for privacy
                </InfoPill>
                <InfoPill icon={RiTimeLine}>Made for busy teams</InfoPill>
                <InfoPill icon={RiCheckboxCircleLine}>Clear records</InfoPill>
              </motion.div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, ease: [0.16, 1, 0.3, 1] }}
              className="relative mx-auto w-full max-w-[620px]"
            >
              <div className="rounded-[2rem] border border-[#E6ECF5] bg-white shadow-[0_28px_80px_rgba(10,37,64,0.12)]">
                <div className="flex items-center gap-2 border-b border-[#EEF2F7] px-5 py-4">
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D1D9E6]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D1D9E6]" />
                  <span className="h-2.5 w-2.5 rounded-full bg-[#D1D9E6]" />
                  <div className="ml-auto rounded-full bg-[#F6F9FC] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#8898AA]">
                    Care teams
                  </div>
                </div>
                <div className="grid gap-4 p-4 lg:grid-cols-[1.05fr_0.95fr]">
                  <div className="overflow-hidden rounded-[1.5rem] bg-[#F6F9FC] p-4">
                    <img
                      src={doctorImage}
                      alt="Healthcare team"
                      className="aspect-[4/3] w-full rounded-[1.1rem] object-cover"
                    />
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-[1.5rem] border border-[#EEF2F7] bg-white p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#8898AA]">
                        One view
                      </p>
                      <div className="mt-4 flex items-center gap-4">
                        <img
                          src={heartGraphic}
                          alt=""
                          className="h-20 w-20 object-contain"
                        />
                        <div>
                          <p className="text-[15px] font-semibold text-[#0A2540]">
                            Easier to follow what is happening
                          </p>
                          <p className="mt-1 text-[13px] leading-[1.6] text-[#425466]">
                            Keep track of patients, referrals, and updates
                            without jumping around.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] border border-[#EEF2F7] bg-[#0A2540] p-5 text-white">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                        Simple work
                      </p>
                      <div className="mt-4 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[30px] font-semibold leading-none">
                            Less back-and-forth
                          </p>
                          <p className="mt-2 text-[13px] text-white/70">
                            for staff and patients
                          </p>
                        </div>
                        <RiUserHeartLine className="h-8 w-8 text-[#9FB4FF]" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 18, rotate: -4 }}
                animate={{ opacity: 1, y: 0, rotate: -4 }}
                transition={{ duration: 0.6, delay: 0.08 }}
                className="absolute -bottom-6 left-4 hidden w-44 rounded-[1.35rem] border border-[#E6ECF5] bg-white p-4 shadow-[0_20px_60px_rgba(10,37,64,0.12)] lg:block"
              >
                <img
                  src={aidGraphic}
                  alt=""
                  className="h-24 w-full object-contain"
                />
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 18, rotate: 5 }}
                animate={{ opacity: 1, y: 0, rotate: 5 }}
                transition={{ duration: 0.6, delay: 0.16 }}
                className="absolute -right-6 bottom-8 hidden w-44 rounded-[1.35rem] border border-[#E6ECF5] bg-white p-4 shadow-[0_20px_60px_rgba(10,37,64,0.12)] xl:block"
              >
                <img
                  src={hiconGraphic}
                  alt=""
                  className="h-24 w-full object-contain"
                />
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      <TrustStrip
        headline={trustBar.headline}
        proofPoints={trustBar.proofPoints}
      />

      <section className="bg-white py-20 lg:py-28">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>What helps</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[34px] font-semibold tracking-tight text-[#0A2540] sm:text-[44px]"
            >
              A simpler way to keep care moving
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-[17px] leading-[1.8] text-[#0A2540] sm:text-[18px] sm:leading-[1.75]"
            >
              Less juggling, fewer handoffs, and a clearer view of what is
              happening across the day.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-12 grid gap-6 lg:grid-cols-3"
          >
            {features.map((feature) => (
              <FeatureCard key={feature.title} {...feature} />
            ))}
          </motion.div>
        </div>
      </section>

      <SolutionWhoWeHelpSection
        title="Serving hospitals, authorities, clinics, and platforms"
        items={whoWeHelp}
      />
    </main>
  );
}
