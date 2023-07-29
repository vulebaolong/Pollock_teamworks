import { useEffect } from "react";
import style from "./Header.module.css";

import HeaderDesktop from "./HeaderDesktop/HeaderDesktop";
import HeaderMobile from "./HeaderMobile/HeaderMobile";

function Header() {
    useEffect(() => {
        // Chọn phần tử header
        const headerScroll = document.querySelector(".headerScroll");
        const header = document.querySelector("header");

        // Tạo một callback
        const callBack = (entries) => {
            const [entry] = entries;
            const isAction = entry.isIntersecting;
            if (!isAction) {
                header.classList.add(`${style.sticky}`);
            } else {
                header.classList.remove(`${style.sticky}`);
            }
        };

        // Tạo một option
        const obsOption = {
            root: null,
            threshold: 1,
            rootMargin: `${header.offsetHeight}px`, // chiều cao của header
        };

        // Tạo một instance của Intersection Observer
        const observer = new IntersectionObserver(callBack, obsOption);

        // Theo dõi phần tử banner bằng Intersection Observer
        if (headerScroll) observer.observe(headerScroll);
    }, []);

    return (
        <>
            <div
                className={`headerScroll w-1/2 top-0 left-10 bg-red-500/0 z-30 absolute
                h-header
                sm:h-header_sm
                md:h-header_md
                lg:h-header_lg
                xl:h-header_xl
                2xl:h-header_2xl
				`}
            ></div>
            <header
                className={`${style.header} z-[1000]
                h-header
                sm:h-header_sm
                md:h-header_md
                lg:h-header_lg
                xl:h-header_xl
                2xl:h-header_2xl
				`}
            >
                <div className="container h-full">
                    <div className="hidden lg:block h-full">
                        <HeaderDesktop />
                    </div>
                    <div className="block lg:hidden h-full">
                        <HeaderMobile />
                    </div>
                </div>
            </header>
        </>
    );
}
export default Header;
