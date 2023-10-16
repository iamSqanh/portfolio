import Banner from './pages/Banner';
import About from './pages/About';
import Contact from './pages/Contact';
import Project from './pages/Project';
import Resume from './pages/Resume';
import Skills from './pages/Skills';

export const dataRoutes = {
    home: 'portfolio/',
    about: 'portfolio/about',
    resume: 'portfolio/resume',
    skills: 'portfolio/skills',
    portfolio: 'portfolio/portfolio',
    contact: 'portfolio/contact',
};

export const routes = [
    {
        path: dataRoutes.home,
        Component: Banner,
    },
    {
        path: dataRoutes.about,
        Component: About,
    },
    {
        path: dataRoutes.resume,
        Component: Resume,
    },
    {
        path: dataRoutes.skills,
        Component: Skills,
    },
    {
        path: dataRoutes.portfolio,
        Component: Project,
    },
    {
        path: dataRoutes.contact,
        Component: Contact,
    },
];
