import React from 'react'

const Form = () => {
  return (
    <div className=" md:absolute sm:ml-20 mx-4 mt-4 md:mt-0 md:top-64 md:right-24 flex flex-col gap-4 px-4 md:px-8 py-2 md:py-14 sm:w-4/5  md:w-2/5 md:bg-white shadow-xl md:shadow-xl rounded-lg z-20">
      <div className="gap-10">
      <h1 className="text-sm md:text-2xl font-bold md:mb-4 sm:mb-2">
        Get Started
      </h1>
      <p className="text-sm md:text-xl">Tell us a little about yor business so we can connect you with the right person </p>
      </div>
      <input placeholder='First name*' required className="placeholder:text-sm px-3 py-1 md:py-2 border-solid border-2 border-t-0 border-r-0"></input>
      <input placeholder='Last name*' required className="placeholder:text-sm px-3 py-1 md:py-2 border-solid border-2 border-t-0 border-r-0"></input>
      <input placeholder='Work email*' required className="placeholder:text-sm px-3 py-1 md:py-2 border-solid border-2 border-t-0 border-r-0"></input>
      <input placeholder='Phone number*' required className="placeholder:text-sm px-3 py-1 md:py-2 border-solid border-2 border-t-0 border-r-0"></input>
      <input placeholder='Company name*' required className="placeholder:text-sm px-3 py-1 md:py-2 border-solid border-2 border-t-0 border-r-0"></input>
      <input placeholder='Company website*' required className="placeholder:text-sm px-3 py-1 md:py-2 border-solid border-2 border-t-0 border-r-0"></input>
      <select prefix='country' required className="placeholder:text-sm px-3 py-1 md:py-2 border-solid border-2 border-t-0 border-r-0">
        <option disabled selected>Country*</option>
        <option>United States</option>
        <option>India</option>
        <option>Austrailia</option>
        <option>China</option>
        <option>Japan</option>
      </select>
      <select placeholder='estimated annual sales' required className="placeholder:text-sm px-3 py-3 border-solid border-2 border-t-0 border-r-0">
        <option disabled selected>Select Annual Sales</option>
        <option>less than 1000000</option>
        <option>more than 2000000</option>
        <option>more than 4000000</option>
      </select>
      <select prefix='Do you already have a PayPal business account?' required className="placeholder:text-sm px-3 py-3 border-solid border-2 border-t-0 border-r-0">
       <option disabled selected>Do you already have a PayPal business account?*</option>
        <option>Yes</option>
        <option>No</option>
      </select>
      <div className="flex">
      <input type='checkbox' className="placeholder:text-sm px-4 py-4 pl-4 border-t-0 border-r-0"></input>
      <p className="text-sm md:text-lg pl-4">I have read and accepted the <span className="text-sky-800 font-bold">PayPal Privacy Policy</span></p>
      </div>
      <p className="text-sm">I consent to PayPal contacting me by phone or email, and to sending me product or 
      industry information relevant to my query. I know I can unsubscribe anytime.</p>
      <button type='submit' className="bg-blue-700 border-none py-2 text-sm text-white border-t-0 border-r-0 w-2/5 text-center self-center rounded-xl">Submit</button>
      <span className="text-center">*Required fields.</span>
    </div>
  )
}

export default Form
