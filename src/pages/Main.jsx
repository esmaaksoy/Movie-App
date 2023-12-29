import { useState } from "react";

import Navbar from "../components/Navbar";


const Main = () => {

  return (
    <div className="bg-white dark:bg-black">
      
<Navbar/>
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <div
          className="absolute inset-x-0 -top-40 -z-10 transform-gpu overflow-hidden blur-3xl sm:-top-80"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#400A14] to-[#A62626] opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
        <div className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
          <div className="hidden sm:mb-8 sm:flex sm:justify-center">
            <div className="relative rounded-full px-3 py-1 text-sm leading-6 dark:text-white text-[#400A14] ring-1 ring-gray-900/10 hover:ring-gray-900/20">
            Ready to watch? Enter your email to create or restart your membership.{" "}
              <a href="#" className="font-semibold text-[#D93636]">
                <span className="absolute inset-0" aria-hidden="true" />
                Login <span aria-hidden="true">&rarr;</span>
              </a>
            </div>
          </div>
          <div className="text-center">
            <h1 className="text-4xl font-bold tracking-tight text-[#D93636] sm:text-6xl">
              Unlimited movies, TV shows, and more
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-600 dark:text-white">
            Watch anywhere. Cancel anytime.
            </p>
            <div className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-[#D93636] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#A62626] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Register
              </a>
              <a
                href="#"
                className="text-sm font-semibold leading-6 text-[#D93636]"
              >
                Login <span aria-hidden="true">→</span>
              </a>
            </div>
          </div>
        </div>
        <div
          className="absolute inset-x-0 top-[calc(100%-13rem)] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[calc(100%-30rem)]"
          aria-hidden="true"
        >
          <div
            className="relative left-[calc(50%+3rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 bg-gradient-to-tr from-[#8C1127] to-[##BF8F54] opacity-30 sm:left-[calc(50%+36rem)] sm:w-[72.1875rem]"
            style={{
              clipPath:
                "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
            }}
          />
        </div>
      </div>
      <div className="flex p-10 justify-between border border-gray-500">
        <div className="flex flex-col justify-center ">
          <p className="text-4xl font-bold tracking-tight text-[#D93636] sm:text-6xl">Watch everywhere</p>
          <p className="dark:text-white">
          Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.
          </p>
        </div>
        <div>
          <img src="https://centracom.com/uploads/wtve_devices.png" alt="" />
        </div>
      </div>
      <div className="flex p-10 justify-between border border-gray-500 gap-8">
      <div>
          <img src="https://img.freepik.com/premium-vector/download-vector-illustration-file-download-50-percent-internet-graph-with-load-text-download-arrow-cloud-storage-loading-concept-vector-black-line-icon-white-background_748571-116.jpg" alt="" />
        </div>
        <div className="flex flex-col justify-center ">
          <p className="text-4xl font-bold tracking-tight text-[#D93636] sm:text-6xl">Download your shows to watch offline</p>
          <p className="dark:text-white">
          Save your favorites easily and always have something to watch.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Main;
