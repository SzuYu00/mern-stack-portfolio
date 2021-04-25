import React, {useEffect} from 'react';
import '../../App.css';
import { PostStream } from '../PostStream';
import PageTopContainer from '../PageTopContainer';


export default function AboutMe() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <PageTopContainer
                pageType='about-me'
                title='About Me'
                text='Self-introduction and past experience'
            />
            <PostStream 
                postType='intro' 
                nameSkills='Programming Language' 
                nameAbility='Knowledge Base'
            
            />

            <PostStream 
                postType='experience' 
                nameSkills='Employment Period' 
                nameAbility='Related Abilities and Skills'
            
            />
        </>
    
    
    )
}