import React, {useContext, useEffect} from 'react';
import MenuContext from '../../MenuContext';
import {Link} from 'react-router-dom';
import './Home.scss';
import '../Section.scss';
 
 
const Home = () => {
    const {showMenu} = useContext(MenuContext);
    useEffect(showMenu, []);
    return(
        <section className="home section">
            <section className="home-content">
                <Link to="/my-projects">
                      <div className="projects-postits"></div>
                </Link>
                <Link to="/contact">
                    <div className="contact-cellphone"> </div>
                </Link>
                <Link to="/about-me">
                    <div className="aboutme-diary"></div>
                </Link>
            </section>
        </section>
    );
}

export default Home