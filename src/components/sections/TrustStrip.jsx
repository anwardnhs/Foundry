import { useRef, useState, useEffect } from "react"
import { motion, useAnimationFrame, useMotionValue } from "framer-motion"

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
  // 20 New Companies
  { id: "zenith", name: "Zenith Bank", domain: "zenithbank.com" },
  { id: "firstbank", name: "First Bank", domain: "firstbanknigeria.com" },
  { id: "airtel", name: "Airtel", domain: "airtel.com" },
  { id: "bua", name: "BUA Group", domain: "buagroup.com" },
  { id: "seplat", name: "Seplat Energy", domain: "seplatenergy.com" },
  { id: "vodacom", name: "Vodacom", domain: "vodacom.com" },
  { id: "cellulant", name: "Cellulant", domain: "cellulant.io" },
  { id: "fawry", name: "Fawry", domain: "fawry.com" },
  { id: "yoco", name: "Yoco", domain: "yoco.com" },
  { id: "dstv", name: "DStv", domain: "dstv.com" },
  { id: "equity", name: "Equity Bank", domain: "equitygroupholdings.com" },
  { id: "kcb", name: "KCB Group", domain: "kcbgroup.com" },
  { id: "remita", name: "Remita", domain: "remita.net" },
  { id: "vfd", name: "VFD Group", domain: "vfdgroup.com" },
  { id: "sterling", name: "Sterling Bank", domain: "sterling.ng" },
  { id: "fidelity", name: "Fidelity Bank", domain: "fidelitybank.ng" },
  { id: "mainone", name: "MainOne", domain: "mainone.net" },
  { id: "paymob", name: "Paymob", domain: "paymob.com" },
  { id: "tymebank", name: "TymeBank", domain: "tymebank.co.za" },
  { id: "nmbbank", name: "NMB Bank", domain: "nmbbank.co.tz" },
]

export default function TrustStrip() {
  const ref = useRef(null)
  const carouselRef = useRef(null)
  const [width, setWidth] = useState(0)
  const [isDragging, setIsDragging] = useState(false)
  const x = useMotionValue(0)
  
  // Duplicate array 3 times so we have enough content to wrap seamlessly
  const items = [...companies, ...companies, ...companies]

  useEffect(() => {
    if (carouselRef.current) {
      // The total width is 3 copies. We want the width of ONE copy.
      const singleWidth = carouselRef.current.scrollWidth / 3
      setWidth(singleWidth)
      // Start in the middle copy so dragging right doesn't immediately hit whitespace
      x.set(-singleWidth)
    }
  }, [])

  useAnimationFrame((time, delta) => {
    if (!isDragging && width > 0) {
      const moveBy = (delta / 1000) * -60 // pixels per second
      let newX = x.get() + moveBy
      
      // Seamless infinite loop wrapping
      while (newX <= -(width * 2)) {
        newX += width
      }
      while (newX > -width) {
        newX -= width
      }
      
      x.set(newX)
    }
  })

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
              style={{ x }}
              onDragStart={() => setIsDragging(true)}
              onDragEnd={() => setIsDragging(false)}
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
