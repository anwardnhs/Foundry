import { useEffect } from "react";

export default function Terms() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main className="bg-slate-50 min-h-screen py-24 lg:py-32">
      <div className="mx-auto max-w-3xl px-6 lg:px-8">
        <div className="bg-white p-8 md:p-12 rounded-2xl shadow-sm border border-[#E6ECF5]">
          <h1 className="text-3xl font-black text-[#0F172A] tracking-tight mb-2">Terms of Service</h1>
          <p className="text-slate-500 mb-8 pb-8 border-b border-[#E6ECF5]">Last updated: September 16, 2026</p>

          <div className="prose prose-slate max-w-none">
            <h2 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">1. Agreement to Terms</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              By accessing or using Foundry's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, then you do not have permission to access the Service.
            </p>

            <h2 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">2. Use License</h2>
            <p className="text-slate-600 mb-4 leading-relaxed">
              Permission is granted to temporarily download one copy of the materials (information or software) on Foundry's website for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc pl-6 text-slate-600 mb-6 space-y-2">
              <li>Modify or copy the materials;</li>
              <li>Use the materials for any commercial purpose, or for any public display;</li>
              <li>Attempt to decompile or reverse engineer any software contained on Foundry's website;</li>
              <li>Remove any copyright or other proprietary notations from the materials; or</li>
              <li>Transfer the materials to another person or "mirror" the materials on any other server.</li>
            </ul>

            <h2 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">3. Disclaimer</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              The materials on Foundry's website are provided on an 'as is' basis. Foundry makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.
            </p>

            <h2 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">4. Limitations</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              In no event shall Foundry or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on Foundry's website, even if Foundry or a Foundry authorized representative has been notified orally or in writing of the possibility of such damage.
            </p>

            <h2 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">5. Governing Law</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction in which Foundry operates, and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.
            </p>

            <h2 className="text-xl font-bold text-[#0F172A] mt-8 mb-4">6. Contact Us</h2>
            <p className="text-slate-600 mb-6 leading-relaxed">
              If you have any questions about these Terms, please contact us at <a href="mailto:legal@foundry.com" className="text-blue-600 hover:underline">legal@foundry.com</a>.
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}
