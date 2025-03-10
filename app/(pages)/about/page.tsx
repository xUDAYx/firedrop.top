import type { Metadata } from "next";
import PageWrapper from "@/components/wrapper/page-wrapper";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { WhatsAppCTAButton } from "@/components/ui/whatsapp-cta-button";

export const metadata: Metadata = {
  title: "About firedrop | AI-Powered Web Automation Platform",
  description: "Learn about firedrop's mission to empower businesses with intelligent automation solutions. Discover how our AI-powered platform helps organizations streamline operations and drive growth.",
  openGraph: {
    title: "About firedrop | AI-Powered Web Automation Platform",
    description: "Learn about firedrop's mission to empower businesses with intelligent automation solutions. Discover how our AI-powered platform helps organizations streamline operations and drive growth.",
    type: "website",
  },
};

export default function AboutPage() {
  return (
    <PageWrapper>
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <h1 className="text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-blue-200 dark:via-blue-100 dark:to-blue-200">
          About Firedrop
        </h1>
        
        <div className="prose dark:prose-invert max-w-none">
          <p className="text-lg mb-6">
            We are a team of experienced developers dedicated to helping students excel in their academic projects.
          </p>
          
          <Card className="w-full">
            <CardHeader>
              <CardTitle>About firedrop</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <p className="text-muted-foreground">
                firedrop is a cutting-edge AI-powered web automation platform that helps businesses streamline their operations and maximize efficiency. Our mission is to empower organizations with intelligent automation solutions that save time, reduce costs, and drive growth.
              </p>

              <h2 className="text-xl font-semibold mt-6">Our Mission</h2>
              <p className="text-muted-foreground">
                We believe in making advanced automation technology accessible to businesses of all sizes. Our platform combines artificial intelligence with robust web automation capabilities to deliver powerful, yet user-friendly solutions.
              </p>

              <h2 className="text-xl font-semibold mt-6">Our Team</h2>
              <p className="text-muted-foreground">
                Behind firedrop is a team of passionate technologists, developers, and automation experts dedicated to pushing the boundaries of what&apos;s possible with AI and web automation.
              </p>

              <h2 className="text-xl font-semibold mt-6">Contact Us</h2>
              <p className="text-muted-foreground">
                Have questions or want to learn more about how firedrop can help your business? Visit our <a href="/contact" className="text-primary hover:underline">Contact page</a> or reach out to our team directly.
              </p>
            </CardContent>
          </Card>
          
          <div className="mt-12 flex justify-center">
            <WhatsAppCTAButton />
          </div>
        </div>
      </div>
    </PageWrapper>
  );
} 