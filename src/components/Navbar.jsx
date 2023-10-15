import { Tooltip } from '@material-tailwind/react';

import {
    AiFillSlackCircle,
    AiOutlineHome,
    AiOutlineMail,
} from 'react-icons/ai';
import { BiSolidShoppingBags } from 'react-icons/bi';
import { BsCardImage } from 'react-icons/bs';
import { RxPerson } from 'react-icons/rx';

const Navbar = () => {
    const navbar = [
        {
            name: 'Home',
            icon: <AiOutlineHome />,
            path: '',
        },
        {
            name: 'About',
            icon: <RxPerson />,
            path: '',
        },
        {
            name: 'Resume',
            icon: <BiSolidShoppingBags />,
            path: '',
        },
        {
            name: 'Skills',
            icon: <AiFillSlackCircle />,
            path: '',
        },
        {
            name: 'Portfolio',
            icon: <BsCardImage />,
            path: '',
        },
        {
            name: 'Contact',
            icon: <AiOutlineMail />,
            path: '',
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
                        <p className="text-xl hover:text-blue-500 px-2 hover:scale-125 transition-transform duration-300">
                            {item.icon}
                        </p>
                    </Tooltip>
                ))}
            </div>
        </div>
    );
};

export default Navbar;
