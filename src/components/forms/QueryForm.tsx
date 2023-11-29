import { IMessage } from "@/_root/pages/Appointment";
import { saveQueriesToDB } from "@/lib/firebase/api";
import { useEffect, useState } from "react";
import Loader from "../shared/Loader";

const QueryForm = () => {
    const [data, setData] = useState({
        name: "",
        contact: "",
        email: "",
        query: "",
    });
    const [message, setMessage] = useState<IMessage>({
        type: "",
        text: "",
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setData((prevData) => ({
            ...prevData,
            [name]: value,
        }));
    };
    const handleFormSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setLoading(true);
        if (!data.name || !data.contact || !data.query) {
            setLoading(false);
            return setMessage({
                type: "error",
                text: "Please fill all the fields",
            });
        }
        if (data.contact.length !== 10) {
            setLoading(false);
            return setMessage({
                type: "error",
                text: "Please enter a valid contact number",
            });
        }
        const response = await saveQueriesToDB(data);

        if (response?.status === "fail") {
            setLoading(false);
            return setMessage({
                type: "error",
                text: "Something went wrong. Try again later!",
            });
        }
        if (response?.status === "ok") {
            setData({
                name: "",
                email: "",
                contact: "",
                query: "",
            });
            setLoading(false);
            return setMessage({
                type: "success",
                text: "Your query is sent.",
            });
        }
    };
    useEffect(() => {
        if (message.type !== "") {
            setTimeout(() => {
                setMessage({
                    type: "",
                    text: "",
                });
            }, 5000);
        }
    }, [message.type]);
    return (
        <form className="pt-10 flex flex-col gap-4" onSubmit={handleFormSubmit}>
            <input
                type="text"
                placeholder="Name*"
                name="name"
                value={data.name}
                onChange={handleChange}
                className="w-full h-12 pl-2 rounded-lg bg-transparent border border-white placeholder:text-red-500 text-white resize-none outline-none focus:border-red-500"
            />
            <input
                type="text"
                placeholder="Phone*"
                name="contact"
                value={data.contact}
                onChange={handleChange}
                className="w-full h-12 pl-2 rounded-lg bg-transparent border border-white placeholder:text-red-500 text-white resize-none outline-none focus:border-red-500"
            />
            <input
                type="text"
                placeholder="Email*"
                name="email"
                value={data.email}
                onChange={handleChange}
                className="w-full h-12 pl-2 rounded-lg bg-transparent border border-white placeholder:text-red-500 text-white resize-none outline-none focus:border-red-500"
            />
            <textarea
                rows={5}
                placeholder="Your Query*"
                className="w-full pl-2 rounded-lg bg-transparent border border-white placeholder:text-red-500 text-white resize-none outline-none focus:border-red-500"
                name="query"
                value={data.query}
                onChange={handleChange}
            />
            {message.text && (
                <div
                    className={`${
                        message.type === "error" &&
                        "text-red-500 animate-shake animate-twice animate-duration-200 animate-ease-in"
                    } ${
                        message.type === "success" &&
                        "text-green-500 animate-pulse animate-infinite"
                    } text-center`}
                >
                    {message.text}
                </div>
            )}
            {loading ? (
                <button
                    disabled={true}
                    className="bg-red-300 h-12 font-medium rounded-lg uppercase text-white font-sans flex-center gap-2"
                >
                    <Loader />
                    Sending...
                </button>
            ) : (
                <button
                    type="submit"
                    className="bg-red-600 h-12 font-medium rounded-lg uppercase text-white font-sans hover:bg-red-700"
                >
                    Send Query
                </button>
            )}
        </form>
    );
};

export default QueryForm;
