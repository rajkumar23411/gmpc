import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const NewsEventsCard = () => {
    return (
        <div className="h-max w-full md:w-96 bg-white">
            <img
                src="/assets/img-gmpc-sm-1.jpg"
                alt="gmpc"
                className="h-80 w-full object-cover"
            />
            <div className="p-3 flex flex-col gap-4">
                <p className="text-gray-800">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Rerum quis laudantium est iure enim ab aspernatur ducimus...
                </p>
                <span className="text-sm text-pink-600">Date: 22-11-2023</span>
                <button className="text-blue-600 cursor-pointer hover:text-blue-700 w-max text-lg">
                    Read more
                </button>
            </div>
        </div>
    );
};
const NewsEvents = () => {
    return (
        <div className="h-max w-full relative bg-gray-100 px-4 py-10 md:p-10">
            <div className="triangle-1 absolute right-0 top-0 -z-0 hidden md:block"></div>
            <div className="z-20 flex-center md:block">
                <h1 className="text-4xl lg:text-5xl px-10">Our Top Stories.</h1>
            </div>
            <div className="px-4 py-10 md:p-10">
                <Swiper
                    modules={[Navigation, Pagination, Autoplay]}
                    navigation
                    slidesPerView={1}
                    autoplay={{ delay: 10000 }}
                    breakpoints={{
                        650: {
                            slidesPerView: 2,
                        },
                        1024: {
                            slidesPerView: 3,
                        },
                    }}
                >
                    <SwiperSlide>
                        <NewsEventsCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewsEventsCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewsEventsCard />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewsEventsCard />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default NewsEvents;
