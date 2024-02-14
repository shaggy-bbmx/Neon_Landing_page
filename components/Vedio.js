

const Vedio = () => {
    return (
        <div className='w-full px-4 flex flex-col justify-center items-center gap-20 my-16'>
            <div className='flex flex-col items-center justify-center w-[80%] lg:w-[50%]'>
                <div className='text-indigo-500 font-bold pb-4'>WATCH A VIDEO</div>
                <div className='text-4xl font-bold text-gray-800 text-center pb-6 dark:text-white'>
                    Learn how to fullfil your needs
                </div>
                <div className='text-center text-xl leading-normal text-gray-500 dark:text-gray-100'>
                    This section is to highlight a promo or demo video of your product. Analysts says a landing page with video has 3% more conversion rate. So, don't forget to add one. Just like this.
                </div>
            </div>
            <div className="flex  items-center justify-center w-full">
                <iframe
                    className="aspect-video w-[80%] lg:w-[50%] rounded-lg"
                    src="https://www.youtube.com/embed/cIriwVhRPVA?si=kFI9WLCVmdvHnkmP&amp;start=80" title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    allowfullscreen>
                </iframe>
            </div>
        </div>
    )
}

export default Vedio
