import React from 'react';
import {BrowserRouter,
        Link,
        Switch,
        Route} from 'react-router-dom';
import './Menu.scss';
import HomeIcon from '../../assets/houseicon.png';

const Links=({sections})=> {
    return(
        <div className="browser-menu">
            <Link className="menu-item" to= {sections[0].route}>
            <img src={HomeIcon}/></Link>
            <Link className="menu-item" to= {sections[1].route}>{sections[1].name}</Link>
            <Link className="menu-item" to= {sections[2].route}>{sections[2].name}</Link>
            <Link className="menu-item" to= {sections[3].route}>{sections[3].name}</Link>
        </div>

    );
}

export default Links;