import React from 'react'
import paypal from "../Assests/paypal-logo.jpeg"
import language from "../Assests/language.png"
const Footer = () => {
  return (
    <div className="px-8">
      <img src={paypal} alt='paypal'></img>
      <div className="flex justify-between flex-wrap mb-4 sm:mb-0">
      <div className="flex justify-start flex-wrap">
        <span className="mr-4 text-blue-900 font-bold">Help</span>
        <span className="mr-4 text-blue-900 font-bold">Contact</span>
        <span className="mr-4 text-blue-900 font-bold">Fees</span>
        <span className="mr-4 text-blue-900 font-bold">Security</span>
        <span className="mr-4 text-blue-900 font-bold">Apps</span>
        <span className="mr-4 text-blue-900 font-bold">Shop</span>
        <span className="mr-4 text-blue-900 font-bold">Enterprise</span>
        <span className="mr-4 text-blue-900 font-bold">Partners</span>
        <span className="mr-4 text-blue-900 font-bold">Feedback</span>
      </div>
      <div className="flex justify-end">
        <img src={language} alt='language' className="h-8 w-10"></img>
      </div>
      </div>
      <div className="h-0.5 bg-gray-200"></div>
      <div className="flex justify-between mt-4 mb-8 flex-wrap flex-col sm:flex-row">
        <div className="flex justify-start flex-wrap flex-sm:flex-row">
          <span className="mr-4 text-blue-900 font-bold">About</span>
          <span className="mr-4 text-blue-900 font-bold">Newsroom</span>
          <span className="mr-4 text-blue-900 font-bold">Jobs</span>
          <span className="mr-4 text-blue-900 font-bold">Investor Relations</span>
          <span className="mr-4 text-blue-900 font-bold">Values in Action</span>
          <span className="mr-4 text-blue-900 font-bold">Public Policy</span>
          <span className="mr-4 text-blue-900 font-bold">Sitemap</span>
        </div>
        <div className="flex sm:justify-end flex-wrap mt-4 sm:mt-0">
            <span className="mr-4 text-gray-600 font-bold">© 1999-2022</span>
            <span className="mr-4 text-blue-900 font-bold">Accessibility</span>
            <span className="mr-4 text-blue-900 font-bold">Privacy</span>
            <span className="mr-4 text-blue-900 font-bold">Cookies</span>
            <span className="mr-4 text-blue-900 font-bold">Legal</span>
        </div>
      </div>
    </div>
  )
}

export default Footer
