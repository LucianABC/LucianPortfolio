import React from 'react';
import {Link} from 'react-router-dom';
import './Home.scss';
import '../Section.scss';
 
 
const Home = () => {
    return(
        <section className="home section">
            <section className="home-content">
                <Link to="/about-me">
                      <div className="projects-postits"></div>
                </Link>
                <div className="contact-cellphone"> </div>
                <div className="aboutme-diary"></div>
            </section>
        </section>
    );
}

export default Home