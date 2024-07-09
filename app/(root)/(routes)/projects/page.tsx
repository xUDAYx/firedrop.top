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
        <h1 className='text-center text-white text-5xl mb-1 mt-24 font-bold'>PROJECT ON DEMAND</h1>
        <p className='text-center my-0 text-gray3'>Custom Projects Delivered On Demand</p>

        {/* gray bar  */}
        <div className="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-[#464f57] to-[#6c7882] rounded-full"></div>
        <div className="flex flex-col items-center">
          <li className="list-none p-0 w-[320px] m-4">
            <article className="overflow-hidden shadow-xl bg-[#2a2e35] hover:scale-105 rounded-xl transition-transform ease-in-out duration-500 relative my-10">
              <div className="price-tag bg-green-600 text-white px-4 py-2 rounded-bl-lg absolute top-0 right-0 shadow-md shadow-[#000000]">
                &#8377; 
              </div>
              <a href="/paymentgatway" className="no-underline">
                <img
                  src="/img/himom.gif"
                  alt="Project on demand"
                  width="350"
                  height="196.883"
                  className="w-full m-0 mb-1 rounded-t-xl"
                />
                <section className="p-5 bg-[#2a2e35]">
                  <h5 className=" uppercase text-amber-400 text-[20px] font-bold mb-2">Project on demand</h5>
                  <p className="text-gray-400 min-h-[90px]"> Custom Solutions Crafted Just for You!</p>
                  <div className="flex flex-wrap">
                    <span className="tag tag-react px-2 py-1 rounded-md mr-2 mb-2 text-sm">
                      #built diffrent
                    </span>
                    
                  </div>
                </section>
              </a>
            </article>
          </li>
        </div>
        {/* gray bar  */}
        <div className="mx-auto w-24 h-1 my-12 bg-gradient-to-r from-[#464f57] to-[#6c7882] rounded-full"></div>

        {/* Heading */}
        <h1 className='text-center text-white text-5xl mb-1 mt-24 font-bold'>PROJECTS</h1>
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
