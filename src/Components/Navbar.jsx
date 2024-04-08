import React from 'react'
import logo from "../Assests/logo.jpeg"
import menu from "../Assests/menu-bar.png"
const Navbar = ({setClicked, clicked}) => {
  const handleclick = ()=>{
    if(clicked===false){
      setClicked(true)
    }
    else{
      setClicked(false)
    }
  }
  return (
    <div className="w-full flex flex-row justify-between px-6 py-4 items-center">
     <div className="hidden md:flex flex-1 flex-row justify-start items-center sm:displ gap-8">
      <i class="fa-solid fa-bars" className="md:hidden flex"></i>
      <img src={logo} alt='logo' className="w-12 h-12"></img>
      <span>Personal</span>
      <span>Business</span>
      <span>Developer</span>
      <span>Help</span>
     </div>
     <div className="md:hidden flex" onClick={handleclick}>
      <img src={menu} alt='menu-icon' className="h-6 w-6"></img>
     </div>
     <div className="flex-1 flex flex-row justify-end gap-8 pl-8">
        <button className="border-solid border-2 rounded-2xl border-blue-700   text-blue-700 px-2 sm:px-4 py-0.5 sm:py-1">Login</button>
        <button className="border-none rounded-2xl bg-blue-800 px-4 py-1 text-white">Sign Up</button>
     </div>
    </div>
  )
}

export default Navbar
