import React from 'react';
import './Title.scss';


const Title = ({titleContent,rotation}) => {
    return(
        <div className="title-container" style={{transform: `rotate(${rotation}deg)`}}>
            <h1 className="title">{titleContent}</h1>
        </div>
    );
}

export default Title;
