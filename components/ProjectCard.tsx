// components/ProjectCard.tsx
import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  project: {
    slug: string;
    imageUrl: string;
    title: string;
    description: string;
    price: number;
    tags: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const getTagStyles = (tag: string) => {
    switch (tag.toLowerCase()) {
      case 'gradio':
        return 'bg-[#fd7b00] text-white';
      case 'research paper':
        return 'bg-[#0095fd] text-white';
      default:
        return 'bg-gray-700 text-gray-400';
    }
  };

  return (
    <div className="">
      <li className="list-none p-0 w-[350px] m-4 ">

        <article className="overflow-hidden shadow-xl bg-[#2a2e35] hover:scale-105 rounded-xl transition-transform ease-in-out duration-500 relative my-10">
          <div className="price-tag bg-green-600 text-white px-4 py-2 rounded-bl-lg absolute top-0 right-0 shadow-md shadow-[#000000]">
            &#8377; {project.price}
          </div>
          <Link href={`/projects/${project.slug}`} className="no-underline">
            <Image
              src={project.imageUrl}
              alt={project.title}
              width={350}
              height={225}
              className="w-full m-0 mb-1 rounded-t-xl"
            />
            <section className="p-5 bg-[#2a2e35]">
              <h5 className="text-white uppercase text-[20px] font-bold mb-2">{project.title}</h5>
              <p className="text-gray-400 min-h-[90px]">{project.description}</p>
              {project.tags && (
                <div className="flex flex-wrap">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`px-2 py-1 rounded-md mr-2 mb-2 text-xs ${getTagStyles(tag)}`}
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}
            </section>
          </Link>
        </article>
      </li>
    </div>
  );
};

export default ProjectCard;
