import React from 'react'
import range from "../images/range.png"
import collegeplus from "../images/collegeplus.png"
import lyfehere from "../images/lyfehere.png"
import covidplanner from "../images/covidplanner.gif"

import {PopupManager, PopupboxContainer, PopupboxManager} from "react-popupbox";
import "react-popupbox/dist/react-popupbox.css";

const Portfolio = () => {

    //range
    const openPopupboxRange = () => {
        const content = (
        <>
            <img className = "portfolio-image-popupbox" src={range}/>
            <p>Professional business website used to sell tickets and promote live shows and online content.</p>
            <b>Live Site:</b> <a className="hyper-link" onClick={() => window.open("https://therangelc.com/")}>https://therangelc.com/</a>
        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigRange ={
        titleBar: {
            enable: true,
            text:"The Range"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }



     //collegeplus
     const openPopupboxCollegeplus = () => {
        const content = (
        <>
            <img className = "portfolio-image-popupbox" src={collegeplus}/>
            <p>Website and moblile application designed to help graduating high-school students find the right pathway into secondary education.</p>
            <b>Live Site:</b> <a className="hyper-link" onClick={() => window.open("https://collegeplus.us/home")}>https://collegeplus.us/home</a>
            <b>App Store:</b> <a className="hyper-link" onClick={() => window.open("https://apps.apple.com/us/app/collegeplus/id1523141497")}>https://apps.apple.com/us/app/collegeplus/id1523141497</a>

        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigCollegeplus ={
        titleBar: {
            enable: true,
            text:"CollegePlus"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }



    
     //lyfehere
     const openPopupboxLyfehere = () => {
        const content = (
        <>
            <img className = "portfolio-image-popupbox" src={lyfehere}/>
            <p>Website I've been developing with colleauges from my time at Google. The mission with this platform is to boost local business online exposure and followings.</p>
            <b>Live Site:</b> <a className="hyper-link" onClick={() => window.open("https://lyfehere.com/places/LasCrucesNM")}>https://lyfehere.com/places/LasCrucesNM</a>

        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigLyfeHere ={
        titleBar: {
            enable: true,
            text:"LyfeHere"
        },
        fadeIn: true,
        fadeInSpeed: 500
    }



    
     //covid planner
     const openPopupboxCovidplanner = () => {
        const content = (
        <>
            <img className = "portfolio-image-popupbox" src={covidplanner}/>
            <p>Website that I helped develop as part of one of my group projects at UTA.</p>
            <b>Github:</b> <a className="hyper-link" onClick={() => window.open("https://github.com/jrod3323/Covid_Travel_Planner")}>https://github.com/jrod3323/Covid_Travel_Planner</a>

        </>
        )
        PopupboxManager.open({content})
    }

    const popupboxConfigCovidplanner ={
        titleBar: {
            enable: true,
            text:"Covid Travel Planner",
        },
        fadeIn: true,
        fadeInSpeed: 500
    }





    return (
        <div className="portfolio-wrapper">
            <div className="container">
                <h1 className="text-uppercase text-center py-5">portfolio</h1>
                <div className="image-box-wrapper row justify-content-center">

                    <div className="portfolio-image-box" onClick={openPopupboxRange}>
                         <img className="portfolio-image" src={range}/>
                    </div>
                    <div className="overflow"></div>

              
                     <div className="portfolio-image-box" onClick={openPopupboxCollegeplus}>
                        <img className="portfolio-image" src={collegeplus}/>
                    </div>
                    <div className="overflow"></div>

        
                    <div className="portfolio-image-box" onClick={openPopupboxLyfehere}>   
                         <img className="portfolio-image" src={lyfehere}/>
                    </div>
                    <div className="overflow"></div>

                
                    <div className="portfolio-image-box" onClick={openPopupboxCovidplanner}>
                        <img className="portfolio-image" src={covidplanner}/>
                    </div>
                    <div className="overflow"></div>
                </div>
            </div>
            <PopupboxContainer {...popupboxConfigRange}/>
            <PopupboxContainer {...popupboxConfigCollegeplus}/>
            <PopupboxContainer {...popupboxConfigLyfeHere}/>
            <PopupboxContainer {...popupboxConfigCovidplanner}/>


        </div>
    )
}

export default Portfolio
