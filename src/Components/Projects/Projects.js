import React, { useEffect, useState } from 'react';
import Project from '../Project/Project';
import './Projects.css'

const Projects = () => {
    const [projects, setProjects] = useState([]);
    // data Load
    useEffect(() => {
        fetch('../project.JSON')
            .then(res => res.json())
            .then(data => setProjects(data))
    }, [])
    return (
        <div className="projects">
            <h2 className="p-text"><u>My Recent Projects</u></h2>
            <div className="row row-cols-1 row-cols-md-3 g-4 p-col ">


                {
                    projects.map(Projects => <Project
                        project={Projects}
                        key={Projects.id}
                    >

                    </Project>
                    )
                }
            </div>
        </div>
    );
};

export default Projects;