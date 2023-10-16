import { AiOutlineMail, AiOutlineShareAlt } from 'react-icons/ai';
import { IoIosMail } from 'react-icons/io';

// import { IoLocationOutline } from 'react-icons/io';
import { CiLocationOn } from 'react-icons/ci';
import { BsTelephone } from 'react-icons/bs';

import TitlePage from '../components/TitlePage';
import CardInfo from '../components/CardInfo';

const Contact = () => {
    const Contact = {
        title: 'Contact Me',
        text: 'Get in',
        textColor: 'Touch',
    };

    const contactInfo = [
        {
            title: 'MY ADDRESS',
            des: 'Ha Noi',
            icon: <CiLocationOn />,
        },
        {
            title: 'SOCIAL PROFILES',
            des: `facebook.com/samquocanh1`,
            icon: <AiOutlineShareAlt />,
        },
        {
            title: 'EMAIL ME',
            des: 'sqanh0320@gamil.com',
            icon: <AiOutlineMail />,
        },
        {
            title: 'CALL ME',
            des: `+(84) 981 464 457`,
            icon: <BsTelephone />,
        },
    ];

    const { title, text, textColor } = Contact;

    return (
        <div className="pt-[50px] mb-10 lg:mb-[100px]">
            <TitlePage
                Icon={<IoIosMail />}
                title={title}
                text={text}
                textColor={textColor}
            />
            <div className="grid place-items-center mt-14">
                <div className="lg:w-[80%] grid gap-7 lg:grid-cols-2 lg:gap-10">
                    {contactInfo.map((item, index) => (
                        <CardInfo
                            key={index}
                            Icon={item.icon}
                            title={item.title}
                            des={item.des}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Contact;
