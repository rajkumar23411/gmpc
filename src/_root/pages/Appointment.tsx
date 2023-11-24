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
            className="w-full h-14 border-2 border-gray-300 rounded-lg pl-2 focus:outline-none focus:border-blue-500 focus:placeholder:text-blue-500"
            placeholder={placeholder}
        />
    );
};
const Appointment = () => {
    return (
        <div>
            <PageHeading heading="Book Appointment" />
            <div className="flex-center">
                <form className="w-full md:w-[80%] lg:w-[35rem] flex flex-col gap-6 py-20 px-6">
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
                            <select className="w-full h-14 border-2 border-gray-300 rounded-lg focus:outline-none focus:border-blue-500 bg-transparent">
                                <option
                                    selected
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
                                rows={6}
                                className="w-full border-2 border-gray-300 rounded-lg pl-2 focus:outline-none focus:border-blue-500 focus:placeholder:text-blue-500"
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
