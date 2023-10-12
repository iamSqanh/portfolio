import { Drawer, IconButton, Typography } from '@material-tailwind/react';

function ModalHeader({ data, open, onClose }) {
    return (
        <Drawer
            placement="bottom"
            size={240}
            open={open}
            onClose={onClose}
            className="p-4 rounded-xl flex flex-col justify-between"
        >
            <ul className="grid grid-cols-3 gap-4 mt-6">
                {data.map((item, index) => (
                    <li
                        key={index}
                        className="flex items-center justify-center flex-col gap-2 col-span-1"
                    >
                        <p className="grid place-items-center text-gray-600">
                            {item.icon}
                        </p>
                        <p className="text-gray-600">{item.title}</p>
                    </li>
                ))}
            </ul>
            <div className="flex items-center justify-between">
                <div className="flex items-center justify-center gap-2">
                    <img src="https://flowbite.com/images/logo.svg" alt="" />
                    <Typography
                        variant="h5"
                        color="blue-gray"
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

export default ModalHeader;
