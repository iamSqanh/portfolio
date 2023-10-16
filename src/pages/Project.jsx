import { AiFillFileWord } from 'react-icons/ai';

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
            name: 'E-commerce Accessories',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697423308/portfolio_Anh/pj1_s4es70.png',
            path: '69022.vercel.app',
            arr: [
                {
                    technology: 'Html',
                },
                {
                    technology: 'Tailwind',
                },
                {
                    technology: 'Material',
                },
                {
                    technology: 'ReactJS',
                },
                {
                    technology: 'Redux',
                },
            ],
        },
        {
            name: 'Gearvn Clone',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697423308/portfolio_Anh/pj2_bwrr4a.png',
            arr: [
                {
                    technology: 'Html',
                },
                {
                    technology: 'Scss',
                },
                {
                    technology: 'ReactJS',
                },
                {
                    technology: 'Redux',
                },
                {
                    technology: 'RestFull API',
                },
            ],
        },
        {
            name: 'LandingPage Movie',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697423310/portfolio_Anh/pj3_ihnh71.png',
            arr: [
                {
                    technology: 'Html',
                },
                {
                    technology: 'Tailwind',
                },
                {
                    technology: 'ReactJS',
                },
                {
                    technology: 'Redux',
                },
            ],
        },
        {
            name: 'LandingPage Cart',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697423306/portfolio_Anh/pj4_ag4nik.png',
            arr: [
                {
                    technology: 'Html',
                },
                {
                    technology: 'Scss',
                },
            ],
        },
    ];

    const { title, text, textColor } = data;

    return (
        <div className="pt-[50px] mb-6 lg:mb-[100px]">
            <TitlePage
                Icon={<AiFillFileWord />}
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
