const Loader = ({ color }: { color?: string }) => {
    return (
        <div className="flex-center w-max">
            <img
                src="/assets/loader.svg"
                alt="loader"
                height={24}
                width={24}
                className={`${color && "color"}`}
            />
        </div>
    );
};

export default Loader;
