import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const NewsEventsCard = ({
    imageSrc,
    text,
    date,
}: {
    imageSrc: string;
    text: string;
    date: string;
}) => {
    return (
        <div className="h-max w-full md:w-72 lg:w-96 bg-white drop-shadow-lg rounded-lg overflow-hidden">
            <img
                src={imageSrc}
                alt="gmpc"
                className="h-80 w-full object-cover"
            />
            <div className="p-3 h-40 flex flex-col gap-4">
                <p className="text-gray-800 block md:hidden">
                    {text.length > 100 ? text.slice(0, 100) + "..." : text}
                </p>
                <p className="text-gray-800 hidden md:block">{text}</p>
                <span className="text-sm text-pink-600">Date: {date}</span>
                {/* <button className="text-blue-600 cursor-pointer hover:text-blue-700 w-max text-lg">
                    Read more
                </button> */}
            </div>
        </div>
    );
};
const NewsEvents = () => {
    return (
        <div className="h-max w-full relative bg-gray-100 px-4 py-10 md:p-10">
            <div className="triangle-1 absolute right-0 top-0 -z-0 hidden md:block"></div>
            <div className="z-20 flex-center md:block">
                <h1 className="text-4xl lg:text-5xl px-10 text-main">
                    Our Top Stories.
                </h1>
            </div>
            <div className="px-4 py-10 md:p-8">
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
                        <NewsEventsCard
                            imageSrc="/assets/bg-health-check.jpg"
                            text="
                            GMPC marked World Diabetes Day with educational sessions and health check-ups, emphasizing the importance of prevention."
                            date="14-11-2023"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewsEventsCard
                            imageSrc="/assets/img-gmpc-diwali.jpg"
                            text="We recently lit up with joy as we celebrated the Festival of Lights – Diwali! The clinic was adorned with vibrant decorations, and our team came together for a joyous celebration. "
                            date="12-11-2023"
                        />
                    </SwiperSlide>
                    <SwiperSlide>
                        <NewsEventsCard
                            imageSrc="/assets/bg-inaguration.jpg"
                            text="GMPC celebrated the inauguration of our new facility with joy, featuring a ribbon-cutting ceremony and shared vision for the future of healthcare."
                            date="11-09-2023"
                        />
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    );
};

export default NewsEvents;
