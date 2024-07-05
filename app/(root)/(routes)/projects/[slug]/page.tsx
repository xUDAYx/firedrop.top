import React from 'react';
import { Footer } from '@/components/footer';
import ScrollUp from '@/components/ui/scroll-up';

interface Project {
  title: string;
  description: string;
  slug: string;
  imageUrl: string;
  // Add any other relevant properties
}

const projects: Project[] = [
  {
    title: 'Project 1',
    description: 'This is the first project',
    slug: 'project-1',
    imageUrl: '/images/project1.jpg',
  },
  {
    title: 'Project 2',
    description: 'This is the second project',
    slug: 'project-2',
    imageUrl: '/images/project2.jpg',
  },
  // Add more projects here
];

interface ProjectDetailPageProps {
  params: {
    slug: string;
  };
}

const ProjectDetailPage: React.FC<ProjectDetailPageProps> = ({ params }) => {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <>
      <div>
        <h1>{project.title}</h1>
        <img src={project.imageUrl} alt={project.title} />
        <p>{project.description}</p>
        {/* Add any other project details */}
      </div>
      <Footer />
      <ScrollUp />
    </>
  );
};

export default ProjectDetailPage;
