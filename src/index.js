import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';

//components
import Header from './components/Header/Header';
import ShuffleCards from './components/ShuffleCards/ShuffleCards';
import Description from './components/Description/Description';
import VideoBlock from './components/VideoBlock/VideoBlock';
import HorizontalBlock from './components/HorizontalBlock/HorizontalBlock';

// card images
import cardAimg from './assets/switchCard01.png'
import cardBimg from './assets/switchCard02.png'

// video
import videoSrc from './assets/videos.mp4'

// HorizontalBlock images
import horizontal01 from './assets/horizontal01.png';
import horizontal02 from './assets/horizontal02.png';
import horizontal03 from './assets/horizontal03.png';
import horizontal04 from './assets/horizontal04.png';

const horizontalImgs =[ 
  horizontal01, 
  horizontal02, 
  horizontal03, 
  horizontal04,
  horizontal01, 
  horizontal02, 
  horizontal03, 
  horizontal04,
]

//Description A
const textA = `We love to visualize stories 
because we love people and they inspire us.`;

//Description B
const textB = `We are a creative agency, film production,
branded & original content creators.`;

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <React.StrictMode>
    <Header />
    <ShuffleCards 
      cardAimg = {cardAimg} 
      cardBimg = {cardBimg}/>
    <Description text = {textA}/>
    <VideoBlock videoSrc = {videoSrc}/>
    <Description text = {textB}/>
    <HorizontalBlock images = {horizontalImgs}/>
  </React.StrictMode>
);

