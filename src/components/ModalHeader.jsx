import { Drawer, IconButton, Typography } from '@material-tailwind/react';
import { Link } from 'react-scroll';
import PropTypes from 'prop-types';

function ModalHeader({ data, open, onClose }) {
    return (
        <Drawer
            placement="bottom"
            size={240}
            open={open}
            onClose={onClose}
            className="p-4 rounded-xl flex flex-col justify-between bg-[#22262E]"
        >
            <ul className="grid grid-cols-3 gap-4 mt-6">
                {data.map((item, index) => (
                    <Link
                        key={index}
                        activeClass="active"
                        to={item.path}
                        spy={true}
                        smooth={true}
                        duration={500}
                        offset={-100}
                        className="flex items-center justify-center flex-col gap-2 col-span-1"
                        onClick={onClose}
                    >
                        <p className="grid place-items-center text-white">
                            {item.icon}
                        </p>
                        <p className="text-white">{item.title}</p>
                    </Link>
                ))}
            </ul>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-2">
                    <img src="https://flowbite.com/images/logo.svg" alt="" />
                    <Typography
                        variant="h5"
                        color="white"
                        className="text-center"
                    >
                        Anh
                    </Typography>
                </div>
                <IconButton variant="text" color="blue-gray" onClick={onClose}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={2}
                        stroke="currentColor"
                        className="h-6 w-6"
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
}

ModalHeader.propTypes = {
    data: PropTypes.array.isRequired,
    open: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired,
};

export default ModalHeader;
