import React,{useState,} from 'react'
import HamburgerMenu from 'react-hamburger-menu';
import CloudUploadIcon from '@material-ui/icons/CloudUpload';
import { Button } from 'react-bootstrap';
import './Home.css';
import night_city from './static/night_city.MOV';
import video from './static/video.mp4';
import video2 from './static/video2.mp4';
import kote from './static/kote.mp4';
import anim from './static/anim.mp4';


function Home() {
     const [open, setOpen] = useState(false)
    
    const handleClick = (()=> {
        setOpen(!open);
    })

   return (
        <div>
           <header className='header'>
               <div className='header__left'>
               <duv className='header__menu'>
                 <HamburgerMenu
                isOpen={open}
                menuClicked={handleClick}
                width={25}
                height={15}
                strokeWidth={2}
                rotate={0}
                color='black'
                borderRadius={0}
                animationDuration={0.5}
                />
                </duv>
               <div className='header__logo'>
                <img alt ='tik tok' src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logo-text-dark-673b189595b95d8bbf2ab1783ae2ab25.svg'
                  />
                 
               </div>
               </div>


               <div className='header__right'>
                   <div className='header__upload'>
                  <CloudUploadIcon  fontSize='large' />
                  </div>
                  <Button variant="danger">Login</Button> 
               </div>
           </header>
           <main className='main'>

               <div className='main__title'>
             <h1>Make Your Day</h1>
             <h2>Real People. Real Videos.</h2>
             </div>


             <div className='main__videos'>
             <video className='video__player' muted  autoPlay loop  src={night_city}
               ></video>
              <video className='video__player' muted  autoPlay  loop src={video2}
               ></video>
                <video className='video__player' muted  autoPlay  loop src={kote}
               ></video>
                <video className='video__player' muted  autoPlay loop  src={anim}
               ></video>
                <video className='video__player' muted  autoPlay  loop src={video}
               ></video>
             </div>
           </main>
           <footer className='footer'>
           <div className='footer__logo'>
                <img alt ='tik tok' src='https://sf16-scmcdn-va.ibytedtos.com/goofy/tiktok/web/node/_next/static/images/logotext-9b4d14640f93065ec36dab71c806e135.svg'
                  />
                 </div>
                 <div className='footer__text'>
                     <div className='footer__column'>
                     <ul>
                         <li><strong>Company</strong></li>
                         <li>About TikTok</li>
                         <li>Newsroom</li>
                         <li>Contact</li>
                         <li>Careers</li>
                     </ul>
                     </div>
                     <div className='footer__column'>
                     <ul>
                         <li><strong>Programs</strong></li>
                         <li>TikTok for Good</li>
                         <li>Advertise on TikTok</li>
                         <li>TikTok for developer</li>
                         
                    </ul>
                    </div>
                    <div className='footer__column'>
                    <ul>
                         <li><strong>Company</strong></li>
                         <li>About TikTok</li>
                         <li>Newsroom</li>
                         <li>Contact</li>
                         <li>Careers</li>
                     </ul>
                     </div> 
                     <div className='footer__column'>
                     <ul>
                         <li><strong>Programs</strong></li>
                         <li>TikTok for Good</li>
                         <li>Advertise on TikTok</li>
                         <li>TikTok for developer</li>
                        </ul>
                        </div>
                 </div>
                 <div>
                     <p>© 2020 CloneTikTok from Alexa</p>
                 </div>
           </footer>
        </div>
    )
}

export default Home
