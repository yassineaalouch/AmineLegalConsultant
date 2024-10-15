import Image from 'next/image';
import React from 'react';

function PresentationCard() {
  return (
    <div className="flex min-h-[90vh] justify-center flex-col-reverse md:flex-row items-center text-black p-6 gap-6 md:space-y-0 md:space-x-8 rounded-lg shadow-lg">
        <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
                Hi, I am M. Amine
                <br />
                Your Legal Consultant
            </h1>
            <h2 className="text-lg md:text-2xl">
                I can help you solve your legal problems in the easiest way. 
                <br />
                Don&apos;t hesitate to contact me.
            </h2>
        </div>
        <div>
            <Image
                src="/men.webp"
                width={400}
                height={400}
                alt="Man"
                className="rounded-full"
            />
        </div>
    </div>
  );
}

export default PresentationCard;
