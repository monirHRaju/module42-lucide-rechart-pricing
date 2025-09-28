import React from 'react';
import Link from './Link';

const navigationData = 
[
  {
    "id": 1,
    "name": "Home",
    "path": "/"
  },
  {
    "id": 2,
    "name": "About",
    "path": "/about"
  },
  {
    "id": 3,
    "name": "Services",
    "path": "/services"
  },
  {
    "id": 4,
    "name": "Blog",
    "path": "/blog"
  },
  {
    "id": 5,
    "name": "Contact",
    "path": "/contact"
  }
]


const MyNav = () => {
    return (
        <div className='flex justify-between items-center mx-3'>
           <div>
                <h1 className='text-[20px] font-semibold'>daisyUI</h1>
            </div> 
            <div>
                <ul className='flex mt-3 text-[15px]'>
                    {
                        navigationData.map(route => <Link route={route} key={route.id}></Link>)
                    }
                    
                    
                </ul>
            </div>
            <div>
                <button className='btn'>Button</button>
            </div>
        </div>
    );
};

export default MyNav;