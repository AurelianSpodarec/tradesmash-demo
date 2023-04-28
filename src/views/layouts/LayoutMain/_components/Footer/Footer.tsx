import { configApp } from "../../../../../config/configApp";

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
                <a href="mailto:hello@tradesmash.com" className="flex items-center space-x-2 font-semibold">
                    <span className="w-5">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><path d="M48 64C21.5 64 0 85.5 0 112c0 15.1 7.1 29.3 19.2 38.4L236.8 313.6c11.4 8.5 27 8.5 38.4 0L492.8 150.4c12.1-9.1 19.2-23.3 19.2-38.4c0-26.5-21.5-48-48-48H48zM0 176V384c0 35.3 28.7 64 64 64H448c35.3 0 64-28.7 64-64V176L294.4 339.2c-22.8 17.1-54 17.1-76.8 0L0 176z"/></svg>
                    </span>
                    <span>hello@tradesmash.com</span>
                </a>
            </div>
        
        </div>

        <div className="flex w-full justify-between items-center">
            <p className="text-sm text-gray-500 sm:ml-4 sm:py-2 sm:mt-0 mt-4">&copy; {currentYear} {configApp.name}. All rights reserved</p>
        

            <span className="text-sm space-x-4 inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
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