import { BrowserRouter } from "react-router-dom";
import CustomRoutes from "routes/CustomRoutes";
import Header from "./_components/Header";
import Navigation from "./_components/Navigation";


function Layout() {
 
    return (
        <BrowserRouter>
            <div className="relative h-full bg-[#f1f5f9]">
            <div className="relative h-screen overflow-hidden">

                <div id="context-wrap" className={`flex flex-col h-full overflow-hidden`}> 
                    <Header />
                    
                    <div className="flex flex-row h-full overflow-hidden relative">
                        <Navigation />

                        <main className={`h-full w-full`}>
                            <CustomRoutes />
                        </main>      
                    </div>            

                </div>

            </div>
            </div>
        </BrowserRouter>
    )
}

export default Layout;