import { Tooltip } from '@material-tailwind/react';

import { AiFillFileWord, AiFillHome, AiFillSlackCircle } from 'react-icons/ai';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { BsFillPersonFill } from 'react-icons/bs';
import { IoIosMail } from 'react-icons/io';
import { Link } from 'react-scroll';

const Navbar = () => {
    const navbar = [
        {
            name: 'Home',
            icon: <AiFillHome />,
            path: 'banner',
        },
        {
            name: 'About',
            icon: <BsFillPersonFill />,
            path: 'about',
        },
        {
            name: 'Resume',
            icon: <BiSolidShoppingBags />,
            path: 'resume',
        },
        {
            name: 'Skills',
            icon: <AiFillSlackCircle />,
            path: 'skills',
        },
        {
            name: 'Portfolio',
            icon: <AiFillFileWord />,
            path: 'portfolio',
        },
        {
            name: 'Contact',
            icon: <IoIosMail />,
            path: 'contact',
        },
    ];

    return (
        <div className="text-white right-[80px] fixed top-1/2 translate-y-[-50%] z-10 hidden lg:block">
            <div className="border border-blue-400 px-2 py-8 rounded-full flex flex-col gap-8 justify-center items-center cursor-pointer">
                {navbar.map((item, index) => (
                    <Tooltip
                        key={index}
                        placement="left"
                        content={item.name}
                        className="text-blue-500 bg-[#808080] text-white px-4 rounded-full"
                    >
                        <Link
                            activeClass=""
                            to={item.path}
                            spy={true}
                            smooth={true}
                            duration={500}
                            offset={-100}
                            className="text-xl hover:text-blue-500 px-2 hover:scale-125 transition-transform duration-300"
                        >
                            {item.icon}
                        </Link>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
