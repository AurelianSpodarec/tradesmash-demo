import { useEffect } from "react"
import Header from "./_components/Header"
import Navigation from "./_components/Navigation"

function LayoutDashboard({ children, container }:LayoutDashboardProps) {

    useEffect(() => {
        document.body.classList.add('overflow-hidden')
    }, [])

    return (
        <div className="relative h-full bg-[#f1f5f9]">
        <div className="relative h-screen overflow-hidden">
        

            <div id="context-wrap" className={`flex flex-col h-full overflow-hidden`}> 
                <Header />
                
                <div className="flex flex-row h-full overflow-hidden relative">
                    <Navigation />
                    <main className={`h-full w-full`}>
                        {children}
                    </main>      
                </div>            

            </div>
        </div>
        </div>
    )
}

export default LayoutDashboard

interface LayoutDashboardProps {
    children: React.ReactNode;
    container?: string;
}