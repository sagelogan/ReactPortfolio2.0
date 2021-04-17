import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

const Experience = () => {
    return (
        <div id="experience" className="experience">
            <div className="d-flex justify-content-center my-5">
            <h1>Experience</h1>
            </div>

            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2019</h3>
                        <p>
                            <ul>
                                 <li>
                                    Founded The Range
                                </li>
                                <li>
                                    Graduated from Centennial High School
                                </li>
                                <li>
                                    Led a team of four researches at NMSU to develop smart home technology
                                </li>
                                <li>
                                    Student AV technician at NMSU
                                </li>
                                <li>
                                    Graduated from Goolge CSSI
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-left">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2020</h3>
                        <p><ul>
                                <li>
                                    Began developing Lyfe Here, a platform dedicated to local business growth and exposure online.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>

            <div className="container experience-wrapper">
                <div className="timeline-block timeline-block-right">
                    <div className="marker"></div>
                    <div className="timeline-content">
                        <h3>2021</h3>
                        <p>
                            <ul>
                                <li>
                                    Graduated from the University of Texas at Austin Full Stack Software Development Bootcamp.
                                </li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Experience
