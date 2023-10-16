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

function Header() {
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const dataHeader = [
        {
            title: 'Home',
            icon: <AiFillHome className="w-5 h-5" />,
        },
        {
            title: 'About',
            icon: <BsFillPersonFill className="w-5 h-5" />,
        },
        {
            title: 'Resume',
            icon: <BiSolidShoppingBags className="w-5 h-5" />,
        },
        {
            title: 'Skills',
            icon: <AiFillSlackCircle className="w-5 h-5" />,
        },
        {
            title: 'Portfolio',
            icon: <AiFillFileWord className="w-5 h-5" />,
        },
        {
            title: 'Contact',
            icon: <IoIosMail className="w-5 h-5" />,
        },
    ];

    return (
        <div className="max-w-[1440px] h-16 px-4 mx-auto my-0 flex gap-4 items-center justify-between">
            <div className="flex items-center justify-between gap-4">
                <img
                    src="https://flowbite.com/images/logo.svg"
                    alt=""
                    className="w-12"
                />
                <Typography variant="h5" color="white" className="text-center">
                    ANH
                </Typography>
            </div>
            <div>
                <ul className="hidden gap-8 items-center justify-between md:flex">
                    {dataHeader.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between font-medium"
                        >
                            <span className="cursor-pointer text-white hover:scale-110 transition-transform duration-300 hover:text-blue-400 hover:underline">
                                {item.title}
                            </span>
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
