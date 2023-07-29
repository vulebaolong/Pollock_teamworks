import imgFocus from "../../assets/icon_focus.png";
import imgIncrease from "../../assets/icon_increase.png";
import imgInvite from "../../assets/icon_invite.png";
import imgTeamwork from "../../assets/img_teamwork.png";

function Teamwork() {
    return (
        <section className="py-24 bg-section">
            <div className="container">
                <div
                    className="grid 
                    grid-cols-1 gap-10
                    lg:grid-cols-2 lg:gap-0
                    "
                >
                    <div className="flex">
                        <div className="self-center">
                            <div data-aos-delay="500" data-aos="fade-right" data-aos-duration="1000" className=" mb-[50px]">
                                <h3 className="text-[36px] font-medium leading-[46px] text-text1 ">Simplify teamwork for everyone</h3>
                                <p className="text-text2  text-[18px] font-normal leading-[28px] mt-[30px]">
                                    Give everyone you work with — inside and outside your company — a more productive way to stay in sync.
                                </p>
                            </div>

                            <div className="flex flex-col gap-[30px]">
                                <div data-aos-delay="700" data-aos="fade-right" data-aos-duration="1000" className="flex gap-[13px]">
                                    <div className="w-[32px] h-[32px]">
                                        <img className="w-full" src={imgFocus} alt="imgFocus" />
                                    </div>
                                    <div className="">
                                        <p className="text-text1 text-[18px] font-medium leading-[28px] tracking-[0.40px]">Focus your time, on your own terms</p>
                                        <p className="text-text4 text-[16px] font-normal leading-[26px]">
                                            Give yourself the flexibility to work when, where and how you work best.
                                        </p>
                                    </div>
                                </div>

                                <div data-aos-delay="900" data-aos="fade-right" data-aos-duration="1000" className="flex gap-[13px]">
                                    <div className="w-[32px] h-[32px]">
                                        <img className="w-full" src={imgIncrease} alt="imgIncrease" />
                                    </div>
                                    <div className="">
                                        <p className="text-text1 text-[18px] font-medium leading-[28px] tracking-[0.40px]">Increase your income</p>
                                        <p className="text-text4 text-[16px] font-normal leading-[26px]">
                                            Give yourself the flexibility to work when, where and how you work best.
                                        </p>
                                    </div>
                                </div>

                                <div data-aos-delay="1100" data-aos="fade-right" data-aos-duration="1000" className="flex gap-[13px]">
                                    <div className="w-[32px] h-[32px]">
                                        <img className="w-full" src={imgInvite} alt="imgInvite" />
                                    </div>
                                    <div className="">
                                        <p className="text-text1 text-[18px] font-medium leading-[28px] tracking-[0.40px]">Invite your coworkers</p>
                                        <p className="text-text4 text-[16px] font-normal leading-[26px]">
                                            Give yourself the flexibility to work when, where and how you work best.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div data-aos-delay="800" data-aos="fade-left" data-aos-duration="1000">
                            <img src={imgTeamwork} alt="imgTeamwork" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Teamwork;
