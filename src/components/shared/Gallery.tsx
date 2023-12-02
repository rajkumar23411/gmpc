import { Link } from "react-router-dom";

const Gallery = () => {
    return (
        <div className="w-full flex flex-col gap-10 p-6 lg:py-10 lg:px-20 custom-bg-1">
            <h1 className="text-4xl lg:text-5xl text-main">
                Meet our awesome staff!
            </h1>
            <div className="h-96 w-full mx-auto">
                <div className="h-full w-full flex-col flex sm:flex-row relative border border-gray-400">
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-[98%]  sm:h-[94%] w-[94%] sm:w-[98%] bg-black bg-opacity-30 border-8 border-white p-6  flex-center">
                        <Link
                            to="/gmpc-staff"
                            className="border-4 border-white text-3xl sm:text-4xl uppercase font-medium tracking-wide bg-black bg-opacity-70 text-white p-4 cursor-pointer"
                        >
                            VIEW STAFF
                        </Link>
                    </div>
                    <div className="flex-1">
                        <div className="h-full w-full grid grid-cols-4 grid-rows-2 overflow-hidden">
                            <div className="h-full w-full object-cover overflow-hidden">
                                <img
                                    src="/assets/ceo-owner.jpg"
                                    alt="gmpc team"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="h-full w-full object-cover">
                                <img
                                    src="/assets/stuff/nurse-1.jpg"
                                    alt="gmpc team"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="h-full w-full object-cover">
                                <img
                                    src="/assets/stuff/ph-1.jpg"
                                    alt="gmpc team"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="h-full w-full object-cover">
                                <img
                                    src="/assets/stuff/nurse-2.jpg"
                                    alt="gmpc team"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="h-full w-full object-cover">
                                <img
                                    src="/assets/stuff/lab-1.jpg"
                                    alt="gmpc team"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="h-full w-full object-cover">
                                <img
                                    src="/assets/stuff/nurse-3.jpg"
                                    alt="gmpc team"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="h-full w-full object-cover">
                                <img
                                    src="/assets/stuff/rec-1.jpg"
                                    alt="gmpc team"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                            <div className="h-full w-full object-cover">
                                <img
                                    src="/assets/stuff/mng-1.jpg"
                                    alt="gmpc team"
                                    className="h-full w-full object-cover"
                                />
                            </div>
                        </div>
                    </div>
                    <div className="flex-1 grid grid-cols-2 lg:grid-cols-1 lg:grid-rows-2">
                        <div className="h-full w-full">
                            <img
                                src="/assets/team.jpg"
                                alt="gmpc"
                                className="h-full w-full object-cover"
                            />
                        </div>
                        <div className="h-full w-full">
                            <img
                                src="/assets/img-gmpc-sm-1.jpg"
                                alt="gmpc"
                                className="h-full w-full object-cover"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Gallery;
