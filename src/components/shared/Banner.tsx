const Banner = () => {
    return (
        <div className="h-[38rem] w-full flex items-center banner-1 ">
            <div className="flex flex-col gap-3 pl-10 md:gap-6 md:pl-15 lg:pl-20 z-20">
                <h1 className="text-4xl md:text-7xl uppercase font-semibold text-slate-100 drop-shadow-md shadow-green-900">
                    The best
                </h1>
                <h1 className="text-5xl md:text-8xl uppercase font-bold text-white relative before:content-[''] before:absolute before:h-full before:w-full before:bg-pink-600 before:-z-10 before:skew-x-6 before:-left-5 before:top-1 before:drop-shadow-lg">
                    Medical
                </h1>
                <h1 className="text-4xl md:text-7xl uppercase font-semibold text-slate-100">
                    Healthy center
                </h1>
            </div>
        </div>
    );
};

export default Banner;
