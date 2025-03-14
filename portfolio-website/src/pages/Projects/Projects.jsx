// import React from 'react'
// import "./Projects.css"
// const Projects = () => {
//   return (
//     <>
//     <div className="container project" id="project">
//     <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
//       TOP RECENT PROJECTS</h2>
//        <hr/>
//        <p className="pb-3 text-center">
//         Lorem, ipsum dolor sit amet consectetur adipisicing elit. 
//         Minima vitae ullam adipisci alias totam vero, rem laboriosam 
//         quaerat eius id iure, excepturi sapiente vel quos corrupti voluptates quo illum odio!
//         </p> 
//         <div className="row" id="ads">
//             <div className="col-md-4">
//               <div className="card rounded">
//                 <div className="card-image">
//                   <div className="card-notify-badge">
//                     <span className="card-notify-badge">
//                       Full Stack
//                     </span>
//                     <img src="https://www.rankontechnologies.com/wp-content/uploads/2024/01/What-is-Ecommerce-Actually.jpg" alt="project1"/>
//                     <div className="card-image-overly m-auto mt-3">
//                       <span className="card-detail-badge">Node</span>
//                       <span className="card-detail-badge">Express</span>
//                       <span className="card-detail-badge">react</span>
//                       <span className="card-detail-badge">Mongodb</span>
//                     </div>
//                     <div className="card-body text-center">
//                       <div className="ad-title m-auto">
//                         <h5 className="text-uppercase">Techinfoyt Shopping Website</h5>
//                       </div>
//                       <a className="ad-btn" href="#">View</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card rounded">
//                 <div className="card-image">
//                   <div className="card-notify-badge">
//                     <span className="card-notify-badge">
//                       Full Stack
//                     </span>
//                     <img src="https://www.rankontechnologies.com/wp-content/uploads/2024/01/What-is-Ecommerce-Actually.jpg" alt="project1"/>
//                     <div className="card-image-overly m-auto mt-3">
//                       <span className="card-detail-badge">Node</span>
//                       <span className="card-detail-badge">Express</span>
//                       <span className="card-detail-badge">react</span>
//                       <span className="card-detail-badge">Mongodb</span>
//                     </div>
//                     <div className="card-body text-center">
//                       <div className="ad-title m-auto">
//                         <h5 className="text-uppercase">Techinfoyt Shopping Website</h5>
//                       </div>
//                       <a className="ad-btn" href="#">View</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//             <div className="col-md-4">
//               <div className="card rounded">
//                 <div className="card-image">
//                   <div className="card-notify-badge">
//                     <span className="card-notify-badge">
//                       Full Stack
//                     </span>
//                     <img src="https://www.rankontechnologies.com/wp-content/uploads/2024/01/What-is-Ecommerce-Actually.jpg" alt="project1"/>
//                     <div className="card-image-overly m-auto mt-3">
//                       <span className="card-detail-badge">Node</span>
//                       <span className="card-detail-badge">Express</span>
//                       <span className="card-detail-badge">react</span>
//                       <span className="card-detail-badge">Mongodb</span>
//                     </div>
//                     <div className="card-body text-center">
//                       <div className="ad-title m-auto">
//                         <h5 className="text-uppercase">Techinfoyt Shopping Website</h5>
//                       </div>
//                       <a className="ad-btn" href="#">View</a>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//         </div>
//     </div>
//     </>
    
//   )
// }
// export default Projects
import React from "react";
import "./Projects.css";
import Spin from 'react-reveal/Spin';
const projectsData = [
  {
    title: "Techinfoyt Shopping Website",
    image: "https://www.rankontechnologies.com/wp-content/uploads/2024/01/What-is-Ecommerce-Actually.jpg",
    technologies: ["Node", "Express", "React", "MongoDB"],
  },
  {
    title: "Portfolio Website",
    image: "https://www.rankontechnologies.com/wp-content/uploads/2024/01/What-is-Ecommerce-Actually.jpg",
    technologies: ["React", "Tailwind", "JavaScript"],
  },
  {
    title: "E-commerce Dashboard",
    image: "https://www.rankontechnologies.com/wp-content/uploads/2024/01/What-is-Ecommerce-Actually.jpg",
    technologies: ["Next.js", "GraphQL", "PostgreSQL"],
  },
];

const Projects = () => {
  return (
    <div className="container project" id="project">
      <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
        TOP RECENT PROJECTS
      </h2>
      <hr />
      <p className="pb-3 text-center">
        Explore some of my latest projects showcasing my skills in full-stack development.
      </p>
      <div className="row" id="ads">

        {projectsData.map((project, index) => (
          <Spin>
          <div className="col-md-4" key={index}>
            <div className="card rounded">
              <div className="card-image">
                <img src={project.image} alt={project.title} />
                <div className="card-notify-badge">Full Stack</div>
                <div className="card-image-overlay m-auto mt-3">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="card-detail-badge">{tech}</span>
                  ))}
                </div>
              </div>
              <div className="card-body text-center">
                <h5 className="text-uppercase">{project.title}</h5>
                <a className="ad-btn" href="view">View</a>
              </div>
            </div>
          </div>
          </Spin>
        ))}
      </div>
    </div>
  );
};

export default Projects;
