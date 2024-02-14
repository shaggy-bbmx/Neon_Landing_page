import Image from "next/image"
import Link from "next/link"
import { Disclosure } from '@headlessui/react'
import ThemeSwitch from './ThemeSwitch.js'
import { useEffect, useState } from "react"


const Navbar = () => {

    const navigation = [
        "Product",
        "Features",
        "Pricing",
        "Company",
        "Blog",
    ]

    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {

        const handleScroll = () => {
            const scrollTop = window.scrollY;
            if (scrollTop > 0) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        }


        window.addEventListener('scroll', handleScroll)

        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    }, [])



    return (
        <div className={`w-full px-4 sticky top-0 pb-4 ${isScrolled ? 'bg-white dark:bg-[#171717]' : ''}`}>
            <nav className=" flex  flex-row  justify-between items-center pt-8  w-full mx-auto">

                <Disclosure>
                    {({ open }) => (
                        <>
                            <div className="flex flex-row justify-between flex-wrap  w-full lg:w-auto">
                                <Link href='/'>
                                    <span className="flex  text-indigo-500 dark:text-gray-100">
                                        <span>
                                            <Image src='/img/logo.svg' width='32' height='32' className="" />
                                        </span>
                                        <span className="pl-2 text-2xl font-semibold dark:text-white">
                                            Nextly
                                        </span>
                                    </span>
                                </Link>

                                <Disclosure.Button
                                    className="px-2 py-1 ml-auto text-gray-500 rounded-md lg:hidden hover:text-indigo-500 focus:text-indigo-500 focus:bg-indigo-100 focus:outline-none dark:text-gray-300 dark:focus:bg-trueGray-700">
                                    <svg
                                        className="w-6 h-6 fill-current"
                                        xmlns="http://www.w3.org/2000/svg"
                                        viewBox="0 0 24 24">
                                        {open && (
                                            <path
                                                fillRule="evenodd"
                                                clipRule="evenodd"
                                                d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"
                                            />
                                        )}
                                        {!open && (
                                            <path
                                                fillRule="evenodd"
                                                d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                                            />
                                        )}
                                    </svg>
                                </Disclosure.Button>


                                <Disclosure.Panel className="flex flex-wrap w-full my-5 lg:hidden px-2">
                                    <>
                                        {navigation.map((item, index) => (
                                            <Link key={index} href="/" className="w-full px-4 py-2 ml-4 text-gray-500 rounded-md dark:text-gray-300 hover:text-indigo-500 focus:text-indigo-500 focus:bg-white dark:focus:bg-gray-800 focus:outline-none">
                                                {item}
                                            </Link>
                                        ))}
                                        <Link href="/" className="w-full px-6 py-2 mt-3 text-center text-white bg-indigo-600 rounded-md lg:ml-5">
                                            Get Started
                                        </Link>
                                    </>
                                </Disclosure.Panel>
                            </div>
                        </>
                    )}
                </Disclosure>


                <div className='hidden lg:flex'>
                    <ul className="flex justify-between">
                        {navigation.map((menu, index) =>
                            <li key={index}>
                                <Link href="/" className="mx-6 text-lg light:hover:text-indigo-500 focus:text-indigo-500 dark:focus:text-white focus:bg-gray-800 focus:outline-none px-2 py-1 focus:rounded-md" >
                                    {menu}
                                </Link>
                            </li>
                        )}
                    </ul>
                </div>


                <div className='hidden lg:flex space-x-2'>
                    <Link href="/" className="px-6 py-2 text-white bg-indigo-600 rounded-md md:ml-5" >
                        Get Started
                    </Link>
                    <ThemeSwitch />
                </div>
            </nav>
        </div>
    )
}

export default Navbar
