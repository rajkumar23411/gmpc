const PageHeading = ({ heading }: { heading: string }) => {
    return (
        <div className="w-full h-56 md:h-80 bg-gradient-to-b from-[#182c48] bg-main flex-center text-4xl md:text-5xl lg:text-6xl uppercase font-semibold text-red-600">
            {heading}
        </div>
    );
};

export default PageHeading;
