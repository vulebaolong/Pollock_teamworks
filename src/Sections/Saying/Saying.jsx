import imgAvatar1 from "../../assets/avatar_1.png";
import imgAvatar2 from "../../assets/avatar_2.png";
import imgAvatar3 from "../../assets/avatar_3.png";
import imgStar from "../../assets/icon_star.png";

function Saying() {
    return (
        <section className="py-24 bg-section">
            <div className="container">
                {/* TITLE */}
                <div className="space-y-[30px]">
                    <h2 className="text-text1 text-[48px] font-medium leading-[56px] text-center">What our clients are saying about us</h2>
                    <p className="text-text4 text-[22px] font-normal leading-[32px] text-center">Customer satisfaction is a primary goal for our company</p>
                </div>

                {/* CARDS */}
                <div className="grid grid-cols-3 gap-[50px] mt-[80px]">
                    <div className="py-[40px] px-[30px] rounded-[20px] flex flex-col items-center shadow-[0px_20px_50px_rgba(79,119,255,0.20)]">
                        <img src={imgAvatar1} alt="imgAvatar1" />
                        <p className="text-text1 mt-[10px] mb-[5px] text-[22px] font-normal leading-[32px]">Monica Smith</p>
                        <p className="text-text4 text-[16px] font-normal leading-[26px] mb-[20px]">Web Designer</p>
                        <div className="flex gap-2 mb-[30px]">
                            <img src={imgStar} alt="imgStar" />
                            <img src={imgStar} alt="imgStar" />
                            <img src={imgStar} alt="imgStar" />
                            <img src={imgStar} alt="imgStar" />
                            <img src={imgStar} alt="imgStar" />
                        </div>
                        <p className="text-text4 text-[18px] font-normal leading-[28px] text-center">
                            Overall experience is awesome!! I'm a visual thinker, and I couldnt function without a tool like this.
                        </p>
                    </div>
                    <div className="py-[40px] px-[30px] rounded-[20px] flex flex-col items-center shadow-[0px_20px_50px_rgba(79,119,255,0.20)]">
                        <img src={imgAvatar2} alt="imgAvatar2" />
                        <p className="text-text1 mt-[10px] mb-[5px] text-[22px] font-normal leading-[32px]">Vincent Smith</p>
                        <p className="text-text4 text-[16px] font-normal leading-[26px] mb-[20px]">Web Designer</p>
                        <div className="flex gap-2 mb-[30px]">
                            <img src={imgStar} alt="imgStar" />
                            <img src={imgStar} alt="imgStar" />
                            <img src={imgStar} alt="imgStar" />
                            <img src={imgStar} alt="imgStar" />
                            <img src={imgStar} alt="imgStar" />
                        </div>
                        <p className="text-text4 text-[18px] font-normal leading-[28px] text-center">
                            Overall experience is awesome!! Im a visual thinker, and I couldnt function without a tool like this.
                        </p>
                    </div>
                    <div className="py-[40px] px-[30px] rounded-[20px] flex flex-col items-center shadow-[0px_20px_50px_rgba(79,119,255,0.20)]">
                        <img src={imgAvatar3} alt="imgAvatar3" />
                        <p className="text-text1 mt-[10px] mb-[5px] text-[22px] font-normal leading-[32px]">Stella Smith</p>
                        <p className="text-text4 text-[16px] font-normal leading-[26px] mb-[20px]">Web Designer</p>
                        <div className="flex gap-2 mb-[30px]">
                            <img src={imgStar} alt="imgStar" />
                            <img src={imgStar} alt="imgStar" />
                            <img src={imgStar} alt="imgStar" />
                            <img src={imgStar} alt="imgStar" />
                            <img src={imgStar} alt="imgStar" />
                        </div>
                        <p className="text-text4 text-[18px] font-normal leading-[28px] text-center">
                            Overall experience is awesome!! I'm a visual thinker, and I couldnt function without a tool like this.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
}
export default Saying;
