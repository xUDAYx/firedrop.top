import React from 'react'
import { Footer } from '@/components/footer'
import ScrollUp from '@/components/ui/scroll-up'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkHtml from 'remark-html'
import { Heading3 } from 'lucide-react'

interface ProjectData {
  frontmatter: {
    title: string
    description: string
    imageUrl: string
    headline: string
    price: number
  }
  content: string
}

interface ProjectPageProps {
  params: {
    slug: string
  }
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const { slug } = params
  const projectDir = path.join(process.cwd(), 'projects', slug)
  const filePath = path.join(projectDir, '_index.md')

  let projectData: ProjectData | null = null

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8')
    const { data, content } = matter(fileContents)

    projectData = {
      frontmatter: {
        title: data.title,
        description: data.description,
        imageUrl: `/projects/${projectDir}/img/cover.webp`,
        headline: data.headline,
        price: data.price
      },
      content: content
    }
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      console.log(`No _index.md file found for project: ${slug}`)
    } else {
      console.error(
        `Error reading project file: $app\(root)\(routes)\projects\[slug]\page.tsx`,
        error
      )
    }
  }

  if (!projectData) {
    return <div>Project not found</div>
  }

  return (
    <>
      <div className="max-w-3xl p-2 mx-auto text-white">
        <h1 className="text-center text-6xl font-extrabold mt-10">
          {projectData.frontmatter.title}
        </h1>
        <p className="text-gray-300 my-1 text-center">
          {projectData.frontmatter.description}
        </p>

        <div className="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-[#464f57] to-[#6c7882] rounded-full"></div>

        <img
          src={projectData.frontmatter.imageUrl}
          alt={projectData.frontmatter.title}
        />

        <div className="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-[#f97316] to-[#ec4899] rounded-full"></div>

        <div className="mb-14">
          <ReactMarkdown remarkPlugins={[remarkHtml]}>
            {projectData.frontmatter.headline}
          </ReactMarkdown>
        </div>

        <ReactMarkdown
          remarkPlugins={[remarkHtml]}
          components={{
            h1: (props) => (
              <h1
                className="text-4xl font-bold mb-8 mt-16 uppercase"
                {...props}
              />
            ),
            h2: (props) => (
              <h2
                className="text-3xl font-bold mb-8 mt-16 uppercase"
                {...props}
              />
            ),
            h3: (props) => (
              <h3
                className="text-2xl font-bold text-[#d1d5db] mb-8 mt-16"
                {...props}
              />
            ),
            li: (props) => (
              <li
                className="my-2 pl-1 ml-8 text-[#d1d5db] list-disc"
                {...props}
              />
            ),
            p: (props) => (
              <p className="my-2 text-[#d1d5db] list-disc" {...props} />
            ),
            // Add a custom component for the update tag
            span: (props) => {
              const { node } = props
              if (
                node &&
                node.properties &&
                node.properties.className &&
                typeof node.properties.className === 'string' &&
                node.properties.className.includes('tag-pro')
              ) {
                return <span className="tag tag-sm tag-pro" {...props} />
              }
              return <span {...props} />
            }
          }}
        >
          {projectData.content}
        </ReactMarkdown>
      </div>
      <div className="max-w-3xl mx-auto px-10 text-center">
        <h2 className="text-5xl font-extrabold text-white pb-2 inline-block mt-24 mb-12">
          HOW TO BUY
        </h2>
        <div className="mx-auto w-24 h-1 mt-0 mb-24 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>

        <div className=" cursor-pointer bg-slate-900 rounded-lg shadow-3xl p-8 max-w-sm mx-auto border-blue-500 border border-solid ">
          <p className="text-[18px] font-bold text-blue-500">
            BUY THIS PROJECT{' '}
            <span className=" text-[16px] font-bold text-slate-200">
              for ₹{projectData.frontmatter.price}
            </span>
          </p>
          <p className="mt-0 mb-4 text-sm text-gray-400">
            Full Project + Installation Video + PPT + Docs
          </p>
        </div>

        <h3 className="text-gray-300 font-extrabold mt-11 mb-4 text-2xl">OR</h3>

        <div className="cursor-pointer bg-gray-900 rounded-lg shadow-3xl py-9 px-10 max-w-sm mx-auto border-green-500 border border-solid">
          <p className="mb-0">
            <a
              href="/pro/"
              className="font-display text-green-500 no-underline text-xl font-bold"
            >
              RESEARCH PAPER{' '} 
            </a>
            <span className=" text-[16px] font-bold text-slate-200">
              for ₹{projectData.frontmatter.price+500}
            </span>
          </p>
          <p className="mb-4 text-sm text-gray-400">
            Everything + Research Paper + Plagiarism Report
          </p>
        </div>
      </div>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default ProjectPage
