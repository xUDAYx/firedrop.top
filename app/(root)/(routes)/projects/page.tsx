import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjectData } from '@/lib/projects';
import { Footer } from '@/components/footer';

export default function ProjectsPage() {
  const allProjectData: any = getAllProjectData();

  return (
    <div>
      <div className=' mb-8 mt-20'>
        <h1 className='text-center text-white text-5xl mb-1 font-bold'>PROJECTS</h1>
        <p className='text-center my-0 text-gray3'>Get your project done in a day not months</p>
        <div className="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-[#464f57] to-[#6c7882] rounded-full"></div>
        <div>
        <ul className="flex flex-wrap justify-items-center gap-4 px-14">
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
      <Footer />
    </div>
  );
}
