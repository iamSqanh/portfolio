import React from 'react';
import { SlArrowUp } from 'react-icons/sl';
import { animateScroll as scroll } from 'react-scroll';

const GoTop = () => {
    const scrollToTop = () => {
        scroll.scrollToTop();
    };

    return (
        <div className="fixed bottom-5 right-5 z-40 transition-transform duration-500">
            <div
                onClick={scrollToTop}
                className="p-5 hidden lg:flex items-center justify-center border border-gray-500 rounded-full text-gray-500 cursor-pointer hover:border-blue-500 group:"
            >
                <span className="cursor-pointer group-hover:text-blue-500">
                    <SlArrowUp />
                </span>
            </div>
        </div>
    );
};

export default GoTop;
