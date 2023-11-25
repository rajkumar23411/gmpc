import PageHeading from "@/components/shared/PageHeading";
import ServiceCard from "@/components/shared/ServiceCard";
import TopicHeading from "@/components/shared/TopicHeading";
import { Link } from "react-router-dom";

const Services = () => {
    return (
        <div>
            <PageHeading heading="Services" />
            <div className="p-6 md:p-16 lg:p-20 flex flex-col gap-8 custom-bg-1">
                <TopicHeading heading="Services We Are Providing" />

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
                <div className="flex flex-col gap-10 mt-6">
                    <h1 className=" text-3xl text-main relative after:content-[''] after:absolute after:w-60 after:h-1 after:-bottom-2 after:left-0 after:bg-red-500">
                        "Comprehensive Healthcare at GMPC: Your Trusted Medical
                        Hub"
                    </h1>
                    <p className="font-sans text-justify md:text-lg">
                        GMPC (Gohpur Medicos & Pharma Clinic) is your trusted
                        healthcare partner, offering a range of services to meet
                        your medical needs. From precise diagnostic imaging with
                        X-ray, Ultrasound, to swift cardiac assessments with
                        ECG, GMPC ensures efficient and reliable healthcare. Our
                        Multispeciality OPD brings expert care under one roof,
                        while our 24x7 medicine facility ensures continuous
                        access to essential medications. Experience personalized
                        dental care and more at GMPC – where your health is our
                        straightforward priority. Thank you for choosing GMPC
                        for your healthcare needs.
                    </p>
                    <div>
                        <Link
                            to="/appointment"
                            className="bg-main text-white px-6 py-2 rounded-lg"
                        >
                            Book an appointment now!
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Services;
