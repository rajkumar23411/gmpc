const BookAppointment = () => {
    return (
        <div className="flex h-[80vh] w-full gap-6 relative ">
            <div className="absolute top left-0 triangle-3"></div>
            <div className="w-full flex flex-col items-center justify-center gap-10 h-full z-10">
                <h1 className="text-4xl text-gray-900 flex items">
                    Book Your Slot Now.
                </h1>
                <form className="w-1/2 flex flex-col gap-3 px-20">
                    <div className="w-full">
                        <label htmlFor="name">Patient Name*</label>
                        <input
                            type="text"
                            className="h-12 w-full border bg-transparent border-gray-400 outline-none focus:border-blue-600 pl-2 rounded-lg"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="name">Contact*</label>
                        <input
                            type="text"
                            className="h-12 w-full border bg-transparent border-gray-400 outline-none focus:border-blue-600 pl-2 rounded-lg"
                        />
                    </div>
                    <div className="w-full">
                        <label htmlFor="name">Service*</label>
                        <select className="h-12 w-full border bg-transparent border-gray-400 outline-none focus:border-blue-600 pl-2 rounded-lg">
                            <option disabled>Choose Service</option>
                            <option>Docotor</option>
                            <option>Dental</option>
                            <option>ECG</option>
                            <option>Ultrasonography</option>
                            <option>X-Ray</option>
                            <option>Blood Test</option>
                        </select>
                    </div>
                    <div className="w-full">
                        <label htmlFor="name">Description*</label>
                        <textarea
                            rows={4}
                            className="w-full border bg-transparent border-gray-400 pt-2 outline-none focus:border-blue-600 pl-2 resize-none rounded-lg placeholder:font-light"
                            placeholder="Write about your health issue here..."
                        />
                    </div>
                    <button className="h-14 w-full bg-[#1d3557] text-white rounded-lg hover:bg-red-950">
                        Book Your Appointment
                    </button>
                </form>
            </div>
        </div>
    );
};

export default BookAppointment;
