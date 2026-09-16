import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Link } from "react-router-dom"
import { X } from "lucide-react"

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    // Check if user has already accepted or declined
    const cookieConsent = localStorage.getItem("foundry_cookie_consent")
    if (!cookieConsent) {
      // Delay showing the banner slightly for better UX
      const timer = setTimeout(() => {
        setIsVisible(true)
      }, 1500)
      return () => clearTimeout(timer)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("foundry_cookie_consent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("foundry_cookie_consent", "declined")
    setIsVisible(false)
  }

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 30 }}
          className="fixed bottom-4 left-4 right-4 z-[100] md:bottom-8 md:left-auto md:right-8 md:max-w-sm"
        >
          <div className="relative overflow-hidden rounded-xl border border-[#E6ECF5] bg-white p-6 shadow-2xl">
            {/* Close Button */}
            <button
              onClick={handleDecline}
              className="absolute right-4 top-4 text-slate-400 hover:text-slate-600 transition-colors"
              aria-label="Close"
            >
              <X size={18} />
            </button>

            <h3 className="text-lg font-bold text-[#0F172A] mb-2">
              We value your privacy
            </h3>
            
            <p className="text-sm text-slate-500 mb-6 leading-relaxed">
              We use cookies to enhance your browsing experience, serve personalized ads or content, and analyze our traffic. By clicking "Accept All", you consent to our use of cookies. Read our{" "}
              <Link to="/privacy" className="text-blue-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>

            <div className="flex flex-col gap-3 sm:flex-row">
              <button
                onClick={handleAccept}
                className="w-full rounded-md bg-[#0F172A] px-4 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#1E293B] transition-colors"
              >
                Accept All
              </button>
              <button
                onClick={handleDecline}
                className="w-full rounded-md border border-[#E6ECF5] bg-white px-4 py-2.5 text-sm font-semibold text-[#0F172A] shadow-sm hover:bg-slate-50 transition-colors"
              >
                Reject All
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}
