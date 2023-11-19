type FactsBoxProps = {
    amount: string | number;
    heading: string;
    icon: string;
};

const FactsBox = ({ amount, heading, icon }: FactsBoxProps) => {
    return (
        <div className="bg-slate-50 h-60 w-full rounded-2xl flex items-center justify-center gap-6 group relative overflow-hidden">
            <div className="absolute top-0 left-0 -rotate-45">
                <i
                    className={`${icon} text-[10rem]  text-pink-200 z-0 group-hover:animate-wiggle-more group-hover:animate-infinite group-hover:animate-ease-linear`}
                ></i>
            </div>
            <div className="flex flex-col gap-2 z-10">
                <p className="text-5xl lg:text-6xl font-sans font-semibold text-green-500">
                    {amount}
                </p>
                <p className="text-2xl text-gray-600 w-56">{heading}</p>
            </div>
        </div>
    );
};

const QuickFacts = () => {
    return (
        <div className="p-10">
            <h1 className="text-4xl text-pink-600 font-sans font-medium">
                GMPC Quick Facts!
            </h1>

            <div className="pt-10 flex flex-col md:flex-row gap-4">
                <FactsBox
                    amount="1000+"
                    icon="fad fa-laugh-beam"
                    heading="Happy patients"
                />
                <FactsBox
                    amount="30"
                    icon="fad fa-stethoscope"
                    heading="Medical Specialities"
                />
                <FactsBox
                    amount="1.5+"
                    icon="fad fa-lightbulb-on"
                    heading="Experience"
                />
                <FactsBox
                    amount="10"
                    icon="fad fa-bed"
                    heading="Hospital Beds"
                />
            </div>
        </div>
    );
};

export default QuickFacts;
