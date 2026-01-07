"use client"
import { useState } from 'react'
import ProjectCard from './ProjectCard'
import ProjectTag from './ProjectTag'

const projectsData = [
    {
        id: 1,
        title: 'Uzoefuna Benson Portfolio Website',
        description: 'Uzoefuna Benson Portfolio Website serves as an online showcase of Uzoefuna Benson professional journey, skills, and accomplishments as a Full-Stack Software Developer. This platform offers visitors a glimpse into Uzoefuna expertise through an elegant and interactive interface, highlighting projects, expertise in various technologies, and a comprehensive overview of skills and experiences.',
        image: "Capture11111.PNG",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Benson-xix/Uzoefuna-Benson",
        previewUrl: "https://uzoefuna-benson.vercel.app/"
    },
   
    {
        id: 2,
        title: 'Mini Mart E-commerce Website',
        description: 'Mini Mart E-commerce Website" is a digital marketplace providing a seamless shopping experience akin to a neighborhood mini mart. Offering a wide array of everyday essentials, groceries, household items, snacks, and beverages, this platform aims to deliver convenience and accessibility to users. With user-friendly navigation, detailed product information, and a secure checkout process, customers can effortlessly browse, add items to their cart, and complete transactions online.',
        image: "Screenshot2024-01-0303602.PNG",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Benson-xix/Mini-Mart",
        previewUrl: "http://mini-mart.vercel.app/"
    },
    {
        id: 3,
        title: 'Relax E-commerce Website',
        description: 'Relax E-commerce Website" is a digital platform designed to offer a tranquil and stress-free online shopping experience for customers seeking relaxation and wellness products.',
        image: "Capture122.PNG",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Benson-xix/Relax-App",
        previewUrl: "https://relax-app-blond.vercel.app/"
    },
    {
        id: 4,
        title: 'Nox Banking App',
        description: 'Nox Banking App is a cutting-edge mobile application revolutionizing traditional banking by offering a seamless and secure digital banking experience to users. With a sleek interface and advanced functionalities, this app provides comprehensive financial services, including account management, transaction tracking, budgeting tools, and personalized financial insights.',
        image: "Capture.PNG",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Benson-xix/Banking",
        previewUrl: "https://banking-benson.vercel.app/"
    },
    {
        id: 5,
        title: 'Manhwa API DATABASE',
        description: 'Manhwa API Database is a centralized repository of structured data and information related to Manhwa, which are Korean comics or graphic novels. This database serves as a comprehensive and organized collection of Manhwa titles, chapters, authors, genres, release dates, summaries, and other relevant metadata. Accessible through an Application Programming Interface (API), it enables developers, enthusiasts, and platforms to retrieve, update, and utilize Manhwa-related information programmatically.',
        image: "Capture222.PNG",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Benson-xix/Database-next",
        previewUrl: "https://database-next-c85m.vercel.app/"
    },
   
    {
        id: 6,
        title: 'Prime Labs Tech Web App',
        description: 'Prime Labs Tech Web App is a dynamic and sophisticated online platform developed by Prime Labs Technology, aimed at providing innovative solutions in the tech industry.',
        image: "Capture5555.PNG",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Benson-xix/PrimeLabs",
        previewUrl: "https://prime-labs.vercel.app/"
    },

    

    {
        id: 7,
        title: 'Youtub Clone',
        description: 'YouTub Clone is a web application that replicates the static, also some functionalities and features of YouTube, the popular video-sharing platform. ',
        image: "Capture4444.PNG",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Benson-xix/youtub-clone",
        previewUrl: "http://youtub-clone.vercel.app/"
    },

      {
        id: 8,
        title: 'Frontend Crm',
        description: 'A Frontend Crm Web Design With Interactive Tooltips, Sliders, and Responsive Components',
        image: "CRM.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Benson-xix/Frontend-CRM-Project",
        previewUrl: "https://frontend-crm-project.vercel.app/"
    },
     {
        id: 9,
        title: 'Qodebyte',
        description: 'A Web app interface for Qodebyte Digital Solutions',
        image: "CRM.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Benson-xix",
        previewUrl: "https://qodebyte.com/"
    },

      {
        id: 10,
        title: 'Paws-and-Play-Store',
        description: 'An Ecomerece Web app for find shelters for varieties of Pets ',
        image: "CRM.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Benson-xix/Paws-and-Play-Store",
        previewUrl: "https://paws-and-play-store.vercel.app/"
    },

      {
        id: 11,
        title: 'Primelabs digital temeplate app',
        description: 'A Digital Asset  Web app to sell templates and other digital assests ',
        image: "CRM.png",
        tag: ["All", "Web"],
        gitUrl: "https://github.com/Benson-xix/primelabs-digital-template-app",
        previewUrl: "https://primelabs-digital-template-app.onrender.com/"
    },

]

const ProjectSection = () => {
    const [tag, setTag] = useState("All");
    const handleTagChange = (newTag: string) => {
        setTag(newTag);
    }

    const filteredProjects = projectsData.filter((project) => 
    project.tag.includes(tag) 
    );



  return (
    <>
      <h2 className='text-white text-xl font-semibold'>My Projects</h2>
      <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
       <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"} />
       <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"} />
       <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"}/>
      </div>
      <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
        {filteredProjects.map((project) => <ProjectCard key={project.id} title={project.title} description={project.description} imgUrl={project.image} gitUrl={project.gitUrl} previewUrl={project.previewUrl}/> )}
      </div>
    </>
  )
}

export default ProjectSection
