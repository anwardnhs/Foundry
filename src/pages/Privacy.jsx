import { useEffect } from "react";

export default function Privacy() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-slate-50 min-h-screen py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#E6ECF5]">
          <h1 className="text-3xl font-black text-[#0F172A] tracking-tight mb-2">Privacy Policy</h1>
          <p className="text-slate-500 mb-8 pb-8 border-b border-[#E6ECF5]">Last updated: September 16, 2026</p>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">1. Introduction</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              At Foundry ("we," "our," or "us"), we are committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by Foundry.
            </p>

            <h2 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">2. Information We Collect</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              We collect information from you when you visit our website, register for an account, make a purchase, or contact our support team. The types of personal information collected may include:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>Name and contact data</li>
              <li>Credentials and security information</li>
              <li>Payment data</li>
              <li>Device and usage data</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">3. How We Use Your Information</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              Any of the information we collect from you may be used to personalize your experience, improve our website, improve customer service, process transactions, or send periodic emails regarding your order or other products and services.
            </p>

            <h2 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">4. Cookies and Tracking Technologies</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We use cookies and similar tracking technologies to track the activity on our Service and hold certain information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent.
            </p>

            <h2 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">5. Third-Party Services</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, or to assist us in analyzing how our Service is used. These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </p>

            <h2 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">6. Contact Us</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              If you have any questions about this Privacy Policy, please contact us at <a href="mailto:privacy@foundry.com" className="text-blue-600 hover:underline">privacy@foundry.com</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
