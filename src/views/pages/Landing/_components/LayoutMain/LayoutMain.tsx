import Header from './_components/Header/Header';
import Footer from './_components/Footer/Footer';
import { useEffect } from 'react';

function LayoutMain({ children }:LayoutMainProps) {

    useEffect(() => {
        document.body.classList.remove('overflow-hidden')
    }, [])

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