import React from "react";
import ProjectCard from "./ProjectCard";
import "../styles/ProjectContainer.scss";

class ProjectContainer extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            personalProjects: [
                {
                    name: "Dino app",
                    stack: "HTML, CSS, JavaScript",
                    info: "Drag and drop the correct answer and check how much of a paleonthologist you are!",
                    image: "https://res.cloudinary.com/dovbrtmkv/image/upload/v1508778486/Portfolio/jurassicgame.png",
                    link: "https://jurassicgame.herokuapp.com/"
                },
                {
                    name: "Weather app",
                    stack: "HTML, CSS, JavaScript",
                    info: "Check the weather on this tv-like app!",
                    image: "https://res.cloudinary.com/dovbrtmkv/image/upload/v1496140339/Portfolio/weatherAppPic.png",
                    link : "https://codepen.io/javisp91/full/yMdBWW/"
                },
                {
                    name: "Todo list",
                    stack: "HTML, CSS, jQuery",
                    info: "Your classic todo list app",
                    image: "https://res.cloudinary.com/dovbrtmkv/image/upload/v1496140338/Portfolio/toDoList.png",
                    link: "https://codepen.io/javisp91/full/oWyJVZ/"
                }
            ],
            commercialProjects: [
                {
                    name: "JRNI",
                    stack: "HTML, CSS, JavaScript",
                    image: "https://res.cloudinary.com/dovbrtmkv/image/upload/v1576841660/Portfolio/jrni.png",
                    link: "https://www.jrni.com/"
                },
                {
                    name: "Naked leaf",
                    stack: "HTML, CSS, JavaScript",
                    image: "https://res.cloudinary.com/dovbrtmkv/image/upload/v1576841427/Portfolio/nakedleaf.png",
                    link : "https://nakedleaf.org/"
                },
                {
                    name: "Mother",
                    stack: "HTML, CSS, JavaScript",
                    image: "https://res.cloudinary.com/dovbrtmkv/image/upload/v1576841123/Portfolio/mother.png",
                    link: "https://www.thisismother.com/"
                },
                {
                    name: "Fairwinds",
                    stack: "HTML, CSS, JavaScript",
                    image: "https://res.cloudinary.com/dovbrtmkv/image/upload/v1576861685/Portfolio/fairwinds.png",
                    link: "https://www.fairwinds.com/"
                },
                {
                    name: "Boxfusion",
                    stack: "HTML, CSS, JavaScript",
                    image: "https://res.cloudinary.com/dovbrtmkv/image/upload/v1576861709/Portfolio/boxfusion.png",
                    link : "https://www.boxfusionconsulting.com/"
                },
                {
                    name: "MobilityGiant",
                    stack: "HTML, CSS, JavaScript",
                    image: "https://res.cloudinary.com/dovbrtmkv/image/upload/v1576861722/Portfolio/mobilitygiant.png",
                    link: "https://www.mobilitygiant.co.uk/"
                }
            ]
        };
    }

    render() {
        return (
            <div className="Project__Container">
                <h2>Sites I have helped build.</h2>
                {this.state.commercialProjects.map((project, k) => (
                    <ProjectCard key={k} name={project.name} stack={project.stack} info={project.info} image={project.image} link={project.link} />
                ))}
                <h2>Personal projects. Check my <a href="https://codepen.io/javisp91">codepen</a> to see more.</h2>
                {this.state.personalProjects.map((project, k) => (
                    <ProjectCard key={k} name={project.name} stack={project.stack} info={project.info} image={project.image} link={project.link} />
                ))}
            </div>
        )  
    }
}

export default ProjectContainer;