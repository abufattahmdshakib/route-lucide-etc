

import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

const dataArray = [
    {
      id: 1,
      name: "Home",
      path: "/home"
    },
    {
      id: 2,
      name: "About",
      path: "/about"
    },
    {
      id: 3,
      name: "Services",
      path: "/services"
    },
    {
      id: 4,
      name: "Contact",
      path: "/contact"
    },
    {
      id: 5,
      name: "Profile",
      path: "/profile"
    }
  ];


const Navbar = () => {
     const [open, setOpen] = useState(false);
     const Links = dataArray.map((route, index) => <li key={index}>
        <a href="{route.path}">{route.name} </a>
    </li>);

    return (
        <nav className='flex justify-between mt-8 w-[85vw] mx-auto items-center'>
            <span className='flex gap-2 '  onClick={() => setOpen(!open) }>
            {open ? <X className ='md:hidden' ></X> : <Menu className ='md:hidden' ></Menu>}
            <ul className={`md:hidden bg-amber-700 w-20 text-xl absolute duration-1000
                ${open ? `top-36` : `-top-44`}` }>
                {Links}
            </ul>
            <h1>Test Me</h1>
            
            </span>
            <ul className='hidden lg:flex gap-5'>
            {
                Links
            }
            </ul>
            <button type='button'>Login</button>
        </nav>
    );
};

export default Navbar;