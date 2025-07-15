import EmptySpace from "../components/common/EmptySpace";
import Footer from "../components/common/Footer";
import Navbar from "../components/common/Navbar";
import Intro from '../components/HomePage/intro'
import '../CSS/Style.css'
import TrainerSection from "../components/AboutPage/TrainerSection";
import ProgramGallery from "../components/ProgramPage/ProgramsProvided";
import LocationSection from "../components/AboutPage/LocationSection";

export default function Home() {

    return(
        <div>
            <EmptySpace/>
            <Navbar/>
            <Intro/>
            <TrainerSection/>
            <ProgramGallery/>
            <LocationSection/>
            <Footer/>

        </div>
    );
};