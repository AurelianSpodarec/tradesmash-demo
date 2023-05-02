import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "routes/CustomRoutes";

import Header from "./_components/Header/Header";
import Navigation from "./_components/Nav/Navigation";


function Layout() {
 
    return (
        <BrowserRouter>
        <div className="relative h-full ">

            <div id="context-wrap" className={`flex flex-col h-full`}> 
                <Header />
                
                <div className="flex flex-row h-full relative">
                    <Navigation />

                    <main className="pl-[50px] h-full w-full">
                        <CustomRoutes />
                    </main>      
                </div>            

            </div>

        </div>
        </BrowserRouter>
    )
}

export default Layout;