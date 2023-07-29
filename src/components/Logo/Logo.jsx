import imgLogo from "../../assets/Logo.png"

function Logo({...rest}) {
    return (
        <div {...rest} className="flex items-center gap-[10px] cursor-pointer">
            <img src={imgLogo} alt="imgLogo" />
            <span className="text-white text-[24px] font-normal leading-[32px]">Pollock</span>
        </div>
    );
}
export default Logo;
