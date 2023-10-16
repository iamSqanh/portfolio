import { AiOutlineArrowDown } from 'react-icons/ai';
import { Button } from '@material-tailwind/react';

import Social from '../components/Social';

function Banner() {
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
        <div className="relative h-unset lg:h-[100vh] ">
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
                                <h2 className="uppercase text-xl text-white">
                                    MY NAME IS <span>QUOC ANH</span>
                                </h2>
                            </div>
                            <h4 className="my-10 text-3xl italic lg:text-[46px] font-light lg:my-14 text-white text-italic">
                                Front End Developer
                            </h4>
                            <Button
                                variant="outlined"
                                color="white"
                                text-white
                                className="w-full px-6 py-5 rounded-full text-lg font-thin lg:px-16 lg:py-2 lg:translate-x-24 lg:text-base lg:w-auto border border-blue-500"
                            >
                                CONTACT ME
                            </Button>
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
