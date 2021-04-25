import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import { Button } from './Button';

function Navbar() {
    const [click, setClick] = useState(false);  //set state for menu icon
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);

    const showButton = () =>{
        if(window.innerWidth <= 960){
            setButton(false);
        } else {
            setButton(true);
        }
    };

    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);
    
    return (
      <> 
        <nav className='navbar'>
            <div className='navbar-container'>
                <Link to= '/' className='navbar-logo' onClick={closeMobileMenu}>
                    <img src='/images/logo.png' className='syc-logo' alt='SYC'/>
                </Link>
                <div className='menu-icon' onClick={handleClick}>
                    <i className= {click ? 'fas fa-times' : 'fas fa-bars'}/>
                </div>
                <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                    <li>
                        <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                            Home
                        </Link>
                    </li>
                    <li>
                        <Link to='/about-me' className='nav-links' onClick={closeMobileMenu}>
                            About Me
                        </Link>
                    </li>
                    <li>
                        <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link to='/log-in' className='nav-links-mobile' onClick={closeMobileMenu}>
                            Log In
                        </Link>
                    </li>
                </ul>
                {button && <Button buttonStyle='btn--outline' path='/log-in'>Log In</Button>}
                
                
            </div>
        </nav>
      </>
    );
  }
  
  export default Navbar;
  