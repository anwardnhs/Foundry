import { useState } from "react";
import { Link } from "react-router-dom";
import { RiArrowLeftLine, RiEyeLine, RiEyeOffLine } from "react-icons/ri";
import loginIllustration from "@/assets/images/desk.svg";
import brandMark from "@/assets/images/logo2.svg";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <main id="main-content" tabIndex={-1} className="flex min-h-dvh items-center bg-surface py-8 focus:outline-none sm:py-12">
      <div className="site-container max-w-6xl">
        <div className="grid overflow-hidden rounded-2xl border border-rule bg-white shadow-xl shadow-slate-900/5 lg:grid-cols-2">
          <div className="p-5 sm:p-10 lg:p-12">
            <Link to="/" className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-navy hover:text-accent">
              <RiArrowLeftLine aria-hidden="true" /> Back to Foundry
            </Link>
            <img src={brandMark} alt="" className="mb-4 mt-6 h-9 w-auto" />
            <h1 className="text-3xl font-semibold tracking-tight text-navy sm:text-4xl">Log in to Foundry</h1>
            <p id="login-status" className="my-5 rounded-lg border border-blue-100 bg-blue-50 p-3 text-sm leading-relaxed text-navy">
              Account sign-in is currently unavailable on this site.
            </p>
            <form className="space-y-4" aria-describedby="login-status" onSubmit={(event) => event.preventDefault()}>
              <label className="grid gap-2 text-sm font-semibold text-navy">
                Email
                <input type="email" name="email" autoComplete="username" className="site-field" required />
              </label>
              <div>
                <label htmlFor="password" className="text-sm font-semibold text-navy">Password</label>
                <div className="relative mt-2">
                  <input id="password" type={showPassword ? "text" : "password"} name="password" autoComplete="current-password" className="site-field pr-12" required />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 grid w-11 place-items-center rounded-lg text-muted hover:text-accent"
                    aria-label={showPassword ? "Hide password" : "Show password"}
                    onClick={() => setShowPassword((visible) => !visible)}
                  >
                    {showPassword ? <RiEyeOffLine aria-hidden="true" /> : <RiEyeLine aria-hidden="true" />}
                  </button>
                </div>
              </div>
              <button type="submit" className="site-button w-full disabled:cursor-not-allowed disabled:bg-slate-200 disabled:text-slate-600" disabled>Log in</button>
            </form>
            <p className="mt-6 text-sm text-muted">
              Interested in Foundry? <Link to="/contact?topic=demo" className="font-semibold text-accent hover:underline">Request a demo</Link>
            </p>
          </div>
          <div className="hidden place-items-center border-l border-rule bg-gradient-to-br from-blue-50 to-surface p-10 lg:grid">
            <img src={loginIllustration} alt="" className="w-full max-w-md" />
          </div>
        </div>
      </div>
    </main>
  );
}
