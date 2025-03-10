"use client"
import { Button } from "@/components/ui/button";
import { MessageCircle } from "lucide-react";
import { getWhatsAppLink } from "@/components/ui/whatsapp-button";

export function WhatsAppCard() {
  return (
    <div className="bg-card rounded-lg p-6 border">
      <h2 className="text-xl font-semibold mb-4">WhatsApp Support</h2>
      <p className="text-muted-foreground mb-6">
        Get instant support via WhatsApp. We typically respond within minutes.
      </p>
      <a
        href={getWhatsAppLink()}
        target="_blank"
        rel="noopener noreferrer"
        onClick={(e) => {
          e.preventDefault()
          window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer')
        }}
      >
        <Button className="w-full bg-green-500 hover:bg-green-600">
          <MessageCircle className="mr-2 h-4 w-4" />
          Chat on WhatsApp
        </Button>
      </a>
    </div>
  );
} 