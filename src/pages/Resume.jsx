import { BiSolidShoppingBags } from 'react-icons/bi';

import TitlePage from '../components/TitlePage';
import TimeLine from '../components/TimeLine';

const Resume = () => {
    const resume = {
        title: 'Resume',
        text: 'Education &',
        textColor: 'Experience',
    };

    const { title, text, textColor } = resume;

    return (
        <div className="pt-[50px] mb-6 lg:mb-[100px]">
            <TitlePage
                Icon={<BiSolidShoppingBags />}
                text={text}
                textColor={textColor}
                title={title}
            />
            <div className="lg:ml-[100px] mt-[50px]">
                <TimeLine />
            </div>
        </div>
    );
};

export default Resume;
