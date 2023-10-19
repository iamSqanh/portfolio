import { Typography } from '@material-tailwind/react';
import { useState } from 'react';

import {
    AiFillFileWord,
    AiFillHome,
    AiFillSlackCircle,
    AiOutlineMenu,
} from 'react-icons/ai';

import { BsFillPersonFill } from 'react-icons/bs';

import { BiSolidShoppingBags } from 'react-icons/bi';
import { IoIosMail } from 'react-icons/io';
import ModalHeader from '../components/ModalHeader';
import { Link } from 'react-scroll';

function Header() {
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const dataHeader = [
        {
            title: 'Home',
            icon: <AiFillHome className="w-5 h-5" />,
            path: 'banner',
        },
        {
            title: 'About',
            icon: <BsFillPersonFill className="w-5 h-5" />,
            path: 'about',
        },
        {
            title: 'Resume',
            icon: <BiSolidShoppingBags className="w-5 h-5" />,
            path: 'resume',
        },
        {
            title: 'Skills',
            icon: <AiFillSlackCircle className="w-5 h-5" />,
            path: 'skills',
        },
        {
            title: 'Portfolio',
            icon: <AiFillFileWord className="w-5 h-5" />,
            path: 'portfolio',
        },
        {
            title: 'Contact',
            icon: <IoIosMail className="w-5 h-5" />,
            path: 'contact',
        },
    ];

    return (
        <div className="max-w-[1440px] h-16 px-4 mx-auto my-0 flex gap-4 items-center justify-between">
            <Link
                activeClass="active"
                to="banner"
                spy={true}
                smooth={true}
                duration={500}
                offset={-100}
                className="flex items-center justify-between gap-4 cursor-pointer"
            >
                <img
                    src="https://flowbite.com/images/logo.svg"
                    alt=""
                    className="w-12"
                />
                <Typography variant="h5" color="white" className="text-center">
                    ANH
                </Typography>
            </Link>
            <div>
                <ul className="hidden gap-8 items-center justify-between md:flex">
                    {dataHeader.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between font-medium"
                        >
                            <Link
                                activeClass="active"
                                to={item.path}
                                spy={true}
                                smooth={true}
                                duration={500}
                                offset={-100}
                                className="cursor-pointer text-white hover:scale-110 transition-transform duration-300 hover:text-blue-400 hover:underline"
                            >
                                {item.title}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="md:hidden">
                    <span
                        onClick={openDrawer}
                        className="block p-2 cursor-pointer"
                    >
                        <AiOutlineMenu className="w-6 h-6 cursor-pointer text-white" />
                    </span>
                </div>
            </div>
            <ModalHeader data={dataHeader} open={open} onClose={closeDrawer} />
        </div>
    );
}

export default Header;
