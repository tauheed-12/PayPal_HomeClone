import React from 'react';

const Details = () => {
  return (
    <div className="flex gap-2 sm:gap-4 px-10 sm:px-20 w-full flex-wrap md:pt-24">
      <div className="mb-8 flex-1 mr-4">
        <h3 className="text-sky-800 font-bold">Small-to-medium Business</h3>
        <div className="h-0.5 bg-gray-200"></div>
        <div className="flex justify-between">
          <div className="flex flex-col mt-5 gap-2 sm:gap-4">
            <span className="font-semibold">Introduction</span>
            <span className="font-bold">Getting Started</span>
          </div>
          <div className="flex flex-col mt-5 gap-2 sm:gap-4">
            <span className="font-bold">All Solutions</span>
            <span className="font-semibold">Accept Payments</span>
            <span className="font-semibold">Make Payments</span>
            <span className="font-semibold">Manage Risk</span>
            <span className="font-semibold">Accelerate Growth</span>
            <span className="font-semibold">Streamline Operations</span>
          </div>
        </div>
      </div>
      <div className="mb-8 flex-1 mr-4">
        <h3 className="text-sky-800 font-bold">Enterprise</h3>
        <div className="h-0.5 bg-gray-200"></div>
        <div className="flex justify-between">
          <div className="flex flex-col mt-5 gap-2 sm:gap-4">
            <span className="font-semibold">Introduction</span>
            <span className="font-bold">Marketplaces & Partners</span>
          </div>
          <div className="flex flex-col mt-5 gap-2 sm:gap-4">
            <span className="font-bold">Platform & Solutions</span>
            <span className="font-semibold">Accept Payments</span>
            <span className="font-semibold">Make Payments</span>
            <span className="font-semibold">Manage Risk</span>
            <span className="font-semibold">Accelerate Growth</span>
            <span className="font-semibold">Streamline Operations</span>
          </div>
        </div>
      </div>
      <div className="mb-8 flex-0.7 mr-4"> 
        <h3 className="text-sky-800 font-bold">More</h3>
        <div className="h-0.5 bg-gray-200"></div>
        <div className="flex justify-between">
          <div className="flex flex-col mt-5 gap-2 sm:gap-4">
            <span className="font-bold">Non Profits</span>
            <span className="font-bold">Pricing</span>
            <span className="font-bold">Resource Center</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
