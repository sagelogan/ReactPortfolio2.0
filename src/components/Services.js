import React from 'react'
import { BrowserRouter as Router, Route, Switch, Link} from "react-router-dom";

const Services = () => {
    return (
        <div id="services" className="services">
            <div className="py-5">
                <div className="container">
                    <div className="row">
                        
                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Web Development</h3>
                                <p>I use proven development techniques and technologies from my education to craft the perfect site for you.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Web Design</h3>
                                <p>Modern aesthetics, clean user interface and responsive sites are an essential export to my customers.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Video Production</h3>
                                <p>My team of videographers and I can work with you to create anything from an amazing advertisement to a music video.</p>
                            </div>
                        </div>

                        <div className="col-md-3 col-sm-6">
                            <div className="box">
                                <h3>Event Production</h3>
                                <p>My work at The Range has prepared me for producing small and big events alike.</p>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services
