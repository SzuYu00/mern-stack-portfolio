import React from 'react';
import './Footer.css';


function Footer() {
    return (
        <div className='footer-container'>
            <div class='footer-links'>
                <div className='footer-link-wrapper'>
                    <div class='footer-link-items'>
                        <h2>More About Me</h2>
                        <div>
                        <a href="https://www.linkedin.com/in/szu-yu-chen-255225186/" 
                            target='_blank' 
                            rel='noreferrer'>
                            <i class='fab fa-linkedin' /> LinkedIn
                        </a> 
                        <a href="https://github.com/SzuYu00" 
                            target='_blank' 
                            rel='noreferrer'>
                            <i class='fab fa-github' /> GitHub
                        </a>
                        </div>
                    </div>
                </div>
            </div>
            <small class='website-rights'>Szu-Yu Chen © 2021</small>
                    
                
            
        </div>
    )
}

export default Footer
