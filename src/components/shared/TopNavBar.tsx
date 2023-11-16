type SocialIconBoxProps = {
    iconName: string;
};
export const SocialIconBox = ({ iconName }: SocialIconBoxProps) => {
    return (
        <div className="text-xs md:text-sm lg:text-base text-white w-6 h-6 md:w-8 md:h-8 bg-pink-600 rounded-full grid-center cursor-pointer hover:animate-wiggle-more animate-thrice duration-100">
            <i className={iconName} />
        </div>
    );
};

const TopNavBar = () => {
    return (
        <div className="w-full h-max flex-between px-6 py-2 lg:px-8 lg:py-4 bg-pink-100">
            <div className="flex gap-3 lg:gap-6">
                <SocialIconBox iconName="fab fa-facebook-f" />
                <SocialIconBox iconName="fab fa-instagram" />
                <SocialIconBox iconName="fab fa-twitter" />
            </div>
            <div className="flex items-center justify-end gap-2">
                <SocialIconBox iconName="fas fa-phone-alt" />
                <p className="font-medium text-pink-600 hidden md:block">
                    Appointments: 600 0001 001
                </p>
            </div>
        </div>
    );
};

export default TopNavBar;
