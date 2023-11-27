import ServiceCard from "./ServiceCard";
const HealthService = () => {
    return (
        <div className="flex-center flex-col gap-10 px-6 py-10 lg:p-10 overflow-hidden relative services">
            <div className="triangle-1 absolute right-0 top-0 -z-0 hidden md:block"></div>
            <div className="text-center">
                <h1 className="text-3xl lg:text-4xl font-semibold text-gray-800">
                    Health Service for you
                </h1>
                <h2 className="text-base md:text-lg text-red-950">
                    Our affordable health services! Because we care and
                    understand
                </h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 content-center justify-items-center">
                <ServiceCard
                    image={"/assets/opd-1.jpg"}
                    text="Multispecality OPD"
                    icon={"fal fa-user-md"}
                />
                <ServiceCard
                    image={"/assets/dental-clinic-service.jpg"}
                    text="Dental Clicnic"
                    icon={"fal fa-tooth"}
                />
                <ServiceCard
                    image={"/assets/ecg-stock-img.jpg"}
                    text="ECG"
                    icon={"fal fa-heartbeat"}
                />
                <ServiceCard
                    image={"/assets/ultrasound-service.jpg"}
                    text="Ultasonography"
                    icon={"fal fa-stethoscope"}
                />
                <ServiceCard
                    image={"/assets/lab-service.jpg"}
                    text="Laboratory"
                    icon={"fal fa-flask"}
                />
                <ServiceCard
                    image={"/assets/x-ray-service.jpeg"}
                    text="X-Ray"
                    icon={"fal fa-x-ray"}
                />
                <ServiceCard
                    image={"/assets/pharmacy.jpg"}
                    text="24 x 7 Medicine"
                    icon={"fal fa-capsules"}
                />
            </div>
        </div>
    );
};

export default HealthService;
