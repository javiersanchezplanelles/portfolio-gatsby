import React from "react";
import Layout from "../components/Layout";
import ProjectContainer from "../components/ProjectContainer";
import Particles from "react-particles-js";
import Greeting from "../components/Greeting";
import "../styles/Home.scss";

function Home() {
    return(    
        <Layout>
            <div className="Home">
                <Particles
                    width="100%"
                    height="100%" 
                    params={{
                        "particles": {
                        "number": {
                            "value": 50,
                            "density": {
                            "enable": true,
                            "value_area": 868.0624057955
                            }
                        },
                        "color": {
                            "value": "#2c872c"
                        },
                        "shape": {
                            "type": "circle",
                            "stroke": {
                            "width": 0,
                            "color": "#000000"
                            },
                            "polygon": {
                            "nb_sides": 5
                            },
                            "image": {
                            "src": "img/github.svg",
                            "width": 100,
                            "height": 100
                            }
                        },
                        "opacity": {
                            "value": 0.8,
                            "random": true,
                            "anim": {
                            "enable": false,
                            "speed": 1,
                            "opacity_min": 0.1,
                            "sync": false
                            }
                        },
                        "size": {
                            "value": 3,
                            "random": true,
                            "anim": {
                            "enable": false,
                            "speed": 40,
                            "size_min": 0.1,
                            "sync": false
                            }
                        },
                        "line_linked": {
                            "enable": true,
                            "distance": 150,
                            "color": "#2c872c",
                            "opacity": 0.4,
                            "width": 1
                        },
                        "move": {
                            "enable": true,
                            "speed": 5,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out",
                            "bounce": false,
                            "attract": {
                            "enable": false,
                            "rotateX": 600,
                            "rotateY": 1200
                            }
                        }
                        },
                        "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                            "enable": false,
                            "mode": "grab"
                            },
                            "onclick": {
                            "enable": true,
                            "mode": "push"
                            },
                            "resize": true
                        },
                        "modes": {
                            "grab": {
                            "distance": 400,
                            "line_linked": {
                                "opacity": 1
                            }
                            },
                            "bubble": {
                            "distance": 400,
                            "size": 40,
                            "duration": 2,
                            "opacity": 8,
                            "speed": 3
                            },
                            "repulse": {
                            "distance": 200,
                            "duration": 0.4
                            },
                            "push": {
                            "particles_nb": 4
                            },
                            "remove": {
                            "particles_nb": 2
                            }
                        }
                        },
                        "retina_detect": true
                    }}
                    style={{
                        "backgroundColor":"beige",
                        "position": "absolute",
                        "width": "100%",
                        "height": "100%"
                    }}>                    
                </Particles>
                <Greeting /> 
                <ProjectContainer />
            </div>
        </Layout>
    )
}

export default Home;