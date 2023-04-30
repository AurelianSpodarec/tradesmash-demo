import Tooltip from "@/views/components/Tooltip";
import { Link } from "react-router-dom";

function NavItem({ item, isActive }:any) {
    return (
        <li className="cursor-default fill-gray-400 text-gray-400 hover:fill-gray-200 hover:text-gray-200 transition hover:bg-[#111111]">
            <Tooltip name={item.name} position="right" dely="200">
            <Link 
                to={`/dashboard${item.url}`} 
                className={`
                    cursor-default ${isActive ? "bg-gray-50 text-indigo-600" : ""}  
                    group flex gap-x-3 rounded-md p-2 text-sm leading-6 font-semibold
                `}>
                    {/* <div className={`${navigationIsActive(page.id) ? "bg-gray-700/50 text-gray-200" : ""} border-2 border-transparent py-2 px-1.5`}> */}
                    <div>
                        <div>
                            {item.icon}
                        </div>
                        <span className="sr-only">{item.name}</span> 
                    </div>
            </Link>
            </Tooltip>
        </li>
    )
}

export default NavItem;