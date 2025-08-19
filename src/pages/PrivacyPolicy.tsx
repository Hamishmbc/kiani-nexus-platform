import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navigation from "@/components/Navigation";
import { useNavigate } from "react-router-dom";

const PrivacyPolicy = () => {
  const navigate = useNavigate();

  return (
    <>
      <Navigation />
      <div className="min-h-screen bg-background py-16 px-4 pt-24">
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
          <h1 className="text-4xl md:text-5xl font-bold text-primary mb-6">Privacy Policy</h1>
        </div>

        <div className="prose prose-lg max-w-none text-foreground/90 space-y-6">
          <p>
            This Privacy Policy explains how we collect, use, and protect your personal data in compliance with the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. We are committed to protecting your privacy and handling your data transparently and securely.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">1. Who We Are</h2>
          <p>
            We are sumlii LLP, trading as Sean Kiani and Inheritance Made Simple, a UK-based financial adviser regulated by the Financial Conduct Authority (FCA) under reference number SXK00953 (for Sean Kiani).
          </p>
          <p>
            Our registered address is: Harbro House, Crown Lane, Denbigh, Denbighshire, United Kingdom, LL16 3SY.
          </p>
          <p>
            For data protection inquiries, contact our Data Protection Officer (or responsible person) at:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Email: info@seankiani.co.uk</li>
            <li>Phone: 01202 237367</li>
            <li>Postal Address: 9, The Old Coach House, Clement mews, Bournemouth, BH48AU</li>
          </ul>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">2. Personal Data We Collect</h2>
          <p>
            We may collect the following types of personal data:
          </p>
          <ul className="list-disc pl-6">
            <li>Basic information: Name, email, telephone number.</li>
          </ul>
          <p>
            We do not collect financial or sensitive data through the website.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">3. How We Collect Your Data</h2>
          <p>We collect data:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Directly from you: Via contact forms on our website seankiani.co.uk.</li>
            <li>Automatically: Through cookies (see Cookies section below).</li>
          </ul>
          <p>We do not collect data from third parties.</p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">4. Purposes and Legal Basis for Processing</h2>
          <p>We process your data for the following purposes:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>To provide financial advice and estate planning services: Legal basis – Performance of a contract.</li>
            <li>To respond to inquiries and communicate: Legal basis – Legitimate interests (to manage our business).</li>
            <li>To comply with legal obligations: Legal basis – Legal obligation (e.g., anti-money laundering checks, FCA reporting).</li>
          </ul>
          <p>We only process data where we have a valid legal basis under UK GDPR.</p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">5. Sharing Your Data</h2>
          <p>
            We do not share your data with third parties without your explicit consent. We may share with regulatory bodies (e.g., FCA, HMRC, or law enforcement) where required by law.
          </p>
          <p>
            We ensure all third parties comply with UK GDPR and use contracts to protect your data.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">6. International Data Transfers</h2>
          <p>
            We store data on UK servers only. Although our website may serve users outside the UK, we do not transfer data outside the UK.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">7. Data Security</h2>
          <p>We implement appropriate security measures, including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Encryption of sensitive data.</li>
            <li>Access controls and firewalls.</li>
            <li>Regular security reviews.</li>
          </ul>
          <p>
            Despite these measures, no system is completely secure, but we strive to protect your data.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">8. Data Retention</h2>
          <p>We retain data only as long as necessary:</p>
          <ul className="list-disc pl-6">
            <li>Inquiry data: 1 year after resolution.</li>
          </ul>
          <p>Data is securely deleted or anonymized when no longer needed.</p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">9. Your Rights</h2>
          <p>Under UK GDPR, you have rights including:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access: Request a copy of your data.</li>
            <li>Rectification: Correct inaccurate data.</li>
            <li>Erasure: Request deletion in certain cases.</li>
            <li>Objection: Object to processing based on legitimate interests.</li>
            <li>Restriction: Restrict processing in certain situations.</li>
            <li>Portability: Receive your data in a transferable format.</li>
            <li>Withdraw consent: Where processing is based on consent.</li>
          </ul>
          <p>
            To exercise these rights, contact us at info@seankiani.co.uk. We respond within one month. You can also complain to the Information Commissioner's Office (ICO) at www.ico.org.uk.
          </p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">10. Cookies and Similar Technologies</h2>
          <p>
            Our website uses cookies for essential functionality and to improve user experience.
          </p>
          <ul className="list-disc pl-6">
            <li>Essential cookies: Required for site operation.</li>
          </ul>
          <p>You can manage cookies via your browser settings.</p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">11. Automated Decision-Making</h2>
          <p>We do not use automated decision-making or profiling.</p>

          <h2 className="text-2xl font-semibold text-primary mt-8 mb-4">12. Changes to This Policy</h2>
          <p>
            We may update this policy. Changes will be posted here with the updated date. Check back periodically.
          </p>
          <p className="font-semibold">This policy is effective from 20th August 2025.</p>
        </div>
      </div>
    </div>
    </>
  );
};

export default PrivacyPolicy;