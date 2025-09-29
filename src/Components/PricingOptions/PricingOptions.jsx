import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';

const PricingOptions = ({pricingPormise}) => {
    const pricingData = use(pricingPormise)
    // console.log(pricingData)
    return (
        <div>
            <h1>Our Pricing Plan</h1>
            <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-5'>
                {pricingData.map(pricing => <PricingCard pricing={pricing} key={pricing.id}></PricingCard>)}
            </div>
        </div>
    );
};

export default PricingOptions;