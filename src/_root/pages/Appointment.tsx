import Loader from "@/components/shared/Loader";
import PageHeading from "@/components/shared/PageHeading";
import { saveAppointmentToDb } from "@/lib/firebase/api";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface IInput {
    placeholder: string;
    type: string;
    name: string;
    value: string | number;
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

interface IMessage {
    type: "success" | "error" | null | undefined | "";
    text: string | "";
}

const Input = ({ placeholder, type, name, value, onChange }: IInput) => {
    return (
        <input
            type={type}
            className="w-full h-14 border border-gray-500 placeholder:text-main  bg-transparent rounded-lg pl-2 focus:outline-none focus:border-blue-500 focus:placeholder:text-blue-500"
            placeholder={placeholder}
            name={name}
            value={value}
            onChange={onChange}
        />
    );
};
const Appointment = () => {
    const [data, setData] = useState({
        name: "",
        age: "",
        address: "",
        contact: "",
        service: "",
        description: "",
    });
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState<IMessage>({
        type: "",
        text: "",
    });
    const navigate = useNavigate();
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleSelectChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };

    const handleAppointmentSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);

        if (
            !data.name ||
            !data.address ||
            !data.age ||
            !data.contact ||
            !data.description ||
            !data.service
        ) {
            setLoading(false);
            return setMessage({
                type: "error",
                text: "Please fill all the fields",
            });
        }

        if (data.name.length <= 3) {
            setLoading(false);
            return setMessage({
                type: "error",
                text: "Please enter a valid name",
            });
        }

        if (data.contact.length !== 10) {
            setLoading(false);
            return setMessage({
                type: "error",
                text: "Please enter a valid contact number",
            });
        }

        const response = await saveAppointmentToDb({
            name: data.name,
            age: +data.age,
            address: data.address,
            contact: +data.contact,
            description: data.description,
            service: data.service,
        });

        if (response?.status === "fail") {
            setLoading(false);
            return setMessage({
                type: "error",
                text: "Something went wrong, Please try again later!",
            });
        }

        if (response?.status === "ok") {
            setLoading(false);
            return setMessage({
                type: "success",
                text: "Your appointment request has been submitted. We will get back to you soon",
            });
        }
    };

    useEffect(() => {
        if (message.type === "error") {
            setTimeout(() => {
                setMessage({
                    type: null,
                    text: "",
                });
            }, 5000);
        }
        if (message.type === "success") {
            setTimeout(() => {
                navigate("/");
            }, 3000);
        }
    }, [message.type, setMessage, navigate]);

    return message.type === "success" ? (
        <div className="book_appointment">
            <PageHeading heading="Book Appointment" />
            <div className="h-[60vh] flex-center flex-col">
                <h1 className="text-lg md:text-xl lg:text-2xl text-white">
                    Your appointment request has been submitted
                </h1>
                <h2 className="text-lg md:text-xl lg:text-2xl text-green-300 font-light">
                    We will get back to you soon.
                </h2>
                <h4 className="mt-6 font-light text-sm lg:text-base text-yellow-400">
                    Thanks for choosing GMPC. We wish your good health!
                </h4>
            </div>
        </div>
    ) : (
        <div>
            <PageHeading heading="Book Appointment" />
            <div className="flex-center relative md:py-20">
                <div
                    className={`ellipse-1 bg-sky-300 -z-10 h-64 w-64 md:h-80 md:w-80 absolute top-0 left-0`}
                />
                <div
                    className={`ellipse-2 bg-amber-500 -z-10 w-80 h-80 md:h-96 md:w-96 absolute bottom-0 right-0`}
                />
                <form
                    className="w-full h-full md:w-[80%] lg:w-[35rem] flex flex-col gap-6 px-6 backdrop-blur-xl py-10"
                    onSubmit={handleAppointmentSubmit}
                >
                    {message.type === "error" && (
                        <div className="h-12 bg-red-200 font-sans font-medium bg-opacity-30 text-red-600 flex-center rounded-lg border border-red-400 animate-shake animate-twice animate-duration-200 animate-ease-in">
                            {message.text}
                        </div>
                    )}
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl text-main">
                            Personal Information
                        </h1>
                        <div className="flex flex-col gap-4">
                            <Input
                                placeholder="Name *"
                                type="text"
                                name="name"
                                value={data.name}
                                onChange={handleChange}
                            />
                            <Input
                                placeholder="Age *"
                                type="number"
                                name="age"
                                value={data.age}
                                onChange={handleChange}
                            />
                            <Input
                                placeholder="Address *"
                                type="text"
                                name="address"
                                value={data.address}
                                onChange={handleChange}
                            />
                            <Input
                                placeholder="Contact *"
                                type="number"
                                name="contact"
                                value={data.contact}
                                onChange={handleChange}
                            />
                        </div>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h1 className="text-2xl text-main">Health Issue</h1>
                        <div className="flex flex-col gap-4">
                            <select
                                value={data.service}
                                name={"service"}
                                onChange={handleSelectChange}
                                className="w-full h-14 border border-gray-500  text-main rounded-lg focus:outline-none focus:border-blue-500 bg-transparent"
                            >
                                <option
                                    defaultValue={""}
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
                                name="description"
                                value={data.description}
                                onChange={handleChange}
                            ></textarea>
                        </div>
                    </div>
                    {loading ? (
                        <button
                            type="submit"
                            onClick={handleAppointmentSubmit}
                            disabled={true}
                            className="bg-main bg-opacity-90 text-white h-14 rounded-lg tracking-wide disabled:cursor-not-allowed flex-center gap-2"
                        >
                            <Loader /> Submitting...
                        </button>
                    ) : (
                        <button
                            type="submit"
                            className="bg-main text-white h-14 rounded-lg tracking-wide hover:bg-blue-950"
                        >
                            Book appointment
                        </button>
                    )}
                </form>
            </div>
        </div>
    );
};

export default Appointment;
