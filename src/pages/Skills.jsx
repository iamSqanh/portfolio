import { AiFillSlackCircle } from 'react-icons/ai';

import TitlePage from '../components/TitlePage';
import CardSkill from '../components/CardSkill';

const Skills = () => {
    const data = {
        title: 'Skills',
        text: '',
        textColor: '',
    };

    const { title, text, textColor } = data;

    const skills = [
        {
            name: 'HTML 5',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697270751/portfolio_Anh/HTML_iafy3a.png',
        },
        {
            name: 'Css',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697270754/portfolio_Anh/CSS_gscvo3.png',
        },

        {
            name: 'Sass',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697270752/portfolio_Anh/sass_y8zcok.png',
        },
        {
            name: 'Material UI',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697270751/portfolio_Anh/material_tailwind_okdlvr.jpg',
        },
        {
            name: 'Bootstrap 5',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697270752/portfolio_Anh/Boostrap_azagzt.jpg',
        },
        {
            name: 'Tailwind',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697270752/portfolio_Anh/tailwind_lrktl7.jpg',
        },
        {
            name: 'JavaScript',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697270751/portfolio_Anh/js_m9gign.png',
        },
        {
            name: 'TypeScript',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697270752/portfolio_Anh/typescript_skpacf.png',
        },
        {
            name: 'RestFull API',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697270752/portfolio_Anh/restfull_xi2kqq.png',
        },
        {
            name: 'ReactJS',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697270752/portfolio_Anh/React_po99k0.png',
        },
        {
            name: 'Redux',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697270752/portfolio_Anh/redux_g6g3ss.jpg',
        },
        {
            name: 'NextJS',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697276854/portfolio_Anh/nextjs-logo_hwzwrl.png',
        },

        {
            name: 'Nodejs (basic)',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697277282/portfolio_Anh/nodejs1_w9ohvy.jpg',
        },
        {
            name: 'My SQL (basic)',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697270752/portfolio_Anh/sql_tol1ho.png',
        },
        {
            name: 'PostgreSQL (basic)',
            imgUrl: 'https://res.cloudinary.com/dclafzgo9/image/upload/v1697277282/portfolio_Anh/postgreSQL1_uicyhm.jpg',
        },
    ];

    return (
        <div
            id="skills"
            className="pt-[50px] mb-6 lg:mb-[100px] bg-[#22262E] py-7"
        >
            <TitlePage
                Icon={<AiFillSlackCircle />}
                title={title}
                text={text}
                textColor={textColor}
            />
            <div className="grid lg:place-items-center">
                <div className="lg:w-[80%] grid lg:grid-cols-3 gap-10">
                    {skills.map((item, index) => (
                        <CardSkill
                            key={index}
                            imgUrl={item.imgUrl}
                            name={item.name}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;
