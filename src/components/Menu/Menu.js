import React, {useContext} from 'react';
import {BrowserRouter,
        Switch,
        Route} from 'react-router-dom';
import './Menu.scss';
import MenuContext from '../../MenuContext';
import Home from '../../sections/Home/Home';
import Contact from '../../sections/Contact/Contact';
import AboutMe from '../../sections/AboutMe/AboutMe';
import Projects from '../../sections/Projects/Projects';
import Links from './Links';


const Menu = () => {
    const {pathname} = useContext(MenuContext);
    
    const Sections=[
        {
            section: Home,
            name: "Home",
            route: "/"
        },
        {
            section: AboutMe,
            name: "About me",
            route: "/about-me"
        },
        {   section: Projects,
            name:"My projects",
            route: "/my-projects"
        },
        {
            section: Contact,
            name: "Contact me",
            route: "/contact"
        }
    ];
    return (
        <div className="browser">
            <BrowserRouter>
                <Links sections={Sections} show={pathname==="/" ? false : true}/>
                <Switch>
                    <Route exact path= {Sections[0].route} 
                                    component={Sections[0].section}></Route>

                    <Route path= {Sections[1].route} 
                                    component={Sections[1].section}></Route>
                       
                       <Route exact path= {Sections[2].route} 
                                    component={Sections[2].section}></Route>
                    
                    <Route exact path= {Sections[3].route} 
                                    component={Sections[3].section}></Route>
                    
                    }
                </Switch>       
            </BrowserRouter>
        </div>
    )
}

export default Menu