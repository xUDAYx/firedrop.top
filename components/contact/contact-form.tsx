"use client"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  return (
    <Card className="w-full">
      <CardHeader>
        <CardTitle>Contact Us</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <p className="text-muted-foreground">
          Have questions or need assistance? We&apos;re here to help! Fill out the form below and our team will get back to you as soon as possible.
        </p>

        <form className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <label htmlFor="firstName" className="text-sm font-medium">First Name</label>
              <Input id="firstName" placeholder="Enter your first name" />
            </div>
            <div className="space-y-2">
              <label htmlFor="lastName" className="text-sm font-medium">Last Name</label>
              <Input id="lastName" placeholder="Enter your last name" />
            </div>
          </div>

          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" type="email" placeholder="Enter your email address" />
          </div>

          <div className="space-y-2">
            <label htmlFor="subject" className="text-sm font-medium">Subject</label>
            <Input id="subject" placeholder="What is your message about?" />
          </div>

          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea
              id="message"
              placeholder="Type your message here..."
              className="min-h-[150px]"
            />
          </div>

          <Button type="submit" className="w-full">Send Message</Button>
        </form>

        <div className="mt-8 pt-6 border-t">
          <h2 className="text-xl font-semibold mb-4">Other Ways to Reach Us</h2>
          <div className="space-y-2">
            <p className="text-muted-foreground">
              Email: support@firedrop.com
            </p>
            <p className="text-muted-foreground">
              Business Hours: Monday - Friday, 9:00 AM - 5:00 PM EST
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
} 