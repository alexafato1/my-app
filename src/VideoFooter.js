import React from 'react';
import './VideoFooter.css'
import music from './static/music.svg'

function VideoFooter() {
    return (
        <div className='videoFooter'>
           <div className='videoFooter__text'>
               <h3>@alex</h3>
               <p>this is a description</p>
           </div>
           <img className='videoFooter__record' src={music} alt='music'/>
        </div>
    )
}

export default VideoFooter
