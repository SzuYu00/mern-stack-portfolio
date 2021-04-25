import React, {useEffect} from 'react';
import '../../App.css';
import PageTopContainer from '../PageTopContainer';


export default function LogIn() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
        <div>
            <PageTopContainer
                pageType='log-in'
                title='Log In'
                text='Under Construction'
            />


        </div>
    )
}