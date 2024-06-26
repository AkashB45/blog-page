import React from 'react';
import {Link} from 'react-router-dom';
const Nav = ({search,setSearch}) => {
  return (
<div>
    <nav className="bg-black dark:bg-gray-800  shadow py-4 ">
        <div className="px-8 mx-auto max-w-7xl">
            <div className="flex items-center justify-between h-16">
                <div className=" flex items-center">
                    <div className="hidden md:block">
                        <div className="flex items-baseline ml-10 space-x-4">
                            <Link className="text-gray-300  hover:text-yellow-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" to={"/"}>
                            Home
                            </Link>
                            <Link className="text-gray-300 dark:text-white  hover:text-yellow-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" to={"/about"}>
                            about
                            </Link>
                            <Link className="text-gray-300  hover:text-yellow-800 dark:hover:text-white px-3 py-2 rounded-md text-md font-medium" to={"/newpost"}>
                            Newpost
                            </Link>
                          
                        </div>
                    </div>
                </div>
                <div className="block">
                    <div className="flex -mr-2 md:block">
                        <form className="flex flex-row justify-center  w-3.5/4 max-w-sm space-x-5 space-y-0 md:flex-row md:w-full md:space-x-3 md:space-y-0" 
                        onSubmit={(e)=>(
                            e.preventDefault())}>
                            <div className=" relative">
                                <input type="text" id="&quot;form-subscribe-Search" className=" rounded-lg border-transparent flex-1 appearance-none border border-gray-300 w-full py-2 px-4 bg-white text-gray-700 placeholder-gray-400 shadow-sm text-base focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent" placeholder="Search article"
                                value={search}
                                required
                                onChange={(e)=>setSearch(e.target.value)}
                                />
                                </div>
                                <button className="flex-shrink-0 px-4 py-2 text-base font-semibold text-white bg-purple-600 rounded-lg shadow-md hover:bg-purple-700 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-purple-200" type="submit">
                                    Search
                                </button>
                            </form>
                        </div>
                        <div className="flex items-center ml-4 md:ml-6">
                        </div>
                    </div>
                  
                </div>
            </div>
            <div className="md:hidden">
                <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                    <Link className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to={"/"}>
                        Home
                    </Link>
                    <Link className="text-gray-300 dark:text-white block px-3 py-2 rounded-md text-base font-medium" to={"/about"}>
                    about
                    </Link>
                    <Link className="text-gray-300 hover:text-gray-800 dark:hover:text-white block px-3 py-2 rounded-md text-base font-medium" to={"/newpost"}>
                    New post
                    </Link>
                    
                </div>
                </div>
            </nav>
        </div>

  )
}

export default Nav