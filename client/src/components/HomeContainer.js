import React from 'react';
import { Button } from './Button'; 
import './HomeContainer.css'

function PageTopContainer() {
    return (
        <div className='home-container'>
            {/*<video src='/' autoplay loop muted />*/}
            <h1>Hello</h1>
            <p>You have arrived at Szu-Yu Chen's profile</p>
            <div className='home-btns'>
                <Button classname='btns' buttonStyle='btn--outline' buttonSize='btn--large' path='about-me'>
                    About Me
                </Button> 
                <Button classname='btns' buttonStyle='btn--primary' buttonSize='btn--large' path='projects'>
                    Projects
                </Button> 
            </div>
            
        </div>
    )
}

export default PageTopContainer
