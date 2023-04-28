import { configApp } from "../../../../config/configApp";

function Footer() {
    const date = new Date()
    const currentYear = date.getFullYear()

    return (
        <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center w-full flex-col">


        <div className="flex justify-between items-center w-full mb-4 pb-4 border-blue-500">

            <div>
            <a href="javascript:void(0)" className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
                <span className="ml-3 text-3xl font-bold">{configApp.name}</span>
            </a>
            </div>

            <div>
                <a href="mailto:hello@tradesmash.com" className="font-semibold">
                    <span>Icon</span>
                    <span>hello@tradesmash.com</span>
                </a>
            </div>
        
        </div>

        <div className="flex w-full justify-between items-center">
            <p className="text-sm text-gray-500 sm:ml-4 sm:py-2 sm:mt-0 mt-4">&copy; {currentYear} {configApp.name}. All rights reserved</p>
        

            <span className="text-sm inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
                <a href="/">
                    Linkedin
                </a>
                <a href="/">
                    Linkedin
                </a>
                <a href="/">
                    Linkedin
                </a>
            </span>
        </div>



        </div>
        </footer>
    )
}

export default Footer;