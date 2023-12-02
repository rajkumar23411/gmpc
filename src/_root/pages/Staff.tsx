import PageHeading from "@/components/shared/PageHeading";
import TopicHeading from "@/components/shared/TopicHeading";
import { gmpcStuff } from "@/lib";

const StaffBox = ({
    name,
    src,
    position,
}: {
    name: string;
    src: string;
    position: string;
}) => {
    return (
        <div className="w-full lg:w-56 py-2 lg:py-4 h-max bg-white flex-center flex-col gap-2 rounded-md overflow-hidden lg:gap-4 ">
            <div className="w-[90%] h-36 sm:h-56 md:h-44 lg:w-48 lg:h-48 rounded-md overflow-hidden">
                <img
                    src={src}
                    alt={name}
                    className="h-full w-full object-cover object-top"
                />
            </div>
            <div className="text-center">
                <h1 className="font-medium lg:text-lg text-main text-sm">
                    {name}
                </h1>
                <span className="font-light text-xs lg:text-base">
                    {position}
                </span>
            </div>
        </div>
    );
};

const Staff = () => {
    return (
        <div>
            <PageHeading heading="GMPC Core Team" />
            <div className="p-4 lg:p-20 bg-slate-100 flex flex-col gap-10">
                <TopicHeading heading="Meet the backbones of GMPC" />
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-3 md:gap-4 lg:gap-6">
                    {gmpcStuff.map((staff, indx) => (
                        <StaffBox
                            key={indx}
                            src={staff.src}
                            name={staff.name}
                            position={staff.position}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Staff;
