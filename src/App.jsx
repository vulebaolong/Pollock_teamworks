import { useEffect } from "react";
import "./App.css";
import Brands from "./Sections/Brands/Brands";
import Connect from "./Sections/Connect/Connect";
import Footer from "./Sections/Footer/Footer";
import Header from "./Sections/Header/Header";
import Hero from "./Sections/Hero/Hero";
import Platform from "./Sections/Platform/Platform";
import Saying from "./Sections/Saying/Saying";
import Setup from "./Sections/Setup/Setup";
import Teamwork from "./Sections/Teamwork/Teamwork";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
    useEffect(() => {
        AOS.init();
    }, []);
    return (
        <div className="relative">
            <Header />
            <Hero />
            <Connect />
            <Teamwork />
            <Platform />
            <Setup />
            <Brands />
            <Saying />
            <Footer />
        </div>
    );
}

export default App;
