import imgCheck from "../../assets/icon_check.png";
import imgBgSetup from "../../assets/bg_setup.png";
import Button from "../../components/Button";

function Setup() {
    return (
        <section className="py-24  relative">
            <div className="absolute w-full h-full top-0 left-0 -z-[1] flex flex-col">
                <div className="h-[700px] bg-section"></div>
                <div className="flex-1">
                    <img className="w-full h-full" src={imgBgSetup} alt="imgBgSetup" />
                </div>
            </div>

            <div className="container ">
                {/* TITLE */}
                <div className="mb-[100px]">
                    <h2 className="text-text1 text-[48px] font-medium leading-[56px] text-center mb-[30px]">Set up your app, pick a plan later</h2>
                    <p className="text-text4 text-[22px] font-normal leading-[32px] text-center">Try Shopify free for 14 days, no credit card required</p>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-2 gap-[30px]">
                    <div className="bg-white flex flex-col items-center rounded-[10px] shadow-[0px_60px_40px_rgba(18,2,47,0.10)]">
                        <p className="text-primary text-[18px] font-medium leading-[28px] tracking-[0.40px] mt-[35px]">Professional</p>
                        <div className="mt-[20px] mb-[10px]">
                            <span className="text-text1 text-[36px] font-medium leading-[46px]">$</span>
                            <span className="text-text1 text-[64px] font-medium leading-[72px]">39</span>
                            <span className="text-text1 text-[36px] font-medium leading-[46px]">/mo</span>
                        </div>
                        <p className="text-text5 text-[16px] font-normal leading-[26px] px-24 text-center">Best for new startups or businesses with occasional in-person sales</p>
                        <div className="space-y-[15px] mt-[40px] mb-[58px]">
                            <div className="flex gap-3">
                                <img src={imgCheck} alt="imgCheck" />
                                <p className="text-text1 text-[22px] font-normal leading-[32px]">Unlimited editable boards</p>
                            </div>
                            <div className="flex gap-3">
                                <img src={imgCheck} alt="imgCheck" />
                                <p className="text-text1 text-[22px] font-normal leading-[32px]">Unlimited visitors</p>
                            </div>
                            <div className="flex gap-3">
                                <img src={imgCheck} alt="imgCheck" />
                                <p className="text-text1 text-[22px] font-normal leading-[32px]">Custom templates</p>
                            </div>
                            <div className="flex gap-3">
                                <img src={imgCheck} alt="imgCheck" />
                                <p className="text-text1 text-[22px] font-normal leading-[32px]">Account management</p>
                            </div>
                            <div className="flex gap-3">
                                <img src={imgCheck} alt="imgCheck" />
                                <p className="text-text1 text-[22px] font-normal leading-[32px]">24/7 Support Online</p>
                            </div>
                        </div>
                        <Button className="w-full" size="big" type="primary" text="Start your free trial" />
                    </div>

                    <div className="bg-white flex flex-col items-center rounded-[10px] shadow-[0px_60px_40px_rgba(18,2,47,0.10)]">
                        <p className="text-primary text-[18px] font-medium leading-[28px] tracking-[0.40px] mt-[35px]">Basic</p>
                        <div className="mt-[20px] mb-[10px]">
                            <span className="text-text1 text-[36px] font-medium leading-[46px]">$</span>
                            <span className="text-text1 text-[64px] font-medium leading-[72px]">19</span>
                            <span className="text-text1 text-[36px] font-medium leading-[46px]">/mo</span>
                        </div>
                        <p className="text-text5 text-[16px] font-normal leading-[26px] px-24 text-center">Best for new startups or businesses with occasional in-person sales</p>
                        <div className="space-y-[15px] mt-[40px] mb-[58px]">
                            <div className="flex gap-3">
                                <img src={imgCheck} alt="imgCheck" />
                                <p className="text-text1 text-[22px] font-normal leading-[32px]">Unlimited editable boards</p>
                            </div>
                            <div className="flex gap-3">
                                <img src={imgCheck} alt="imgCheck" />
                                <p className="text-text1 text-[22px] font-normal leading-[32px]">Unlimited visitors</p>
                            </div>
                            <div className="flex gap-3">
                                <img src={imgCheck} alt="imgCheck" />
                                <p className="text-text1 text-[22px] font-normal leading-[32px]">Custom templates</p>
                            </div>
                            <div className="flex gap-3">
                                <img src={imgCheck} alt="imgCheck" />
                                <p className="text-text1 text-[22px] font-normal leading-[32px]">Account management</p>
                            </div>
                            <div className="flex gap-3">
                                <img src={imgCheck} alt="imgCheck" />
                                <p className="text-text1 text-[22px] font-normal leading-[32px]">24/7 Support Online</p>
                            </div>
                        </div>
                        <Button className="w-full" size="big" type="primary" text="Start your free trial" />
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-5 mt-[120px]">
                    <div className="space-y-[50px]">
                        <div className="space-y-[10px]">
                            <p className="text-white text-[18px] font-medium leading-[28px] tracking-[0.40px]">Do I need to enter my payment details to sign up?</p>
                            <p className="text-text6 text-[16px] font-normal leading-[26px]">
                                No. You can sign up and use Pollock for 14 days without entering your payment details. At the end of your trial, or when you decide to launch your
                                store, you will need to pick a plan and enter your payment details.
                            </p>
                        </div>
                        <div className="space-y-[10px]">
                            <p className="text-white text-[18px] font-medium leading-[28px] tracking-[0.40px]">Can I use my own domain name?</p>
                            <p className="text-text6 text-[16px] font-normal leading-[26px]">
                                Yes. You can purchase a domain name within Pollock, or use an existing one that you own. We also provide a free myshopify.com domain name to all
                                stores on sign up.
                            </p>
                        </div>
                        <div className="space-y-[10px]">
                            <p className="text-white text-[18px] font-medium leading-[28px] tracking-[0.40px]">Do I need a web host?</p>
                            <p className="text-text6 text-[16px] font-normal leading-[26px]">
                                Pollock includes secure, unlimited ecommerce hosting on all plans except Pollock Lite. You can also use the Buy Button to add our application to any
                                existing website.
                            </p>
                        </div>
                    </div>
                    <div className="space-y-[50px]">
                        <div className="space-y-[10px]">
                            <p className="text-white text-[18px] font-medium leading-[28px] tracking-[0.40px]">Do I need to enter my payment details to sign up?</p>
                            <p className="text-text6 text-[16px] font-normal leading-[26px]">
                                No. You can sign up and use Pollock for 14 days without entering your payment details. At the end of your trial, or when you decide to launch your
                                store, you will need to pick a plan and enter your payment details.
                            </p>
                        </div>
                        <div className="space-y-[10px]">
                            <p className="text-white text-[18px] font-medium leading-[28px] tracking-[0.40px]">Can I use my own domain name?</p>
                            <p className="text-text6 text-[16px] font-normal leading-[26px]">
                                Yes. You can purchase a domain name within Pollock, or use an existing one that you own. We also provide a free myshopify.com domain name to all
                                stores on sign up.
                            </p>
                        </div>
                        <div className="space-y-[10px]">
                            <p className="text-white text-[18px] font-medium leading-[28px] tracking-[0.40px]">Do I need a web host?</p>
                            <p className="text-text6 text-[16px] font-normal leading-[26px]">
                                Pollock includes secure, unlimited ecommerce hosting on all plans except Pollock Lite. You can also use the Buy Button to add our application to any
                                existing website.
                            </p>
                        </div>
                    </div>
                </div>

                <hr className="border-gray-600 my-[100px]" />

                <div>
                    <h3 className="text-white text-center text-[48px] font-medium leading-[56px]">Start your 14-day free trial today!</h3>
                    <p className="mt-[30px] mb-[70px] text-white text-[22px] font-normal leading-[32px] text-center">Try Shopify free for 14 days, no credit card required.</p>
                    <Button className="mx-auto" size="big" type="primary" text="Get Started" />
                </div>
            </div>
        </section>
    );
}
export default Setup;
