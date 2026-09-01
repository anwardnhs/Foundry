import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

// ─── Data Import ──────────────────────────────────────────────────────────────
import { listings } from "@/data/investors";

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
  show: { transition: { staggerChildren: 0.15 } },
};

export default function StockInfo() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section
      className="bg-white py-24 lg:py-32 font-sans border-b border-rule"
      aria-label="Stock Information"
    >
      <div className="site-container max-w-5xl">
        {/* ── Section Header ── */}
        <div className="mb-12">
          <motion.div
            initial="hidden"
            animate={inView ? "show" : "hidden"}
            variants={fadeUp}
          >
            <h2 className="text-[28px] sm:text-[32px] font-medium text-[#0A2540] tracking-tight mb-4">
              Equities & Listings
            </h2>
            <p className="text-[16px] text-[#425466]">
              Foundry Plc is dual-listed, maintaining its primary listing on
              the Nigerian Exchange Group (NGX) and a standard listing on the
              London Stock Exchange (LSE).
            </p>
          </motion.div>
        </div>

        {/* ── Side-by-Side Shadcn Cards ── */}
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
        >
          {listings.map((listing) => (
            <motion.div key={listing.id} variants={fadeUp}>
              <Card className="shadow-none border-rule hover:border-accent/30 transition-colors duration-300">
                {/* Card Header */}
                <CardHeader className="bg-[#F6F9FC] border-b border-rule pb-6 rounded-t-xl">
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[24px]" aria-hidden="true">
                      {listing.flag}
                    </span>
                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-white border border-rule rounded-sm shadow-sm">
                      <span className="text-[11px] font-bold text-subtle uppercase tracking-widest">
                        {listing.prefix}
                      </span>
                      <span className="font-mono text-[13px] font-bold text-[#0A2540] tracking-wide">
                        {listing.ticker}
                      </span>
                    </div>
                  </div>
                  <CardTitle className="text-[20px] font-medium text-[#0A2540] tracking-tight">
                    {listing.exchange}
                  </CardTitle>
                  <p className="text-[12px] text-subtle font-medium mt-2">
                    Data as of {listing.asOf}
                  </p>
                </CardHeader>

                {/* Card Content (Data Rows) */}
                <CardContent className="p-0">
                  <ul className="flex flex-col divide-y divide-rule">
                    {/* Share Price */}
                    <li className="flex items-center justify-between px-6 py-4">
                      <span className="text-[14px] text-[#425466] font-medium">
                        Closing Price
                      </span>
                      <div className="text-right">
                        <div className="font-mono text-[15px] font-bold text-[#0A2540]">
                          {listing.closingPrice}
                        </div>
                        {listing.closingPriceUSD !== "—" && (
                          <div className="font-mono text-[12px] text-subtle mt-0.5">
                            {listing.closingPriceUSD}
                          </div>
                        )}
                      </div>
                    </li>

                    {/* Shares in Issue */}
                    <li className="flex items-center justify-between px-6 py-4">
                      <span className="text-[14px] text-[#425466] font-medium">
                        Shares in Issue
                      </span>
                      <span className="font-mono text-[14px] font-medium text-[#0A2540]">
                        {listing.sharesInIssue}
                      </span>
                    </li>

                    {/* Dividend Yield */}
                    <li className="flex items-center justify-between px-6 py-4">
                      <span className="text-[14px] text-[#425466] font-medium">
                        Dividend Yield
                      </span>
                      <span className="font-mono text-[14px] font-medium text-[#0A2540]">
                        {listing.dividendYield}
                      </span>
                    </li>

                    {/* Par Value */}
                    <li className="flex items-center justify-between px-6 py-4">
                      <span className="text-[14px] text-[#425466] font-medium">
                        Par Value
                      </span>
                      <span className="font-mono text-[14px] font-medium text-[#0A2540]">
                        {listing.parValue}
                      </span>
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
