import { useState, useEffect } from 'react';

import Home from './pages/Home';
import Header from './layouts/Header';
import Footer from './layouts/Footer';
import Navbar from './components/Navbar';
import GoTop from './components/GoTop';

function App() {
    const [goTop, setGoTop] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setGoTop(window.scrollY >= 150);
        };

        window.addEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className="w-[100%] bg-[#22262E] relative">
            <Header />
            <Navbar />
            {goTop && <GoTop />}
            <main className="mt-8">
                <Home />
            </main>
            <Footer />
        </div>
    );
}

export default App;
