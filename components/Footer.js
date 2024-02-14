import Image from 'next/image'
import logo from '../public/img/logo.svg'
import Link from 'next/link'
import vercel from '../public/img/vercel.svg'



const Footer = () => {
    return (
        <div className="w-full px-4 lg:px-16 mb-20 ">
            <div className='w-[90%] ml-6  h-0.5 dark:h-[1px] dark:bg-gray-700 bg-gray-100 mb-12 lg:mb-0'></div>
            <div className="grid grid-rows grid-cols-1 lg:grid-cols-5 lg:grid-rows-1 gap-4 w-full lg:w-auto">
                <div className="col-span-2   lg:p-4">
                    <Link href='/'>
                        <span className="flex pl-4 text-indigo-500 dark:text-gray-100">
                            <span>
                                <Image src='/img/logo.svg' width='32' height='32' className="" />
                            </span>
                            <span className=" pl-2 text-2xl font-semibold dark:text-white">
                                Nextly
                            </span>
                        </span>
                    </Link>
                    <div className='text-sm md:text-normal font-normal pt-4 pl-4 leading-normal text-gray-500 dark:text-gray-200'>
                        Nextly is a free landing page & marketing website template for startups and indie projects. Its built with Next.js & TailwindCSS. And its completely open-source.
                    </div>
                    <div className='pt-4'>
                        <Image className='h-10' src={vercel} />
                    </div>
                </div>

                <div className="col-span-1 flex flex-col p-4 space-y-4">
                    <Link href='/' className='text-gray-500 hover:text-indigo-600 dark:text-gray-100'>Products</Link>
                    <Link href='/' className='text-gray-500 hover:text-indigo-600 dark:text-gray-100'>Features</Link>
                    <Link href='/' className='text-gray-500 hover:text-indigo-600 dark:text-gray-100'>Pricing</Link>
                    <Link href='/' className='text-gray-500 hover:text-indigo-600 dark:text-gray-100'>Company</Link>
                    <Link href='/' className='text-gray-500 hover:text-indigo-600 dark:text-gray-100'>Blog</Link>
                </div>
                <div className="col-span-1 flex flex-col p-4 space-y-4">
                    <Link href='/' className='text-gray-500 hover:text-indigo-600 dark:text-gray-100'>Terms</Link>
                    <Link href='/' className='text-gray-500 hover:text-indigo-600 dark:text-gray-100'>Privacy</Link>
                    <Link href='/' className='text-gray-500 hover:text-indigo-600 dark:text-gray-100'>Legal</Link>
                </div>

                <div className="col-span-1  p-4 space-y-4">
                    <div className='text-gray-700 dark:text-gray-100'>Follow us</div>
                    <div className='flex space-x-4 text-gray-400'>
                        <a
                            href="https://twitter.com/web3templates"
                            target="_blank"
                            rel="noopener">
                            <span className="sr-only">Twitter</span>
                            <Twitter />
                        </a>
                        <a
                            href="https://facebook.com/web3templates"
                            target="_blank"
                            rel="noopener">
                            <span className="sr-only">Facebook</span>
                            <Facebook />
                        </a>
                        <a
                            href="https://instagram.com/web3templates"
                            target="_blank"
                            rel="noopener">
                            <span className="sr-only">Instagram</span>
                            <Instagram />
                        </a>
                        <a
                            href="https://linkedin.com/"
                            target="_blank"
                            rel="noopener">
                            <span className="sr-only">Linkedin</span>
                            <Linkedin />
                        </a>
                    </div>
                </div>
            </div>
            <div className='flex justify-center w-full text-gray-600 dark:text-gray-400 text-sm mt-8'>Copyright © 2024. Made with ♥ by Web3Templates. Illustrations from Glazestock</div>
        </div>
    )
}

export default Footer


const Twitter = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M24 4.37a9.6 9.6 0 0 1-2.83.8 5.04 5.04 0 0 0 2.17-2.8c-.95.58-2 1-3.13 1.22A4.86 4.86 0 0 0 16.61 2a4.99 4.99 0 0 0-4.79 6.2A13.87 13.87 0 0 1 1.67 2.92 5.12 5.12 0 0 0 3.2 9.67a4.82 4.82 0 0 1-2.23-.64v.07c0 2.44 1.7 4.48 3.95 4.95a4.84 4.84 0 0 1-2.22.08c.63 2.01 2.45 3.47 4.6 3.51A9.72 9.72 0 0 1 0 19.74 13.68 13.68 0 0 0 7.55 22c9.06 0 14-7.7 14-14.37v-.65c.96-.71 1.79-1.6 2.45-2.61z" />
    </svg>
);

