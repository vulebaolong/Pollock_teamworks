import bgHero from "../../assets/bg_hero.png";
import imgRightHero from "../../assets/img_right_hero.png";
import Button from "../../components/Button";

function Hero() {
    return (
        <section>
            <div
                className="relative 
                h-[95vh]
                sm:h-[95vh]
                md:h-[95vh]
                lg:h-[95vh]
                xl:h-[90vh]
                "
            >
                <img  className="w-full h-full object-cover" src={bgHero} alt="bgHero" />
                <div className="absolute w-full h-full top-0 left-0">
                    <div className="container pt-[60px] h-full">
                        <div
                            className="grid h-full
                            grid-cols-1
                            mt-14
                            sm:mt-14
                            md:mt-14
                            lg:mt-14
                            xl:grid-cols-2 xl:mt-0
                            "
                        >
                            <div data-aos-delay="500" data-aos="fade-right" data-aos-duration="1000" className="flex">
                                <div className="self-center">
                                    <p
                                        className=" text-primary font-normal
                                        text-base text-center
                                        xl:text-start
                                        2xl:text-lg
                                        "
                                    >
                                        Organize spaces for everyone and everything you need
                                    </p>
                                    <h1
                                        className="text-white -7xl font-medium  
                                        text-5xl mt-[10px] text-center
                                        xl:text-start
                                        2xl:text-7xl 2xl:mt-[30px]
                                        "
                                    >
                                        Great teamworks start with Pollock.
                                    </h1>
                                    <p
                                        className="text-white 
                                        text-xl mb-[45px] mt-[25px] text-center
                                        xl:text-start
                                        2xl:text-[1.375rem] 2xl:mb-[70px] 2xl:mt-[50px]
                                        "
                                    >
                                        With all your people, tools and communication in one place, you can work faster and more flexibly than ever before.
                                    </p>
                                    <div
                                        className=" flex items-center gap-2
                                        justify-center
                                        sm:justify-center
                                        md:justify-center
                                        lg:justify-center
                                        xl:justify-start
                                        "
                                    >
                                        <Button type="primary" size="big" text="Start Free Trial" />
                                        <Button type="transparent" size="big" text="Learn more" />
                                    </div>
                                </div>
                            </div>
                            <div data-aos-delay="700" data-aos="fade-left" data-aos-duration="1000" className="flex">
                                <div className="w-full self-center">
                                    <img className="w-full" src={imgRightHero} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Hero;
