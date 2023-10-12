import { useState } from 'react';
import {
    Drawer,
    Button,
    Typography,
    IconButton,
} from '@material-tailwind/react';

import { AiOutlineHome, AiOutlineMenu } from 'react-icons/ai';
import { RxPerson } from 'react-icons/rx';

function Header() {
    const [openBottom, setOpenBottom] = useState(false);
    const openDrawerBottom = () => setOpenBottom(true);
    const closeDrawerBottom = () => setOpenBottom(false);

    const dataHeader = [
        {
            title: 'Home',
            icon: <AiOutlineHome />,
        },
        {
            title: 'About',
            icon: <RxPerson />,
        },
        {
            title: 'Skills',
            icon: <RxPerson />,
        },
        {
            title: 'Services',
            icon: <RxPerson />,
        },
        {
            title: 'Portfolio',
            icon: <RxPerson />,
        },
        {
            title: 'Contact',
            icon: <RxPerson />,
        },
    ];

    const Mobile = () => (
        <Drawer
            placement="bottom"
            open={openBottom}
            onClose={closeDrawerBottom}
            className="p-4"
        >
            <div className="mb-6 flex items-center justify-between">
                <Typography variant="h5" color="blue-gray">
                    Drawer on Bottom
                </Typography>
                <IconButton
                    variant="text"
                    color="blue-gray"
                    onClick={closeDrawerBottom}
                >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-5 w-5"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M6 18L18 6M6 6l12 12"
                        />
                    </svg>
                </IconButton>
            </div>
        </Drawer>
    );

    return (
        <div className="max-w-[1440px] h-16 px-4 mx-auto my-0 flex gap-4 items-center justify-between">
            <div>Anh</div>
            <div>
                <ul className="hidden gap-8 items-center justify-between lg:flex">
                    {dataHeader.map((item, index) => (
                        <li
                            key={index}
                            className="flex items-center justify-between font-medium"
                        >
                            {/* <span>{item.icon}</span> */}
                            <span className="cursor-pointer text-gray-600 hover:text-red-500 hover:underline">
                                {item.title}
                            </span>
                        </li>
                    ))}
                </ul>
                <div className="lg:hidden">
                    <AiOutlineMenu
                        className="w-6 h-6 cursor-pointer"
                        onClick={openDrawerBottom}
                    />
                </div>
                {/* <Mobile /> */}
            </div>
        </div>
    );
}

export default Header;
