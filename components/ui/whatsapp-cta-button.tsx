"use client"
import { Button } from "./button"
import { ArrowRight } from "lucide-react"
import { getWhatsAppLink } from "./whatsapp-button"

export function WhatsAppCTAButton() {
  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        e.preventDefault()
        window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer')
      }}
    >
      <Button 
        size="lg"
        className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 h-12"
      >
        Discuss Your Project
        <ArrowRight className="ml-2 h-4 w-4" />
      </Button>
    </a>
  )
} 