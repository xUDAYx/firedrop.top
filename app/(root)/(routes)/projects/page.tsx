import React from 'react';
import ProjectCard from '@/components/ProjectCard';
import { getAllProjectData } from '@/lib/projects';
import { Footer } from '@/components/footer';






























export default function ProjectsPage() {
  const allProjectData: any = getAllProjectData();

  return (
    <div>
      <div className='text-center mb-8 mt-20'>
        <h1 className='text-white text-5xl mb-1 font-bold'>PROJECTS</h1>
        <p className='my-0 text-gray3'>Get your project done in a day not months</p>
      </div>
      <div className="project-list">
        <ul className="grid-list justify-items-center pl-0">
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
      <Footer />
    </div>
  );
}
