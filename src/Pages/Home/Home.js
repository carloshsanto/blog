import React from 'react'
import MainVideo from "../../assets/video/video.mp4"
import './Home.css'

const Home = () => {
    return(
        <div className='hero'>
        <video autoPlay loop muted id='video'>
            <source src={MainVideo} type='video/mp4'/>
        </video>
        <div className="hero-text">
            <h1>este e um modelo</h1>
            <h1><span className="blue">Blog </span> LCS</h1>
            <p>Em breve estaremos no ar.</p>            
        </div>
        <div className="bottom-text">
            <h2>Tecnologia</h2>
        </div>
    </div>
    )
}
export default Home