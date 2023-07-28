import "./App.css";
import Brands from "./Sections/Brands/Brands";
import Connect from "./Sections/Connect/Connect";
import Footer from "./Sections/Footer/Footer";
import Hero from "./Sections/Hero/Hero";
import Platform from "./Sections/Platform/Platform";
import Saying from "./Sections/Saying/Saying";
import Setup from "./Sections/Setup/Setup";
import Teamwork from "./Sections/Teamwork/Teamwork";

function App() {
    return (
        <>
            <Hero />
            <Connect />
            <Teamwork />
            <Platform />
            <Setup />
            <Brands />
            <Saying />
            <Footer />
        </>
    );
}

export default App;
