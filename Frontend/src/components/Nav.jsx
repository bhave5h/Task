import React from 'react'

const Nav = () => {
  return (
    <div>
        <header className="flex flex-col md:flex-row items-start md:items-center justify-between mb-10 py-4 gap-4">
      <div>
        <h1 className="text-2xl font-medium text-white">
          Hello, <br /> <span className="text-3xl font-bold text-white"> 👋</span>
        </h1>
      </div>
      
      <div className="flex items-center gap-4 self-end md:self-auto">
        <button className="flex items-center gap-2 bg-red-500/10 hover:bg-red-500 text-red-500 hover:text-white px-4 py-2 rounded-xl text-sm font-medium transition-all duration-300 group">
            <span>Log Out</span>
      
        </button>
        <div className="w-12 h-12 rounded-full bg-dark-input border border-gray-700/50 p-1 cursor-pointer">
          <img src="https://i.pravatar.cc/150?img=11" alt="Profile" className="w-full h-full object-cover rounded-full" />
        </div>
      </div>
    </header>
      
    </div>
  )
}

export default Nav
