import React from 'react';
import './VideoFooter.css'
import record from './static/record.svg'
import music from './static/musical-note.svg'
import comment from './static/comment.svg'
import heart from './static/heart.png'
import arrow from './static/arrow.svg'
import { Button } from '@material-ui/core';
import AudiotrackIcon from '@material-ui/icons/Audiotrack';
import FavoriteIcon from '@material-ui/icons/Favorite';
import TextsmsIcon from '@material-ui/icons/Textsms';
import ShareIcon from '@material-ui/icons/Share';
import Ticker from 'react-ticker'


function VideoFooter() {
    return (
        <div className='videoFooter'>
            
           <div className='videoFooter__text'>
         
               <h3>@alex</h3>
               <p>this is a description</p>
               <div className='videoFooter__ticker'>
             <AudiotrackIcon className='videoFooter__icon' fontSize="large"/>
              <Ticker mode='smooth'>
                  {({index}) => (
                      <>
                      <p>YOOOO@@@U</p>
                      </>
                  )}
              </Ticker>
              </div>
           </div>
            <FavoriteIcon fontSize="large"/>
            <TextsmsIcon fontSize="large"/>
            <ShareIcon  fontSize="large"/>
            <img className='videoFooter__record' src={record} alt='music'/>
         
        </div>
    )
}

export default VideoFooter
