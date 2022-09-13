import React from 'react'
import GitHubIcon from '@material-ui/icons/GitHub'
import OpenInNewIcon from '@material-ui/icons/OpenInNew'
import Ecommerce from '../images/ecommerce.png'
import Exercise from '../images/quiz app.png'
const projectsData = [
    {
      title: "Responsive ECommerce App ",
      description:
        "A responsive (SPA) Ecommerce app created using React JS which displays carted items.",
      imageUrl:Ecommerce,
      imageAlt: "Project 1 Image",
      tags: ["Reactjs", "Material-UI", "Redux","Firebase"],
      links: [
        {
          icon: GitHubIcon,
          href: "https://github.com/aryalechu98/e-commerce",
        },
        {
          icon: OpenInNewIcon,
          href: "https://my-e-commerce-shopping.web.app/",
        },
      ],
    },
    {
      title: "Quiz App",
      description:
        "A responsive Quiz App which supports both desktop and mobile view",
      imageAlt: "quiz ",
      imageUrl:Exercise,
      tags: ["HTML", "CSS", "JavaScript",],
      links: [
        {
          icon: GitHubIcon,
          href: "https://github.com/aryalechu98/Quiz-app",
        },
        {
          icon: OpenInNewIcon,
          href: "https://quiz-app-12650.web.app/",
        },
      ],
    },
   
    
  ];
  
  
export default projectsData