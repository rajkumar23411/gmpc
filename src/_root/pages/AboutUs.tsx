import PageHeading from "@/components/shared/PageHeading";
import TopicHeading from "@/components/shared/TopicHeading";
import { useState, useEffect } from "react";

export const ImageBox = ({
    src,
    alt,
    text,
    classes,
}: {
    src: string;
    alt: string;
    text: string;
    classes?: string;
}) => {
    const [isSmallScreen, setIsSmallScreen] = useState(false);

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth < 768) {
                setIsSmallScreen(true);
            } else {
                setIsSmallScreen(false);
            }
        };

        window.addEventListener("resize", handleResize);
        handleResize();
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);
    return (
        <div
            className={`h-96 relative group overflow-hidden ${
                isSmallScreen ? " " : classes
            }`}
        >
            <div className="absolute -top-full group-hover:top-0 left-0 right-0 w-full group-hover:h-full bg-main bg-opacity-50 group-hover:text-4xl flex-center text-white font-sans text-xl uppercase transition-all duration-150 ease-in-out">
                {text}
            </div>
            <img src={src} alt={alt} className="h-full w-full object-cover" />
        </div>
    );
};
const AboutUs = () => {
    return (
        <section className="w-full">
            <PageHeading heading="About us" />
            <div className="p-5 md:p-15 lg:p-20 w-full flex flex-col gap-20 md:gap-16">
                <div className="w-full">
                    <TopicHeading heading="About our founder" />
                    <div className="flex flex-col mt-10">
                        <div className="first-para flex flex-col md:flex-row md:items-start items-center">
                            <div className="w-max md:px-6">
                                <img
                                    src="/assets/ceo-owner.jpg"
                                    alt="founder"
                                    className="h-80 w-80 md:w-96 object-cover pt-2"
                                />
                                <h1 className="text-xl font-sans font-bold text-center mt-4">
                                    Dr<sub>x</sub> Parash Saikia
                                </h1>
                            </div>
                            <div className="w-full flex flex-col gap-4 text-justify mt-6 md:mt-0">
                                <p className="font-sans text-lg">
                                    Welcome to GMPC (Gohpur Medicos & Pharma
                                    Clinic), a sanctuary for holistic healthcare
                                    where our unwavering commitment revolves
                                    around your well-being. As the founder, I
                                    take great pride in introducing a dedicated
                                    team of experienced doctors and medical
                                    professionals who are passionate about
                                    providing exceptional healthcare services.
                                </p>
                                <p className="font-sans text-lg">
                                    Our tireless efforts are channeled towards
                                    staying at the forefront of medical
                                    advancements, ensuring that you receive
                                    cutting-edge treatments tailored to your
                                    unique needs. The state-of-the-art
                                    facilities at GMPC are meticulously designed
                                    to offer a seamless and efficient healthcare
                                    experience, incorporating the latest in
                                    medical technology. <br />
                                    <br />
                                    We understand that healthcare extends beyond
                                    specific treatments, and thus, GMPC operates
                                    as a comprehensive healthcare hub. Whether
                                    you require primary care, specialized
                                    consultations, or preventive measures, our
                                    clinic is equipped to address a spectrum of
                                    healthcare needs under one roof.
                                </p>
                            </div>
                        </div>
                        <p className="second-para pt-4 text-justify font-sans text-lg">
                            At GMPC, our patient-centric approach places you at
                            the center of our care plans. Your concerns and
                            preferences are integral to our decision-making
                            process, and we believe in fostering open
                            communication to ensure you are actively involved in
                            your healthcare journey. <br /> <br />
                            Conveniently located in Kalabari, Gohpur, Biswantha
                            Assam, GMPC is easily accessible, acknowledging the
                            importance of convenience in healthcare access. We
                            recognize and appreciate the trust you place in us,
                            and your continued support is the driving force
                            behind our commitment to continually improve and
                            enhance our healthcare services.
                        </p>
                        <p className="third-para pt-6 text-justify font-sans text-lg">
                            Thank you for choosing GMPC as your healthcare
                            partner. We look forward to serving you with
                            dedication, compassion, and an unwavering commitment
                            to your health and well-being.
                        </p>
                    </div>
                </div>
                <div>
                    <TopicHeading heading="Our Visson, Values and Mission" />
                    <div className="flex flex-col gap-4 mt-10">
                        <p className="text-lg font-sans">
                            <b className="text-red-500 font-sans">
                                Our Vision:{" "}
                            </b>{" "}
                            "Your Health, Our Priority"
                        </p>
                        <p className="text-lg font-sans">
                            <b className="text-red-500 font-sans">
                                Our Value:{" "}
                            </b>{" "}
                            "Patient-Centricity, Above All", reflected through
                            the value propositions of Quality, Inclusivity &
                            Value, Trust
                        </p>
                        <ul className="pl-10 flex flex-col gap-4 pt-3 font-sans">
                            <li className="font-sans text-lg">
                                <b className="font-sans">Quality</b> : We
                                endeavor to provide quality healthcare delivered
                                in alignment with our core principle – Patient
                                First. For those we serve, this translates as
                                prompt service, scientific evidence-based
                                healthcare practice model through use of
                                appropriate technology, enhanced by empathy.
                            </li>
                            <li className="font-sans text-lg">
                                <b className="font-sans">Inclusivity & Value</b>
                                : Irrespective of their financial situation or
                                any other attribute, we treat everyone equally
                                and ensure no access or affordability barrier
                                prevents them from receiving quality healthcare.
                            </li>
                            <li className="font-sans text-lg">
                                <b className="font-sans">Trust</b> : We
                                consistently build and strengthen relations with
                                patients and their family members, by treating
                                patients as family members, delivering quality
                                healthcare, maintaining transparency in
                                transactions, adopting structured regular
                                communication with patients and their
                                attendants.
                            </li>
                        </ul>
                    </div>
                </div>
                <div>
                    <TopicHeading heading="Message From CEO" />
                    <div className="mt-10 font-sans">
                        <h1 className="font-sans text-lg font-medium">
                            Dr<sub>x</sub>. Parash Saikia
                        </h1>
                        <span className="font-sans">CEO, GMPC</span>
                        <p className="font-sans mt-10 text-lg">
                            Health is a fundamental human right and critical for
                            human dignity. A healthy population is essential for
                            socio-economic growth – it determines average life
                            expectancy, the number of persons in the productive
                            age bracket, productivity, earning capacity,
                            employment, contribution to welfare, etc. of a
                            society. However, health problems are increasing
                            each day with the rise of pollution, consumption of
                            contaminated water, and the adoption of unhealthy
                            lifestyle practices. But the good health of a
                            community is essential for its peace, happiness, and
                            prosperity. Preventive healthcare, promotive
                            healthcare, early intervention, and healthy
                            lifestyle practices can address such health
                            problems. This is how each member of society can
                            achieve freedom from ill-health.
                        </p>
                        <p className="font-sans mt-6 text-lg">
                            To support your pursuit of health, well-being, and
                            prosperity, we combine the science of medicine with
                            the art of healing, to facilitate “Health for All,
                            Smiles for All”. At GMPC, we are convinced that
                            ‘Quality’, ‘Value’, and ‘Trust’ are the bedrock for
                            effective healthcare delivery.
                        </p>
                    </div>
                </div>
                <div>
                    <TopicHeading heading="Gallary" />
                    <div className="grid grid-cols-1 md:grid-cols-3 mt-10">
                        <ImageBox
                            alt="team"
                            src="/assets/team.jpg"
                            text="TEAM GMPC"
                            classes="col-span-2"
                        />
                        <ImageBox
                            alt="team"
                            src="/assets/img-reception.jpg"
                            text="RECEPTION"
                        />
                        <ImageBox
                            alt="team"
                            src="/assets/img-dental-1.jpg"
                            text="DENTAL CLINIC"
                        />
                        <ImageBox
                            alt="team"
                            src="/assets/img-emergency-service.jpg"
                            text="EMERGENCY SERVICE"
                        />
                        <ImageBox
                            alt="gmpc"
                            src="/assets/img-gmpc-day.jpg"
                            text="GMPC"
                        />
                        <ImageBox
                            alt="gmpc night view"
                            src="/assets/img-gmpc-night.jpg"
                            text="GMPC NIGHT VIEW"
                        />
                        <ImageBox
                            alt="gmpc OPD"
                            src="/assets/img-opd-1.jpg"
                            text="OPD"
                        />
                        <ImageBox
                            alt="gmpc OPD"
                            src="/assets/img-opd-2.jpg"
                            text="OPD"
                        />
                        <ImageBox
                            alt="gmpc pharmacy"
                            src="/assets/img-pharmacy-entry.jpg"
                            text="PHARMACY ENTRY"
                        />
                        <ImageBox
                            alt="gmpc pharmacy"
                            src="/assets/img-pharmacy-view-2.jpg"
                            text="PHARMACY"
                        />
                        <ImageBox
                            alt="gmpc pharmacy"
                            src="/assets/img-pharmacy-view.jpg"
                            text="PHARMACY ENTRY"
                        />
                        <ImageBox
                            alt="gmpc diwali"
                            src="/assets/img-gmpc-diwali.jpg"
                            text="DIWALI CELEBRATION"
                            classes="col-span-3"
                        />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default AboutUs;
