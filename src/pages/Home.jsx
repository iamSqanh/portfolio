import Banner from './Banner';
import About from './About';
import Contact from './Contact';
import Project from './Project';
import Resume from './Resume';
import Skills from './Skills';

const Home = () => {
    return (
        <div id="banner" className="max-w-[1440px] px-4 mx-auto my-0">
            <Banner />
            <About />
            <Resume />
            <Skills />
            <Project />
            <Contact />
        </div>
    );
};

export default Home;
