import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { RiPieChart2Line } from "react-icons/ri";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { cn } from "@/lib/utils";

// ─── Data Import ──────────────────────────────────────────────────────────────
import { shareholders } from "@/data/investors";

// ─── Animation Variants ───────────────────────────────────────────────────────
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
  },
};

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.15 } },
};

export default function ShareholdingTable() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-100px" });

  // Split data based on the 'hidden' flag
  const visibleHolders = shareholders.filter((s) => !s.hidden);
  const hiddenHolders = shareholders.filter((s) => s.hidden);

  return (
    <section
      className="bg-white py-24 lg:py-32 font-sans border-b border-rule relative overflow-hidden"
      aria-label="Shareholding Structure"
    >
      {/* Subtle Background Structural Accent */}
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#F6F9FC]/50 -skew-x-12 translate-x-1/4 pointer-events-none z-0" />

      <div className="site-container relative z-10">
        <motion.div
          ref={ref}
          initial="hidden"
          animate={inView ? "show" : "hidden"}
          variants={container}
          className="flex flex-col lg:flex-row gap-16 lg:gap-24 items-start"
        >
          {/* ── LEFT: Sticky Editorial Section ── */}
          <div className="w-full lg:w-[35%] lg:sticky lg:top-40 shrink-0">
            <motion.div variants={fadeUp}>
              {/* System Eyebrow */}
              <div className="mb-6 flex items-center gap-3">
                <div className="w-8 h-px bg-[#0A2540]" />
                <span className="font-mono text-[11px] font-bold uppercase tracking-[0.2em] text-[#0A2540] flex items-center gap-2">
                  Shareholding
                </span>
              </div>

              <h2 className="text-[36px] sm:text-[44px] font-medium text-[#0A2540] leading-[1.1] tracking-tight mb-6">
                Shareholding <br /> Structure.
              </h2>

              <p className="text-[16px] text-[#425466] leading-[1.6]">
                Foundry Plc maintains a highly structured, diverse
                shareholder base comprising our founding entities, tier-1
                domestic institutions, and global asset managers.
              </p>
              <p className="text-[14px] font-medium text-subtle leading-[1.6] mt-6 px-4 py-3 bg-[#F6F9FC] border border-rule rounded-lg">
                All shareholdings of 5% or greater are fully disclosed in strict
                accordance with NGX and LSE listing requirements.
              </p>
            </motion.div>
          </div>

          {/* ── RIGHT: Premium UI Data Table ── */}
          <motion.div variants={fadeUp} className="w-full lg:w-[65%]">
            <div className="bg-white border border-rule rounded-2xl shadow-[0_20px_40px_rgba(10,37,64,0.04)] overflow-hidden">
              {/* Main Table (Top 6) */}
              <Table>
                <TableHeader className="bg-[#0A2540]">
                  <TableRow className="hover:bg-[#0A2540] border-none">
                    <TableHead className="w-[50%] h-14 font-mono text-[11px] font-bold text-white uppercase tracking-widest px-6">
                      Entity / Shareholder
                    </TableHead>
                    <TableHead className="w-[35%] h-14 font-mono text-[11px] font-bold text-white/70 uppercase tracking-widest px-6 hidden sm:table-cell">
                      Classification
                    </TableHead>
                    <TableHead className="w-[15%] h-14 font-mono text-[11px] font-bold text-white uppercase tracking-widest text-right px-6">
                      Stake
                    </TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {visibleHolders.map((holder, index) => (
                    <TableRow
                      key={index}
                      className="border-rule hover:bg-[#F6F9FC] transition-colors group cursor-default"
                    >
                      <TableCell className="px-6 py-5">
                        <div className="font-bold text-[#0A2540] text-[15px] group-hover:text-accent transition-colors">
                          {holder.name}
                        </div>
                        {holder.note ? (
                          <div className="text-[12px] text-subtle font-medium mt-1">
                            {holder.note}
                          </div>
                        ) : (
                          <div className="text-[12px] text-subtle font-medium mt-1 sm:hidden">
                            {holder.classification}
                          </div>
                        )}
                      </TableCell>
                      <TableCell className="px-6 py-5 text-[14px] text-[#425466] font-medium hidden sm:table-cell">
                        {holder.classification}
                      </TableCell>
                      <TableCell className="px-6 py-5 text-right font-mono text-[15px] font-bold text-[#0A2540]">
                        {holder.percent}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>

              {/* Seamless Accordion for Remaining Shareholders */}
              {hiddenHolders.length > 0 && (
                <Accordion type="single" collapsible className="w-full">
                  <AccordionItem value="full-structure" className="border-none">
                    {/* Trigger Button (Styled like a premium table row) */}
                    <AccordionTrigger
                      className={cn(
                        "w-full px-6 py-5 flex items-center justify-between",
                        "text-[12px] font-bold text-[#0A2540] uppercase tracking-widest",
                        "hover:no-underline hover:bg-[#F6F9FC] transition-colors border-t border-rule",
                      )}
                    >
                      <span>View Full Cap Table</span>
                    </AccordionTrigger>

                    {/* Hidden Content */}
                    <AccordionContent className="pb-0">
                      <Table>
                        <TableBody>
                          {hiddenHolders.map((holder, index) => (
                            <TableRow
                              key={index}
                              className={cn(
                                "border-rule hover:bg-[#F6F9FC] transition-colors group cursor-default bg-white",
                                index === 0 ? "border-t" : "",
                                index === hiddenHolders.length - 1
                                  ? "border-b-0"
                                  : "",
                              )}
                            >
                              <TableCell className="w-[50%] px-6 py-5">
                                <div className="font-bold text-[#0A2540] text-[15px] group-hover:text-accent transition-colors">
                                  {holder.name}
                                </div>
                                {holder.note ? (
                                  <div className="text-[12px] text-subtle font-medium mt-1">
                                    {holder.note}
                                  </div>
                                ) : (
                                  <div className="text-[12px] text-subtle font-medium mt-1 sm:hidden">
                                    {holder.classification}
                                  </div>
                                )}
                              </TableCell>
                              <TableCell className="w-[35%] px-6 py-5 text-[14px] text-[#425466] font-medium hidden sm:table-cell">
                                {holder.classification}
                              </TableCell>
                              <TableCell className="w-[15%] px-6 py-5 text-right font-mono text-[15px] font-bold text-[#0A2540]">
                                {holder.percent}
                              </TableCell>
                            </TableRow>
                          ))}
                        </TableBody>
                      </Table>
                    </AccordionContent>
                  </AccordionItem>
                </Accordion>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
