import { Link } from "react-router-dom";
import NavList from "./components/NavList";
import { configDashboard } from "@/config/configDashboard";
import { configApp } from "@/config/configApp";

function Navigation() {
    return (
    <nav className="flex flex-col fixed left-0 h-full min-w-[50px] sidebar-scrollbar z-30 w-[50px] bg-[#151c23] border-r border-r-gray-300">
    <div className="h-full w-full text-white">

        <div className="mb border-b border-b-gray-600 h-[48px] flex items-center justify-center">
            <Link to="/" className="flex w-[50px] p-1 shrink-0 items-center justify-center"> 
                {/* <img src="https://i.ibb.co/MMzrXqX/image.png" className="w-full" /> */}
                    {/* <svg className="w-8 h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256" fill="currentColor"><path d="M230.9,172a8,8,0,0,1-2.9,10.9l-96,56a7.8,7.8,0,0,1-8,0l-96-56a8,8,0,0,1,8-13.8l92,53.6,92-53.6A8,8,0,0,1,230.9,172ZM220,121.1l-92,53.6L36,121.1a8,8,0,0,0-8,13.8l96,56a7.8,7.8,0,0,0,8,0l96-56a8,8,0,1,0-8-13.8ZM28,86.9l96,56a7.8,7.8,0,0,0,8,0l96-56a8,8,0,0,0,0-13.8l-96-56a7.7,7.7,0,0,0-8,0l-96,56a8,8,0,0,0,0,13.8Z"></path></svg> */}
                    <div className="flex items-center justify-center">
                        <svg className="w-full h-8" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                            <path fill-rule="evenodd" d="M12.963 2.286a.75.75 0 00-1.071-.136 9.742 9.742 0 00-3.539 6.177A7.547 7.547 0 016.648 6.61a.75.75 0 00-1.152-.082A9 9 0 1015.68 4.534a7.46 7.46 0 01-2.717-2.248zM15.75 14.25a3.75 3.75 0 11-7.313-1.172c.628.465 1.35.81 2.133 1a5.99 5.99 0 011.925-3.545 3.75 3.75 0 013.255 3.717z" clip-rule="evenodd"></path>
                        </svg>
                        <span className="ml-3 text-xl font-bold sr-only">{configApp.name}</span>
                    </div>
            </Link>
        </div>

        <div className="flex flex-col flex-1 h-full">
            <NavList data={configDashboard.navigation} />
            {/* <NavList data={configNavigationSecondary} className="justify-end" />                    */}
        </div>

    </div>
    </nav>
    )
}

export default Navigation;