import Home from './pages/Home';
import Header from './layouts/Header';
import Footer from './layouts/Footer';

function App() {
    return (
        <div className="w-[100%] bg-[#22262E]">
            <Header />
            <main className="mt-8">
                <Home />
            </main>
            <Footer />
        </div>
    );
}

export default App;
