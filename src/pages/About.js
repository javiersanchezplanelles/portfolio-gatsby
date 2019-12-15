import React from "react";
import { Link } from "gatsby";
import "../styles/About.scss";

function About() {
    return(
        <div className="About">
            <h2>My coding journey</h2>
            <p>Graduating in Media and Graphic Design gave me my first taste of Web Design, 
            but it wasn't until a bit later when I decided to teach myself through books and
            online resources that I found out this is what I wanted to specialize in.
            Working on personal projects for fun and practice is a wonderful experience that allows us 
            to be creative and step up our game, as well as challenging our thinking too.
            I've been having a lot of fun learning React and Gatsby for my portfolio revamp!</p>
            <p>I got accepted in an internship program in a cool web agency in Brighton and then was taken on afterwards 
            as a Front end developer, where I continue improving my skills in CSS, HTML and JavaScript.</p>

            <h2>In my free time...</h2>
            <p>Whenever I'm not typing away, you can find me by the 
            beach sunbathing or catching some waves, discovering a cool place or just relaxing 
            while indulging in a good book. Also, I love trying out all the different cuisines 
            Brighton has to offer - Thai and Vietnamese being two of my favourite ones!</p>
        </div>
    )
}

export default About;