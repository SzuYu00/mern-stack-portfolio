import React, {useEffect} from 'react'
import '../../App.css'
import { Cards } from '../Cards'
import HomeContainer from '../HomeContainer'

function Home() {
    
    //Effect hook
    useEffect(() => {
        window.scrollTo(0, 0)
      }, [])

    return (
        <>
            <HomeContainer />
            <Cards postType='quick-view'/>
        </>
    )
}

export default Home
