import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const TermsConditions = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-background py-16 px-4">
      <div className="container mx-auto max-w-4xl">
        <div className="mb-8">
          <Button
            variant="ghost"
            onClick={() => navigate("/")}
            className="mb-6 text-primary hover:text-primary/80"
          >
            <ArrowLeft className="h-4 w-4 mr-2" />
            Back to Home
          </Button>
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Terms and Conditions</h1>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
          <p>
            This Terms and Conditions explains the rules for using our website seankiani.co.uk (the "Website"). By accessing or using the Website, you agree to these terms. If you do not agree, please do not use the Website. We are committed to providing accurate information, but the content is for general purposes only.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Who We Are</h2>
          <p>
            We are sumlii LLP, trading as Sean Kiani and Inheritance Made Simple, a UK-based financial adviser regulated by the Financial Conduct Authority (FCA) under reference number SXK00953 (for Sean Kiani).
          </p>
          <p>
            Our registered address is: Harbro House, Crown Lane, Denbigh, Denbighshire, United Kingdom, LL16 3SY.
          </p>
          <p>
            For inquiries, contact us at:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email: info@seankiani.co.uk</li>
            <li>Phone: 01202 237367</li>
            <li>Postal Address: 9, The Old Coach House, Clement Mews, Bournemouth, BH4 8AU</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Use of the Website</h2>
          <p>
            You may use the Website for lawful purposes only. You must not:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the Website in any way that breaches any applicable local, national, or international law.</li>
            <li>Copy, modify, or distribute any part of the Website without our written permission.</li>
            <li>Use the Website for commercial purposes without our consent.</li>
            <li>Attempt to interfere with the Website's security or functionality.</li>
          </ul>
          <p>
            We reserve the right to suspend or terminate access to the Website at any time.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. Intellectual Property</h2>
          <p>
            All content on the Website, including text, graphics, logos, and images, is owned by us or our licensors and is protected by copyright, trademark, and other intellectual property laws. You may view and print content for personal, non-commercial use, but you must not reproduce or exploit it without permission.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Disclaimers</h2>
          <p>
            The information on this Website is provided for general information purposes only and does not constitute financial, investment, tax, legal, or other professional advice. You should not rely on it as such and should seek independent professional advice tailored to your specific circumstances before making any decisions.
          </p>
          <p>
            We make no representations or warranties about the accuracy, completeness, or suitability of the information on the Website. The Website is provided "as is" without any warranties, express or implied.
          </p>
          <p>
            Investing and financial planning involve risks, including the possible loss of capital. Past performance is not indicative of future results.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Limitations of Liability</h2>
          <p>
            To the fullest extent permitted by law, we shall not be liable for any indirect, incidental, special, or consequential damages arising from your use of the Website, including but not limited to loss of profits, data, or goodwill.
          </p>
          <p>
            Nothing in these terms excludes or limits our liability for death or personal injury caused by negligence, fraud, or any other liability that cannot be excluded under UK law.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. Links to Third-Party Websites</h2>
          <p>
            The Website may contain links to third-party websites. These links are provided for your convenience only. We do not endorse or control these sites and are not responsible for their content, privacy practices, or any losses incurred from using them.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Privacy</h2>
          <p>
            Your use of the Website is also governed by our Privacy Policy, which explains how we handle your personal data.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Governing Law</h2>
          <p>
            These terms are governed by the laws of England and Wales. Any disputes arising from these terms or your use of the Website shall be subject to the exclusive jurisdiction of the courts of England and Wales.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">9. Changes to These Terms</h2>
          <p>
            We may update these terms from time to time. Changes will be posted on this page with the updated date. Your continued use of the Website after changes constitutes acceptance of the new terms.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">10. Contact Us</h2>
          <p>
            If you have any questions about these terms, please contact us using the details in Section 1.
          </p>

          <p className="font-semibold">These terms are effective from 20th August 2025.</p>
        </div>
      </div>
    </div>
  );
};

export default TermsConditions;