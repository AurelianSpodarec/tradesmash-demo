import Header from "./_components/Header"
import Navigation from "./_components/Navigation"

function LayoutDashboard({ children}:LayoutDashboardProps) {
    return (
        <div className="relative">

            <Navigation />
        
            <div className="lg:pl-[40px]">                
                <Header />
                <main className="py-10">

                <div className="px-4 sm:px-6 lg:px-8">
                    <div className="relative h-[576px] rounded-xl">
                    {children}
                    </div>
                </div>

                </main>
            </div>

        </div>
    )
}

export default LayoutDashboard

interface LayoutDashboardProps {
    children: React.ReactNode
}