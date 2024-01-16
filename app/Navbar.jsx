import React from 'react'
import Link from "next/link"
import { AiFillBug } from "react-icons/ai";

const Navbar = () => {

    const navItems = [
        { label: "Dashboard", href: "/" },
        { label: "Issues", href: "/issues" },
    ]

    return (
        <nav className='flex space-x-6 h-16 border-b items-center px-6 mb-8'>
            <Link href="/"><AiFillBug /></Link>
            <ul className='flex space-x-6'>
                {
                    navItems.map((item, index) => (
                        <Link
                            key={index}
                            href={item.href}
                            className='text-zinc-500 transition-colors hover:text-zinc-900'
                        >{item.label}</Link>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar