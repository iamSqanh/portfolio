import { Button } from '@material-tailwind/react';

function Banner() {
    const note = [
        {
            name: 'Email',
            title: 'sqanh0320@gmail.com',
        },
        {
            name: 'Phone',
            title: '+(84) 981 464 457',
        },
        {
            name: 'Location',
            title: 'Ha Noi',
        },
    ];

    return (
        <div className="lg:flex justify-center">
            <div className="lg:w-[40%]">
                <img
                    src="https://sangnguyen201.github.io/portfolio/img/SANG_Vjpro.png/SANG_Vjpro.png"
                    alt=""
                    className="lg:w-full"
                />
            </div>
            <div className="w-full lg:w-[40%] flex items-center">
                <div className="w-full h-[500px] flex flex-col justify-between py-4">
                    <div className="flex flex-col items-center justify-center lg:items-start">
                        <h1 className="font-bold text-4xl uppercase lg:text-[42px] lg:mb-4">
                            HELLO !!!
                        </h1>
                        <div className="flex mt-4">
                            <div className="w-[100px] h-[1px] bg-[#4a9ee7] mr-5 translate-y-5 hidden lg:block"></div>
                            <h2 className="uppercase text-xl">
                                MY NAME IS <span>QUOC ANH</span>
                            </h2>
                        </div>
                        <h4 className="my-10 text-3xl italic lg:text-[46px] font-light lg:my-14">
                            Front End Developer
                        </h4>
                        <Button
                            variant="outlined"
                            color="blue"
                            className="w-full px-6 py-5 rounded-full text-lg font-thin lg:px-16 lg:py-2 lg:translate-x-24 lg:text-base lg:w-auto"
                        >
                            CONTACT ME
                        </Button>
                    </div>
                    <div className="hidden lg:block">
                        <ul className="flex">
                            {note.map((item, index) => (
                                <li
                                    key={index}
                                    className="border-r border-red-500 last:border-r-0 px-4 grid gap-2"
                                >
                                    <h5>{item.name}</h5>
                                    <p>{item.title}</p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;
