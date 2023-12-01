import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Banner2 = () => {
    return (
        <div className="h-[38rem] w-full flex items-center banner-2">
            <div className="flex flex-col pl-10 lg:pl-28">
                <div className="flex items-center gap-4">
                    <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold">
                        Your
                    </h1>
                    <h1 className="text-teal-500 text-6xl md:text-7xl lg:text-8xl font-bold">
                        Health
                    </h1>
                </div>
                <h1 className="text-white text-6xl md:text-7xl lg:text-8xl font-bold">
                    is our
                </h1>
                <h1 className="text-teal-500 text-6xl md:text-7xl lg:text-8xl font-bold ">
                    Priority
                </h1>
                <h2 className="text-xl md:text-3xl mt-4 text-yellow-500">
                    Book your appointment now!
                </h2>
            </div>
        </div>
    );
};
const Banner1 = () => {
    return (
        <div className="h-[38rem] w-full flex items-center banner-1">
            <div className="flex flex-col gap-3 pl-10 md:gap-6 md:pl-15 lg:pl-20 z-20">
                <h1 className="text-4xl md:text-7xl uppercase font-semibold text-slate-100 drop-shadow-md shadow-green-900">
                    The best
                </h1>
                <h1 className="text-5xl md:text-8xl uppercase font-bold text-white relative before:content-[''] before:absolute before:h-full before:w-full before:bg-pink-600 before:-z-10 before:skew-x-6 before:-left-5 before:top-0 before:drop-shadow-lg">
                    Medical
                </h1>
                <h1 className="text-4xl md:text-7xl uppercase font-semibold text-slate-100">
                    Healthy center
                </h1>
                <Link
                    to="/appointment"
                    className="w-max uppercase px-6 py-3 md:py-4 bg-main text-white rounded-lg hover:drop-shadow-xl mt-6"
                >
                    Book Appointment
                </Link>
            </div>
        </div>
    );
};

const Banner = () => {
    return (
        <Swiper
            modules={[Autoplay]}
            slidesPerView={1}
            autoplay={{ delay: 5000 }}
        >
            <SwiperSlide>
                <Banner1 />
            </SwiperSlide>
            <SwiperSlide>
                <Banner2 />
            </SwiperSlide>
        </Swiper>
    );
};

export default Banner;
