import INavigationItem from "@/interface/INavigationItem";
import NavItem from "./NavItem";
import { useLocation, } from 'react-router-dom';

function NavList({ data }:NavListProps) {
    const location = useLocation();
    const pathnameWithoutDashboard = location.pathname.replace(/^\/dashboard(\/|$)/, '/');

    return (
        <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col p-1">
    
            {data && data.map((item => {
                return <NavItem item={item} isActive={pathnameWithoutDashboard === item.url}/>
            }))}
    
        </ul>
        </nav>
    )
}

export default NavList;

interface NavListProps {
    data: INavigationItem[];
}