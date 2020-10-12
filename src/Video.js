import React,{useRef, useState} from 'react';
import './Video.css'
import VideoFooter from './VideoFooter'
import night_city from './static/night_city.MOV'

function Video() {
     const videoRef = useRef(null)
     const [playing, setPlaying] = useState(false)
     const onVideoPress = () => {
         if(playing){
         videoRef.current.pause();
         setPlaying(false)
        }
         else {
           videoRef.current.play();
           
           setPlaying(true)
         }
     }

    return (
        <div className='video'>
            <video className='video__player' loop ref={videoRef} src={night_city}
            onClick={onVideoPress}></video>
            <VideoFooter />
        </div>
    )
}

export default Video
