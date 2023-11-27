import FreeService from "@/components/shared/FreeService";
import PageHeading from "@/components/shared/PageHeading";
import TopicHeading from "@/components/shared/TopicHeading";

const PatientsCare = () => {
    return (
        <div>
            <PageHeading heading="Patient's Care" />
            <div className="p-8 md:p-12 lg:p-20 flex flex-col md:flex-row gap-10">
                <div className="w-full h-96 lg:h-[30rem] lg:w-[38rem]">
                    <img
                        src="/assets/bg-patience-care.jpg"
                        alt="patient's care"
                        className="h-full w-max rounded-xl object-cover drop-shadow-xl"
                    />
                </div>
                <div className="w-full">
                    <TopicHeading heading="We Do Care of Your Health" />
                    <p className="font-sans text-purple-950 text-base md:text-lg mt-4 md:mt-6">
                        GMPC provides care that is free from harm, minimizes
                        redundancy and waste, allows timely access to needed
                        services, follows best practices, and incorporates
                        patients' preferences and treatment priorities
                    </p>
                </div>
            </div>
            <FreeService />
        </div>
    );
};

export default PatientsCare;
