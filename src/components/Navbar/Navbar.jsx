import React from 'react';

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
    
    return (
        <nav>
            <ul className='flex gap-5 justify-center mt-6'>
                {
                    dataArray.map(route => <li className='text-3xl '>
                        <a href="{route.path}">{route.name}</a>
                    </li>)
                }
            </ul>
        </nav>
    );
};

export default Navbar;