import React, { useRef, useEffect } from "react";
import './VideoBlockStyle.css';

function VideoBlock({videoSrc}) {

    const videoRef = useRef()

    const playerHandler = () =>{
        const windowHeight = window.innerHeight;
        const videoTopNumber = videoRef.current.getBoundingClientRect().top;
        const videoBottomNumber = videoRef.current.getBoundingClientRect().bottom;

        //向下滾動到視窗30%時自動播放影片 下方少於30%時暫停
        const isScrollDownEntry = videoTopNumber <= windowHeight * 0.7;
        const isScrollUpEntry = videoBottomNumber >= windowHeight * 0.3;

        ( isScrollDownEntry && isScrollUpEntry )             
            ? videoRef.current.play()
            : videoRef.current.pause()
    }

    useEffect(()=>{
        window.addEventListener("scroll", playerHandler);
        return () => {
            window.removeEventListener('scroll', playerHandler)
        }
    },[])    

  return (
    <div className="video" >
        <video src={videoSrc} ref={videoRef} loop muted ></video>
    </div>
  );

  
}

export default VideoBlock;