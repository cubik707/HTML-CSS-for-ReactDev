import './App.css';
import {Header} from "./layout/header/Header";
import {Main} from "./layout/sections/main/Main";
import {Projects} from "./layout/sections/projects/Projects";
import {AboutMe} from "./layout/sections/aboutMe/AboutMe";
import {Services} from "./layout/sections/services/Services";
import {Learning} from "./layout/sections/learning/Learning";
import {ContactUs} from "./layout/sections/contactUs/contactUs";
import {Footer} from "./layout/footer/Footer";


function App() {
    return (
        <div className="App">
            <Header/>
            <Main/>
            <Projects/>
            <AboutMe/>
            <Services/>
            <Learning/>
            <ContactUs/>
            <Footer/>
        </div>
    );
}

export default App;
