import { useState, useEffect } from 'react';
import { AiOutlineArrowDown } from 'react-icons/ai';
import { BsFileEarmarkWordFill } from 'react-icons/bs';

import Social from '../components/Social';

function Banner() {
    const [loopNum, setloopNum] = useState(0);
    const [isDeleting, setIsDeleting] = useState(false);
    const toRotate = ['QUOC ANH', 'SAM QUOC ANH'];
    const [text, setText] = useState('');
    const [delta, setDelta] = useState(300 - Math.random() * 100);
    const period = 2000;

    useEffect(() => {
        let ticker = setInterval(() => {
            tick();
        }, delta);

        return () => {
            clearInterval(ticker);
        };
    }, [text]);

    const tick = () => {
        let i = loopNum % toRotate.length;
        let fullText = toRotate[i];
        let updateText = isDeleting
            ? fullText.substring(0, text.length - 1)
            : fullText.substring(0, text.length + 1);

        setText(updateText);

        if (isDeleting) {
            setDelta((prev) => prev / 2);
        }

        if (!isDeleting && updateText === fullText) {
            setIsDeleting(true);
            setDelta(period);
        } else if (isDeleting && updateText === '') {
            setIsDeleting(false);
            setloopNum(loopNum + 1);
            setDelta(500);
        }
    };

    const note = [
        {
            name: 'Email',
            title: 'sqanh0320@gmail.com',
        },
        {
            name: 'Phone',
            title: '+(84) 981 464 457',
        },
        {
            name: 'Location',
            title: 'Ha Noi',
        },
    ];

    return (
        <div className="relative h-unset lg:h-[80vh] ">
            <div className="absolute left-0 top-1/2 transform translate-y-[-50%] hidden lg:block">
                <Social />
            </div>
            <div className="lg:flex justify-center">
                <div className="lg:w-[40%]">
                    <img
                        src="https://res.cloudinary.com/dclafzgo9/image/upload/v1697445571/portfolio_Anh/avta1_qmzs0s.png"
                        alt=""
                        className="lg:w-full"
                    />
                </div>
                <div className="w-full lg:w-[40%] flex items-center mt-4">
                    <div className="w-full h-unset lg:h-[500px] flex flex-col justify-between ">
                        <div className="flex flex-col items-center justify-center lg:items-start relative">
                            <h1 className="font-bold text-4xl text-white uppercase lg:text-[42px] lg:mb-4">
                                HELLO !!!
                            </h1>
                            <div className="flex mt-4">
                                <div className="w-[100px] h-[1px] bg-[#4a9ee7] mr-5 translate-y-5 hidden lg:block"></div>
                                <h2 className="uppercase text-xl text-white font-thin">
                                    MY NAME IS{' '}
                                    <span className="text-blue-500 transition-transform duration-300">
                                        {text}
                                    </span>
                                </h2>
                            </div>
                            <h4 className="my-10 text-3xl italic lg:text-[46px] font-light lg:my-14 text-white text-italic">
                                Front End Developer
                            </h4>
                            <a
                                download="CV.pdf"
                                href="assets/CV.pdf"
                                className="w-full flex items-center justify-center gap-3 px-6 py-4 text-white rounded-full font-medium lg:px-10 lg:py-4 lg:translate-x-24 lg:text-base lg:w-auto bg-blue-500"
                            >
                                <span className="tracking-wide">
                                    DOWNLOAD CV
                                </span>
                                <span className="text-xl grid place-items-center">
                                    <BsFileEarmarkWordFill />
                                </span>
                            </a>
                            <div className="absolute top-[-30px] right-0 hidden lg:block">
                                <a href="" className="relative">
                                    <AiOutlineArrowDown className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white h-5 w-5" />
                                    <img
                                        className="w-[100px] animate-spin-slow hover:scale-110"
                                        src="https://res.cloudinary.com/dclafzgo9/image/upload/v1697445704/portfolio_Anh/round-text_pdwypp.png"
                                        alt=""
                                    />
                                </a>
                            </div>
                        </div>
                        <div className="hidden lg:block">
                            <ul className="flex">
                                {note.map((item, index) => (
                                    <li
                                        key={index}
                                        className="border-r border-blue-500 last:border-r-0 px-4 grid gap-2 text-white"
                                    >
                                        <h5>{item.name}</h5>
                                        <p>{item.title}</p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
