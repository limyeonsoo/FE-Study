import React from "react";
import "../css/Project.css";
import Zoom from 'react-medium-image-zoom';
import 'react-medium-image-zoom/dist/styles.css'
import projects from "../data/Project";
import { useFadeIn } from "./useFadeIn";

function Project() {
    const FadeIn = useFadeIn(5, 0);

    return (
        <div className="project_container">
            <h2 className="project_header">Projects</h2>
            <div className="project_each">
                <div className="project_row">
                    {   projects &&
                        projects.map((project, index) => (        
                            <div key={index} id={project.id} className="project_data">
                                
                                <div className="project_img">
                                    <Zoom>
                                    <img src={project.img} alt="project_img" width="300" height="300"></img>
                                    </Zoom>
                                </div>

                                <div className="project_info">
                                    <h3>{project.title}</h3>
                                    <p>{project.summary}</p>
                                    <a href={project.link}  rel="noopener noreferrer" target="_blank" title="View Github">View Project</a>
                                </div>

                            </div>

                        ))
                        
                    }
                </div>
            </div>
        </div>
    );
}

export default Project;

// function Project() {
//     const onclick = () => {
//         console.log("dd");
//     }
//     const useclick = useClick(onclick);

//     const listItem = projects.map((project, index) => (
//         <div  key={index} id={project.id} className="project_data">
            
//             <div ref={useclick} className="project_img">
//                 <img src={project.img} alt="project_img" width="300" height="300"></img>
//             </div>

//             <div className="project_info">
//                 <h3>{project.title}</h3>
//                 <p>{project.summary}</p>
//                 <a href={project.link}  rel="noopener noreferrer" target="_blank" title="View Github">View Project</a>
//             </div>

//         </div>
//     ))
//     return (
//         <div className="project_container">
//             <h2 className="project_header">Projects</h2>
//             <div className="project_each">
//                 <div className="project_row">
//                     {

//                         <ul>
//                             {listItem}
//                         </ul>
                        
//                     }
//                 </div>
//             </div>
//         </div>
//     );
// }