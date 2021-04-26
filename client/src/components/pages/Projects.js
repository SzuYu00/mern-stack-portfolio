import React, {useEffect} from 'react';
import '../../App.css';
import { PostStream } from '../PostStream';
import PageTopContainer from '../PageTopContainer';


export default function Projects() {

    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])


    return (
    <>
        <PageTopContainer
            pageType='projects'
            title='Projects'
            text='Scroll down to learn about my major projects!'
        />
        <PostStream 
            postType='projects' 
            nameSkills='Skills Required' 
            nameAbility='Abilities Required'
            moreInfo='Related Link'
        
        />

    
    </>
    
    )
}