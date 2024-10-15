import React from 'react';
function Experiences() {
    let listStartUp = ["Chari","Hooplacar","Glovo Maroc"]
    let listFreelancer=["Yassine Dev", ]
  return (
    <div className=" p-6 rounded-lg ">
        <h2 className="text-4xl font-semibold text-gray-800 mb-8 text-center">
        Experience
        </h2>
        <div className="flex items-start space-x-4">
        <p className="text-lg text-gray-800 leading-relaxed">
          As a <span className="font-semibold text-gray-900">legal consultant</span>, I have accumulated extensive experience in providing expert advice 
          and guidance on a wide range of legal matters. My journey has involved assisting clients 
          in navigating complex legal challenges, drafting and reviewing contracts, and resolving 
          disputes efficiently.
        </p>
      </div>
      <div className="flex items-start space-x-4">
        <p className="text-lg text-gray-800 leading-relaxed">
          I have worked with various businesses, including <span className="font-semibold text-gray-900">startups, established companies, 
          auto-entrepreneurs, and freelancers</span>, ensuring compliance with regulations and offering 
          strategic legal solutions. With a strong background in corporate law, I provide practical 
          and innovative solutions tailored to each client&apos;s unique needs.
        </p>
      </div>
      <div className="flex items-start space-x-4">
        <p className="text-lg text-gray-800 leading-relaxed">
          My commitment to staying up-to-date with the latest legal developments allows me to continuously 
          enhance the quality of the services I offer, providing clients with the most effective solutions.
        </p>
      </div>
      <div className="flex justify-center items-center gap-4 p-6 ">    
        {listStartUp.map((ele,index)=>(
            <div key={index} className="bg-yellow-100 p-2 rounded text-center font-semibold text-gray-800">{ele}</div>
        ))}    
      </div>
    </div>
  );
}

export default Experiences;


