import PropTypes from 'prop-types';

const CardSkill = ({ imgUrl, name }) => {
    return (
        <div className="col-span-1 flex gap-10 items-center rounded-[100px] py-2 px-2 border border-blue-500 hover:border cursor-pointer hover:border-blue-gray-500 bg-[#242323] group transform translate-y-[0] hover:translate-y-[-10px] transition-transform duration-300 ">
            <img
                src={imgUrl}
                alt="skill"
                className="w-11 h-11 rounded-2xl object-contain"
            />
            <span className=" tracking-wider group-hover:text-blue-500 text-white">
                {name}
            </span>
        </div>
    );
};

CardSkill.propTypes = {
    imgUrl: PropTypes.string,
    name: PropTypes.string,
};

export default CardSkill;
