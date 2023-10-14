import { Typography } from '@material-tailwind/react';
import { useState } from 'react';

import {
    AiOutlineContacts,
    AiOutlineHome,
    AiOutlineMenu,
} from 'react-icons/ai';
import { BsCardImage } from 'react-icons/bs';
import { LuServer } from 'react-icons/lu';
import { PiNote } from 'react-icons/pi';
import { RxPerson } from 'react-icons/rx';
import ModalHeader from '../components/ModalHeader';

function Header() {
    const [open, setOpen] = useState(false);

    const openDrawer = () => setOpen(true);
    const closeDrawer = () => setOpen(false);

    const dataHeader = [
        {
            title: 'Home',
            icon: <AiOutlineHome className="w-5 h-5" />,
        },
        {
            title: 'About',
            icon: <RxPerson className="w-5 h-5" />,
        },
        {
            title: 'Skills',
            icon: <PiNote className="w-5 h-5" />,
        },
        {
            title: 'Services',
            icon: <LuServer className="w-5 h-5" />,
        },
        {
            title: 'Portfolio',
            icon: <BsCardImage className="w-5 h-5" />,
        },
        {
            title: 'Contact',
            icon: <AiOutlineContacts className="w-5 h-5" />,
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
                            <span className="cursor-pointer text-white hover:text-red-500 hover:underline">
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
