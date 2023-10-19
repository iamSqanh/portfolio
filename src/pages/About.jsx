import { BsFillPersonFill } from 'react-icons/bs';
import { AiFillCheckCircle } from 'react-icons/ai';

import TitlePage from '../components/TitlePage';

const About = () => {
    const about = {
        title: 'About',
        text: 'Know Me',
        textColor: 'More',
        say: `I'm Sam Anh , a Front End Developer`,
    };
    const { title, text, textColor, say } = about;

    const aboutMe = [
        {
            title: `My name is Anh and I work as a Front End Developer. Let me know if you need any assistance in that area.`,
        },
        {
            title: `First, learn the rules then study the literature.`,
        },
        {
            title: `I'm interested in front-end development in particular and programming in general.`,
        },
        {
            title: `I have determination and effort in my life and commitment to my work.`,
        },
        {
            title: `I have determination and effort in my life and commitment to my work.`,
        },
    ];

    const info = [
        {
            tag: 'Name',
            des: 'Sầm Quốc Anh',
        },
        {
            tag: 'Age',
            des: 23,
        },
        {
            tag: 'Phone',
            des: `+(84) 981 464 457`,
        },
        {
            tag: 'Email',
            des: 'sqanh0320@gmail.com',
        },
        {
            tag: 'Github',
            des: 'https://github.com/iamSqanh',
        },
        {
            tag: 'linkedin',
            des: 'sqanh0320@gmail.com',
        },
    ];

    return (
        <div id="about" className="pt-[50px] mb-6 lg:mb-[100px]">
            <TitlePage
                Icon={<BsFillPersonFill />}
                title={title}
                text={text}
                textColor={textColor}
            />
            <div className="mt-12 lg:grid grid-cols-3">
                <div className="col-span-1"></div>
                <div className="col-span-2">
                    <div className="lg:w-[85%] py-[30px] border-b border-gray-500">
                        <h3 className="mb-2 text-blue-500 text-2xl font-normal">
                            Introduce ?
                        </h3>
                        <h2 className="text-2xl text-white my-5 font-medium">
                            {say}
                        </h2>
                        <ul className="pl-3">
                            {aboutMe.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex gap-4 items-center font-thin mb-[10px] text-white"
                                >
                                    <span>
                                        <AiFillCheckCircle />
                                    </span>
                                    {item.title}
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="mt-[30px]">
                        <ul className="grid lg:grid-cols-2 gap-4">
                            {info.map((item, index) => (
                                <li
                                    key={index}
                                    className="flex items-center gap-4 col-span-1"
                                >
                                    <span className="text-blue-500 font-thin text-lg w-[80px] block">
                                        {item.tag} :
                                    </span>
                                    <span className="text-white font-thin">
                                        {item.des}
                                    </span>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
