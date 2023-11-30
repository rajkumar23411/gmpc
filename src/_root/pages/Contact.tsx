import { AddressBox } from "@/components/shared/Footer";
import PageHeading from "@/components/shared/PageHeading";
import { SocialIconBox } from "@/components/shared/TopNavBar";
import { socialTags } from "@/lib";

const Contact = () => {
    return (
        <div>
            <PageHeading heading="Contact Us" />
            <div className="flex flex-col-reverse md:flex-row md:gap-10 p-6 md:p-12 lg:p-20 quick-facts-container">
                <div className="pt-10 md:mt-0 ">
                    <h1 className="mb-6 text-2xl text-main">
                        GMPC on google map
                    </h1>
                    <iframe
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3558.772751936418!2d93.60320977536169!3d26.87896017666731!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x37441b202988fd1d%3A0xe545ddacf7a448d6!2sGMPC%20(Gohpur%20Medicose%20and%20Pharma%20Clinic%20and%20Dignostic%20Centre)!5e0!3m2!1sen!2sin!4v1701327837858!5m2!1sen!2sin"
                        className="w-full h-96 lg:w-[700px] lg:h-[28rem] drop-shadow-lg"
                        style={{ border: 0 }}
                        allowFullScreen
                        loading="lazy"
                        referrerPolicy="no-referrer-when-downgrade"
                    ></iframe>
                </div>
                <div className="p-0 md::px-10">
                    <h1 className="text-3xl text-main">
                        Gohpur Medicos & Pharma Clinic (GMPC)
                    </h1>
                    <span className="text-lg">
                        Our vision:{" "}
                        <span className="text-red-600">
                            Your Health is Our Priority
                        </span>
                    </span>
                    <div className="flex flex-col">
                        <div className="flex flex-col gap-4 mt-8">
                            <AddressBox
                                icon="fal fa-map-marker-alt"
                                text=" Address: Kalabari, Gohpur, Biswanath, 784178"
                                textColor="dark"
                            />
                            <AddressBox
                                icon="fal fa-phone"
                                text="Phone: (+91) 60004 53938"
                                textColor="dark"
                            />
                            <AddressBox
                                icon="fal fa-siren-on"
                                text="Emergency: (+91) 60036 13726"
                                textColor="dark"
                            />
                            <AddressBox
                                icon="fal fa-envelope"
                                text="Email: gmpcplus2023@gmail.com"
                                textColor="dark"
                            />
                        </div>
                    </div>
                    <h1 className="text-3xl text-main mt-10">Follow us</h1>
                    <span className="text-main font-light">
                        And tay tuned with our latest services
                    </span>
                    <div className="flex items-center justify-center md:justify-start gap-4 lg:gap-10 mt-6">
                        {socialTags.map((tag, index) => (
                            <SocialIconBox
                                key={index}
                                iconName={tag.iconName}
                                link={tag.link}
                                modify={true}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Contact;
