import React from 'react';
import Features from './Features';


const PricingCard = ({pricing}) => {
    const {name, price, description, features } = pricing
    // console.log({name, price, description, features })
    return (
        <div className='bg-orange-600 p-5 rounded-2xl border-2 border-white'>
            <div className='mb-4'>
                <h1 className='text-5xl'>{name}</h1>
                <h3 className='text-2xl'>Price : $ {price}</h3>
            </div>
  
            <div className='bg-amber-400 rounded-2xl p-3 flex flex-col '>
                <h3 className='text-[22px]'>{description}</h3>
                {features.map((feature, index) => <Features feature={feature} key={index}></Features>)}
            </div>

            <button className='btn w-full mt-4'>Subscribe</button>
        </div>
    );
};

export default PricingCard;