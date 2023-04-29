import Header from './_components/Header/Header';
import Footer from './_components/Footer/Footer';

function LayoutMain({ children }:LayoutMainProps) {
    return (
        <div>

            <Header />

                <main>
                    {children}
                </main>

            <Footer />
        </div>
    )
}

export default LayoutMain

interface LayoutMainProps {
    children: React.ReactNode
}