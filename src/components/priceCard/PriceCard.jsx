import React from 'react';

const PriceCard = ({priceingInform}) => {
    
    return (
        <div>
           <div>
           <h1 className='text-3xl'>{priceingInform.name}</h1>
           <h1 className='text-xl'>{priceingInform.price}</h1>
           </div>
        </div>
    );
};

export default PriceCard;