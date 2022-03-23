import React from 'react';

const Card = ({card}) => {
    return (
        <div>
               <h1>Summary</h1>
       <p> Total Card: {card.length}</p>
      
        </div>
    );
};

export default Card;