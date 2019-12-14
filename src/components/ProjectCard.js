import React from "react";

function ProjectCard(props) {
    return(
        <div className="Project__Card">
            <p>{props.name}</p>
            <p>{props.stack}</p>
            <p>{props.info}</p>
        </div>
    )
}

export default ProjectCard