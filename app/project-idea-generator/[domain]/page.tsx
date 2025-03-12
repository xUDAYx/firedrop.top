import type { Metadata } from "next"
import { notFound } from "next/navigation"
import ProjectGenerator from "@/components/fun/project-generator"
import ProjectGeneratorLayout from "@/components/fun/project-generator-layout"

// Define valid domains for type safety and validation
const validDomains = ['ai-ml', 'data-science', 'cybersecurity', 'web-development']

// Map URL slugs to domain IDs
const domainMap: Record<string, string> = {
  'ai-ml': 'AI/ML',
  'data-science': 'Data Science',
  'cybersecurity': 'Cybersecurity',
  'web-development': 'Web Development'
}

interface PageProps {
  params: Promise<{
    domain: string
  }>
}

// Add this export to generate static pages for all domains
export function generateStaticParams() {
  return [
    { domain: 'ai-ml' },
    { domain: 'data-science' },
    { domain: 'cybersecurity' },
    { domain: 'web-development' }
  ]
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const resolvedParams = await params;
  const { domain } = resolvedParams;
  
  // Validate domain parameter
  if (!validDomains.includes(domain)) {
    notFound();
  }
  
  // Map URL slugs to display names and SEO keywords
  const domainSEO: Record<string, {name: string, keywords: string}> = {
    'ai-ml': {
      name: 'AI & Machine Learning',
      keywords: 'AI ML projects, AI ML projects for final year, AI ML projects with source code, AI ML projects for resume, AI ML projects ideas, AI ML projects github'
    },
    'data-science': {
      name: 'Data Science',
      keywords: 'data science projects, data science projects for beginners, data science projects github, data science projects with source code, data science projects for resume'
    },
    'cybersecurity': {
      name: 'Cybersecurity',
      keywords: 'cybersecurity projects, cybersecurity projects for students, cybersecurity projects github, cybersecurity projects with source code, cybersecurity projects for beginners'
    },
    'web-development': {
      name: 'Web Development',
      keywords: 'web development projects, web development projects for beginners, web development projects ideas, web development projects for portfolio, web development projects github'
    }
  };
  
  const domainInfo = domainSEO[domain] || {name: 'Project Ideas', keywords: 'project ideas, academic projects, student projects'};
  
  return {
    title: `${domainInfo.name} Projects Generator | Ideas for Final Year, Resume & GitHub | Firedrop`,
    description: `Generate ${domainInfo.name.toLowerCase()} project ideas with source code for final year, resume, and GitHub. Find your next project inspiration with our interactive generator!`,
    keywords: domainInfo.keywords,
    openGraph: {
      title: `${domainInfo.name} Projects - Ideas for Students, Beginners & Professionals`,
      description: `Browse our curated list of ${domainInfo.name.toLowerCase()} projects with source code. Perfect for final year projects, resume building, and GitHub portfolios.`,
      type: 'website'
    }
  };
}

export default async function DomainProjectGeneratorPage({ params }: PageProps) {
  const resolvedParams = await params;
  const { domain } = resolvedParams;
  
  // Validate domain parameter
  if (!validDomains.includes(domain)) {
    notFound();
  }
  
  const domainId = domainMap[domain];
  
  return (
    <ProjectGeneratorLayout>
      <ProjectGenerator initialDomain={domainId} />
    </ProjectGeneratorLayout>
  );
} 