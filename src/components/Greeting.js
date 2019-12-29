import React from "react";
import Typed from "react-typed";
import "../styles/Greeting.scss";

class Greeting extends React.Component {
    render() {
        return (
            <div className="Greeting">
                <Typed 
                    strings={['Hello!']}
                    typeSpeed={30}
                    className="Greeting__Title"
                    startDelay={250}
                />
                <p className="Greeting__Subtitle">I'm a Front-end developer based in Brighton, UK.</p>
            </div>
        )
    }
}

export default Greeting;