import React, {Component} from "react";
import FooterMenu from "./components/footer/Footer";
import AboutPage from "./components/about/AboutPage";
import ResumePage from "./components/resumePage/ResumePage";
import NavBar from "./components/navbar/NavBar";
import WelcomePage from "./components/welcome/WelcomePage";
import ContactPage from "./components/contact/ContactPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"
import FavoriteTech from "./components/favTech/FavoriteTech";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        const styles = {
            white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
            black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
            topBarHeight: 60,
            footerMenuHeight: 50
        };

        return (
            <div className="App">
                <div className="top-section">
                    <NavBar/>
                    <WelcomePage
                        title="Welcome Page"
                        id="WelcomePage"
                    />
                </div>
                <AboutPage
                    title="About Page"
                    id="AboutPage"
                />
                <ResumePage
                    title="Resume Page"
                    dark={false}
                    id="ResumePage"
                />
                <FavoriteTech
                    title="Favorite Tech"
                    dark={true}
                    id="FavTechPage"
                />
                <ContactPage
                    title="Contact Page"
                    dark={true}
                    id="ContactPage"
                />
                <FooterMenu
                    title="Footer"
                    dark={false}
                    id="FooterPage"
                />
            </div>
        );
    }
}

export default App;
