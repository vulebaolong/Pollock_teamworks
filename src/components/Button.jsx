import PropTypes from "prop-types";

function Button(props) {
    const { text, className, type, size, ...rest } = props;

    let classNameType = "";
    let classNameSize = "";
    switch (type) {
        case "transparent":
            classNameType = `bg-transparent border-[0.5px] hover:bg-white/90 active:bg-white/80`;
            break;

        case "primarry":
            classNameType = `bg-primary hover:bg-primary_hover active:bg-primary_active`;
            break;

        default:
            classNameType = `bg-primary hover:bg-primary_hover active:bg-primary_active`;
            break;
    }

    switch (size) {
        case "small":
            classNameSize = `py-[13px] px-6 text-sm font-medium leading-6 text-white`;
            break;
        case "big":
            classNameSize = `text-[15px] font-medium leading-6 text-white py-[18px] px-8`;
            break;
        default:
            classNameSize = `text-[15px] font-medium leading-6 text-white py-[18px] px-8`;
            break;
    }
    return (
        <button {...rest} className={`${className} ${classNameType} ${classNameSize}   rounded-[5px] uppercase transition cursor-pointer flex justify-center items-center`}>
            <span>{text}</span>
        </button>
    );
}

Button.propTypes = {
    type: PropTypes.any,
    className: PropTypes.any,
    size: PropTypes.any,
    text: PropTypes.any,
};
export default Button;
