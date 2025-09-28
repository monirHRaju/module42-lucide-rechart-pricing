import React from 'react';

const Link = ({route}) => {
    return (
        <li className='cursor-pointer hover:bg-amber-600 px-3 duration-200' id={route.id}><a href={route.path}>{route.name}</a></li>
    );
};

export default Link;