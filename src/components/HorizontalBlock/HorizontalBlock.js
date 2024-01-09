import React, {useRef, useEffect, useState} from 'react';
import './HorizontalBlockStyle.css';

function HorizontalBlock({images}) {

    const BlockRef = useRef()
    const ContainerRef = useRef()
    const [progress, setProgress] = useState(-1)
    const [containerHeight, setContainerHeight] = useState('auto')
    const [containerFullWidth,setContainerFullWidth] = useState(0)
    const [swipeLeftRatio, setSwipeLeftRatio] = useState(0)

    const updateProgress = () =>{
        const { scrollTop } = document.documentElement
        const containerTop = BlockRef.current.offsetTop
        const containerFullHeight = BlockRef.current.offsetHeight

        const newProgress =
      ((scrollTop - containerTop) * 100) / (containerFullHeight - window.innerHeight)
      setProgress(newProgress)

        // console.log(
        // "scrollTop",scrollTop,
        // "containerTop",containerTop,
        // "containerFullHeight",containerFullHeight,
        // "containerFullWidth",containerFullWidth,
        // "progress",progress,
        // "window innerHeight",window.innerHeight,
        // "window innerWidth",window.innerWidth,
        // "containerScrollLeft",ContainerRef.current.scrollWidth - ContainerRef.current.clientWidth,
        // "scrollWidth",ContainerRef.current.scrollWidth,
        // "clientWidth",ContainerRef.current.clientWidth,
        // )
    }


    useEffect(() => {
        window.addEventListener("wheel", updateProgress)

        return () => {
            window.removeEventListener('wheel', updateProgress)
        }
    })

    useEffect(() => {
        setContainerHeight(
            `${( window.innerHeight * containerFullWidth * 2 ) / window.innerWidth}px`
        )
        setContainerFullWidth(ContainerRef.current.scrollWidth)
        setSwipeLeftRatio(( containerFullWidth - window.innerWidth ) / containerFullWidth )
        
    },[containerFullWidth])

    
  return (
    <div className="horizontalblock" style={{
        height: containerHeight,
      }} ref={BlockRef}>
        <div className='innerblock' 
            ref={ContainerRef}
            style={{
                transform:
                progress >= 0
                  ? progress > 100
                   ?`translateX(-${ 100 * swipeLeftRatio }%)`
                   :`translateX(-${progress * swipeLeftRatio}%)`
                  : 'translateX(0%)',
              position:
                progress <= 100 ? (progress >= 0 ? 'fixed' : 'static') : 'absolute',
              bottom: 0
            }}
            >
            {images.map( (img, key) => {
                return <img key={key} src={img} alt="" />;
            })}
        </div>
    </div>
  );
}

export default HorizontalBlock;