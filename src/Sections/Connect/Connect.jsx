import Button from "../../components/Button";
import imgProject from "../../assets/icon_project.png";
import imgCentralized from "../../assets/icon_centralized.png";
import imgDigital from "../../assets/icon_digital.png";

function Connect() {
    return (
        <section>
            <div className="container py-24">
                <h2 className="text-[64px] text-text1 text-center mb-[92px] font-medium leading-[72px]"> A new way to connect with your team</h2>
                <div className="grid grid-cols-2 gap-[110px]">
                    <div className="flex flex-col gap-[30px]">
                        <div className="ml-auto p-[30px] w-[440px] bg-white rounded-[20px] shadow-[0px_20px_50px_rgba(79,119,255,0.20)]">
                            <div className="flex">
                                <div className="w-[50px] h-[50px] flex-shrink-0 mr-[20px]">
                                    <img className="w-full h-full" src={imgProject} alt="imgProject" />
                                </div>
                                <div>
                                    <p className="text-text3 text-[22px] font-normal leading-[32px]">Project Management</p>
                                    <p className="text-[16px] text-text4 font-normal leading-[26px]">
                                        Centralize tasks from different software, discuss resolutions, and create tasks.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div className="p-[30px] w-[440px] bg-white rounded-[20px] shadow-[0px_20px_50px_rgba(79,119,255,0.20)]">
                            <div className="flex">
                                <div className="w-[50px] h-[50px] flex-shrink-0 mr-[20px]">
                                    <img className="w-full h-full" src={imgCentralized} alt="imgCentralized" />
                                </div>
                                <div>
                                    <p className="text-text3 text-[22px] font-normal leading-[32px]">Centralized Workflows</p>
                                    <p className="text-[16px] text-text4 font-normal leading-[26px]">We design digital platforms to empower users and your brands tribe.</p>
                                </div>
                            </div>
                        </div>

                        <div className="ml-auto p-[30px] w-[440px] bg-white rounded-[20px] shadow-[0px_20px_50px_rgba(79,119,255,0.20)]">
                            <div className="flex">
                                <div className="w-[50px] h-[50px] flex-shrink-0 mr-[20px]">
                                    <img className="w-full h-full" src={imgDigital} alt="imgDigital" />
                                </div>
                                <div>
                                    <p className="text-text3 text-[22px] font-normal leading-[32px]">Digital Marketing</p>
                                    <p className="text-[16px] text-text4 font-normal leading-[26px]">We design digital platforms to empower users and your brands tribe.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex">
                        <div className="self-center">
                            <h3 className="text-[36px] font-medium leading-[46px] text-text1 mb-[30px]">Move faster by organizing your work</h3>
                            <div className="mb-[70px]">
                                <p className="text-text2 text-[18px] font-normal leading-[28px]">
                                    The key to productivity in Pollock is organized spaces called channels— a different one for everything you are working on. With all the people,
                                    messages and files related to a topic in one place, you can move a whole lot faster.
                                </p>
                                <br />
                                <p className="text-text2 text-[18px] font-normal leading-[28px]">
                                    Give yourself the flexibility to work when, where and how you work best. Take control of notifications, collaborate live or on your own time,
                                    and find answers in conversations from across your company.
                                </p>
                            </div>
                            <Button type="primary" size="big" text="Get Started" />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Connect;
