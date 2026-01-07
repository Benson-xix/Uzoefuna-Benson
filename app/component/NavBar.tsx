'use client'

import Link from "next/link"
import NavLink from "./NavLink"
import { useEffect, useState } from "react";
// import {Bars3Icon, XMarkIcon} from "@heroicons/react/24/solid"
import MenuOverlay from "./MenuOverlay";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";



const navLinks = [
    {
        title: "About",
        path:"/about",
    },
    {
        title: "Projects",
        path: "/programs",
    },
    {
        title: "Contact",
        path: "/contact",
    },
]

const NavBar = () => {

        const [navBarOpen, setNavBarOpen] = useState(false);


        

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#121212] bg-opacity-100">
    <div className="flex flex-wrap items-center justify-between mx-auto px-4 py-2 ">
<div className="bg-gradient-to-l from-orange-400 via-orange-500 to-orange-600 w-[100px] h-[100px] rounded-full border-2 border-white flex justify-center items-center py-4 ">
  <Link href={'/'} className="lg:text-5xl text-xl  text-transparent bg-clip-text bg-gradient-to-r from-white via-slate-700 to-white font-semibold  ">UB</Link>
    </div>
    <div className="menu hidden md:block md:w-auto " id="navbar">
        <ul className="flex p-4 md:p-0  md:flex-row md:space-x-8 mt-8">
           {
            navLinks.map((link, index) => (
                <li key={index}>
                    <NavLink href={link.path} title={link.title} />
                </li>
            ))
           }
        </ul>
    </div>

    <div className="mobile-menu block md:hidden">
           {!navBarOpen ? (
                <button onClick={() => setNavBarOpen(true)} className="text-orange-500 flex items-center px-3 py-2 border rounded border-orange-500 hover:text-white hover:border-l-white">
                    <Bars3Icon className="h-5 w-5" />
                </button>
            ) : (
                <button onClick={() => setNavBarOpen(false)}  className="text-orange-500 flex items-center px-3 py-2 border rounded border-orange-500">
                    <XMarkIcon className="h-5 w-5" />
                </button>
            )
           }
    </div>
    </div>  

    {navBarOpen ? <MenuOverlay links={navLinks} /> : null}
    </nav>
  )
}

export default NavBar
