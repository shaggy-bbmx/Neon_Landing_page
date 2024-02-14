import { Disclosure } from '@headlessui/react'
import { ChevronUpIcon } from '@heroicons/react/20/solid'



const Faq = () => {
    return (
        <div className='w-full px-4 flex flex-col justify-center items-center gap-0 md:gap-10 my-24'>
            <div className='flex flex-col items-center justify-center w-[80%] lg:w-[40%]'>
                <div className='text-indigo-500 font-bold pb-4'>FAQ</div>
                <div className='text-2xl md:text-4xl font-bold text-gray-800 dark:text-white text-center pb-6'>
                    Frequently Asked Questions
                </div>
                <div className='text-center text-sm md:text-xl leading-normal text-gray-500 dark:text-gray-100 '>
                    Answer your customers possible questions here, it will increase the conversion rate as well as support or chat requests.
                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-[100%] lg:w-[40%]  px-4 pt-16">
                <div className="mx-auto w-full  rounded-2xl bg-white dark:bg-[#171717] p-2">
                    <Disclosure>
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 dark:bg-slate-800 px-4 py-3 text-left text-md md:text-lg font-normal text-gray-800 hover:bg-gray-200 dark:text-white">
                                    <span>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-6 w-6 text-gray-800 dark:text-white`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-8 pt-4 text-md text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-4">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-3 text-left text-md md:text-lg font-normal text-gray-800 hover:bg-gray-200 dark:bg-slate-800 dark:text-white ">
                                    <span>Is this template free to use?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-6 w-6 text-gray-800 dark:text-white`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-8 pt-4 text-md text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-4">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-3 text-left text-md md:text-lg font-normal text-gray-800 hover:bg-gray-200 dark:bg-slate-800 dark:text-white">
                                    <span>Do you offer technical support?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-6 w-6 text-gray-800 dark:text-white`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-8 pt-4 text-md text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>
                    <Disclosure as="div" className="mt-4">
                        {({ open }) => (
                            <>
                                <Disclosure.Button className="flex w-full justify-between rounded-lg bg-gray-100 px-4 py-3 text-left text-md md:text-lg font-normal text-gray-800 hover:bg-gray-200 dark:bg-slate-800 dark:text-white">
                                    <span>What is your refund policy?</span>
                                    <ChevronUpIcon
                                        className={`${open ? 'rotate-180 transform' : ''
                                            } h-6 w-6 text-gray-800 dark:text-white`}
                                    />
                                </Disclosure.Button>
                                <Disclosure.Panel className="px-4 pb-8 pt-4 text-md text-gray-500">
                                    If you're unhappy with your purchase for any reason, email us
                                    within 90 days and we'll refund you in full, no questions asked.
                                </Disclosure.Panel>
                            </>
                        )}
                    </Disclosure>

                </div>
            </div>
            <div className="flex flex-col items-center justify-center w-[80%]  px-4 pt-16">
                <div className='py-8 px-8 flex lg:flex-row flex-col space-y-4 lg:space-y-0 lg:space-x-12 bg-indigo-500 rounded-lg'>
                    <div className='text-white'>
                        <div className='text-xl md:text-3xl mb-2 font-semibold flex justify-center lg:justify-start text-center'>Ready to try-out this template?</div>
                        <div className='text-md lg:text-lg font-semibold flex justify-center lg:justify-start text-center'>Don't let your visitors see a poor landing.</div>
                    </div>
                    <div className=' flex justify-center items-center ml-0'>
                        <button className='bg-white py-4 px-4 text-md md:text-lg text-indigo-700 font-semibold rounded-lg'>Download for Free</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faq
