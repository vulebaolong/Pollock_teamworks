import imgGg from "../../assets/logo_gg.png"
import imgNetflix from "../../assets/logo_netflix.png"
import imgSlack from "../../assets/logo_slack.png"
import imgIntercom from "../../assets/logo_intercom.png"

function Brands() {
    return (
        <section className="py-24">
            <div className="container">
                <h2 className="mb-[80px] text-black text-[36px] font-medium leading-[46px] text-center">Working with the most trusted brands in the industry</h2>
                <div className="flex items-center justify-evenly">
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
