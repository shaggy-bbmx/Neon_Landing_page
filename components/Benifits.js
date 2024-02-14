import tapper from '../public/img/benefit-one.png'
import manHolder from '../public/img/benefit-two.png'
import Image from 'next/image'
import {
    FaceSmileIcon,
    ChartBarSquareIcon,
    CursorArrowRaysIcon,
    DevicePhoneMobileIcon,
    AdjustmentsHorizontalIcon,
    SunIcon,
} from "@heroicons/react/24/solid"



const Benifits = () => {
    return (
        <div className='w-full px-4 flex flex-col justify-center items-center gap-20'>
            <div className='flex flex-col items-center justify-center w-[80%] lg:w-[50%]'>
                <div className='text-indigo-500 font-bold pb-4'>NEXTLY BENEFITS</div>
                <div className='text-4xl font-bold text-gray-800 text-center pb-6 dark:text-white'>
                    Why should you use this landing page
                </div>
                <div className='text-center text-xl leading-normal text-gray-500 dark:text-white'>
                    Nextly is a free landing page & marketing website template for startups and indie projects. Its built with Next.js & TailwindCSS. And its completely open-source.
                </div>
            </div>
            <div className='flex flex-col lg:flex-row lg:w-[80%] lg:px-0 w-full px-4 '>
                <div className='lg:w-[50%] flex justify-center pb-16 lg:pb-auto lg:justify-start'>
                    <Image src={tapper} />
                </div>
                <div className='w-full lg:w-[50%] flex flex-col justify-center '>
                    <div className='text-4xl font-bold text-gray-800 pb-4 dark:text-white'>
                        Highlight your benefits
                    </div>
                    <div className='text-xl leading-normal text-gray-500 mb-4 dark:text-gray-100'>
                        You can use this space to highlight your first benefit or a feature of your product. It can also contain an image or Illustration like in the example along with some bullet points.
                    </div>
                    <Tabs1
                        title={`Understand your customers`}
                        desc={`Then explain the first point breifly in one or two lines.`}
                    />
                    <Tabs2
                        title={`Improve acquisition`}
                        desc={`Here you can add the next benefit point.`}
                    />
                    <Tabs3
                        title={`Drive customer retention`}
                        desc={`This will be your last bullet point in this section.`}
                    />
                </div>
            </div>
            <div className='flex flex-col-reverse lg:flex-row lg:w-[80%] lg:px-0 w-full px-4 '>
                <div className='w-full lg:w-[50%] flex flex-col justify-center '>
                    <div className='text-4xl font-bold text-gray-800 pb-4 dark:text-white'>
                        Offer more benefits here
                    </div>
                    <div className='text-xl leading-normal text-gray-500 mb-4 dark:text-gray-100'>
                        You can use this same layout with a flip image to highlight your rest of the benefits of your product. It can also contain an image or Illustration as above section along with some bullet points
                    </div>
                    <Tabs4
                        title={`Mobile Responsive Template`}
                        desc={`Nextly is designed as a mobile first responsive template.`}
                    />
                    <Tabs5
                        title={`Powered by Next.js & TailwindCSS`}
                        desc={`This template is powered by latest technologies and tools.`}
                    />
                    <Tabs6
                        title={`Dark & Light Mode`}
                        desc={`Nextly comes with a zero-config light & dark mode.`}
                    />
                </div>
                <div className='lg:w-[50%] flex justify-center pb-16 lg:pb-auto lg:justify-end'>
                    <Image src={manHolder} />
                </div>
            </div>
        </div>
    )
}

export default Benifits


const Tabs1 = ({ title, desc }) => {
    return (
        <div className='flex pt-8 space-x-2'>
            <div className='w-12 h-12 p-2 bg-indigo-500 rounded-md text-white'>
                <FaceSmileIcon />
            </div>
            <div className='flex flex-col  space-y-1'>
                <div className='text-xl text-gray-800 font-semibold dark:text-white'>{title}</div>
                <div className='text-base text-gray-500 dark:text-gray-100'>{desc}</div>
            </div>
        </div>
    )
}

const Tabs2 = ({ title, desc }) => {
    return (
        <div className='flex pt-8 space-x-2'>
            <div className='w-12 h-12 p-2 bg-indigo-500 rounded-md text-white'>
                <ChartBarSquareIcon />
            </div>
            <div className='flex flex-col  space-y-1 '>
                <div className='text-xl text-gray-800 font-semibold dark:text-white'>{title}</div>
                <div className='text-base text-gray-500 dark:text-gray-100'>{desc}</div>
            </div>
        </div>
    )
}


const Tabs3 = ({ title, desc }) => {
    return (
        <div className='flex pt-8 space-x-2'>
            <div className='w-12 h-12 p-2 bg-indigo-500 rounded-md text-white'>
                <CursorArrowRaysIcon />
            </div>
            <div className='flex flex-col  space-y-1'>
                <div className='text-xl text-gray-800 font-semibold dark:text-white'>{title}</div>
                <div className='text-base text-gray-500 dark:text-gray-100'>{desc}</div>
            </div>
        </div>
    )
}

const Tabs4 = ({ title, desc }) => {
    return (
        <div className='flex pt-8 space-x-2'>
            <div className='w-12 h-12 p-2 bg-indigo-500 rounded-md text-white'>
                <DevicePhoneMobileIcon />
            </div>
            <div className='flex flex-col  space-y-1'>
                <div className='text-xl text-gray-800 font-semibold dark:text-white'>{title}</div>
                <div className='text-base text-gray-500 dark:text-gray-100'>{desc}</div>
            </div>
        </div>
    )
}

const Tabs5 = ({ title, desc }) => {
    return (
        <div className='flex pt-8 space-x-2'>
            <div className='w-12 h-12 p-2 bg-indigo-500 rounded-md text-white'>
                <AdjustmentsHorizontalIcon />
            </div>
            <div className='flex flex-col  space-y-1'>
                <div className='text-xl text-gray-800 font-semibold dark:text-white'>{title}</div>
                <div className='text-base text-gray-500 dark:text-gray-100'>{desc}</div>
            </div>
        </div>
    )
}

const Tabs6 = ({ title, desc }) => {
    return (
        <div className='flex pt-8 space-x-2'>
            <div className='w-12 h-12 p-2 bg-indigo-500 rounded-md text-white'>
                <SunIcon />
            </div>
            <div className='flex flex-col  space-y-1'>
                <div className='text-xl text-gray-800 font-semibold dark:text-white'>{title}</div>
                <div className='text-base text-gray-500 dark:text-gray-100'>{desc}</div>
            </div>
        </div>
    )
}