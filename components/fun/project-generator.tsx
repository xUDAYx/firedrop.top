"use client"
import React from "react"
import { useState, useEffect } from "react"
import { motion, AnimatePresence } from "framer-motion"
import confetti from "canvas-confetti"
import { Button } from "@/components/ui/button"
import { 
  Sparkles, Wand2, Brain, Database, Shield, Code, 
  Lightbulb, BookOpen, Trophy, ArrowRight, Bookmark,
  Download, Share2, Clock, Cpu, Microscope, Lock, Globe,
  FileText, ExternalLink, RefreshCw, Gift
} from "lucide-react"
import { getWhatsAppLink } from "@/components/ui/whatsapp-button"
import { soundEffect } from "@/lib/sounds"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"
import { Skeleton } from "@/components/ui/skeleton"
import { Separator } from "@/components/ui/separator"
import { LockIcon } from "lucide-react"
import { useRouter } from "next/navigation"

// Project difficulty levels
type Difficulty = "Beginner" | "Intermediate" | "Advanced"

// Project interface
interface Project {
  name: string
  difficulty: Difficulty
  duration: string
  description: string
}

// Domain interface
interface Domain {
  id: string
  name: string
  icon: any
  color: string
  bgColor: string
  textColor: string
  borderColor: string
  projects: Project[]
}

const domains: Domain[] = [
  {
    id: 'AI/ML',
    name: 'AI & Machine Learning',
    icon: Cpu,
    color: 'from-blue-500 to-blue-600',
    bgColor: 'bg-blue-50 dark:bg-blue-900/20',
    textColor: 'text-blue-600 dark:text-blue-400',
    borderColor: 'border-blue-200 dark:border-blue-800',
    projects: [
      {
        name: "Emotion Recognition using Deep Learning",
        difficulty: "Advanced",
        duration: "8-10 weeks",
        description: "Build a system that can detect human emotions from facial expressions using convolutional neural networks."
      },
      {
        name: "Smart Traffic Management System",
        difficulty: "Intermediate",
        duration: "6-8 weeks",
        description: "Develop an AI-based traffic management system that optimizes signal timing based on traffic density."
      },
      {
        name: "Plant Disease Detection",
        difficulty: "Intermediate",
        duration: "4-6 weeks",
        description: "Create a mobile app that identifies plant diseases from leaf images using transfer learning."
      },
      {
        name: "Customer Churn Prediction",
        difficulty: "Beginner",
        duration: "3-4 weeks",
        description: "Build a model to predict which customers are likely to cancel a subscription service."
      },
      {
        name: "Fake News Detection",
        difficulty: "Advanced",
        duration: "6-8 weeks",
        description: "Develop an NLP system that can identify misleading or false news articles based on content analysis."
      },
      {
        name: "Stock Price Prediction",
        difficulty: "Advanced",
        duration: "8-10 weeks",
        description: "Create a time-series forecasting model to predict stock prices using historical data and sentiment analysis."
      },
    ]
  },
  // ... other domains with enhanced project details
  {
    id: 'Data Science',
    name: 'Data Science',
    icon: Microscope,
    color: 'from-green-500 to-green-600',
    bgColor: 'bg-green-50 dark:bg-green-900/20',
    textColor: 'text-green-600 dark:text-green-400',
    borderColor: 'border-green-200 dark:border-green-800',
    projects: [
      {
        name: "Credit Card Fraud Detection",
        difficulty: "Intermediate",
        duration: "5-7 weeks",
        description: "Build a system to identify fraudulent credit card transactions using anomaly detection algorithms."
      },
      {
        name: "Customer Segmentation Analysis",
        difficulty: "Beginner",
        duration: "3-4 weeks",
        description: "Analyze customer data to identify distinct market segments for targeted marketing campaigns."
      },
      {
        name: "Sales Forecasting Dashboard",
        difficulty: "Intermediate",
        duration: "6-8 weeks",
        description: "Create an interactive dashboard that predicts future sales based on historical data and seasonal trends."
      },
      {
        name: "Social Media Sentiment Analysis",
        difficulty: "Intermediate",
        duration: "5-6 weeks",
        description: "Develop a tool that analyzes social media posts to determine public sentiment about brands or products."
      },
      {
        name: "Healthcare Analytics Platform",
        difficulty: "Advanced",
        duration: "8-12 weeks",
        description: "Build a comprehensive analytics platform for healthcare data to identify patterns and improve patient outcomes."
      },
    ]
  },
  {
    id: 'Cybersecurity',
    name: 'Cybersecurity',
    icon: Lock,
    color: 'from-red-500 to-red-600',
    bgColor: 'bg-red-50 dark:bg-red-900/20',
    textColor: 'text-red-600 dark:text-red-400',
    borderColor: 'border-red-200 dark:border-red-800',
    projects: [
      {
        name: "Network Intrusion Detection System",
        difficulty: "Advanced",
        duration: "8-10 weeks",
        description: "Develop a system that monitors network traffic to identify and respond to potential security threats and unauthorized access."
      },
      {
        name: "Secure File Sharing System",
        difficulty: "Intermediate",
        duration: "5-7 weeks",
        description: "Build an encrypted file sharing platform with access controls, authentication, and secure transmission protocols."
      },
      {
        name: "Password Strength Analyzer",
        difficulty: "Beginner",
        duration: "3-4 weeks",
        description: "Create a tool that evaluates password security by checking for common vulnerabilities and suggesting improvements."
      },
      {
        name: "Malware Detection using ML",
        difficulty: "Advanced",
        duration: "7-9 weeks",
        description: "Implement machine learning algorithms to identify and classify malicious software based on behavior patterns."
      },
      {
        name: "Web Application Firewall",
        difficulty: "Advanced",
        duration: "8-10 weeks",
        description: "Design a firewall that protects web applications from common attacks like SQL injection, XSS, and CSRF."
      },
      {
        name: "Blockchain-based Authentication System",
        difficulty: "Advanced",
        duration: "9-12 weeks",
        description: "Develop a decentralized authentication system using blockchain technology for secure and tamper-proof identity verification."
      }
    ]
  },
  {
    id: 'Web Development',
    name: 'Web Development',
    icon: Globe,
    color: 'from-purple-500 to-purple-600',
    bgColor: 'bg-purple-50 dark:bg-purple-900/20',
    textColor: 'text-purple-600 dark:text-purple-400',
    borderColor: 'border-purple-200 dark:border-purple-800',
    projects: [
      // Web Development projects...
    ]
  }
]

