import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectContainer.scss";
import { tsConstructorType } from "@babel/types";

class ProjectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            projects: [
                {
                    name: 'Dino app',
                    stack: 'HTML, CSS, JS',
                    info: 'Drag and drop the correct answer and check how much of a paleonthologist you are!'
                },
                {
                    name: 'Todo list',
                    stack: 'HTML, CSS, ReactJS',
                    info: 'Your classic todo list powered with React.'
                }
            ]
        };
    }

    render() {
        return (
            <div className="Project__Container">
                {this.state.projects.map((project, k) => (
                    <ProjectCard key={k} name={project.name} stack={project.stack} info={project.info} />
                ))}
            </div>
        )  
    }
}

export default ProjectContainer;