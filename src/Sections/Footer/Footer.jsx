import imgLogo from "../../assets/Logo.png";
import imgFb from "../../assets/icon_facebook.png";
import imgTwitter from "../../assets/icon_twitter.png";
import imgLinkedIn from "../../assets/icon_linkedIn.png";
import Button from "../../components/Button";

function Footer() {
    return (
        <section className="pt-24 bg-footer">
            <div className="container">
                <div
                    className="grid 
                    grid-cols-2 gap-20
                    md:grid-cols-4 md:gap-10
                    lg:grid-cols-4 lg:gap-10
                    xl:grid-cols-6 xl:gap-0
                    "
                >
                    <div className="">
                        <img src={imgLogo} alt="imgLogo" />
                    </div>
                    <div className="">
                        <h4 className="text-white text-[22px] font-normal leading-[32px] mb-[20px]">Company</h4>
                        <div className="space-y-[10px]">
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">About</p>
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Work</p>
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Careers</p>
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Pricing</p>
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Blog</p>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-white text-[22px] font-normal leading-[32px] mb-[20px]">Services</h4>
                        <div className="space-y-[10px]">
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Branding</p>
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Websites</p>
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Development</p>
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Strategy</p>
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Platforms</p>
                        </div>
                    </div>
                    <div className="">
                        <h4 className="text-white text-[22px] font-normal leading-[32px] mb-[20px]">Contact</h4>
                        <div className="space-y-[10px]">
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Help Desk</p>
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Docs</p>
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Open a Ticket</p>
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Chat</p>
                            <p className="text-text6 text-[14px] font-medium uppercase leading-[24px]">Forum</p>
                        </div>
                    </div>
                    <div className="col-span-2">
                        <h4 className="text-white text-[22px] font-normal leading-[32px] mb-[20px]">Newsletter</h4>
                        <p className="text-text6 text-[16px] font-normal leading-[26px]">
                            Subscribe to our newsletter to keep up to date on our marketing, website, design services, and tips.
                        </p>
                        <div className="sm:flex gap-[6px] mt-[25px] mb-[15px] ">
                            <input type="text" className="w-full sm:w-[unset] mb-5 sm:mb-0  py-[11px] flex-1 px-[18px] bg-text6 rounded-[5px]" placeholder="Enter email" />
                            <Button className='w-full sm:w-[unset]' type="primary" size="small" text="Submit" />
                        </div>
                        <p className="text-text6 text-[14px] font-normal leading-[24px]">We hate spam as much as you do. We will never, ever send you such emails. </p>
                    </div>
                </div>
            </div>
            <hr className="border-gray-700 mt-[100px] " />
            <div className="container py-[27px]">
                <div className="gap-5 lg:gap-0 lg:flex-row flex-col flex justify-between items-center ">
                    <p className="text-text6 text-[16px] font-normal leading-[26px]">© 2022 Pollock LLC. All Rights Reserved. Terms & Conditions. Privacy Policy.</p>
                    <div className="flex items-center gap-[22px]">
                        <img src={imgFb} alt="imgFb" />
                        <img src={imgTwitter} alt="imgTwitter" />
                        <img src={imgLinkedIn} alt="imgLinkedIn" />
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Footer;