// Helper function for difficulty colors
function getDifficultyColor(difficulty: Difficulty) {
  switch (difficulty) {
    case "Beginner":
      return "bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400"
    case "Intermediate":
      return "bg-yellow-100 text-yellow-800 dark:bg-yellow-900/30 dark:text-yellow-400"
    case "Advanced":
      return "bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400"
    default:
      return "bg-gray-100 text-gray-800 dark:bg-gray-900/30 dark:text-gray-400"
  }
}

// Update the attention animation to be continuous with intervals
const attentionAnimation = {
  initial: { scale: 1, boxShadow: "0 0 0 0 rgba(22, 163, 74, 0)" },
  pulse: {
    scale: [1, 1.05, 1],
    boxShadow: [
      "0 0 0 0 rgba(22, 163, 74, 0)",
      "0 0 0 8px rgba(22, 163, 74, 0.3)",
      "0 0 0 0 rgba(22, 163, 74, 0)"
    ],
    transition: {
      duration: 1.5,
      repeat: Infinity,
      repeatType: "loop" as const,
      ease: "easeInOut",
      repeatDelay: 1
    }
  }
}

// Add a highlight animation for the project card
const cardHighlightAnimation = {
  initial: { 
    boxShadow: "0 0 0 1px rgba(0, 0, 0, 0.05)",
    background: "var(--card-background)" 
  },
  highlight: {
    boxShadow: [
      "0 0 0 1px rgba(0, 0, 0, 0.05)",
      "0 0 15px 2px rgba(59, 130, 246, 0.3)",
      "0 0 10px 1px rgba(59, 130, 246, 0.2)",
      "0 0 0 1px rgba(0, 0, 0, 0.05)"
    ],
    background: [
      "var(--card-background)",
      "linear-gradient(to right, rgba(59, 130, 246, 0.05), rgba(59, 130, 246, 0.02))",
      "linear-gradient(to right, rgba(59, 130, 246, 0.03), rgba(59, 130, 246, 0.01))",
      "var(--card-background)"
    ],
    transition: {
      duration: 2.5,
      repeat: Infinity,
      repeatType: "loop",
      repeatDelay: 5
    }
  }
}

