import React from "react";
import { Dialog } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import { useState } from "react";
import Switch from "./Switch";
import { NavLink } from "react-router-dom";
import { useAuthContext } from "../context/AuthContextProvider";
const Navbar = () => {
  const navigation = [
    { name: "Popular", to: "/popular" },
    { name: "Top Rated", to: "/toprated" },
    { name: "Upcoming", to: "/upcoming" },
  ];
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { logOut, currentUser } = useAuthContext()
  return(
    <>
    <header className="absolute inset-x-0 top-0 z-50 bg-[#D93636] dark:bg-black ">
        <nav
          className="flex items-center justify-between p-6 lg:px-8"
          aria-label="Global"
        >
          <div className="flex lg:flex-1">
            <NavLink to="/" className="-m-1.5 p-1.5">
              <span className="sr-only">Your Company</span>
              <img
                className="h-12 w-auto"
                src="https://cdn.pixabay.com/photo/2015/02/12/11/54/popcorn-633627_640.png"
                alt=""
              />
            </NavLink>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
               to={item.to}
                className="text-2xl font-semibold leading-6 text-gray-900 dark:text-white"
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          
          <div className="hidden lg:flex lg:flex-1 lg:justify-end">
          {currentUser && (
                <h5 className="mr-2 capitalize flex items-center">{currentUser?.displayName} </h5>
              )}
          <Switch />
          {currentUser ?(<NavLink
              to="/"
              className="text-2xl font-semibold leading-6 text-gray-900 dark:text-white flex items-center"
              onClick={logOut}
            >
              Logout <span aria-hidden="true">&rarr;</span>
            </NavLink>) : (<NavLink
              to="/login"
              className="text-2xl font-semibold leading-6 text-gray-900 dark:text-white flex items-center "
            >
              Log in <span aria-hidden="true">&rarr;</span>
            </NavLink>)}
            
           
          </div>
        </nav>
        <Dialog
          as="div"
          className="lg:hidden"
          open={mobileMenuOpen}
          onClose={setMobileMenuOpen}
        >
          
          <div className="fixed inset-0 z-50" />
          <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto dark:bg-black bg-[#D93636] px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
            <div className="flex items-center justify-between">
              <NavLink to="/" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8 w-auto"
                  src="https://cdn.pixabay.com/photo/2015/02/12/11/54/popcorn-633627_640.png"
                  alt=""
                />
              </NavLink>
              <button
                type="button"
                className="-m-2.5 rounded-md p-2.5 text-white"
                onClick={() => setMobileMenuOpen(false)}
              >
                <span className="sr-only">Close menu</span>
                <XMarkIcon className="h-6 w-6" aria-hidden="true" />
              </button>
            </div>
            <div className="mt-6 flow-root">
              <div className="-my-6 divide-y divide-gray-500/10">
                <div className="space-y-2 py-6">
                  {navigation.map((item) => (
                   
                    <NavLink
                      key={item.name}
                      to={item.to}
                      className="-mx-3 block rounded-lg  px-3 py-2 text-2xl font-semibold leading-7 dark:text-white text-gray-900 hover:bg-[#8C1127]"
                    >
                      {item.name}
                      </NavLink>
                  ))}
                </div>
             
                <div className="py-6">
                  {currentUser ? (<NavLink
                    to="/"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-2xl font-semibold leading-7 dark:text-white text-gray-900 hover:bg-[#8C1127]"
                    onClick={logOut}
                  >
                    Logout
                  </NavLink>) : (<NavLink
                    to="/login"
                    className="-mx-3 block rounded-lg px-3 py-2.5 text-2xl font-semibold leading-7 dark:text-white text-gray-900 hover:bg-[#8C1127]"
                  >
                    Log in
                  </NavLink>)}
                  
                </div>
              </div>
            </div>
          </Dialog.Panel>
        </Dialog>
      </header>
      <div className="h-[100px] dark:bg-black"></div>
      </>
  )
};

export default Navbar;
