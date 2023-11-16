type SocialIconBoxProps = {
    iconName: string;
};
export const SocialIconBox = ({ iconName }: SocialIconBoxProps) => {
    return (
        <div className="text-sm bg-white h-7 w-7 lg:h-9 lg:w-9 lg:text-lg rounded-md text-green-700 grid-center hover:text-2xl hover:cursor-pointer transition-all duration-150">
            <i className={iconName} />
        </div>
    );
};

const TopNavBar = () => {
    return (
        <div className="bg-green-600 w-full h-max flex-between px-6 py-2 lg:px-8 lg:py-4">
            <div className="flex gap-3 lg:gap-6">
                <SocialIconBox iconName="fab fa-facebook-f" />
                <SocialIconBox iconName="fab fa-instagram" />
                <SocialIconBox iconName="fab fa-twitter" />
            </div>
            <div className="flex items-center gap-2">
                <SocialIconBox iconName="fas fa-phone-alt" />
                <p className="font-medium text-white hidden md:block">
                    Appointments: 600 0001 001
                </p>
            </div>
        </div>
    );
};

export default TopNavBar;
