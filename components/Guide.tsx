import Image from 'next/image';
import React from 'react';

const Guide = () => {
  return (
    <section className="flexCenter flex-col bg-gradient-to-r from-green-50 to-green-100 py-12">
      <div className="padding-container max-container w-full pb-24 text-center">
        <Image src="/camp.svg" alt="camp" width={50} height={50} className="mx-auto mb-4" />
        <p className="uppercase regular-18 text-green-600 mb-6">
          We are here for you
        </p>
        <div className="flex flex-col lg:flex-row justify-between gap-8 lg:gap-16 text-gray-700">
          <h2 className="bold-40 lg:bold-64 text-green-900 leading-tight lg:max-w-[390px] mx-auto">
            Guide You to Easy Way
          </h2>
          <p className="regular-16 lg:regular-18 xl:max-w-[520px] mx-auto text-gray-600 leading-relaxed">
            Only with the hilink application, you will no longer get lost and get lost again, because we already support offline maps when there is no internet connection in the field. Invite your friends, relatives, and friends to have fun in the wilderness, through the valley, and reach the top of the mountain.
          </p>
        </div>
      </div>

      <div className="flexCenter max-container relative w-full overflow-hidden rounded-5xl shadow-lg">
        <Image 
          src="/boat.png"
          alt="boat"
          width={1440}
          height={580}
          className="w-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />

        <div className="absolute flex bg-white py-8 pl-6 pr-8 gap-5 rounded-3xl border border-gray-200 shadow-lg transform transition-transform duration-300 hover:scale-105 hover:shadow-xl md:left-[5%] lg:top-20">
          <Image 
            src="/meter.svg"
            alt="meter"
            width={16}
            height={158}
            className="h-full w-auto"
          />
          <div className="flex flex-col justify-between">
            <div className="flex w-full flex-col">
              <div className="flex justify-between w-full">
                <p className="regular-16 text-gray-500">Destination</p>
                <p className="bold-16 text-green-600 ml-2"> 88 min</p>
              </div>
              <p className="bold-20 mt-2 text-gray-800">Gulmarg</p>
            </div>

            <div className="flex w-full flex-col mt-4">
              <p className="regular-16 text-gray-500">Start track</p>
              <h4 className="bold-20 mt-2 text-gray-800">Dal Lake</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Guide;
