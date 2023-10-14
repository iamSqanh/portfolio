import Home from './pages/Home';
import Header from './layouts/Header';

function App() {
    return (
        <div className="w-[100%] min-h-[300vh] bg-[#22262E]">
            <Header />
            <main className="mt-8">
                <Home />
            </main>
        </div>
    );
}

export default App;
