"use client"

import React from 'react'
import Link from "next/link"
import { AiFillBug } from "react-icons/ai";
import { usePathname } from 'next/navigation';
import classname from 'classname';

const Navbar = () => {

    const pathName = usePathname();

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
                            className={classname({
                                "text-zinc-900": pathName === item.href,
                                "text-zinc-500": pathName !== item.href,
                                "transition-colors hover:text-zinc-800": true,
                            })}
                        >{item.label}</Link>
                    ))
                }
            </ul>
        </nav>
    )
}

export default Navbar