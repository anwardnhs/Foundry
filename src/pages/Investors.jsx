import InvestorsHero from "@/components/investors/InvestorsHero";
import MetricsStrip from "@/components/investors/MetricsStrip";
import StockInfo from "@/components/investors/StockInfo";
import ShareholdingTable from "@/components/investors/ShareholdingTable";
import FinancialReports from "@/components/investors/FinancialReports";
import GovernanceSnapshot from "@/components/investors/GovernanceSnapshot";
import RegulatoryNote from "@/components/investors/RegulatoryNote";
import IRContact from "@/components/investors/IRContact";

export default function Investors() {
  return (
    <>
      <InvestorsHero />
      <MetricsStrip />
      <StockInfo />
      <ShareholdingTable />
      <FinancialReports />
      <GovernanceSnapshot />
      <RegulatoryNote />
      <IRContact />
    </>
  );
}
