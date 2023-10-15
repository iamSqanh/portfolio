import About from './About';
import Banner from './Banner';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';
import Skills from './Skills';

function Home() {
    return (
        <div className="max-w-[1440px] px-4 mx-auto my-0">
            <Banner />
            <About />
            <Resume />
            <Skills />
            <Project />
            <Contact />
        </div>
    );
}

export default Home;
