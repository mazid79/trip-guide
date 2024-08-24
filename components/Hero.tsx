import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className="padding-container flex flex-col gap-20 py-10 md:gap-28 lg:py-20 xl:flex-row max-container">
        <div className="hero-map"/>

        <div className="relative z-20 flex flex-1 flex-col xl:w-1/2">
            <Image 
                src="/camp.svg"
                alt="camp"
                width={50}
                height={50}
                className="absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]"
            
            />
            <h1 className="bold-52 lg:bold-88">Kashmir Valley Camp Area</h1>
            <p className="regular-16 mt-16 text-gray-30 xl:max-w-[520px]">

                Kashmir Valley Camp Area is a popular destination for hiking, trekking, and birdwatching in the region. It's a scenic and picturesque area with a rich history and a diverse ecosystem. The camp offers a variety of accommodations, restaurants, and activities to help you unwind and enjoy your time in Kashmir.
            </p>

            <div className="my-11 flex flex-wrap gap-5">
                <div className="flex items-center gap-2">
                    {Array(5).fill(1).map((_, index) => (
                        <Image 
                            src="/star.svg"
                            key={index}
                            alt="star"
                            width={24}
                            height={24}
                        />
                    ))}
                </div>

                <p className="bold-16 lg:bold-20 text-blue-70">
                    5 stars
                    <span className="regular-16 lg:regular-20 ml-1">7.7K Reviews</span>
                </p>
            </div>

            <div className="flex flex-col w-full gap-3 sm:flex-row ">
                    <Button 
                    type="button" 
                    title="Download App" 
                    variant="btn_green" />

                    <Button 
                    type="button" 
                    title="How we work?"
                    icon="/play.svg" 
                    variant="btn_white_text" />
            </div>
        </div>

        <div className="relative flex flex-1 items-start">
            <div className="relative z-20 flex w-[268px] flex-col gap-8 rounded-3xl bg-green-90 px-7 py-8">
                <div className="flex flex-col">
                    <div className="flexBetween">
                        <p className="regular-16 text-gray-20">Location</p>
                        <Image 
                            src="/close.svg"
                            alt="close"
                            width={24}
                            height={24}
                        />
                    </div>
                    <p className="bold-20 text-white">Gulmarg</p>
                    
                </div>
                    <div className="flexBetween">
                        <div className="flex flex-col">
                            <p className="regular-16 block text-gray-20">Distance</p>
                            <p className="bold text-white">656.87m</p>
                        </div>
                        <div className="flex flex-col">
                            <p className="regular-16 block text-gray-20">Elevation</p>
                            <p className="bold text-white">4.665km</p>
                        </div>
                    </div>
                
            </div>       
        </div>
    </section>
  )
}

export default Hero
