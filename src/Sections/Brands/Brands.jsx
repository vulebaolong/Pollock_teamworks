import imgGg from "../../assets/logo_gg.png";
import imgNetflix from "../../assets/logo_netflix.png";
import imgSlack from "../../assets/logo_slack.png";
import imgIntercom from "../../assets/logo_intercom.png";

function Brands() {
    return (
        <section className="py-24">
            <div className="container">
                <h2
                    data-aos-delay="500"
                    data-aos="fade-right"
                    data-aos-duration="1000"
                    className="mb-[80px] text-black  font-medium leading-[46px] text-center
                    text-3xl
                    sm:text-3xl
                    lg:text-[36px]
                    "
                >
                    Working with the most trusted brands in the industry
                </h2>
                <div data-aos-delay="700" data-aos="fade-left" data-aos-duration="1000" className="flex items-center justify-evenly flex-wrap gap-10">
                    <img src={imgGg} alt="imgGg" />
                    <img src={imgNetflix} alt="imgNetflix" />
                    <img src={imgSlack} alt="imgSlack" />
                    <img src={imgIntercom} alt="imgIntercom" />
                </div>
            </div>
        </section>
    );
}
export default Brands;
