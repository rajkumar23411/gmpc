import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Link } from "react-router-dom";
import { gmpcDoctors } from "@/lib";
const DocCard = ({
    src,
    name,
    education,
    speciality,
    bgCover,
}: {
    src: string;
    name: string;
    education: string;
    speciality: string;
    bgCover?: boolean;
}) => {
    return (
        <div className="w-40 lg:w-60  flex-center flex-col bg-white p-2 place-content-center rounded-lg overflow-hidden docCard relative z-10 transition-all duration-200 ease-in-out">
            <div className="w-full h-40 md:h-56 lg:h-60 rounded-lg overflow-hidden">
                <img
                    src={src}
                    alt="doc"
                    className={`h-full w-full object-cover ${
                        bgCover && "object-top"
                    }`}
                />
            </div>
            <div className="flex-center flex-col w-full py-2 leading-4 h-20 md:h-24">
                <h1 className="text-sm md:text-base font-medium text-main w-full text-center">
                    {name}
                </h1>
                <p className="text-sm md:text-base w-full text-center">
                    {education}
                </p>
                <p className="text-xs md:text-sm text-center w-full text-red-500">
                    {speciality}
                </p>
            </div>
        </div>
    );
};

const Docs = () => {
    return (
        <div className="bg-gradient-to-b h-max flex justify-center flex-col bg-green-50 p-6 lg:p-10 relative">
            <div className="triangle-1 absolute right-0 top-0 -z-0 hidden md:block " />
            <div className="w-full flex items-center justify-between z-10">
                <h1 className="text-4xl md:text-5xl text-main">
                    Meet our experts!
                </h1>
                <Link
                    to="/doctor-timing"
                    className="hidden md:flex-center group bg-red-600 hover:bg-red-700 px-4 py-2 gap-1 rounded z-20 text-white"
                >
                    <span className="font-light">See timings</span>
                    <i className="far fa-long-arrow-right group-hover:transform group-hover:translate-x-1 transition-all duration-75 ease-in-out"></i>
                </Link>
            </div>

            <div className="w-full h-max mt-10">
                <Swiper
                    modules={[Navigation, Autoplay, Pagination]}
                    navigation={true}
                    autoplay={{ delay: 5000 }}
                    slidesPerView={2}
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                        },
                        650: {
                            slidesPerView: 3,
                        },

                        1024: {
                            slidesPerView: 4,
                        },
                        1280: {
                            slidesPerView: 5,
                        },
                    }}
                >
                    {gmpcDoctors.map((doc, index) => (
                        <SwiperSlide key={index}>
                            <DocCard
                                src={doc.image}
                                name={doc.name}
                                education={doc.education}
                                speciality={doc.Speciality}
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
            <Link
                to="/doctor-timing"
                className="mt-6 w-max mx-auto flex-center group bg-red-600 hover:bg-red-700 px-4 py-2 gap-1 rounded z-20 text-white"
            >
                <span className="font-light">See timings</span>
                <i className="far fa-long-arrow-right group-hover:transform group-hover:translate-x-1 transition-all duration-75 ease-in-out"></i>
            </Link>
        </div>
    );
};

export default Docs;
