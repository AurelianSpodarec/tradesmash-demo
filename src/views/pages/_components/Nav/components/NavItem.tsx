import INavigationItem from "@/interface/INavigationItem";
import Tooltip from "@/views/components/Tooltip";
import { Link } from "react-router-dom";

function NavItem({ item, isActive }:NavItemProps) {
    return (
        <li className="cursor-default fill-gray-500 text-gray-500 hover:fill-gray-300 hover:text-gray-400 transition">
            <Tooltip name={item.name} position="right" dely="200">
            <Link 
                to={`${item.url}`} 
                className={`
                    cursor-default rounded-lg ${isActive ? "bg-[#3e4c59] fill-gray-200 text-gray-200" : ""}  
                    group flex p-2
                `}>
                    <div>
                        <div className="h-6 text-center relative">
                            <div className="absolute top-0 right-0 bottom-0 left-0"></div>
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

interface NavItemProps {
    item: INavigationItem;
    isActive: boolean;
}