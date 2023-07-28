import bgHero from "../../assets/bg_hero.png";
import imgRightHero from "../../assets/img_right_hero.png";
import Button from "../../components/Button";

function Hero() {
    return (
        <section>
            <div className="relative ">
                <img className="" src={bgHero} alt="bgHero" />
                <div className="absolute w-full h-full top-0 left-0">
                    <div className="container pt-[60px] h-full">
                        <div className="grid grid-cols-2 h-full">
                            <div className="flex">
                                <div className="self-center">
                                    <p className="text-lg text-primary font-normal">Organize spaces for everyone and everything you need</p>
                                    <h1 className="text-white text-7xl font-medium mt-[30px] mb-[50px]">Great teamworks start with Pollock.</h1>
                                    <p className="text-white text-[1.375rem] mb-[70px]">
                                        With all your people, tools and communication in one place, you can work faster and more flexibly than ever before.
                                    </p>
                                    <div className=" flex items-center gap-2">
                                        <Button type="primary" size="big" text="Start Free Trial" />
                                        <Button type="transparent" size="big" text="Learn More" />
                                    </div>
                                </div>
                            </div>
                            <div className="flex">
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
