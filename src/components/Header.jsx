import React from 'react'

const Header = () => {
  return (
    <nav className="bg-emerald-950 flex px-10 py-5 items-center justify-between">
        <h2 className="text-2xl ">Shubam</h2>
        <div className="flex gap-8 items-center">
            <h4 className="text-xl ">About</h4>
            <h4 className="text-xl ">Contact</h4>
            <h4 className="text-xl ">Service</h4>
            <h4 className="text-xl ">Your Account</h4>
        </div>
    </nav>
  )
}

export default Header