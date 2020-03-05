import React from 'react';
import './Home.scss';
import '../Section.scss';
 
 
const Home = () => {
    return(
        <section className="home section">
            <section className="home-content">
               <div className="projects-postits"></div>
                <div className="contact-cellphone"> </div>
                <div className="aboutme-diary"></div>
            </section>
        </section>
    );
}

export default Home