import About from './About';
import Banner from './Banner';

function Home() {
    return (
        <div className="max-w-[1440px] px-4 mx-auto my-0">
            <Banner />
            <About />
        </div>
    );
}

export default Home;