// Enhance the title animation
const titleAnimation = {
  initial: { 
    x: 0,
    textShadow: "0 0 0px rgba(59, 130, 246, 0)",
    color: "var(--text-color)"
  },
  animate: {
    x: [0, 5, -5, 3, -3, 0],
    textShadow: [
      "0 0 0px rgba(59, 130, 246, 0)",
      "0 0 5px rgba(59, 130, 246, 0.5)",
      "0 0 3px rgba(59, 130, 246, 0.3)",
      "0 0 5px rgba(59, 130, 246, 0.5)",
      "0 0 0px rgba(59, 130, 246, 0)"
    ],
    color: [
      "var(--text-color)",
      "rgb(37, 99, 235)",
      "var(--text-color)",
      "rgb(37, 99, 235)",
      "var(--text-color)"
    ],
    transition: {
      duration: 1.5,
      ease: "easeOut"
    }
  }
}

// Update the component props
interface ProjectGeneratorProps {
  initialDomain?: string;
}

export default function ProjectGenerator({ initialDomain }: ProjectGeneratorProps = {}) {
  const router = useRouter();
  
  // Map URL parameter to domain ID
  const mapUrlToDomainId = (url?: string): string | null => {
    if (!url) return null;
    
    const mapping: Record<string, string> = {
      'ai-machine-learning': 'AI/ML',
      'data-science': 'Data Science',
      'cybersecurity': 'Cybersecurity',
      'web-development': 'Web Development'
    };
    
    return mapping[url] || null;
  }

  const [currentProject, setCurrentProject] = useState<Project | null>(null)
  const [selectedDomain, setSelectedDomain] = useState<string | null>(mapUrlToDomainId(initialDomain))
  const [isGenerating, setIsGenerating] = useState(false)
  const [projectsGenerated, setProjectsGenerated] = useState(0)
  const [savedProjects, setSavedProjects] = useState<{domain: string, project: Project}[]>([])
  const [showAchievement, setShowAchievement] = useState(false)
  const [isSearchingResources, setIsSearchingResources] = useState(false)
  const [resourcesFound, setResourcesFound] = useState(false)
  const [resourceCount, setResourceCount] = useState(0)
  const [clickPosition, setClickPosition] = useState({ x: 0.5, y: 0.5 })
  const [shakeButton, setShakeButton] = useState(false)
  const [animateTitle, setAnimateTitle] = useState(false)
  const tabsRef = React.useRef<HTMLDivElement>(null);
  const cardRef = React.useRef<HTMLDivElement>(null);
  const [isNavigating, setIsNavigating] = useState(false);

  const saveProject = () => {
    if (!currentProject || !selectedDomain) return
    
    const domain = domains.find(d => d.id === selectedDomain)
    if (!domain) return
    
    setSavedProjects(prev => [...prev, {
      domain: domain.name,
      project: currentProject
    }])
    
    soundEffect.playPopSound()
  }

  const generateProject = (event?: React.MouseEvent) => {
    if (!selectedDomain) return
    
    // Set default position if no event
    let origin = { x: 0.5, y: 0.5 };
    
    // Capture click position if available
    if (event) {
      // Calculate position relative to viewport
      origin = {
        x: event.clientX / window.innerWidth,
        y: event.clientY / window.innerHeight
      };
    }
    
    setIsGenerating(true)
    setResourcesFound(false)
    setIsSearchingResources(false)
    soundEffect.playPopSound()
    
    // Get projects from selected domain
    const domain = domains.find(d => d.id === selectedDomain)
    if (!domain) return
    
    // Random project selection
    const randomProject = domain.projects[Math.floor(Math.random() * domain.projects.length)]
    
    // Trigger confetti at the click position
    confetti({
      particleCount: 100,
      spread: 70,
      origin: origin,
      colors: ['#3b82f6', '#8b5cf6', '#ec4899'],
      disableForReducedMotion: true
    })

    // Update state with animation delay
    setTimeout(() => {
      setCurrentProject(randomProject)
      setIsGenerating(false)
      setProjectsGenerated(prev => prev + 1)
    }, 1000)
  }

  const resetGenerator = () => {
    soundEffect.playPopSound()
    setSelectedDomain(null)
    setCurrentProject(null)
  }

  // Map domain IDs to URL slugs
  const getDomainSlug = (domainId: string): string => {
    const mapping: Record<string, string> = {
      'AI/ML': 'ai-ml',
      'Data Science': 'data-science',
      'Cybersecurity': 'cybersecurity',
      'Web Development': 'web-development'
    };
    
    return mapping[domainId] || domainId.toLowerCase().replace(/\s+/g, '-');
  };

  // Update the handleDomainSelect function to handle navigation properly
  const handleDomainSelect = (domainId: string) => {
    soundEffect.playPopSound();
    setSelectedDomain(domainId);
    setCurrentProject(null);
    setIsNavigating(true);
    
    // Navigate to the domain-specific URL
    const slug = getDomainSlug(domainId);
    try {
      router.push(`/project-idea-generator/${slug}`, { scroll: false });
      // Always use setTimeout since router.push may not return a Promise
      setTimeout(() => setIsNavigating(false), 500);
    } catch (error) {
      console.error("Navigation error:", error);
      setIsNavigating(false);
    }
  };

  // Handle achievement notification
  useEffect(() => {
    if (projectsGenerated > 0 && projectsGenerated % 5 === 0) {
      soundEffect.playAchievementSound()
      setShowAchievement(true)
      setTimeout(() => setShowAchievement(false), 3000)
    }
  }, [projectsGenerated])

  // Update the findResources function to use a range of 4-8 resources
  const findResources = () => {
    setIsSearchingResources(true)
    
    // Simulate search delay
    setTimeout(() => {
      const count = Math.floor(Math.random() * 5) + 4 // Random between 4-8
      setResourceCount(count)
      setResourcesFound(true)
      setIsSearchingResources(false)
    }, 5000)
  }

  // Update the useEffect for currentProject
  useEffect(() => {
    if (currentProject) {
      findResources()
      // Always keep the button animation active
      setShakeButton(true)
      // Trigger title animation
      setAnimateTitle(true)
      const timer = setTimeout(() => setAnimateTitle(false), 1000)
      return () => clearTimeout(timer)
    } else {
      setIsSearchingResources(false)
      setResourcesFound(false)
    }
  }, [currentProject])

  // Add CSS variables for dynamic colors
  useEffect(() => {
    if (cardRef.current) {
      cardRef.current.style.setProperty('--card-background', 'var(--background)');
      cardRef.current.style.setProperty('--text-color', 'var(--foreground)');
    }
  }, []);

  // Add these fake resources
  const fakeResources = [
    "Complete GitHub repository with source code and documentation",
    "Step-by-step implementation guide (42 pages, PDF)",
    "Video tutorial series (12 videos, 4.5 hours)",
    "Research paper with methodology and results",
    "Dataset collection for training and testing",
    "API documentation and integration examples",
    "Performance optimization techniques",
    "Deployment guide for cloud platforms",
    "Security best practices for implementation",
    "Case studies of similar successful projects"
  ]

  const selectedDomainData = domains.find(d => d.id === selectedDomain)

  // Add this effect to handle initial domain selection
  useEffect(() => {
    if (initialDomain) {
      // Find the domain element and simulate a click
      const domainElement = document.querySelector(`[data-domain-id="${initialDomain}"]`) as HTMLElement;
      if (domainElement) {
        domainElement.click();
      }
    }
  }, [initialDomain]);

  return (
    <div className="min-h-screen relative overflow-hidden bg-background">
      {/* Background pattern */}
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-black bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:14px_24px]">
        <div className="absolute left-0 right-0 top-0 -z-10 m-auto h-[310px] w-[310px] rounded-full bg-blue-400 dark:bg-blue-500 opacity-20 blur-[100px]"></div>
      </div>

      <div className="container mx-auto px-4 py-12 relative">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <div className="text-center mb-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center justify-center gap-2 mb-4 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full"
            >
              <Lightbulb className="w-5 h-5 text-blue-500" />
              <span className="text-sm font-medium text-blue-700 dark:text-blue-300">Interactive Tool</span>
            </motion.div>
            
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 via-blue-800 to-gray-900 dark:from-blue-200 dark:via-blue-100 dark:to-blue-200"
            >
              Project Idea Generator
            </motion.h1>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto"
            >
              Discover tailored academic project ideas with difficulty ratings and estimated timelines.
            </motion.p>
          </div>

          {/* Main Content */}
          <Tabs defaultValue="generator" className="space-y-6" ref={tabsRef}>
            <TabsList className="grid w-full max-w-md mx-auto grid-cols-2">
              <TabsTrigger value="generator" data-value="generator">Project Generator</TabsTrigger>
              <TabsTrigger value="saved">Saved Projects</TabsTrigger>
            </TabsList>
            
            <TabsContent value="generator" className="mt-0">
              <div className="grid md:grid-cols-4 gap-6">
                {/* Left Column - Domain Selection */}
                <Card className="md:col-span-1">
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-500" />
                      Select Domain
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {domains.map((domain) => {
                      const Icon = domain.icon
                      const isSelected = domain.id === selectedDomain
                      
                      return (
                        <motion.button
                          key={domain.id}
                          onClick={() => handleDomainSelect(domain.id)}
                          data-domain-id={domain.id}
                          className={`
                            w-full p-3 rounded-lg flex items-center gap-3 transition-all duration-200
                            ${isSelected 
                              ? `${domain.bgColor} border ${domain.borderColor} shadow-sm` 
                              : 'bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:border-gray-300 dark:hover:border-gray-600'
                            }
                          `}
                          whileHover={{ scale: 1.02 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <div className={`p-2 rounded-md ${isSelected ? `bg-white/20 dark:bg-black/20` : ''}`}>
                            <Icon className={`w-5 h-5 ${isSelected ? domain.textColor : 'text-gray-500 dark:text-gray-400'}`} />
                          </div>
                          <span className={`font-medium ${isSelected ? domain.textColor : 'text-gray-700 dark:text-gray-300'}`}>
                            {domain.name}
                          </span>
                        </motion.button>
                      )
                    })}
                  </CardContent>
                </Card>

                {/* Right Column - Generator */}
                <Card className="md:col-span-3">
                  {selectedDomain ? (
                    <AnimatePresence mode="wait">
                      {currentProject ? (
                        <motion.div
                          key="result"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          ref={cardRef}
                          className="relative overflow-hidden rounded-lg border bg-card text-card-foreground shadow"
                          whileHover="highlight"
                        >
                          <div className="absolute inset-0 pointer-events-none bg-gradient-to-br from-blue-50/30 via-transparent to-purple-50/30 dark:from-blue-900/10 dark:to-purple-900/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                          
                          <CardHeader>
                            <div className="flex items-center justify-between mb-2">
                              <Badge className={`${selectedDomainData?.bgColor} ${selectedDomainData?.textColor}`}>
                                {selectedDomainData?.name}
                              </Badge>
                              
                              <div className="flex items-center gap-2">
                                <Button
                                  onClick={saveProject}
                                  size="icon"
                                  variant="ghost"
                                  className="h-8 w-8 text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                                  title="Save Project"
                                >
                                  <Bookmark className="h-4 w-4" />
                                </Button>
                                
                                <Badge className={getDifficultyColor(currentProject.difficulty)}>
                                  {currentProject.difficulty}
                                </Badge>
                                <Badge variant="outline" className="flex items-center gap-1">
                                  <Clock className="w-3 h-3" />
                                  {currentProject.duration}
                                </Badge>
                              </div>
                            </div>
                            <CardTitle className="text-xl font-bold">
                              <motion.div
                                initial="initial"
                                animate={animateTitle ? "animate" : "initial"}
                                variants={titleAnimation}
                                className="inline-block"
                              >
                                {currentProject.name}
                              </motion.div>
                            </CardTitle>
                            <CardDescription className="mt-2 text-base">
                              {currentProject.description}
                            </CardDescription>
                          </CardHeader>
                          
                          <CardFooter className="flex flex-col sm:flex-row gap-3">
                            <Button
                              onClick={(e) => generateProject(e)}
                              disabled={isGenerating}
                              className="bg-blue-600 hover:bg-blue-500 text-white"
                            >
                              <RefreshCw className="mr-2 h-4 w-4" />
                              Generate Another
                            </Button>
                            
                            <div className="flex-1 flex justify-end">
                              <a
                                href={getWhatsAppLink()}
                                target="_blank"
                                rel="noopener noreferrer"
                                onClick={(e) => {
                                  e.preventDefault()
                                  window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer')
                                }}
                                className="w-full sm:w-auto"
                              >
                                <motion.div
                                  initial="initial"
                                  animate="pulse"
                                  variants={attentionAnimation}
                                  className="rounded-md overflow-hidden"
                                >
                                  <Button className="w-full bg-gradient-to-r from-green-600 to-green-500 hover:from-green-700 hover:to-green-600 text-white border-none">
                                    <Gift className="mr-2 h-4 w-4" />
                                    Get This Project
                                  </Button>
                                </motion.div>
                              </a>
                            </div>
                          </CardFooter>
                          
                          <Separator className="my-6" />
                          
                          <div className="px-6 pb-6">
                            <div className="flex items-center justify-between mb-4">
                              <h3 className="text-lg font-medium flex items-center gap-2">
                                <FileText className="w-5 h-5 text-blue-500" />
                                {resourcesFound 
                                  ? `Found ${resourceCount} resources for this project` 
                                  : "Finding resources for this project..."}
                              </h3>
                              
                              {resourcesFound && (
                                <Badge variant="outline" className="font-normal">
                                  Premium Content
                                </Badge>
                              )}
                            </div>
                            
                            {isSearchingResources ? (
                              <div className="space-y-3 max-w-2xl mx-auto">
                                <Skeleton className="h-10 w-full rounded-md" />
                                <Skeleton className="h-10 w-full rounded-md" />
                                <Skeleton className="h-10 w-full rounded-md" />
                              </div>
                            ) : resourcesFound ? (
                              <div className="space-y-2 relative max-w-2xl mx-auto">
                                {fakeResources.slice(0, resourceCount).map((resource, index) => (
                                  <div 
                                    key={index}
                                    className="flex items-center justify-between p-2.5 rounded-md border border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50"
                                  >
                                    <div className="blur-[3px] flex-1 text-sm">{resource}</div>
                                    <Badge className="ml-2 blur-0 shrink-0 bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                                      {["PDF", "ZIP", "Video", "Dataset", "Guide"][index % 5]}
                                    </Badge>
                                  </div>
                                ))}
                                
                                <div className="absolute inset-0 bg-gradient-to-b from-transparent to-background/90 flex items-center justify-center">
                                  <div className="text-center p-5 bg-white/90 dark:bg-gray-800/90 rounded-lg shadow-lg max-w-sm mx-auto">
                                    <LockIcon className="w-10 h-10 mx-auto mb-3 text-blue-500 opacity-80" />
                                    <h3 className="text-lg font-bold mb-2">Premium Resources</h3>
                                    <p className="text-sm text-gray-600 dark:text-gray-300 mb-3">
                                      Get access to implementation materials, code samples, and guides.
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
                                      <Button className="bg-blue-600 hover:bg-blue-500 text-white">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Unlock Resources
                                      </Button>
                                    </a>
                                  </div>
                                </div>
                              </div>
                            ) : null}
                          </div>
                        </motion.div>
                      ) : (
                        <motion.div
                          key="generator"
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          exit={{ opacity: 0, y: -20 }}
                          className="flex flex-col items-center justify-center py-12"
                        >
                          <div className={`mb-6 inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${selectedDomainData?.bgColor} ${selectedDomainData?.textColor}`}>
                            {selectedDomainData && React.createElement(selectedDomainData.icon, { 
                              className: `w-4 h-4 mr-2` 
                            })}
                            {selectedDomainData?.name}
                          </div>
                          
                          <motion.button
                            onClick={(e) => generateProject(e)}
                            disabled={isGenerating}
                            className="w-24 h-24 rounded-full bg-blue-600 hover:bg-blue-500 flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all duration-300"
                            whileHover={{ scale: 1.1 }}
                            whileTap={{ scale: 0.9 }}
                          >
                            <Wand2 className="w-10 h-10" />
                          </motion.button>
                          
                          <p className="mt-6 text-gray-600 dark:text-gray-300">
                            Click the wand to generate a project idea
                          </p>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  ) : (
                    <div className="flex flex-col items-center justify-center py-16 text-center">
                      <ArrowRight className="w-12 h-12 text-gray-300 dark:text-gray-600 mb-4 -rotate-90 md:-rotate-180" />
                      <h3 className="text-xl font-medium text-gray-600 dark:text-gray-400">
                        Select a domain to get started
                      </h3>
                      <p className="text-gray-500 dark:text-gray-500 mt-2 max-w-md">
                        Choose your field of interest from the options on the left
                      </p>
                    </div>
                  )}
                </Card>
              </div>
            </TabsContent>
            
            <TabsContent value="saved" className="mt-0">
              <Card>
                <CardHeader className="pb-3">
                  <div className="flex items-center justify-between">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <BookOpen className="w-5 h-5 text-blue-500" />
                      Your Saved Projects
                    </CardTitle>
                    
                    <Badge variant="outline" className="font-normal">
                      {savedProjects.length} {savedProjects.length === 1 ? 'project' : 'projects'}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  {savedProjects.length > 0 ? (
                    <div className="grid sm:grid-cols-2 gap-4">
                      {savedProjects.map((item, index) => (
                        <motion.div
                          key={index}
                          initial={{ opacity: 0, y: 20 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{ delay: index * 0.05 }}
                          className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-4 border border-gray-100 dark:border-gray-800"
                        >
                          <div className="flex justify-between mb-2">
                            <Badge className="bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400">
                              {item.domain}
                            </Badge>
                            <Badge className={getDifficultyColor(item.project.difficulty)}>
                              {item.project.difficulty}
                            </Badge>
                          </div>
                          
                          <h3 className="text-lg font-semibold mb-2">{item.project.name}</h3>
                          <p className="text-sm text-gray-600 dark:text-gray-400 mb-3 line-clamp-2">
                            {item.project.description}
                          </p>
                          
                          <div className="flex justify-between items-center">
                            <Badge variant="outline" className="flex items-center gap-1">
                              <Clock className="w-3 h-3" />
                              {item.project.duration}
                            </Badge>
                            
                            <a
                              href={getWhatsAppLink()}
                              target="_blank"
                              rel="noopener noreferrer"
                              onClick={(e) => {
                                e.preventDefault()
                                window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer')
                              }}
                            >
                              <Button size="sm" className="h-8 bg-green-600 hover:bg-green-500">
                                <Download className="h-4 w-4 mr-1" />
                                Get
                              </Button>
                            </a>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  ) : (
                    <div className="bg-gray-50 dark:bg-gray-900/50 rounded-lg p-8 text-center">
                      <Bookmark className="w-12 h-12 mx-auto mb-4 text-gray-300 dark:text-gray-600" />
                      <h3 className="text-lg font-medium text-gray-600 dark:text-gray-400 mb-2">
                        No saved projects yet
                      </h3>
                      <p className="text-gray-500 dark:text-gray-500 mb-4 max-w-md mx-auto">
                        Generate and save projects to build your collection
                      </p>
                      <Button 
                        onClick={() => {
                          // Try to find the TabsList and click the first child
                          if (tabsRef.current) {
                            const tabsList = tabsRef.current.querySelector('[role="tablist"]');
                            if (tabsList) {
                              const firstTab = tabsList.querySelector('[role="tab"]') as HTMLElement;
                              if (firstTab) {
                                firstTab.click();
                              }
                            }
                          }
                        }}
                        variant="outline"
                      >
                        Go to Generator
                      </Button>
                    </div>
                  )}
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
          
          {/* Bottom CTA */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="mt-12 text-center"
          >
            <Card className="bg-blue-50 dark:bg-blue-900/20 border-blue-100 dark:border-blue-800">
              <CardHeader className="pb-2">
                <CardTitle className="text-xl">Ready to bring your project to life?</CardTitle>
                <CardDescription className="text-gray-600 dark:text-gray-300">
                  Our team of experts can help you develop any of these project ideas with professional quality and academic rigor.
                </CardDescription>
              </CardHeader>
              <CardFooter className="flex justify-center pt-0">
                <a
                  href={getWhatsAppLink()}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.preventDefault()
                    window.open(getWhatsAppLink(), '_blank', 'noopener,noreferrer')
                  }}
                >
                  <Button className="bg-blue-600 hover:bg-blue-500 text-white">
                    Discuss Your Project
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </a>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </div>
      
      {/* Achievement Toast */}
      <AnimatePresence>
        {showAchievement && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed bottom-8 left-1/2 -translate-x-1/2 bg-blue-600 text-white px-6 py-3 rounded-full shadow-lg flex items-center gap-2 z-50"
          >
            <Trophy className="w-5 h-5" />
            <span>Achievement Unlocked: Project Explorer! 🚀</span>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
} 