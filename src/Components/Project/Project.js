import React from 'react';
import { Link } from 'react-router-dom';
import './Project.css'

const Project = (props) => {
    const { id, name, img, technology, live, git } = props.project || {};
    return (
        <div >

            <div className="card h-100">
                <img src={img} className="img" alt="..." />
                <div className="card-body">
                    <h5 className="card-text"> {name}</h5>
                    <ul>
                        <li>{technology}</li>

                    </ul>
                    <button className="pr-btn"><a className="pr-hre" href={live} target='_blank'>live Link</a></button>

                    <button className="pr-btn"><a className="pr-hre" href={git} target='_blank'>Git Link</a></button>
                    {/* <Link to={`/project/${id}`}>Explore Now</Link> */}
                </div>
            </div>
        </div>
    );
};

export default Project;