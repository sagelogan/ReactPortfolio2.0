import React from "react"
import about from "../IMG_6551.JPG";
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

const About = () => {
    return (
        <div id="about" className="container py-5">
            <div  className="row">
                <div className="col-lg-6 col-xm-12">
                    <div className="photo-wrap mb-5">
                     <img className="profile-img" src={about}/>
                    </div>
                </div>
                <div className="col-lg-6 col-xm-12">
                    <h1 className="about-heading">About</h1>
                    <p>
                     I am a 19 year-old business owner and Full Stack Web-Developer. I own The Range, a concert venue and recording studio located in Las Cruces, New Mexico. I co-founded The Range in 2019, months before high-school graduation. The Range hosts live concerts with local and multi-national artists alike. The studio side of the business came after only a few months of hosting shows. Along side general music production for artists we produce live sessions, interviews, and more to our online audience.

                     In 2019 I attended CSSI at Google where I built my inital foundation for Full-stack Web Development and fell in love with building websites to solve problems. In 2020, amidst a global pandemic I attended the University of Texas Austin Full-Stack Bootcamp.
                    </p>
                </div>
            </div>
        </div>
    )
}

export default About
