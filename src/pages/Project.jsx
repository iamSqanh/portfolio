import { BsFillBriefcaseFill } from 'react-icons/bs';

import CardProduct from '../components/CardProduct';
import TitlePage from '../components/TitlePage';

const Project = () => {
    const data = {
        title: 'Portfolio',
        text: 'Featured',
        textColor: 'Projects',
    };

    const projects = [
        {
            name: 'project1',
            imgUrl: '',
            arr: [
                {
                    technology: 'Html',
                },
                {
                    technology: 'Tailwind Css',
                },
                {
                    technology: 'ReactJS',
                },
                {
                    technology: 'Redux Toolkit',
                },
            ],
        },
        {
            name: 'project1',
            imgUrl: '',
            arr: [
                {
                    technology: 'Html',
                },
                {
                    technology: 'Tailwind Css',
                },
                {
                    technology: 'ReactJS',
                },
                {
                    technology: 'Redux Toolkit',
                },
            ],
        },
        {
            name: 'project1',
            imgUrl: '',
            arr: [
                {
                    technology: 'Html',
                },
                {
                    technology: 'Tailwind Css',
                },
                {
                    technology: 'ReactJS',
                },
                {
                    technology: 'Redux Toolkit',
                },
            ],
        },
        {
            name: 'project1',
            imgUrl: '',
            arr: [
                {
                    technology: 'Html',
                },
                {
                    technology: 'Tailwind Css',
                },
                {
                    technology: 'ReactJS',
                },
                {
                    technology: 'Redux Toolkit',
                },
            ],
        },
    ];

    const { title, text, textColor } = data;

    return (
        <div className="pt-[50px] mb-6 lg:mb-[100px]">
            <TitlePage
                Icon={<BsFillBriefcaseFill />}
                title={title}
                text={text}
                textColor={textColor}
            />
            <div className="grid place-items-center">
                <div className="lg:w-[80%] grid lg:grid-cols-2 gap-6">
                    {projects.map((item, index) => (
                        <CardProduct key={index} obj={item} />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Project;
