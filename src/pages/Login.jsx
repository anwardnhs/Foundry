import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  RiArrowLeftLine,
  RiArrowRightLine,
  RiBuilding2Line,
  RiEyeLine,
  RiEyeOffLine,
  RiStackFill,
} from "react-icons/ri";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import loginIllustration from "@/assets/images/desk.svg";
import brandLogo from "@/assets/images/logo.svg";

const pageVariants = {
  hidden: {},
  show: { transition: { staggerChildren: 0.08, delayChildren: 0.06 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 18 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.65, ease: [0.16, 1, 0.3, 1] },
  },
};

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main
      className="min-h-screen bg-mist font-[Poppins]"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="relative isolate min-h-screen overflow-hidden bg-[radial-gradient(circle_at_top_left,rgba(0,74,221,0.12),transparent_30%),radial-gradient(circle_at_90%_20%,rgba(10,37,64,0.16),transparent_28%),linear-gradient(180deg,#F5F5F7_0%,#FFFFFF_100%)]">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,37,64,0.04)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,37,64,0.04)_1px,transparent_1px)] bg-[size:72px_72px] opacity-20 pointer-events-none" />
        <div className="absolute -top-24 right-[-4rem] h-72 w-72 rounded-full bg-white/60 blur-3xl pointer-events-none" />
        <div className="absolute bottom-[-5rem] left-[-5rem] h-80 w-80 rounded-full bg-accent/10 blur-3xl pointer-events-none" />

        <div className="site-container relative z-10 flex min-h-screen items-start py-3 sm:py-4 lg:py-5">
          <motion.div
            variants={pageVariants}
            initial="hidden"
            animate="show"
            className="w-full max-w-5xl mx-auto pt-1"
          >
            <motion.section
              variants={fadeUp}
              className="overflow-hidden rounded-[28px] border border-rule bg-white shadow-[0_24px_55px_rgba(10,37,64,0.10)]"
            >
              <div className="grid lg:min-h-[620px] lg:grid-cols-2">
                <div className="bg-white px-4 py-6 sm:px-6 sm:py-8 lg:px-8 lg:py-8">
                  <div className="mx-auto flex h-full max-w-[360px] flex-col justify-start pt-2">
                    <div className="space-y-4">
                      <div className="flex items-center gap-3">
                        <Link
                          to="/"
                          aria-label="Back to home"
                          className="group"
                        >
                          <span className="flex h-8 w-8 items-center justify-center rounded-full border border-rule bg-[#F6F9FC] text-[#0A2540] transition-colors group-hover:border-accent group-hover:text-accent">
                            <RiArrowLeftLine className="h-3.5 w-3.5" />
                          </span>
                        </Link>
                      </div>

                      <motion.div variants={fadeUp} className="max-w-md pt-1">
                        <h1 className="text-[26px] font-semibold tracking-tight text-[#0A2540] sm:text-[30px]">
                          Log in to your account
                        </h1>
                        <p className="mt-2 text-[13px] leading-[1.6] text-subtle">
                          Enter your credentials to access your account and
                          manage your services.
                        </p>
                      </motion.div>

                      <motion.form
                        variants={fadeUp}
                        className="mt-5 space-y-3"
                        onSubmit={(e) => e.preventDefault()}
                      >
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0A2540]"
                          >
                            Email
                          </label>
                          <Input
                            id="email"
                            type="email"
                            placeholder="sellostore@company.com"
                            className="h-10 rounded-2xl border-rule bg-white px-4 text-[13px] text-[#0A2540] placeholder:text-subtle/70 shadow-none transition-all focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20"
                            required
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="password"
                            className="text-[10px] font-semibold uppercase tracking-[0.16em] text-[#0A2540]"
                          >
                            Password
                          </label>
                          <div className="relative">
                            <Input
                              id="password"
                              type={showPassword ? "text" : "password"}
                              placeholder="."
                              className="h-10 rounded-2xl border-rule bg-white px-4 pr-10 text-[13px] text-[#0A2540] placeholder:text-subtle/70 shadow-none transition-all focus-visible:border-accent focus-visible:ring-2 focus-visible:ring-accent/20"
                              required
                            />
                            <button
                              type="button"
                              onClick={() => setShowPassword((value) => !value)}
                              className="absolute right-0 top-0 flex h-10 w-10 items-center justify-center text-subtle transition-colors hover:text-[#0A2540]"
                              aria-label={
                                showPassword ? "Hide password" : "Show password"
                              }
                            >
                              {showPassword ? (
                                <RiEyeOffLine className="h-4 w-4" />
                              ) : (
                                <RiEyeLine className="h-4 w-4" />
                              )}
                            </button>
                          </div>
                        </div>

                        <div className="flex items-center justify-between gap-3">
                          <div className="flex items-center gap-2">
                            <Checkbox
                              id="remember"
                              className="h-4 w-4 rounded-[6px] border-rule data-[state=checked]:border-accent data-[state=checked]:bg-accent"
                            />
                            <label
                              htmlFor="remember"
                              className="cursor-pointer select-none text-[11px] text-subtle"
                            >
                              Remember me
                            </label>
                          </div>
                          <Link
                            to="/forgot-password"
                            className="text-[11px] font-semibold text-[#0A2540] transition-colors hover:text-[#003db3]"
                          >
                            Forgot password?
                          </Link>
                        </div>

                        <Button
                          type="submit"
                          className="h-10 w-full rounded-none bg-[#0A2540] text-[13px] font-semibold text-white shadow-[0_12px_30px_rgba(65,83,255,0.25)] transition-all hover:bg-[#3346f5] hover:shadow-[0_16px_36px_rgba(65,83,255,0.28)]"
                        >
                          Log In
                        </Button>

                        <div className="relative flex items-center py-0">
                          <div className="h-px flex-1 bg-rule" />
                          <span className="px-3 text-[10px] text-subtle">
                            Or login with
                          </span>
                          <div className="h-px flex-1 bg-rule" />
                        </div>

                        <div className="flex justify-center">
                          <img
                            src={brandLogo}
                            alt="Foundry"
                            className="h-8 w-auto object-contain"
                          />
                        </div>

                        <Button
                          type="button"
                          variant="outline"
                          className="h-10 w-full rounded-2xl border-rule bg-[#F6F9FC] text-[13px] font-semibold text-[#0A2540] shadow-none transition-all hover:bg-mist"
                        >
                          <RiBuilding2Line className="mr-2 h-4 w-4 text-accent" />
                          Continue with SSO
                        </Button>
                      </motion.form>

                      <motion.div
                        variants={fadeUp}
                        className="pt-2 text-center text-[11px] text-subtle"
                      >
                        Don&apos;t have an account?{" "}
                        <Link
                          to="/contact"
                          className="font-semibold text-[#0A2540] transition-colors hover:text-[#003db3]"
                        >
                          Sign up
                        </Link>
                      </motion.div>
                    </div>
                  </div>
                </div>

                <div className="relative min-h-[420px] overflow-hidden bg-[#F6F9FC] px-5 py-6 sm:px-8 sm:py-8 lg:px-10 lg:py-10">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(0,74,221,0.10),transparent_28%),radial-gradient(circle_at_bottom_left,rgba(10,37,64,0.06),transparent_30%),linear-gradient(135deg,#F6F9FC,#EEF4FF)]" />
                  <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(10,37,64,0.05)_1px,transparent_1px),linear-gradient(to_bottom,rgba(10,37,64,0.05)_1px,transparent_1px)] bg-[size:84px_84px] opacity-25" />
                  <div className="relative z-10 flex h-full items-center justify-center">
                    <img
                      src={loginIllustration}
                      alt="Login illustration"
                      className="w-full max-w-[480px] h-auto object-contain drop-shadow-[0_20px_35px_rgba(10,37,64,0.14)]"
                    />
                  </div>
                </div>
              </div>
            </motion.section>
          </motion.div>
        </div>
      </div>
    </main>
  );
}
