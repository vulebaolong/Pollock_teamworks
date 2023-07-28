import imgCards from "../../assets/img_cards.png";
import Button from "../../components/Button";

function Platform() {
    return (
        <section className="py-24">
            <div className="container">
                {/* TITLE */}
                <div className="mb-[100px]">
                    <h2 className="text-text1 text-[48px] font-medium leading-[56px] text-center mb-[30px]">One platform for your team and your work</h2>
                    <p className="text-text4 text-[18px] font-normal leading-[28px] text-center">
                        Share ideas, make decisions and move work forward with a common purpose and place
                    </p>
                </div>

                {/* CONTENT */}
                <div className="grid grid-cols-2 gap-[130px]">
                    <div className="">
                        <div className="">
                            <img src={imgCards} alt="imgCards" />
                        </div>
                    </div>
                    <div className="">
                        <h3 className="text-text1 text-[36px] font-medium leading-[46px]">Build and develop your ideas with distributed teams</h3>
                        <div className="mt-[30px] mb-[70px]">
                            <p className="text-text2 text-[18px] font-normal leading-[28px]">
                                With enterprise-ready security and administration controls, deploy Pollock company - wide with ease.
                            </p>
                            <br />
                            <p className="text-text2 text-[18px] font-normal leading-[28px]">
                                A dedicated customer success and account manager will partner with you every step of the way to ensure your teams success and train you on best
                                practices weve picked up from other enterprise customers.
                            </p>
                        </div>
                        <Button type="primary" size="big" text="Learn More"/>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Platform;
