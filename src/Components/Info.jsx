import React from 'react'

const Info = () => {
  return (
    <div className="px-10 sm:px-20 py-14 md:py-32 md:pb-80 mb-6 md:mb-0">
      <h2 className="text-2xl w-4/5 md:w-1/5 mb-7">Some other ways to connect with us</h2>
      <div className="mb-7">
        <p className="font-semibold">Want to speak with Sales right away?</p>
        <span className="text-sky-800 font-bold">Call 877-794-7639 <span className="rounded-full bg-blue-800 bg-opacity-10 pr-2">→</span></span>
      </div>
      <div className="mb-7">
        <p className="font-semibold">Need help with your existing account?</p>
        <span className="text-sky-800 font-bold">Visit our help center <span className="rounded-full bg-blue-800 bg-opacity-10 pr-2">→</span></span>
      </div>
      <div>
        <p className="font-semibold">Want helpful business insights?</p>
        <span className="text-sky-800 font-bold">Visit our Business Resource Center <span className="rounded-full bg-blue-800 bg-opacity-10 pr-2">→</span></span>
      </div>
    </div>
  )
}

export default Info
