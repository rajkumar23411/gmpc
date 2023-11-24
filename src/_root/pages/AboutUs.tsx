import PageHeading from "@/components/shared/PageHeading";
import { useState, useEffect } from "react";
export const TopicHeading = ({ heading }: { heading: string }) => {
    return (
        <div className="h-max py-4 bg-gradient-to-r from-main to-[#386199] border-l-[10px] border-red-600 flex items-center pl-10 text-2xl md:text-4xl text-white">
            {heading}
        </div>
    );
};

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
                                <p className="font-sans">
                                    Lorem ipsum dolor sit amet consectetur
                                    adipisicing elit. In ducimus debitis,
                                    cupiditate ut, porro iure modi facere sit
                                    corporis necessitatibus tenetur aliquid illo
                                    incidunt eius, explicabo quidem impedit ab
                                    quo beatae error obcaecati voluptas aut.
                                    Harum debitis deleniti reprehenderit
                                    incidunt sunt inventore ea accusamus earum
                                    dolor recusandae quia expedita laborum,
                                    possimus illo sapiente fugiat cumque
                                    consequatur reiciendis explicabo ullam
                                    voluptatibus tempore iste iusto? Est atque
                                    voluptatem commodi, eveniet distinctio ea ut
                                    quaerat impedit sint libero voluptas maiores
                                    possimus repellendus velit eaque non aliquid
                                    corrupti laborum, natus soluta mollitia
                                    tempore. Laborum tempora quas illo
                                    distinctio. Repellat aperiam mollitia
                                    distinctio modi explicabo nobis sint magni
                                    esse accusamus quas fugit, hic illum dolorem
                                    eligendi beatae tempore, aliquid cupiditate
                                    eveniet? Dolorum dolores minus magnam sit
                                    autem culpa id labore delectus minima alias?
                                    Repellendus quibusdam consectetur, enim
                                    quasi quod sed assumenda nesciunt inventore
                                    ab voluptates, consequuntur est cumque.
                                    Magnam odit saepe pariatur optio consectetur
                                    numquam eum quam corporis incidunt,
                                    reprehenderit quod, voluptates quibusdam
                                    blanditiis excepturi nulla, expedita
                                    assumenda nisi. Animi doloremque debitis
                                </p>
                                <p className="font-sans">
                                    iure voluptate non vero esse tenetur libero
                                    in. Dignissimos consequatur ut, fugit ea,
                                    debitis corporis doloremque est molestiae
                                    mollitia quam autem quia ab tenetur beatae
                                    aliquid ratione modi rem omnis! Optio
                                    nesciunt quibusdam amet eaque illum dicta!
                                    Magnam nisi blanditiis adipisci non repellat
                                    sunt id, eos corrupti laudantium minima
                                    cumque atque ex accusantium aspernatur,
                                    fugit molestiae optio, provident temporibus
                                    minus. Distinctio aliquid nemo harum et
                                    eveniet a! Enim voluptatum error voluptates
                                    assumenda eum totam at voluptatem, quidem
                                    sed ut doloremque sapiente tenetur hic.
                                    Consequatur minus numquam nemo itaque
                                    corporis fugiat amet, fuga vel
                                </p>
                            </div>
                        </div>
                        <p className="second-para pt-4 text-justify font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Ea exercitationem, esse voluptate sed ut
                            inventore nesciunt similique totam! Ex accusamus
                            quam soluta dicta officia dignissimos, velit neque
                            ipsam architecto est! Explicabo porro veritatis,
                            maiores temporibus eligendi minus, voluptas ex
                            beatae est saepe suscipit cumque facere
                            necessitatibus eius soluta fugit, et neque
                            distinctio velit sapiente! Nihil voluptatem sit
                            laborum sint animi dicta consectetur possimus
                            repudiandae ratione laudantium id eaque eligendi
                            voluptates, sed deserunt? Veniam odio sequi
                            accusamus error id repudiandae ut. Nemo minus
                            mollitia provident a tempora, necessitatibus
                            corporis quibusdam adipisci, officia nobis, ab
                            dolore! Soluta, facere libero porro maxime odio
                            nulla tempora minus dolores ex a aspernatur
                        </p>
                        <p className="third-para pt-6 text-justify font-sans">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. At asperiores odio commodi quibusdam atque
                            sapiente provident quis, hic officiis iure? Ea
                            laudantium rerum voluptatum optio quae eius
                            veritatis harum dolor aliquam a ullam magnam, animi
                            qui. Doloremque, tenetur! Magni in laborum
                            temporibus adipisci nemo provident itaque fugit
                            dolorum alias, explicabo quasi animi natus porro
                            nobis neque aut officia quos cum magnam ea mollitia.
                            Voluptas consequuntur tempora cupiditate explicabo
                            eaque. Laborum impedit ullam fugit. Hic vero quo
                            fugiat necessitatibus, nemo porro. Amet perferendis
                            ut nemo vitae voluptates reprehenderit enim.
                            Molestias nihil reiciendis asperiores voluptatum
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
