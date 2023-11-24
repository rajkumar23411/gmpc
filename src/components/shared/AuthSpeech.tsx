const AuthSpeech = () => {
    return (
        <div className="h-max md:h-max w-full founder-bg relative flex p-10 lg:p-20 gap-10 flex-col-reverse md:flex-row lg:flex-row">
            <div className="md:flex-[0.9] lg:flex-1">
                <h1 className="pb-10 pt-2 text-4xl lg:text-5xl font-sans text-main font-medium">
                    Welcome to <span className="font-medium">GMPC</span>
                </h1>
                <p className="text-lg font-sans text-justify">
                    <b className="font-sans text-base lg:text-lg text-main">
                        GMPC ( Gohpur Medicos & Pharma Clinic )
                    </b>{" "}
                    is a multi-speciality health care unit where we strive to
                    provide exceptional healthcare service to our valued
                    patients. Our dedicated team of experienced doctors and
                    medical professionals is here to ensure your well-being and
                    address all your healthcare needs.GMP&C is located on a
                    hassle free connectivity at Kalabari, Gohpur, Biswantha
                    Assam. We believe that a serene environment plays a crucial
                    role in the healing process, ensuring a peaceful experience
                    during your visit. We look forward to your continued support
                    and guidance.
                </p>
                <button className="mt-10 bg-blue-500 px-8 py-4 rounded-lg text-white hover:bg-blue-600 hover:shadow-xl shadow-black">
                    Know More
                </button>
            </div>
            <div className="lg:flex-[0.5] h-4/5 md:h-full relative group md:mb-10 flex-center rounded-2xl overflow-hidden">
                <img
                    src="/assets/ceo-owner.jpg"
                    alt="owner"
                    className="h-64 md:h-96 lg:h-full w-full object-cover drop-shadow-xl"
                />
                <div className="absolute bottom-0 left-0 right-0 w-full h-16 md:h-20 lg:h-24 group-hover:h-full flex-center bg-gradient-to-b from-transparent to-main transition-all duration-150 ease-in-out">
                    <h1 className="font-sans font-medium text-lg lg:text-xl group-hover:text-3xl text-white">
                        Dr<sub>x</sub> Parash Saikia{" "}
                        <span className="font-sans font-normal text-base lg:text-lg">
                            (DPharm, BSc)
                        </span>
                    </h1>
                </div>
            </div>
        </div>
    );
};

export default AuthSpeech;
