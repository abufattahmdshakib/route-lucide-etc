import React, { use } from 'react';
import PriceCard from '../priceCard/PriceCard';

const Priceing = ({priceingPromes}) => {
    const priceData = use(priceingPromes);
    
    return (
        <div>
            <h1>our card </h1>
            <div className='flex justify-around  gap-5'>
                {
                    priceData.map(priceingInform => <PriceCard key={priceingInform.id} priceingInform={priceingInform}></PriceCard>)
                }
            </div>
        </div>
    );
};

export default Priceing;