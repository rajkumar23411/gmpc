const TopicHeading = ({ heading }: { heading: string }) => {
    return (
        <div className="h-max py-4 bg-gradient-to-r from-main to-[#386199] border-l-[10px] border-red-600 flex items-center pl-10 text-2xl md:text-4xl text-white">
            {heading}
        </div>
    );
};

export default TopicHeading;
