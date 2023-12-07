import DrMahesh from "/assets/docs/doc-1.jpg";
import DrSubham from "/assets/docs/doc-2.jpg";
import DrAJ from "/assets/docs/doc-3.jpg";
import DrRidip from "/assets/docs/doc-4.jpg";
import DrAditi from "/assets/docs/doc-5.jpg";
const DocCard = ({
    src,
    name,
    education,
    speciality,
    bgCover,
}: {
    src: string;
    name: string;
    education: string;
    speciality: string;
    bgCover?: boolean;
}) => {
    return (
        <div className="w-full lg:w-full flex-center flex-col bg-white p-2 place-content-center rounded-lg overflow-hidden docCard relative z-10 transition-all duration-200 ease-in-out">
            <div className="w-full h-56 lg:h-64 rounded-lg overflow-hidden">
                <img
                    src={src}
                    alt="doc"
                    className={`h-full w-full object-cover ${
                        bgCover && "object-top"
                    }`}
                />
            </div>
            <div className="flex-center flex-col w-full py-2">
                <h1 className="text-lg font-medium text-main">{name}</h1>
                <h2 className="font-light">{education}</h2>
                <h2 className="text-gray-800">{speciality}</h2>
            </div>
        </div>
    );
};

const Docs = () => {
    return (
        <div className="bg-gradient-to-b h-max flex justify-center flex-col bg-green-50 p-6 lg:p-10 relative">
            <div className="triangle-1 absolute right-0 top-0 -z-0 hidden md:block " />
            <h1 className="text-4xl md:text-5xl text-main">
                Meet our experts!
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 2xl:grid-cols-5 gap-4 mt-10">
                {/* <div className="flex gap-20"> */}
                <DocCard
                    src={DrSubham}
                    name="Dr. Subham Chaudhari"
                    education="MBBS (Gold Medalist)"
                    speciality="MD (Medicine)"
                    bgCover={true}
                />
                <DocCard
                    src={DrRidip}
                    name="Dr. Ridip Saikia"
                    education="BDS"
                    speciality="Dental and Oral Surgeon"
                    bgCover={true}
                />
                <DocCard
                    src={DrMahesh}
                    name="Dr. Manash Borah"
                    education="MBBS"
                    speciality="General Physician"
                />
                <DocCard
                    src={DrAJ}
                    name="Dr. A. J. Mahin Choudhury"
                    education="MBBS"
                    speciality="General Physician"
                />
                {/* </div> */}
                <DocCard
                    src={DrAditi}
                    name="Dr. Aditi Thakuria"
                    education="MBBS"
                    speciality="General Physician"
                />
            </div>
        </div>
    );
};

export default Docs;
