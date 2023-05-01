import { Link } from "react-router-dom";
import { configApp } from "config/configApp";


function Header() {
    
    return (
        <header className="text-gray-600 body-font z-10 relative">
        <div className="container mx-auto flex flex-wrap justify-between p-5 flex-col md:flex-row items-center">

            <Link to="/" className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                <img src="https://i.ibb.co/MMzrXqX/image.png" className="w-14" />
                <span className="ml-3 text-3xl font-bold">{configApp.name}</span>
            </Link>

            <div>
            {/* <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
                <a href="javascript:void(0)" className="mr-5 hover:text-gray-900">First Link</a>
            </nav> */}
            <Link to="/dashboard" className="inline-flex items-center bg-skin-brand-500 border-0 py-1.5 px-4 focus:outline-none hover:bg-gray-200 rounded-lg text-white mt-4 md:mt-0">
                Get Started
            </Link>
            </div>
        
        </div>
        </header>
    )
}

export default Header;