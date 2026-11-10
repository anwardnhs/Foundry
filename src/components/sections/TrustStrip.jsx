import { useState } from "react"
import { RiArrowDownSLine } from "react-icons/ri"

const companies = [
  { id: "dangote", name: "Dangote", domain: "dangote.com" },
  { id: "mtn", name: "MTN", domain: "mtn.com" },
  { id: "flutterwave", name: "Flutterwave", domain: "flutterwave.com" },
  { id: "standardbank", name: "Standard Bank", domain: "standardbank.co.za" },
  { id: "safaricom", name: "Safaricom", domain: "safaricom.co.ke" },
  { id: "paystack", name: "Paystack", domain: "paystack.com" },
  { id: "moniepoint", name: "Moniepoint", domain: "moniepoint.com" },
  { id: "interswitch", name: "Interswitch", domain: "interswitchgroup.com" },
  { id: "accessbank", name: "Access Bank", domain: "accessbankplc.com" },
  { id: "kuda", name: "Kuda", domain: "kuda.com" },
  { id: "oando", name: "Oando", domain: "oandoplc.com" },
  { id: "jumia", name: "Jumia", domain: "jumia.com" },
  { id: "chipper", name: "Chipper Cash", domain: "chippercash.com" },
  { id: "opay", name: "OPay", domain: "opayweb.com" },
  { id: "piggyvest", name: "PiggyVest", domain: "piggyvest.com" },
  { id: "uba", name: "UBA", domain: "ubagroup.com" },
  { id: "gtco", name: "GTCO", domain: "gtcoplc.com" },
  { id: "stanbic", name: "Stanbic IBTC", domain: "stanbicibtc.com" },
  { id: "wema", name: "Wema Bank", domain: "wemabank.com" },
  { id: "paga", name: "Paga", domain: "paga.com" },
  // European & Global Additions
  { id: "spotify", name: "Spotify", domain: "spotify.com" },
  { id: "revolut", name: "Revolut", domain: "revolut.com" },
  { id: "klarna", name: "Klarna", domain: "klarna.com" },
  { id: "monzo", name: "Monzo", domain: "monzo.com" },
  { id: "adyen", name: "Adyen", domain: "adyen.com" },
  { id: "n26", name: "N26", domain: "n26.com" },
  { id: "sap", name: "SAP", domain: "sap.com" },
  { id: "deliveroo", name: "Deliveroo", domain: "deliveroo.co.uk" },

  // Remaining African Firms
  { id: "zenith", name: "Zenith Bank", domain: "zenithbank.com" },
  { id: "firstbank", name: "First Bank", domain: "firstbanknigeria.com" },
  { id: "airtel", name: "Airtel", domain: "airtel.com" },
  { id: "bua", name: "BUA Group", domain: "buagroup.com" },
  { id: "vodacom", name: "Vodacom", domain: "vodacom.com" },
  { id: "fawry", name: "Fawry", domain: "fawry.com" },
  { id: "yoco", name: "Yoco", domain: "yoco.com" },
  { id: "dstv", name: "DStv", domain: "dstv.com" },
  { id: "kcb", name: "KCB Group", domain: "kcbgroup.com" },
  { id: "remita", name: "Remita", domain: "remita.net" },
  { id: "vfd", name: "VFD Group", domain: "vfdgroup.com" },
  { id: "sterling", name: "Sterling Bank", domain: "sterling.ng" },
  { id: "fidelity", name: "Fidelity Bank", domain: "fidelitybank.ng" },
  { id: "mainone", name: "MainOne", domain: "mainone.net" },
  { id: "nmbbank", name: "NMB Bank", domain: "nmbbank.co.tz" },
]

const featuredCount = 6

function CompanyTile({ company }) {
  const [logoFailed, setLogoFailed] = useState(false)

  return (
    <li className="flex min-w-0 flex-col items-center justify-center gap-3 rounded-xl border border-rule bg-white px-3 py-5 text-center">
      <span className="grid h-12 w-12 shrink-0 place-items-center rounded-lg bg-surface" aria-hidden="true">
        {logoFailed ? (
          <span className="text-lg font-semibold text-accent">{company.name[0]}</span>
        ) : (
          <img
            src={`https://icon.horse/icon/${company.domain}`}
            alt=""
            width={32}
            height={32}
            loading="lazy"
            decoding="async"
            className="h-8 w-8 object-contain"
            onError={() => setLogoFailed(true)}
          />
        )}
      </span>
      <span className="text-sm font-semibold leading-snug text-navy">{company.name}</span>
    </li>
  )
}

export default function TrustStrip() {
  const [showAll, setShowAll] = useState(false)
  const visibleCompanies = showAll ? companies : companies.slice(0, featuredCount)

  return (
    <section className="border-y border-rule bg-surface py-12 sm:py-16" aria-labelledby="trusted-companies-title">
      <div className="site-container">
        <div className="mb-6 flex flex-wrap items-end justify-between gap-4 sm:mb-8">
          <h2 id="trusted-companies-title" className="max-w-xl text-balance text-2xl font-semibold tracking-tight text-navy sm:text-3xl">
            Trusted by teams across industries
          </h2>
          <button
            type="button"
            className="site-button site-button-outline"
            aria-expanded={showAll}
            aria-controls="trusted-companies"
            onClick={() => setShowAll((expanded) => !expanded)}
          >
            {showAll ? "Show featured companies" : "View all companies"}
            <RiArrowDownSLine className={showAll ? "h-5 w-5 rotate-180" : "h-5 w-5"} aria-hidden="true" />
          </button>
        </div>
        <ul id="trusted-companies" role="list" className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
          {visibleCompanies.map((company) => <CompanyTile key={company.id} company={company} />)}
        </ul>
      </div>
    </section>
  )
}
