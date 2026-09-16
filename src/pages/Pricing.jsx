import { useState } from "react";
import PricingHero from "@/components/pricing/PricingHero";
import UnifiedPricing from "@/components/pricing/UnifiedPricing";
import DivisionPricing from "@/components/pricing/DivisionPricing";
import FeatureTable from "@/components/pricing/FeatureTable";
import PricingFAQ from "@/components/pricing/PricingFAQ";
import EnterpriseCallout from "@/components/pricing/EnterpriseCallout";

export default function Pricing() {
  const [isAnnual, setIsAnnual] = useState(false);

  return (
    <main>
      <PricingHero isAnnual={isAnnual} setIsAnnual={setIsAnnual} />
      <UnifiedPricing isAnnual={isAnnual} />
      <DivisionPricing isAnnual={isAnnual} />
      <FeatureTable />
      <PricingFAQ />
      <EnterpriseCallout />
    </main>
  );
}
