import Image from "next/image"
import user1 from '../public/img/user1.jpg'
import user2 from '../public/img/user2.jpg'
import user3 from '../public/img/user3.jpg'







const Testimonials = () => {
    return (
        <div className='w-full px-4 flex flex-col justify-center items-center gap-20 my-24'>
            <div className='flex flex-col items-center justify-center w-[80%] lg:w-[50%]'>
                <div className='text-indigo-500 font-bold pb-4'>TESTIMONIALS</div>
                <div className='text-4xl font-bold text-gray-800 text-center pb-6 dark:text-white'>
                    Here's what our customers said
                </div>
                <div className='text-center text-xl leading-normal text-gray-500 dark:text-gray-100'>
                    Testimonails is a great way to increase the brand trust and awareness. Use this section to highlight your popular customers.
                </div>
            </div>
            <div className="flex justify-around lg:space-x-8 flex-col items-center space-y-4 lg:flex-row lg:space-y-0  w-full md:w-[80%] lg:w-full">
                <div className="p-8 bg-gray-100 dark:bg-slate-800 rounded-xl pt-12 w-full lg:w-auto">
                    <div className="text-xl md:text-2xl pb-4">
                        Share a real testimonial that hits some of your benefits from one of your popular customer.
                    </div>
                    <div className="flex">
                        <Image src={user1} className="h-12 w-12 rounded-full" />
                        <div className="pl-4">
                            <div className="text-gray-800 text-lg font-medium dark:text-white">Sarah Steiner</div>
                            <div className="text-gray-600 dark:text-gray-100">VP Sales at Google</div>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-gray-100 dark:bg-slate-800 rounded-xl pt-12 w-full lg:w-auto">
                    <div className="text-xl md:text-2xl pb-4">
                        Make sure you only pick the right sentence to keep it short and simple.
                    </div>
                    <div className="flex">
                        <Image src={user2} className="h-12 w-12 rounded-full" />
                        <div className="pl-4">
                            <div className="text-gray-800 text-lg font-medium dark:text-white">Dylan Ambrose</div>
                            <div className="text-gray-600 dark:text-gray-100 ">Lead marketer at Netflix</div>
                        </div>
                    </div>
                </div>
                <div className="p-8 bg-gray-100 dark:bg-slate-800 rounded-xl pt-12 w-full lg:w-auto">
                    <div className="text-xl md:text-2xl pb-4 dark:text-gray-100">
                        This is an awesome landing page template I've seen. I would use this for anything.
                    </div>
                    <div className="flex">
                        <Image src={user3} className="h-12 w-12 rounded-full" />
                        <div className="pl-4">
                            <div className="text-gray-800 text-lg font-medium dark:text-white">Gabrielle Winn</div>
                            <div className="text-gray-600 dark:text-gray-100">Co-founder of Acme Inc</div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Testimonials
