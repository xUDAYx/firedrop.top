import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

interface ProjectCardProps {
  project: {
    title: string;
    description: string;
    slug: string;
    imageUrl: string;
    price: number;
    tags: string[];
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <li className="list-none p-0">
      <article className="max-w-sm overflow-hidden shadow-xl bg-gray-800 hover:scale-105 rounded-xl transition-transform ease-in-out duration-500 relative">
        <div className="price-tag bg-green-500 text-white px-3 py-1 rounded-br-lg absolute top-0 right-0">
          &#8377; {project.price}
        </div>
        <Link href={`/projects/${project.slug}`} className="no-underline">
          <Image
            src={project.imageUrl}
            alt={project.title}
            width={400}
            height={225}
            className="w-full m-0 mb-1 rounded-t-xl"
          />
          <section className="p-5">
            <h5 className="text-white font-bold mb-2">{project.title}</h5>
            <p className="text-gray-400 min-h-[100px]">{project.description}</p>
            {project.tags && (
              <div className="flex flex-wrap">
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    className="tag tag-firebase bg-gray-700 text-gray-400 px-2 py-1 rounded-md mr-2 mb-2"
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
  );
};

export default ProjectCard;
