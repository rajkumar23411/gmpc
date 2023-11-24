type ServiceCardProps = {
    image: string;
    text: string;
    icon: string;
};

const ServiceCard = ({ image, text, icon }: ServiceCardProps) => {
    return (
        <div
            className={`relative h-80 w-full rounded-xl overflow-hidden after:content-[''] after:absolute after:top-0 after:left-0 after:h-full after:w-full after:bg-gradient-to-b from-transparent to-black group md:last:col-span-2 `}
        >
            <img
                src={image}
                alt={image}
                className="h-full w-full object-cover"
            />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-20 flex-center flex-col gap-3 h-10 w-10 bg-blue-200 bg-opacity-60 rounded-full p-8 group-hover:h-full group-hover:w-full group-hover:rounded-none group-hover:bg-blue-500 group-hover:bg-opacity-30 transition-all duration-150 ease-in-out">
                <i className={`${icon} text-3xl text-white`}></i>
            </div>
            <div className="absolute bottom-10 left-0 w-full text-center z-20 group-hover:bottom-1/4 transition-all duration-150 ease-in-out">
                <h1 className="uppercase text-xl font-medium text-center text-white font-sans group-hover:text-2xl">
                    {text}
                </h1>
            </div>
        </div>
    );
};

export default ServiceCard;
