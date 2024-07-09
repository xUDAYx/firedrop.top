import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjectData } from '@/lib/projects';
import { Footer } from '@/components/footer';

export default function ProjectsPage() {
  const allProjectData: any = getAllProjectData();

  return (
    <div>
      <div>
        {/* Heading */}
        <h1 className='text-center text-white text-5xl mb-1 mt-24 font-bold'>Projects</h1>
        <p className='text-center my-0 text-gray3'>Save hours of debuggin code, build fast, get going!</p>

        {/* gray bar  */}
        <div className="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-[#464f57] to-[#6c7882] rounded-full"></div>

        <div className="max-w-6xl mx-auto"> {/* Added max-w-6xl and mx-auto */}
          <div className="">
            <ul className='flex flex-wrap justify-center'>
              {allProjectData.map((project: any) => (
                <ProjectCard
                  key={project.slug}
                  project={{
                    slug: project.slug,
                    imageUrl: project.imageUrl,
                    title: project.title,
                    description: project.description,
                    price: project.price,
                    tags: project.tags
                  }}
                />
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
