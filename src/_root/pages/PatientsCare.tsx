import PageHeading from "@/components/shared/PageHeading";
import TopicHeading from "@/components/shared/TopicHeading";

const PatientsCare = () => {
    return (
        <div>
            <PageHeading heading="Patient's Care" />
            <div className="p-20 flex gap-10">
                <div className="w-[38rem]">
                    <img
                        src="/assets/bg-patience-care.jpg"
                        alt="patient's care"
                        className="h-[36rem] w-max rounded-xl object-cover drop-shadow-xl"
                    />
                </div>
                <div className="w-full">
                    <TopicHeading heading="We Do Care of Your Health" />
                    <p className="font-sans text-purple-950 text-lg mt-6">
                        GMPC provides care that is free from harm, minimizes
                        redundancy and waste, allows timely access to needed
                        services, follows best practices, and incorporates
                        patients' preferences and treatment priorities
                    </p>
                </div>
            </div>
        </div>
    );
};

export default PatientsCare;
