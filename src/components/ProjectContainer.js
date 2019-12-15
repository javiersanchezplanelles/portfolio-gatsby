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
                    stack: 'HTML, CSS, JavaScript',
                    info: 'Drag and drop the correct answer and check how much of a paleonthologist you are!',
                    image: 'https://res.cloudinary.com/dovbrtmkv/image/upload/v1508778486/Portfolio/jurassicgame.png'
                },
                {
                    name: 'Weather app',
                    stack: 'HTML, CSS, JavaScript',
                    info: 'Check the weather on this tv-like app!',
                    image: 'https://res.cloudinary.com/dovbrtmkv/image/upload/v1496140339/Portfolio/weatherAppPic.png'
                },
                {
                    name: 'Todo list',
                    stack: 'HTML, CSS, jQuery',
                    info: 'Your classic todo list app',
                    image: 'https://res.cloudinary.com/dovbrtmkv/image/upload/v1496140338/Portfolio/toDoList.png'
                }
            ]
        };
    }

    render() {
        return (
            <div className="Project__Container">
                {this.state.projects.map((project, k) => (
                    <ProjectCard key={k} name={project.name} stack={project.stack} info={project.info} image={project.image} />
                ))}
            </div>
        )  
    }
}

export default ProjectContainer;