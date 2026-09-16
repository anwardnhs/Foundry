import { useRef, useState, useEffect } from "react"
import { motion, useInView } from "framer-motion"

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
]

export default function TrustStrip() {
  const ref = useRef(null)
  const carouselRef = useRef(null)
  const [width, setWidth] = useState(0)
  const inView = useInView(ref, { once: true, margin: "-50px" })
  
  // Duplicate array to ensure it overflows enough to drag satisfyingly
  const items = [...companies, ...companies]

  useEffect(() => {
    if (carouselRef.current) {
      setWidth(carouselRef.current.scrollWidth - carouselRef.current.offsetWidth)
    }
  }, [])

  return (
    <section className="border-y border-[#E6ECF5] bg-white py-14 lg:py-20" aria-label="Trusted Companies">
      <div className="site-container" ref={ref}>
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[13px] font-bold uppercase tracking-[0.2em] text-indigo-600 mb-8">
            Trusted by teams that want software to feel steady, simple, and easy to run
          </p>
        </div>

        <div className="relative mt-10 overflow-hidden">
          <div className="pointer-events-none absolute inset-y-0 left-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-40" />
          <div className="pointer-events-none absolute inset-y-0 right-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-40" />

          {/* Draggable Area */}
          <motion.div 
            ref={carouselRef}
            className="overflow-hidden cursor-grab active:cursor-grabbing"
          >
            <motion.div
              drag="x"
              dragConstraints={{ right: 0, left: -width }}
              dragElastic={0.1}
              dragTransition={{ bounceStiffness: 600, bounceDamping: 20 }}
              className="flex w-max items-center gap-12 sm:gap-16 lg:gap-24 py-4 px-12"
            >
              {items.map((company, index) => (
                <div
                  key={`${company.id}-${index}`}
                  className="flex shrink-0 items-center justify-center pointer-events-none"
                  aria-hidden={index >= companies.length}
                >
                  <img 
                    src={`https://logo.uplead.com/${company.domain}`} 
                    alt={`${company.name} logo`} 
                    className="h-16 sm:h-20 w-auto object-contain rounded-sm"
                    onError={(e) => { 
                      e.target.onerror = null; 
                      e.target.src = `https://icon.horse/icon/${company.domain}`;
                    }}
                    title={company.name}
                  />
                </div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
