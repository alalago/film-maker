import './ShuffleCardsStyle.css';
import React, { useState, useRef } from "react";

function ShuffleCards({cardAimg, cardBimg}) {

  const [isCardAInFront, setCardPosition] = useState(false);
  const [ animationA , setAnimationA] = useState('');
  const [ animationB , setAnimationB] = useState('');

  const CardsClickHandler = () => {
    if(isCardAInFront){
      setCardPosition(false)
      setAnimationA('animation-a')
      setAnimationB('animation-b-cover')
    }else{
      setCardPosition(true)
      setAnimationA('animation-a-cover')
      setAnimationB('animation-b')
    }
    setTimeout(() => {
      setAnimationA('')
      setAnimationB('')
    }, "1000");
  }

    return (
      <div className='shuffle-cards'>
        <div className={`card card-behind ${animationA}`} 
          onClick={CardsClickHandler}
          style={{
            zIndex:
            isCardAInFront ? '1':'0',
            transform:
            isCardAInFront ? 'scale(125%) translate(20%, 0)' : 'scale(100%) translate(0%)'
          }}
          >
            <img src={cardAimg} alt="" />
        </div>
        <div className={`card card-infront ${animationB}`} 
          onClick={CardsClickHandler}
        >
            <img src={cardBimg} alt="" />
        </div>
      </div>
    );
}
  
export default ShuffleCards;