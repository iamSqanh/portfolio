import React from 'react';

const CardProduct = ({ obj }) => {
    return (
        <div className="lg:flex gap-4 cursor-pointer">
            <div className="relative col-span-2 overflow-hidden group">
                <div className="w-full">
                    <img src={obj.imgUrl} alt="" className="rounded-xl" />
                </div>
                <div className="absolute top-2 left-5 text-blue-500 transform lg:translate-y-[-60px] lg:group-hover:translate-y-[1px] transition-transform duration-500">
                    <p className="text-xl lg:text-2xl lg:underline font-normal">
                        {obj?.name}
                    </p>
                </div>

                <ul className="absolute bottom-2 left-2 flex gap-2 lg:translate-y-[60px] lg:group-hover:translate-y-[-4px] transition-transform duration-500">
                    {obj?.arr.map((item, index) => (
                        <li
                            key={index}
                            className="font-thin underline lg:no-underline  text-blue-500 lg:px-5 lg:py-1 py-1 px-[4px] bg-white rounded-3xl lg:bg-blue-500 lg:text-white"
                        >
                            {item.technology}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default CardProduct;
