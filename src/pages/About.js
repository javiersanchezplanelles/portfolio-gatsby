import React from "react";
import {Helmet} from "react-helmet";
import Layout from "../components/Layout";
import "../styles/About.scss";

function About() {
    return(
        <Layout>
            <Helmet>
                <title>Javi Sánchez Planelles | About</title>
            </Helmet>
            <div className="About">
                <h2>My coding journey</h2>
                <p>Graduating in Media and Graphic Design gave me my first taste of Web Design, 
                but it wasn't until a bit later when I decided to teach myself through books and
                online resources that I found out this is what I wanted to specialize in.
                Working on personal projects for fun and practice is a wonderful experience that allows us 
                to be creative and step up our game, as well as challenging our thinking too.
                I've been having a lot of fun learning React and Gatsby for my portfolio revamp!</p>
                <p>As I was learning to code I joined <a href="https://codebar.io/brighton">Codebar</a>, a free weekly programming workshop. It's an amazing initiave
                which aims to help people from underrepresented groups in tech learn in a safe environment. Being part of the
                Brighton digital community gave me the opportunity to meet like-minded people and of course learn a great deal 
                thanks to professional coaches.</p>
                <p>I got accepted in an internship program in a cool web agency in Brighton and then was taken on afterwards 
                as a Front end developer, where I continue improving my skills in CSS, HTML and JavaScript.</p>
                <p>I have come full circle and currently volunteer as a coach at Codebar, where I hope to inspire new comers to 
                start a career in tech.</p>

                <h2>In my free time...</h2>
                <p>Whenever I'm not typing away, you can find me by the 
                beach sunbathing or catching some waves, discovering a cool place or just relaxing 
                while indulging in a good book. Also, I love trying out all the different cuisines 
                Brighton has to offer - Thai and Vietnamese being two of my favourite ones!</p>
            </div>
        </Layout>
    )
}

export default About;