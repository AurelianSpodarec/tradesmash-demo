import NavItem from "./NavItem";
import { configDashboard } from "config/configDashboard";
import { useLocation, NavLink } from 'react-router-dom';

function NavList() {
    const location = useLocation();
    const pathnameWithoutDashboard = location.pathname.replace(/^\/dashboard(\/|$)/, '/');

    return (
        <nav className="flex flex-1 flex-col">
        <ul role="list" className="flex flex-1 flex-col">
    
            {configDashboard.navigation && configDashboard.navigation.map((item => {
                return (
                    <NavItem item={item} isActive={pathnameWithoutDashboard === item.url}/>
                )
            }))}
    
        </ul>
        </nav>
    )
}

export default NavList;