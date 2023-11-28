import PageHeading from "@/components/shared/PageHeading";

const Input = ({
    placeholder,
    type,
}: {
    placeholder: string;
    type: string;
}) => {
    return (
        <input
            type={type}
            className="w-full h-14 border border-gray-500 placeholder:text-main  bg-transparent rounded-lg pl-2 focus:outline-none focus:border-blue-500 focus:placeholder:text-blue-500"
            placeholder={placeholder}
        />
    );
};
const Appointment = () => {
    return (
        <div>
            <PageHeading heading="Book Appointment" />
            <div className="flex-center relative">
                <div className="ellipse-1 bg-sky-300 -z-10 h-64 w-64 md:h-80 md:w-80 absolute top-0 left-0" />
                <div className="ellipse-2 bg-amber-500 -z-10 w-80 h-80 md:h-96 md:w-96 absolute bottom-0 right-0" />
                <form className="w-full md:w-[80%] lg:w-[35rem] flex flex-col gap-6 py-20 px-6 backdrop-blur-xl">
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl text-main">
                            Personal Information
                        </h1>
                        <div className="flex flex-col gap-4">
                            <Input placeholder="Name *" type="text" />
                            <Input placeholder="Age *" type="number" />
                            <Input placeholder="Address *" type="text" />
                            <Input placeholder="Contact *" type="number" />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl text-main">Health Issue</h1>
                        <div className="flex flex-col gap-4">
                            <select className="w-full h-14 border border-gray-500  text-main rounded-lg focus:outline-none focus:border-blue-500 bg-transparent">
                                <option
                                    defaultValue={""}
                                    disabled
                                    className="text-gray-500"
                                >
                                    Select Health Issue
                                </option>
                                <option value="opd">OPD</option>
                                <option value="dental">Dental Service</option>
                                <option value="ultrasound">Ultrasound</option>
                                <option value="ECG">ECG</option>
                                <option value="x-ray">X-Ray</option>
                                <option value="other">Other</option>
                            </select>
                            <textarea
                                rows={4}
                                className="w-full border bg-transparent placeholder:text-main border-gray-500 rounded-lg pl-2 focus:outline-none focus:border-blue-500 focus:placeholder:text-blue-500"
                                placeholder="Description"
                            ></textarea>
                        </div>
                    </div>
                    <button className="bg-main text-white h-14 rounded-lg uppercase tracking-wide hover:bg-blue-950">
                        Book appointment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Appointment;
