import React from 'react'
import Alert from '../Alert/Alert'
import Firstsection from '../First-section/Firstsection'
import Secondsection from '../Second-section/Section2'
import Thirdsection from '../Third-section/Section3'
import Fourthsection from '../Fourth-section/Section4'
import Fifthsection from '../Fifth-section/Section5'
import Sixthsection from '../Sixth-section/Section6'
import YoutubeVideos from "../YoutubeVideos/YoutubeVideos"
const Wrapper = () => {
    return (
        <>
            <Alert />
            <Firstsection />
            <Secondsection />
            <Thirdsection />
            <Fourthsection />
            <Fifthsection />
            <Sixthsection />
            <YoutubeVideos />
        </>
    )
}

export default Wrapper
