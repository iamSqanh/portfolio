import { AiOutlineGithub } from 'react-icons/ai';

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function Social() {
    const iconSocial = [
        {
            path: '',
            icon: <AiOutlineGithub className=" h-5 w-5" />,
        },
        {
            path: '',
            icon: <FaFacebookF className=" h-5 w-5" />,
        },
        {
            path: '',
            icon: <FaLinkedinIn className=" h-5 w-5" />,
        },
    ];

    return (
        <div className="grid place-items-center gap-6">
            <div className="w-[1px] h-[100px] bg-blue-500"></div>
            <div className="grid gap-6">
                {iconSocial.map((item, index) => (
                    <a
                        key={index}
                        href=""
                        target="_blank"
                        className="hover:scale-150 "
                    >
                        <span className="text-gray-300 hover:text-blue-800">
                            {item.icon}
                        </span>
                    </a>
                ))}
            </div>
            <div className="w-[1px] h-[100px] bg-blue-500"></div>
        </div>
    );
}

export default Social;
