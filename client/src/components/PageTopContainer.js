import React from 'react';
import './PageTopContainer.css'


function PageTopContainer(props) {
    return (
        <div className={`page-top-container-${props.pageType}`}>
            <div className='page-top-container'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            </div>
        </div>
    )
}

export default PageTopContainer