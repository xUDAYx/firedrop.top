import type { Metadata } from "next"
import ProjectGenerator from "@/components/fun/project-generator"
import ProjectGeneratorLayout from "@/components/fun/project-generator-layout"

export const metadata: Metadata = {
  title: "Project Ideas Generator | Firedrop",
  description: "Generate random project ideas from our curated list of successful academic projects. Find your next project inspiration with our interactive generator!",
}

export default function ProjectGeneratorPage() {
  return (
    <ProjectGeneratorLayout>
      <ProjectGenerator />
    </ProjectGeneratorLayout>
  )
} 