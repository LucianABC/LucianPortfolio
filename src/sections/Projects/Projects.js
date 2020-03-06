import React, {useEffect, useContext} from 'react';
import '../Section.scss';
import './Projects.scss';
import MenuContext from '../../MenuContext';
import PostIt from '../../components/PostIt/PostIt';
import PostIt1 from '../../assets/PostIts/postit1.png';
import PostIt2 from '../../assets/PostIts/postit2.png';
import PostIt3 from '../../assets/PostIts/postit3.png';
import PostIt4 from '../../assets/PostIts/postit4.png';
import PostIt5 from '../../assets/PostIts/postit5.png';
import PostIt6 from '../../assets/PostIts/postit6.png';

const Projects =()=>{
    const {showMenu} = useContext(MenuContext);
    useEffect(showMenu, []);
    return(
        <div className="projects section">
            <section className="projects-container">
                <PostIt img={PostIt1} deg={"10"} > PORQUE ESTO NO SE VE </PostIt>
                <PostIt img={PostIt4} deg={"0"} > PORQUE ESTO NO SE VE </PostIt>     
                <PostIt img={PostIt2} deg={"-10"} > PORQUE ESTO NO SE VE </PostIt>
                <PostIt img={PostIt5} deg={"-7"} > PORQUE ESTO NO SE VE </PostIt>
                <PostIt img={PostIt3} deg={"-2"} > PORQUE ESTO NO SE VE </PostIt>
                <PostIt img={PostIt6} deg={"7"} > PORQUE ESTO NO SE VE </PostIt>
            </section>
            
        </div>
    );
}

export default Projects;