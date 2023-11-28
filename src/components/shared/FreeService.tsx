const FreeService = () => {
    return (
        <div className="h-96 lg:h-[60vh] w-full free-service p-8 md:p-12 lg:p-20 flex items-center">
            <div className="flex flex-col gap-4 lg:w-1/2">
                <p className="text-xl lg:text-2xl text-yellow-200">
                    Our special service!
                </p>
                <h1 className="uppercase text-white text-3xl md:text-4xl lg:text-5xl">
                    Every month we are providing free treatment to patient over
                    60 years age.
                </h1>
            </div>
        </div>
    );
};

export default FreeService;
