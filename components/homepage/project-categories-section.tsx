"use client";

import { motion } from "framer-motion";
import { ArrowRight, Code, Database, Shield, Brain, ChevronRight, Cpu, Globe } from "lucide-react";
import Link from "next/link";
import { Button } from "../ui/button";
import { getWhatsAppLink } from "@/components/ui/whatsapp-button";

const categories = [
  {
    icon: <Brain className="h-10 w-10 text-blue-500" />,
    title: "AI & ML Projects",
    description: "Machine learning models, neural networks, NLP applications, and computer vision solutions.",
    color: "bg-blue-500/10 border-blue-500/20",
    textColor: "text-blue-500"
  },
  {
    icon: <Database className="h-10 w-10 text-green-500" />,
    title: "Data Science Projects",
    description: "Data analysis, visualization, predictive modeling, and business intelligence dashboards.",
    color: "bg-green-500/10 border-green-500/20",
    textColor: "text-green-500"
  },
  {
    icon: <Shield className="h-10 w-10 text-red-500" />,
    title: "Cyber Security Projects",
    description: "Network security, penetration testing, encryption tools, and secure authentication systems.",
    color: "bg-red-500/10 border-red-500/20",
    textColor: "text-red-500"
  },
  {
    icon: <Code className="h-10 w-10 text-purple-500" />,
    title: "Web Development",
    description: "Responsive websites, web applications, e-commerce platforms, and content management systems.",
    color: "bg-purple-500/10 border-purple-500/20",
    textColor: "text-purple-500"
  },
  {
    icon: <Cpu className="h-10 w-10 text-amber-500" />,
    title: "IoT & Embedded Systems",
    description: "Smart home solutions, sensor networks, microcontroller programming, and automation systems.",
    color: "bg-amber-500/10 border-amber-500/20",
    textColor: "text-amber-500"
  },
  {
    icon: <Globe className="h-10 w-10 text-indigo-500" />,
    title: "Blockchain Projects",
    description: "Smart contracts, decentralized applications, cryptocurrency systems, and NFT platforms.",
    color: "bg-indigo-500/10 border-indigo-500/20",
    textColor: "text-indigo-500"
  }
];

export default function ProjectCategoriesSection() {
  return (
    <section className="w-full max-w-6xl mx-auto px-4 relative overflow-hidden">
      {/* Background gradient with animated pattern - similar to hero section */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 dark:bg-blue-500 opacity-20 blur-[100px]"></div>
      </div>
      
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="text-center mb-16"
      >
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-blue-200 dark:via-blue-100 dark:to-blue-200">
          Specialized Project Categories
        </h2>
        <p className="text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
          We deliver high-quality academic projects across various domains to help you excel in your studies
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {categories.map((category, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            className={`relative rounded-xl border p-6 ${category.color} hover:shadow-lg transition-all duration-300 hover:scale-105`}
          >
            <div className="flex flex-col h-full">
              <div className="mb-4">
                {category.icon}
              </div>
              <h3 className={`text-xl font-bold mb-2 ${category.textColor}`}>
                {category.title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 mb-4 flex-grow">
                {category.description}
              </p>
              <a 
                href={getWhatsAppLink()}
                target="_blank"
                rel="noopener noreferrer"
                onClick={(e) => {
                  e.preventDefault()
                  window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer')
                }}
                className={`inline-flex items-center text-sm font-medium ${category.textColor} hover:underline mt-auto`}
              >
                Get a quote
                <ChevronRight className="ml-1 h-4 w-4" />
              </a>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: 0.5 }}
        className="mt-16 text-center"
      >
        <a
          href={getWhatsAppLink()}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => {
            e.preventDefault()
            window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer')
          }}
        >
          <Button size="lg" className="bg-blue-600 hover:bg-blue-500 text-white rounded-full px-8 h-12 shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300">
            Discuss Your Project
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </a>
      </motion.div>
    </section>
  );
} 