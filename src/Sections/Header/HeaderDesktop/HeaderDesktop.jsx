import style from "../Header.module.css";
import imgLogo from "../../../assets/Logo.png";
import imgBag from "../../../assets/icon_bag.png";
import imgSearch from "../../../assets/icon_search.png";
import Button from "../../../components/Button";
import Logo from "../../../components/Logo/Logo";

function HeaderDesktop() {
    return (
        <div className="flex justify-between h-full items-center">
            {/* LOGO */}
            <Logo />


            {/* NAV */}
            <div className="space-x-[30px]">
                <span className={`${style.nav_active} text-white text-[15px] font-medium leading-[24px]`}>Home</span>
                <span className="text-white text-[15px] font-medium leading-[24px]">Services</span>
                <span className="text-white text-[15px] font-medium leading-[24px]">About</span>
                <span className="text-white text-[15px] font-medium leading-[24px]">Pages</span>
                <span className="text-white text-[15px] font-medium leading-[24px]">Blog</span>
                <span className="text-white text-[15px] font-medium leading-[24px]">Contact</span>
            </div>

            {/* CONTROL */}
            <div className="flex items-center gap-[30px]">
                <div className="flex items-center gap-[20px]">
                    <div className="">
                        <img src={imgSearch} alt="imgSearch" />
                    </div>

                    <div className="">
                        <img src={imgBag} alt="imgBag" />
                    </div>
                </div>
                <Button type="transparent" size="small" text="Sign Up" />
            </div>
        </div>
    );
}
export default HeaderDesktop;