const Facebook = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M24 12.07C24 5.41 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.04V9.41c0-3.02 1.8-4.7 4.54-4.7 1.31 0 2.68.24 2.68.24v2.97h-1.5c-1.5 0-1.96.93-1.96 1.89v2.26h3.32l-.53 3.5h-2.8V24C19.62 23.1 24 18.1 24 12.07" />
    </svg>
);
const Instagram = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M16.98 0a6.9 6.9 0 0 1 5.08 1.98A6.94 6.94 0 0 1 24 7.02v9.96c0 2.08-.68 3.87-1.98 5.13A7.14 7.14 0 0 1 16.94 24H7.06a7.06 7.06 0 0 1-5.03-1.89A6.96 6.96 0 0 1 0 16.94V7.02C0 2.8 2.8 0 7.02 0h9.96zm.05 2.23H7.06c-1.45 0-2.7.43-3.53 1.25a4.82 4.82 0 0 0-1.3 3.54v9.92c0 1.5.43 2.7 1.3 3.58a5 5 0 0 0 3.53 1.25h9.88a5 5 0 0 0 3.53-1.25 4.73 4.73 0 0 0 1.4-3.54V7.02a5 5 0 0 0-1.3-3.49 4.82 4.82 0 0 0-3.54-1.3zM12 5.76c3.39 0 6.2 2.8 6.2 6.2a6.2 6.2 0 0 1-12.4 0 6.2 6.2 0 0 1 6.2-6.2zm0 2.22a3.99 3.99 0 0 0-3.97 3.97A3.99 3.99 0 0 0 12 15.92a3.99 3.99 0 0 0 3.97-3.97A3.99 3.99 0 0 0 12 7.98zm6.44-3.77a1.4 1.4 0 1 1 0 2.8 1.4 1.4 0 0 1 0-2.8z" />
    </svg>
);

const Linkedin = ({ size = 24 }) => (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox="0 0 24 24"
        fill="currentColor">
        <path d="M22.23 0H1.77C.8 0 0 .77 0 1.72v20.56C0 23.23.8 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.2 0 22.23 0zM7.27 20.1H3.65V9.24h3.62V20.1zM5.47 7.76h-.03c-1.22 0-2-.83-2-1.87 0-1.06.8-1.87 2.05-1.87 1.24 0 2 .8 2.02 1.87 0 1.04-.78 1.87-2.05 1.87zM20.34 20.1h-3.63v-5.8c0-1.45-.52-2.45-1.83-2.45-1 0-1.6.67-1.87 1.32-.1.23-.11.55-.11.88v6.05H9.28s.05-9.82 0-10.84h3.63v1.54a3.6 3.6 0 0 1 3.26-1.8c2.39 0 4.18 1.56 4.18 4.89v6.21z" />
    </svg>
);

const Backlink = () => {
    return (
        <a
            href="https://web3templates.com"
            target="_blank"
            rel="noopener"
            className="absolute flex px-3 py-1 space-x-2 text-sm font-semibold text-gray-900 bg-white border border-gray-300 rounded shadow-sm place-items-center left-5 bottom-5 dark:bg-trueGray-900 dark:border-trueGray-700 dark:text-trueGray-300">
            <svg
                width="20"
                height="20"
                viewBox="0 0 30 30"
                fill="none"
                className="w-4 h-4"
                xmlns="http://www.w3.org/2000/svg">
                <rect
                    width="30"
                    height="29.5385"
                    rx="2.76923"
                    fill="#362F78"
                />
                <path
                    d="M10.14 21.94H12.24L15.44 12.18L18.64 21.94H20.74L24.88 8H22.64L19.58 18.68L16.36 8.78H14.52L11.32 18.68L8.24 8H6L10.14 21.94Z"
                    fill="#F7FAFC"
                />
            </svg>

            <span>Web3Templates</span>
        </a>
    );
};
