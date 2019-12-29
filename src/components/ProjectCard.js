import React from "react";

function ProjectCard(props) {
    return(
        <div className="Project__Card">
            <a href={props.link}>
                <div className="Project__Card__Image">
                    <img src={props.image} alt="" />
                </div>
                <div className="Project__Card__Content">
                    <p className="Project__Card__Content__Title">{props.name}</p>
                    <p>{props.stack}</p>
                    <p>{props.info}</p>
                </div>
            </a>
        </div> 
    )
}

export default ProjectCard