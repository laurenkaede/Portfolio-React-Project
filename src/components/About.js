import React from "react";
import "./About.css";
import Lauren from "../me.png";


const About = () => {
  return (
    <div id= "textmargin" className= "backcolor Img5">
        <div className="mainMargin maintextalign">
            <div className="container txtindent">

                <h2 className="titleAbout">About Me</h2>

                <img src={Lauren} className="meImg" alt="Lauren" /> 

                <p>
                Hi my name is Lauren and I'm a Junior Software Developer from Manchester.
                Prior to starting my journey in coding I was working towards a career in
                Medicine. Everything then changed when I became really interested in how
                technology impacts the lives of others.
                </p>

                <p>
                Technological innovation is something I’m really passionate about and in
                today’s digital world a lot of businesses are finding success online.
                This of course creates a lot of opportunities.
                </p>

                <p>
                This led me to build my own Shopify store and my own website in
                wordpress. Ultimately, I felt that the templates provided were
                restrictive, and that's what led me to take a 3 week coding course with
                Code Nation, to which I progressed onto the 3 month Software Development
                Master Course after gaining an apprentiship.
                </p>

            </div>
        </div>
    </div>     
  );
};

export default About;
