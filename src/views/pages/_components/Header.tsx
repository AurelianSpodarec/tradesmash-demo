// @ts-nocheck
import { configApp } from "@/config/configApp";
import { Link, useLocation } from "react-router-dom";

const namesMap:any = {
    "/": "Overview",
    "/trades": "Trades",
    "/tradelog": "Trades Log",
    "/stocks": "Stock",
    "/stats": "Stats",
    "/notebook": "Notebook",
}

function Header() {
    const location = useLocation();
    const currentName = namesMap[location.pathname]

    return (
        <div className="z-40 flex h-16 shrink-0 items-center gap-x-4 border-b border-gray-200 bg-white shadow-sm sm:gap-x-6">

            <Link to="/" className="flex w-[50px] p-1 shrink-0 items-center"> 
                <img src="https://i.ibb.co/MMzrXqX/image.png" className="w-full" />
                 {/* <span className="ml-3 text-xl font-bold">{configApp.name}</span> */}
            </Link>
            
            {/* Mobile button */}
            <button type="button" className="-m-2.5 p-2.5 text-gray-700 lg:hidden">
            <span className="sr-only">Open sidebar</span>
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
                <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"></path>
            </svg>
            </button> 


            <div className="h-6 w-px bg-gray-200 lg:hidden" aria-hidden="true"></div>

            <div className="flex flex-1 gap-x-6 items-center self-stretch lg:gap-x-8">

                <div className="relative flex flex-1">
                    <h1 className="text-2xl font-semibold">{currentName}</h1>
                </div>
          
                <div className="flex items-center gap-x-4 lg:gap-x-6">

                    <div className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200" aria-hidden="true"></div>

                    
                    <div x-data="Components.menu({ open: false })" x-init="init()" className="relative">
                    <button type="button" className="flex items-center p-1.5" id="user-menu-button" x-ref="button" aria-expanded="false" aria-haspopup="true" x-bind:aria-expanded="open.toString()">
                        <div className="mr-2">
                            <span className="sr-only">Open user menu</span>
                            <span className="hidden lg:flex lg:items-center">
                            <span className="ml-4 text-sm font-semibold leading-6 text-gray-900" aria-hidden="true">Michael Taylor</span>
                            {/* <svg className="ml-2 h-5 w-5 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                                <path fill-rule="evenodd" d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z" clip-rule="evenodd"></path>
                            </svg> */}
                            </span>
                        </div>

                        <img className="h-10 w-10 rounded-full bg-gray-50" src="https://media.licdn.com/dms/image/C4E03AQFVCKi33RhRnw/profile-displayphoto-shrink_100_100/0/1656494147901?e=1687996800&v=beta&t=j1xxtYBcK4YmuFifzkigLRykqF22l9y1yqwZoGLOdUw" alt="" />
                    </button>        
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Header;