import { CheckCheckIcon } from 'lucide-react';
import React from 'react';

const Features = ({feature}) => {
    return (
           <span className='flex gap-2 text-lg text-white'>
                <CheckCheckIcon className="text-green-500" />
                <span className='line-'>{feature}</span>
           </span>
    
    );
};

export default Features;