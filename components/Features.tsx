import { FEATURES } from '@/constants';
import Image from 'next/image';
import React from 'react';

const Features = () => {
  return (
    <section className="flex-col flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24">
      <div className="max-container padding-container relative w-full flex flex-wrap justify-center lg:justify-end"> {/* Added flex-wrap and justify-center */}
        <div className="flex flex-1 lg:min-h-[900px] lg:justify-center relative"> {/* Added relative positioning */}
          <Image
            src="/phone.png"
            alt="phone"
            width={440}
            height={1000}
            className="feature-phone transform transition-transform duration-300 ease-in-out hover:scale-110 object-contain lg:max-w-[70%] xl:max-w-[65%]"
            style={{ objectFit: 'contain' }} 
          />
        </div>

        <div className="z-20 flex w-full flex-col lg:w-[60%] px-6 lg:px-12 py-8 bg-white rounded-lg shadow-lg mt-10 lg:mt-0"> {/* Added margin-top for spacing */}
          <div className="relative mb-8">
            <Image
              src="/camp.svg"
              alt="camp"
              width={50}
              height={50}
              className="absolute left-[-5px] top-[-28px] w-10 lg:w-[50px]"
            />
            <h2 className="bold-40 lg:bold-64 text-gray-900">Our Features</h2>
          </div>
          <ul className="mt-10 grid gap-10 md:grid-cols-2 lg:gap-20">
            {FEATURES.map((feature) => (
              <FeatureItem 
                key={feature.title}
                title={feature.title} 
                icon={feature.icon}
                description={feature.description}
              />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

type FeatureItemProps = {
  title: string;
  icon: string;
  description: string;
}

const FeatureItem = ({ title, icon, description }: FeatureItemProps) => {
  return (
    <li className="flex w-full flex-1 flex-col items-start p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-1 transition-transform duration-300">
      <div className="rounded-full p-4 lg:p-7 bg-green-50 shadow-inner">
        <Image src={icon} alt={title} width={28} height={28} />
      </div>
      <h2 className="bold-20 lg:bold-32 mt-5 capitalize text-gray-900">{title}</h2>
      <p className="regular-16 mt-5 text-gray-700 lg:mt-[30px]">{description}</p>
    </li>
  );
}

export default Features;
