import type { Metadata } from "next";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export const metadata: Metadata = {
  title: "Privacy Policy | firedrop",
  description: "Read firedrop's privacy policy to understand how we collect, use, and protect your personal information. Learn about our commitment to data security and privacy.",
  openGraph: {
    title: "Privacy Policy | firedrop",
    description: "Read firedrop's privacy policy to understand how we collect, use, and protect your personal information. Learn about our commitment to data security and privacy.",
    type: "website",
  },
};

export default function PrivacyPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-blue-200 dark:via-blue-100 dark:to-blue-200">
          Privacy Policy
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p>Last updated: {new Date().toLocaleDateString()}</p>
          
          <h2>Information Collection</h2>
          <p>
            We collect only essential information needed to provide our academic project services, including:
          </p>
          <ul>
            <li>WhatsApp contact information for communication</li>
            <li>Project requirements and specifications</li>
            <li>Academic institution details (optional)</li>
          </ul>
          
          <section className="space-y-4">
            <h2 className="text-xl font-semibold">1. Introduction</h2>
            <p className="text-muted-foreground">
              At firedrop, we take your privacy seriously. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you use our service.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">2. Information We Collect</h2>
            <p className="text-muted-foreground">
              We collect information that you provide directly to us, including:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Account information (name, email, password)</li>
              <li>Profile information</li>
              <li>Payment information</li>
              <li>Usage data and analytics</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">3. How We Use Your Information</h2>
            <p className="text-muted-foreground">
              We use the information we collect to:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>Provide and maintain our service</li>
              <li>Process your transactions</li>
              <li>Send you technical notices and updates</li>
              <li>Respond to your comments and questions</li>
              <li>Analyze usage patterns and improve our service</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">4. Information Sharing</h2>
            <p className="text-muted-foreground">
              We do not sell or rent your personal information to third parties. We may share your information in the following circumstances:
            </p>
            <ul className="list-disc pl-6 text-muted-foreground space-y-2">
              <li>With your consent</li>
              <li>To comply with legal obligations</li>
              <li>To protect our rights and safety</li>
              <li>With service providers who assist in our operations</li>
            </ul>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">5. Security</h2>
            <p className="text-muted-foreground">
              We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
            </p>
          </section>

          <section className="space-y-4">
            <h2 className="text-xl font-semibold">6. Contact Us</h2>
            <p className="text-muted-foreground">
              If you have any questions about this Privacy Policy, please contact us at:
            </p>
            <p className="text-muted-foreground">
              Email: privacy@firedrop.com<br />
              Address: [Your Company Address]
            </p>
          </section>
        </div>
      </div>
    </PageWrapper>
  );
} 