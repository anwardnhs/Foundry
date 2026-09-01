import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RiArrowRightLine,
  RiShieldKeyholeLine,
  RiTimeLine,
  RiCheckboxCircleLine,
  RiBankLine,
  RiSmartphoneLine,
  RiFileList3Line,
  RiWallet3Line,
} from "react-icons/ri";
import { getSolutionBySlug } from "@/data/solutions";
import { cn } from "@/lib/utils";
import TrustStrip from "@/components/solutions/TrustStrip";

import bankImage from "@/assets/images/bank2.jpg";
import dashboardGraphic from "@/assets/images/dashboard.svg";
import phoneOne from "@/assets/images/fiphone.svg";
import phoneTwo from "@/assets/images/fianacedb.svg";
import phoneThree from "@/assets/images/fiphone3.svg";
import featureOne from "@/assets/images/ficon.svg";
import featureTwo from "@/assets/images/person2.svg";
import featureThree from "@/assets/images/ficon3.svg";
import recordGraphic from "@/assets/images/record3.avif";
import cloudGraphic from "@/assets/images/bank4.avif";

const data = getSolutionBySlug("financial");

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

function SectionLabel({ children, className }) {
  return (
    <p
      className={cn(
        "text-[11px] font-semibold uppercase tracking-[0.32em] text-[#0A2540]",
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

function UseCaseCard({ title, description, image, eyebrow }) {
  return (
    <motion.article
      variants={fadeUp}
      className="group overflow-hidden rounded-[1.5rem] border border-[#E6ECF5] bg-white shadow-[0_14px_40px_rgba(10,37,64,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_20px_55px_rgba(10,37,64,0.08)]"
    >
      <div className="relative bg-[#F6F9FC] p-5">
        <div className="absolute inset-0 bg-gradient-to-br from-white via-transparent to-[#EEF4FF]" />
        <img
          src={image}
          alt={title}
          className="relative z-10 h-64 w-full object-contain transition-transform duration-500 group-hover:scale-[1.02]"
        />
      </div>
      <div className="p-6">
        <p className="text-[11px] font-semibold uppercase tracking-[0.22em] text-[#0A2540]">
          {eyebrow}
        </p>
        <h3 className="mt-3 text-[20px] font-semibold tracking-tight text-[#0A2540]">
          {title}
        </h3>
        <p className="mt-3 text-[15px] leading-[1.75] text-[#0A2540]">
          {description}
        </p>
      </div>
    </motion.article>
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

function SimpleFeature({ icon: Icon, title, body, asset }) {
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
      <div className="mt-5 grid gap-5 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
        <p className="text-[15px] leading-[1.75] text-[#0A2540]">{body}</p>
        <div className="overflow-hidden rounded-[1.25rem] border border-[#EEF2F7] bg-[#FAFBFC] p-4">
          <img src={asset} alt="" className="h-36 w-full object-contain" />
        </div>
      </div>
    </motion.article>
  );
}

export default function FinancialSolution() {
  const { hero, trustBar } = data;

  const useCases = [
    {
      eyebrow: "Commercial banks",
      title: "A steadier system for payments and operations.",
      description:
        "Keep customer work, internal operations, and payments flowing without the usual friction.",
      image: bankImage,
    },
    {
      eyebrow: "Fintech and neobanks",
      title: "Move from idea to launch without the usual headaches.",
      description:
        "Get to market faster with a platform that handles the complexity for you.",
      image: phoneOne,
    },
    {
      eyebrow: "Insurance and claims",
      title: "Make it easier to manage policies and claims.",
      description:
        "Keep information organized, reduce handoffs, and give customers a smoother experience.",
      image: phoneTwo,
    },
    {
      eyebrow: "Payment platforms",
      title: "Move money without extra friction.",
      description:
        "Keep transactions flowing, reduce handoffs, and give partners a smoother experience.",
      image: phoneThree,
    },
  ];

  return (
    <main className="bg-white font-sans text-[#0A2540] selection:bg-[#635BFF]/15">
      <section className="relative overflow-hidden bg-white pt-24 lg:pt-32">
        <div className="pointer-events-none absolute inset-0">
          <img
            src={hero.backgroundImage}
            alt=""
            className="h-full w-full object-cover opacity-[0.16]"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-white/70 via-white/90 to-white" />
          <div className="absolute right-[-10%] top-[12%] h-[28rem] w-[28rem] rounded-full bg-[#635BFF]/8 blur-[120px]" />
        </div>

        <div className="site-container relative z-10 pb-16 lg:pb-20">
          <div className="grid items-center gap-12 lg:grid-cols-[1fr_0.9fr] lg:gap-16">
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
                Finance that feels easier to run.
              </motion.h1>

              <motion.p
                variants={fadeUp}
                className="mt-6 max-w-xl text-[18px] leading-[1.8] text-[#0A2540] sm:text-[20px]"
              >
                Foundry helps financial teams keep payments, customer work,
                and daily operations moving without extra friction.
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
                  Built for security
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
                  <div className="ml-auto rounded-full bg-[#F6F9FC] px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-[#0A2540]">
                    Financial teams
                  </div>
                </div>
                <div className="grid gap-4 p-4 lg:grid-cols-2">
                  <div className="overflow-hidden rounded-[1.5rem] bg-[#F6F9FC] p-4">
                    <img
                      src={bankImage}
                      alt="Bank building"
                      className="aspect-[4/3] w-full rounded-[1.1rem] object-cover"
                    />
                  </div>
                  <div className="grid gap-4">
                    <div className="rounded-[1.5rem] border border-[#EEF2F7] bg-white p-5">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-[#0A2540]">
                        Clear view
                      </p>
                      <div className="mt-4 flex items-center gap-4">
                        <img
                          src={dashboardGraphic}
                          alt=""
                          className="h-20 w-20 object-contain"
                        />
                        <div>
                          <p className="text-[15px] font-semibold text-[#0A2540]">
                            One place to see activity
                          </p>
                          <p className="mt-1 text-[13px] leading-[1.6] text-[#0A2540]">
                            Keep track of payments, customer work, and daily
                            operations without juggling multiple systems.
                          </p>
                        </div>
                      </div>
                    </div>
                    <div className="rounded-[1.5rem] border border-[#EEF2F7] bg-[#0A2540] p-5 text-white">
                      <p className="text-[11px] font-semibold uppercase tracking-[0.24em] text-white/60">
                        Simple operations
                      </p>
                      <div className="mt-4 flex items-end justify-between gap-4">
                        <div>
                          <p className="text-[30px] font-semibold leading-none">
                            Easier
                          </p>
                          <p className="mt-2 text-[13px] text-white/70">
                            less back and forth for your team
                          </p>
                        </div>
                        <RiArrowRightLine className="h-8 w-8 text-[#9FB4FF]" />
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
                  src={featureOne}
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
                  src={featureTwo}
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

      <section className="bg-white py-24 lg:py-32">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>Use cases</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[34px] font-semibold tracking-tight text-[#0A2540] sm:text-[44px]"
            >
              Built for the whole institution
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-[17px] leading-[1.8] text-[#0A2540]"
            >
              Banks, fintechs, insurers, and payment companies all get a layout
              that feels tailored to how they work.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-12 grid gap-6 md:grid-cols-2"
          >
            {useCases.map((item) => (
              <UseCaseCard key={item.title} {...item} />
            ))}
          </motion.div>
        </div>
      </section>

      <section className="border-y border-[#E6ECF5] bg-[#F6F9FC] py-24 lg:py-32">
        <div className="site-container">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mx-auto max-w-3xl text-center"
          >
            <motion.div variants={fadeUp}>
              <SectionLabel>What teams get</SectionLabel>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              className="mt-4 text-[34px] font-semibold tracking-tight text-[#0A2540] sm:text-[44px]"
            >
              A calmer way to run day-to-day work
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-5 text-[17px] leading-[1.8] text-[#425466]"
            >
              Less juggling, fewer handoffs, and a clearer view of what is
              happening across the business.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, margin: "-80px" }}
            variants={stagger}
            className="mt-12 grid gap-6 lg:grid-cols-3"
          >
            <SimpleFeature
              icon={RiBankLine}
              title="Daily banking that feels easier"
              body="Give teams a setup that helps them move money, answer questions, and keep the day on track."
              asset={cloudGraphic}
            />
            <SimpleFeature
              icon={RiSmartphoneLine}
              title="A smoother experience for customers"
              body="Make it easier for people to use your products on mobile and web without the usual friction."
              asset={phoneOne}
            />
            <SimpleFeature
              icon={RiFileList3Line}
              title="Cleaner records and follow-up"
              body="Keep information tidy so your teams can find what they need and follow up faster."
              asset={recordGraphic}
            />
          </motion.div>
        </div>
      </section>
    </main>
  );
}
