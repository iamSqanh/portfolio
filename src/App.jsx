import Home from './components/Home';
import Header from './layouts/Header';

function App() {
    return (
        <div className="w-[100%]">
            <Header />
            <main>
                <Home />
            </main>
        </div>
    );
}

export default App;
