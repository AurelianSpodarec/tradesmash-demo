// @ts-nocheck
import { configApp } from "@/config/configApp";
import { Link, useLocation } from "react-router-dom";

const namesMap:any = {
    "/": "Overview",
    "/trades": "Trades",
    "/tradelog": "Trades Log",
    "/stocks": "Stock",
    "/stats": "Stats",
    "/notebook": "Journal",
}

function Header() {
    const location = useLocation();
    const currentName = namesMap[location.pathname]

    return (
        <header className="z-40 flex h-[48px] shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white shadow-sm sm:gap-x-6">

            <button id="mobile-button" type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
            </button> 

            <div className="flex flex-1 gap-x-6 items-center self-stretch lg:gap-x-8">

                <div className="flex-1">
                </div>
          
                <div className="flex items-center gap-x-4 lg:gap-x-6">

                    
                    <div className="relative">
                    <button type="button" className="flex items-center p-1.5" id="user-menu-button" x-ref="button" aria-expanded="false" aria-haspopup="true">
                        <div className="mr-2">
                            <span className="sr-only">Open user menu</span>
                            <span className="hidden lg:flex lg:items-center">
                            <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">John Smith</span>
                            </span>
                        </div>

                        <img className="h-10 w-10 rounded-full bg-gray-50" src="https://marketplace.canva.com/EAFEits4-uw/1/0/1600w/canva-boy-cartoon-gamer-animated-twitch-profile-photo-oEqs2yqaL8s.jpg" alt="" />
                    </button>        
                    </div>


                </div>


            </div>
        </header>
    )
}

export default Header;
