import PropTypes from 'prop-types';

const CardInfo = ({ Icon, title, des }) => {
    return (
        <div className="col-span-1 border border-blue-500 p-3 lg:p-4 flex items-center gap-3 lg:gap-5 rounded-xl">
            <span className="flex items-center justify-center w-10 h-10 text-xl bg-white rounded-full text-blue-500">
                {Icon}
            </span>
            <div className="grid gap-2">
                <h5 className="font-medium text-xl text-white">{title}</h5>
                <p className="font-thin text-gray-500">{des}</p>
            </div>
        </div>
    );
};

CardInfo.propTypes = {
    Icon: PropTypes.object.isRequired,
    title: PropTypes.string,
    des: PropTypes.string,
};

export default CardInfo;
