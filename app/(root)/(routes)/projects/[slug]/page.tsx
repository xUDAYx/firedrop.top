import React from 'react'
import { Footer } from '@/components/footer'
import ScrollUp from '@/components/ui/scroll-up'
import fs from 'fs'
import path from 'path'
import matter from 'gray-matter'
import ReactMarkdown from 'react-markdown'
import remarkHtml from 'remark-html'
import remarkGfm from 'remark-gfm'

interface ProjectData {
  frontmatter: {
    title: string
    video_link: string
    description: string
    imageUrl: string
    headline: string
    price: number
    tags: string[]
    lastUpdated: string
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
        video_link: data.video_link || '',
        description: data.description,
        imageUrl: `public/img/default-cover.webp`,
        headline: data.headline,
        price: data.price,
        tags: data.tags || [],
        lastUpdated: data.lastUpdated
      },
      content
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
      <div className="max-w-3xl p-3 mx-auto text-white">
        <h1 className="text-center text-6xl font-extrabold mt-10">
          {projectData.frontmatter.title}
        </h1>
        <p className="text-gray-300 my-1 text-center">
          {projectData.frontmatter.description}
        </p>

        <div className="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-[#464f57] to-[#6c7882] rounded-full"></div>

        {projectData.frontmatter.video_link ? (
          <div className="flex justify-center">
            <iframe
              src={projectData.frontmatter.video_link}
              title="YouTube Video Player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              className="w-full max-w-2xl h-auto aspect-video"
            ></iframe>
          </div>
        ) : (
          <img src="/img/default-cover.webp" alt={projectData.frontmatter.imageUrl} />
        )}

        <div className="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-[#f97316] to-[#ec4899] rounded-full"></div>

        <div className="mb-14">
          <ReactMarkdown remarkPlugins={[remarkHtml, remarkGfm]}>
            {projectData.frontmatter.headline}
          </ReactMarkdown>
        </div>

        <ReactMarkdown
          remarkPlugins={[remarkHtml, remarkGfm]}
          components={{
            h1: ({ node, ...props }) => (
              <h1 className="text-[#d1d5db] text-lg font-bold mb-4 mt-8 selected-text-white" {...props} />
            ),
            h5: ({ node, ...props }) => (
              <h5 className="text-[#d1d5db] text-lg font-bold mb-4 mt-8 selected-text-yellow" {...props} />
            ),
            h2: ({ node, ...props }) => (
              <h2 className="text-3xl font-bold mb-8 mt-16 uppercase" {...props} />
            ),
            h3: ({ node, ...props }) => (
              <h3 className="box box-blue " {...props} />
            ),
            li: ({ node, ...props }) => (
              <li className="my-2 pl-1 ml-8 text-[#d1d5db] list-disc" {...props} />
            ),
            p: ({ node, ...props }) => (
              <p className="my-2 text-[#d1d5db]" {...props} />
            ),
          }}
        >
          {projectData.content}
        </ReactMarkdown>

        <div>
          <h1 className='text-3xl font-bold mb-8 mt-16 uppercase'>
            ⚡ Is the Project Updated?
          </h1>
          <span className='tag tag-sm tag-pro'>
            Updated {new Date(projectData.frontmatter.lastUpdated).toLocaleDateString()}
          </span>
          {projectData.frontmatter.tags.map((tag, index) => (
            <span key={index} className={`tag tag-sm tag-firebase`}>
              {tag}
            </span>
          ))}
        </div>

        <div>
          <h1 className='text-3xl font-bold mb-8 mt-16 uppercase'>
            How do I Buy?
          </h1>
          <p className='my-2 text-[#d1d5db]'>
            Just pick your favorite pack, scan the QR code to purchase, and join our private chat for the next steps. Let's make it happen!
          </p>
        </div>
      </div>

      <div className="max-w-3xl mx-auto px-10 text-center">
        <h2 className="text-5xl font-extrabold text-white pb-2 inline-block mt-24 mb-12">
          HOW TO BUY
        </h2>
        <div className="mx-auto w-24 h-1 mt-0 mb-24 bg-gradient-to-r from-purple-600 to-purple-400 rounded-full"></div>

        <div className=" cursor-pointer bg-[#12181b] rounded-lg shadow-3xl p-8 max-w-sm mx-auto border-blue-500 border border-solid ">
          <a href='/paymentgatway' className="text-[18px] font-bold text-blue-500">
            PROJECT PACK{' '}
            <span className=" text-[16px] font-bold text-slate-200">
              for ₹{projectData.frontmatter.price}
            </span>
          </a>
          <p className="mt-0 mb-4 text-sm text-gray-400">
            Get all Project content && bonus perks
          </p>
        </div>

        <h3 className="text-gray-300 font-extrabold mt-11 mb-4 text-2xl">OR</h3>

        <div className="cursor-pointer bg-[#12181b] rounded-lg shadow-3xl py-9 px-10 max-w-sm mx-auto border-green-500 border border-solid">
          <p className="mb-0">
            <a
              href="/paymentgatway"
              className="font-display text-green-500 no-underline text-xl font-bold"
            >
              PAPER PACK{' '}
            </a>
            <span className=" text-[16px] font-bold text-slate-200">
              for ₹{projectData.frontmatter.price + 500}
            </span>
          </p>
          <p className="mb-4 text-sm text-gray-400">
              Lifetime access for a blazingly low price
          </p>
        </div>
      </div>

      <Footer />
      <ScrollUp />
    </>
  )
}

export default ProjectPage
