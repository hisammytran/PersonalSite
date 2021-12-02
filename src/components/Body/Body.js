import React, { useRef, useEffect } from 'react';
import './Body.css';
import ContactForm from '../ContactForm/ContactForm';


// const useMountEffect = fun => useEffect(fun, []);
function Body() {
    // const myRef = useRef(null);

    return (
        <div className='flex-container'>
            <div><h1 id="home">Hi! I'm Sammy Tran. Check out some of my links</h1>
        
            <div className='links'>
                <div className="linkedin">
                
                <a href={"https://www.linkedin.com/in/psammyqtran"}>
                    LinkedIn
                    <img className="logo" src="./linkedin.png"  alt="LinkedIn Logo" />
                    </a>
                </div>
                <div className="linkedin">
                <a href={"https://github.com/hisammytran"}>GitHub
                    <img className="logo" src="./github.png" alt="Github Logo"/>
                </a>
                </div>

                
            </div></div>
        
            
            {/* <img src="/linkedin.png"  alt="Flowers in Chania" /> */}
            
            <div>
                <h1 id="about">About Me</h1>
                <div className="aboutText">
                <p>I am looking for opportunities in Software Engineering/Development in the San Francisco Bay Area.</p>
                </div>
                <h3> Education </h3>
                <div className="aboutText">
                    <img className="edulogo" src="./ucsd.png" alt="UCSD Logo"/>
                    
                    <p>B.S. Mathematics-Computer Science Spring 2020</p>
                </div>
                <h3>Projects</h3>
                
            </div>
            <div className="contactPage">
                <h1 id="contact">Contact Me</h1>
                <ContactForm></ContactForm>
                
            </div>
        </div>
    )
}

export default Body;