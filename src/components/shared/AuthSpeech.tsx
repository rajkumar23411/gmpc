const AuthSpeech = () => {
    return (
        <div className="h-max md:h-[85vh] w-full founder-bg relative flex p-10 md:p-20 gap-10 flex-col-reverse lg:flex-row">
            <div className="lg:flex-1">
                <p className="text-xl text-blue-600">From the founder's desk</p>
                <h1 className="pb-10 pt-2 text-5xl font-sans font-medium">
                    Welcome to <span className="font-semibold">GMPC</span>
                </h1>
                <p className="text-lg">
                    GNRC (formerly known as Guwahati Neurological Research
                    Centre), the first super specialty healthcare centre in
                    North East India, was established in 1987 by neurologist Dr.
                    Nomal Chandra Borah. Born into the family of a marginal
                    farmer in Sonitpur district of Assam, Dr. Borah has scaled
                    professional and entrepreneurial heights through the sheer
                    dint of his intellectual capability and indomitable spirit,
                    steadfast in his pursuit of delivering ‘Health for All,
                    Smiles for All’, through his social enterprises.
                </p>
                <button className="mt-10 bg-blue-500 px-8 py-4 rounded-lg text-white hover:bg-blue-600 hover:shadow-xl shadow-black">
                    Know More
                </button>
            </div>
            <div className="lg:flex-[0.5] h-4/5 md:h-full relative group md:mb-10">
                <div className="absolute -bottom-10 bg-black bg-opacity-90 w-5/6 h-20 left-1/2 -translate-x-1/2 group-hover:top-1/2 group-hover:-translate-y-1/2 group-hover:w-full group-hover:h-full transition-all duration-200  group-hover:bg-opacity-50 ease-linear hidden md:flex-center flex-col rounded-2xl z-20">
                    <h1 className="text-white text-lg  md:text-xl group-hover:text-2xl">
                        Mr. Parash Saikia
                    </h1>
                    <h2 className="text-white text-base md:text-lg">
                        DPharm, BSc.
                    </h2>
                </div>
                <img
                    src="/assets/ceo-owner.jpg"
                    alt="owner"
                    className="h-64 md:h-96 lg:h-full w-full object-cover rounded-2xl drop-shadow-xl"
                />
            </div>
        </div>
    );
};

export default AuthSpeech;
// background-color: #f9f9f9;
// background-image: linear-gradient(122deg, #f9f9f9 0%, #B721FF 33%);
