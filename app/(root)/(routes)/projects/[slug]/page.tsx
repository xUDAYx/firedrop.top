import React from 'react';
import { Footer } from '@/components/footer';
import ScrollUp from '@/components/ui/scroll-up';
import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import ReactMarkdown from 'react-markdown';
import remarkHtml from 'remark-html';

interface ProjectData {
  frontmatter: {
    title: string;
    description: string;
    imageUrl: string;
    headline: string;
  };
  content: string;
}

interface ProjectPageProps {
  params: {
    slug: string;
  };
}

const ProjectPage: React.FC<ProjectPageProps> = ({ params }) => {
  const { slug } = params;
  const projectDir = path.join(process.cwd(), 'projects', slug);
  const filePath = path.join(projectDir, '_index.md');

  let projectData: ProjectData | null = null;

  try {
    const fileContents = fs.readFileSync(filePath, 'utf8');
    const { data, content } = matter(fileContents);

    projectData = {
      frontmatter: {
        title: data.title,
        description: data.description,
        imageUrl: `${slug}/img/cover.webp`,
        headline: data.headline,
      },
      content: content,
    };
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      console.log(`No _index.md file found for project: ${slug}`);
    } else {
      console.error(`Error reading project file: $app\(root)\(routes)\projects\[slug]\page.tsx`, error);
    }
  }

  if (!projectData) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div className="max-w-3xl mx-auto text-white">
        <h1 className="text-center text-6xl font-extrabold mt-10">{projectData.frontmatter.title}</h1>
        <p className="text-gray-300 my-1 text-center">{projectData.frontmatter.description}</p>

        <div className="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-[#464f57] to-[#6c7882] rounded-full"></div>

        <img src={projectData.frontmatter.imageUrl} alt={projectData.frontmatter.title} />

        <div className="mx-auto w-24 h-1 my-24 bg-gradient-to-r from-[#f97316] to-[#ec4899] rounded-full"></div>

        <div className="mb-14">
          <ReactMarkdown remarkPlugins={[remarkHtml]}>{projectData.frontmatter.headline}</ReactMarkdown>
        </div>

        <ReactMarkdown remarkPlugins={[remarkHtml]} components={{
            h1: (props) => <h1 className="text-4xl font-bold mb-8 mt-16" {...props} />,
            h2: (props) => <h2 className="text-3xl font-bold  mb-8 mt-16" {...props} />,
            h3: (props) => <h3 className="text-2xl font-bold text-[#d1d5db]  mb-8 mt-16" {...props} />,
            li: (props) => <li className="my-2 pl-1 ml-8 text-[#d1d5db] list-disc" {...props} />,
            p: (props) => <p className="my-2  text-[#d1d5db] list-disc" {...props} />,
          }}>
          {projectData.content}
        </ReactMarkdown>
      </div>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default ProjectPage;
