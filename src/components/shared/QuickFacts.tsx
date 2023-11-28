type FactsBoxProps = {
    amount: string | number;
    heading: string;
    icon: string;
};

const FactsBox = ({ amount, heading, icon }: FactsBoxProps) => {
    return (
        <div className="bg-slate-50 h-48 md:h-48 w-full md:w-[90%] rounded-2xl flex items-center justify-center gap-6 group relative overflow-hidden hover:shadow-md hover:shadow-gray-300 hover:-translate-y-10 hover:border hover:border-gray-300 translate-all ease-in-out duration-150 shadow-lg">
            <div className="absolute top-0 left-0 -rotate-45 text-center">
                <i
                    className={`${icon} text-[10rem] md:text-[7rem] lg:text-[10rem]  text-gray-200 z-0 group-hover:scale-125 transition-all duration-150`}
                ></i>
            </div>
            <div className="flex flex-col gap-2 z-10 items-center justify-center">
                <p className="text-4xl md:text-4xl lg:text-5xl font-sans font-semibold text-red-600">
                    {amount}
                </p>
                <p className="text-2xl text-gray-600 w-full">{heading}</p>
            </div>
        </div>
    );
};

const QuickFacts = () => {
    return (
        <div className="p-6 md:p-10 md:py-16 md:px-10 lg:py-20 lg:px-10 relative overflow-hidden bg-slate-100 quick-facts-container">
            <div className="triangle-2 absolute left-0 top-0 -z-0 hidden md:block"></div>
            <div className="flex flex-col justify-end items-end">
                <h1 className="text-3xl md:text-4xl lg:text-5xl text-main font-sans font-medium text-center z-20">
                    Why to choose <span>GMPC.</span>
                </h1>
                <span className="text-red-700 text-base font-light md:text-xl">
                    Quick glimps of our facilities
                </span>
            </div>

            <div className="pt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
                <FactsBox
                    amount="450+"
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
