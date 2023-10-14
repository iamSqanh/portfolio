const TitlePage = ({ Icon, title, text, textColor }) => {
    return (
        <div>
            <div className="flex items-center mb-12">
                <div className="w-[50px] h-[1px] bg-[#4a9ee7]"></div>
                <p className="flex items-center ml-[10px] py-[6px] px-5 rounded-full border border-blue-500 text-blue-500">
                    <span className="mr-[10px] text-xl">{Icon}</span>
                    <span>{title}</span>
                </p>
            </div>
            <h2 className="text-2xl lg:text-[32px] font-medium mb-2 text-white">
                {text} <span className="text-blue-500">{textColor}</span>
            </h2>
        </div>
    );
};

export default TitlePage;
