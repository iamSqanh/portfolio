import { AiOutlineGithub } from 'react-icons/ai';

import { FaFacebookF, FaLinkedinIn } from 'react-icons/fa';

function Social() {
    const iconSocial = [
        {
            path: 'https://github.com/iamSqanh ',
            icon: <AiOutlineGithub className=" h-5 w-5" />,
        },
        {
            path: 'https://www.facebook.com/samquocanh1',
            icon: <FaFacebookF className=" h-5 w-5" />,
        },
        {
            path: '#',
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
                        href={item.path}
                        className="hover:scale-150 transition-transform duration-300"
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
