import React from 'react'
import Image from 'next/image'
import github from '../assets/github-img.png'
import socialDonor from '../assets/social-img.png'
import hotela from '../assets/hotela-img.png'

const Project = () => {
  const projects = [
    {
      id: 1,
      title: "Github User",
      description: "This website makes use of Github open-source API's, that allows users to search their own profile.",
      image: github, // Placeholder for Github User project image
      codeLink: "#",
      liveLink: "#"
    },
    {
      id: 2,
      title: "Social Donor",
      description: "This website makes use of Github open-source API’s, that allows users to search their own profile as",
      image: socialDonor, // Placeholder for Social Donor project image
      codeLink: "#",
      liveLink: "#"
    },
    {
      id: 3,
      title: "Hotela",
      description: "Hotela is a hotel booking website that allows users to book rooms and apartments that hotela offers",
      image: hotela, // Placeholder for third project image
      codeLink: "#",
      liveLink: "#"
    }
  ];

  return (
    <section id="projects" className='max-w-[1200px] mx-auto mt-20 px-8'>
      <h1 className='text-4xl md:text-5xl font-heading font-bold tracking-tight text-start mb-16'>
        <span className='text-[#2BC1EA]'>Projects</span>
      </h1>
      
      <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center'>
        {projects.map((project) => (
          <div 
            key={project.id}
            className='bg-[#002E52]  rounded-lg shadow-lg overflow-hidden  w-full transform transition-all duration-300 hover:scale-110 hover:shadow-2xl cursor-pointer'
          >
            {/* Project Image */}
            <div className='relative h-48 bg-gray-200 overflow-hidden'>
              <Image
                src={project.image}
                alt={project.title}
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 380px"
                className='object-cover'
              />
            </div>
            
            {/* Project Content */}
            <div className='p-6'>
              <h3 className='text-2xl md:text-3xl font-heading font-bold text-white mb-3 tracking-tight'>
                {project.title}
              </h3>
              <p className='text-gray-300 text-base md:text-lg mb-6 leading-relaxed font-body'>
                {project.description}
              </p>
              
              {/* Action Buttons */}
              <div className='flex gap-3'>
                <a
                  href={project.codeLink}
                  className='bg-[#2BC1EA] text-white px-6 py-2 rounded-md font-bold text-base hover:bg-[#25a8cc] transition-all duration-200 font-body'
                >
                  Code
                </a>
                <a
                  href={project.liveLink}
                  className='bg-[#2BC1EA] text-white px-6 py-2 rounded-md font-bold text-base hover:bg-[#25a8cc] transition-all duration-200 font-body'
                >
                  Live
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}

export default Project