'use client'

import { Button } from "@/components/ui/button"
import { Search, Menu } from "lucide-react"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header className="flex min-h-[70px] tracking-wide relative z-50 pt-8 items-center justify-center">
      <div className="fixed flex items-center bg-white border border-slate-600/20 rounded-full shadow-2xl justify-between sm:px-5 px-4 py-3 w-full max-w-screen-xl hover:bg-white gap-2" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(59, 130, 246, 0.2)'}}>
        <div className="flex items-center justify-between w-full">
          {/* Mobile menu button */}
          <Button
            variant="ghost"
            size="sm"
            className="md:hidden p-2 hover:bg-gray-100"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="h-5 w-5" />
          </Button>

          {/* Logo */}
          <div className="flex flex-row gap-8">
            <a href="https://www.openmypro.com/">
              <img 
                alt="logo" 
                width="45" 
                height="40" 
                className="max-sm:hidden" 
                style={{color: 'transparent', width: '100%', height: 'auto'}}
                src="/assets/images/OMDLogo.png"
              />
            </a>
          </div>


          {/* Search Bar */}
          <div className="flex-1 flex items-center justify-center max-lg:hidden">
            <div className="flex z-30 flex-row items-center border sm:rounded-full h-12 sm:h-9 bg-white overflow-hidden border-gray-400 border-[0.5px]">
              <div>
                <button className="text-slate-700 bg-white/95 p-2" tabIndex={0} type="button" style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}>
                  <Menu className="h-5 w-5" />
                </button>
              </div>
              <div className="relative w-[4rem] sm:w-[8rem]">
                <select className="bg-white/95 backdrop-blur-lg text-gray-700 font-normal text-sm border border-white/30 rounded-md sm:px-3 py-1 appearance-none relative h-9 w-20 sm:w-32 transition-all duration-200 focus:ring-0 focus:border-white">
                  <option value="doctor" selected>Wellness Pro</option>
                  <option value="symptom">Symptoms</option>
                  <option value="speciality">Speciality</option>
                  <option value="location">Location</option>
                </select>
              </div>
              <input 
                autoFocus 
                autoComplete="off" 
                className="flex w-[30rem] h-8 text-sm placeholder-gray-700 border-none rounded-r-lg bg-white/95 backdrop-blur-lg focus:ring-0 border-l-gray-900 text-gray-700"
                placeholder="Search Pro Name"
                style={{boxShadow: '0 25px 50px -12px rgba(0, 0, 0, 0.25)'}}
              />
              <button className="transform -translate-x-1 p-[0.2rem] bg-gray-800 hover:bg-gray-900 rounded-full transition-colors duration-200">
                <Search className="text-white h-5 w-5 hover:scale-105 duration-75 ease-in" />
              </button>
            </div>
          </div>

          {/* Company Menu */}
          <div id="collapseMenu" className="max-lg:hidden lg:!block max-lg:before:fixed max-lg:before:bg-black max-lg:before:opacity-50 max-lg:before:inset-0 max-lg:before:z-50">
            <ul className="lg:flex lg:gap-x-10 max-lg:space-y-3 max-lg:fixed max-lg:bg-white max-lg:w-1/2 max-lg:min-w-[300px] max-lg:top-0 max-lg:left-0 max-lg:p-6 max-lg:h-full max-lg:shadow-md max-lg:overflow-auto z-50">
              <li className="group max-lg:border-b max-lg:py-3 relative">
                <span className="px-3 py-1 rounded-md border-gray-900 bg-transparent text-gray-900 text-sm font-bold lg:hover:text-gray-900 block">Company</span>
                <ul className="absolute rounded-md mt-4 shadow-2xl bg-white space-y-3 lg:top-5 max-lg:top-8 -left-6 min-w-[250px] z-50 max-h-0 overflow-hidden group-hover:opacity-100 group-hover:max-h-[700px] px-6 group-hover:pb-4 group-hover:pt-6 transition-all duration-500">
                  <li className="py-1">
                    <a className="hover:text-gray-900 text-gray-600 text-base flex flex-row gap-2 items-center" target="_blank" rel="noopener noreferrer" href="https://www.blossend.com/about">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-info">
                        <circle cx="12" cy="12" r="10"></circle>
                        <path d="M12 16v-4"></path>
                        <path d="M12 8h.01"></path>
                      </svg>
                      About
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="hover:text-gray-900 text-gray-600 text-base flex flex-row gap-2 items-center" target="_blank" rel="noopener noreferrer" href="https://www.openmypro.com/privacy">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-shield">
                        <path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path>
                      </svg>
                      Privacy Policy
                    </a>
                  </li>
                  <li className="py-1">
                    <a className="hover:text-gray-900 text-gray-600 text-base flex flex-row gap-2 items-center" target="_blank" rel="noopener noreferrer" href="https://www.openmypro.com/Terms&Conditions">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="lucide lucide-file-text">
                        <path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
                        <path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
                        <path d="M10 9H8"></path>
                        <path d="M16 13H8"></path>
                        <path d="M16 17H8"></path>
                      </svg>
                      Terms of Service
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          {/* Auth Buttons */}
          <div className="flex items-center space-x-4 max-lg:ml-auto">
            <div className="border-l border-[#333] h-6 max-lg:hidden"></div>
            <button className="px-3 py-1 text-sm rounded-md font-medium text-teal-800 border border-teal-500 bg-teal-100/50 hover:bg-teal-600 hover:text-white hover:border-teal-600">
              Sign in
            </button>
            <a href="https://www.openmypro.com/signup">
              <button className="px-3 py-1 text-sm rounded-md font-medium text-white border border-teal-600 bg-teal-600 hover:text-teal-800 hover:bg-teal-100/50 hover:border-teal-500">
                Sign up
              </button>
            </a>
          </div>
        </div>
      </div>
    </header>
  )
}
