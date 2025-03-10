import type { Metadata } from "next";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { ContactForm } from "@/components/contact/contact-form";
import { WhatsAppCard } from "@/components/contact/whatsapp-card";

export const metadata: Metadata = {
  title: "Contact firedrop | Get in Touch With Our Team",
  description: "Contact firedrop's support team for any questions about our AI-powered web automation platform. We're here to help you streamline your business operations.",
  openGraph: {
    title: "Contact firedrop | Get in Touch With Our Team",
    description: "Contact firedrop's support team for any questions about our AI-powered web automation platform. We're here to help you streamline your business operations.",
    type: "website",
  },
};

export default function ContactPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-blue-200 dark:via-blue-100 dark:to-blue-200">
          Contact Us
        </h1>
        
        <div className="grid gap-8 md:grid-cols-2">
          <WhatsAppCard />
          <ContactForm />
        </div>
      </div>
    </PageWrapper>
  );
} 