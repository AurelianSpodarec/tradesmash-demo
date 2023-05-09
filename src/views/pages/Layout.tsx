import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "routes/CustomRoutes";

import Header from "./_components/Header/Header";
import Navigation from "./_components/Nav/Navigation";
import MadeBy from "../atoms/MadeBy";
import CreateModal from "../components/Modal/CreateModal";


function Layout() {
 
    return (
        <BrowserRouter>
        <div className="relative h-full ">

            <CreateModal />
            <MadeBy />

            <div id="context-wrap" className={`flex flex-col h-full`}> 
                
                <Navigation />

                <div className="flex pl-[50px] flex-col h-full relative">

                    <Header />

                    <main className="h-full w-full">
                        <CustomRoutes />
                    </main>      
                </div>            

            </div>

        </div>
        </BrowserRouter>
    )
}

export default Layout;
