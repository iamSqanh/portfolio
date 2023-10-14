import React from 'react';
import {
    AiFillGithub,
    AiFillLinkedin,
    AiFillTwitterCircle,
    AiFillFacebook,
} from 'react-icons/ai';

function Footer() {
    const iconFooter = [
        {
            icon: <AiFillGithub />,
        },
        {
            icon: <AiFillLinkedin />,
        },
        {
            icon: <AiFillFacebook />,
        },
        {
            icon: <AiFillTwitterCircle />,
        },
    ];

    return (
        <div className="max-w-[1440px] m-auto my-0 pb-8 grid gap-6 px-4">
            <div className="flex gap-6 flex-col items-center justify-center">
                <img
                    src="https://flowbite.com/images/logo.svg"
                    alt=""
                    className="w-12"
                />
                <p className="text-xl font-medium text-white">SAM QUOC ANH</p>
            </div>
            <div className="flex flex-col items-center gap-6 lg:flex-row lg:justify-between">
                <p className="text-white text-sm font-thin">
                    Copyright © <span>2023</span>{' '}
                    <span className="text-blue-500">ANH</span>. All Rights
                    Reserved.
                </p>
                <div className="flex gap-3 text-2xl text-blue-400">
                    {iconFooter.map((item, index) => (
                        <span
                            key={index}
                            className="cursor-pointer hover:scale-150 transition-transform duration-300"
                        >
                            {item.icon}
                        </span>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Footer;
