import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';

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
    const [open, setOpen] = useState(false)
    const links = navigationData.map(route => <Link route={route} key={route.id}></Link>);
    return (
        <nav>
            <div className='flex justify-between items-center mx-3'>
                <span className='flex gap-3 items-center' onClick={() => setOpen(!open)}>
                    { open 
                        ? <X className='md:hidden'></X> 
                        : <Menu className='md:hidden' ></Menu>}

                    <ul className={`sm-menu md:hidden bg-amber-100 absolute  duration-1000 text-black font-semibold
                       ${open ? ' top-8' : '-top-40'} 
                        left-4`}>
                        {links}
                    </ul>

                    <h1 className='text-[20px] font-semibold'>daisyUI</h1>
                </span> 
                
                <ul className='lg-menu md:flex hidden mt-3 text-[15px]'>
                    {links}  
                </ul>
                
                
                <button className='btn'>Button</button>
              
            </div>
        </nav>
    );
};

export default MyNav;