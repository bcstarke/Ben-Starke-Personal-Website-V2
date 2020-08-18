import React, {Component} from "react";
import TopBar from "../src/components/Topbar";
import FooterMenu from "./components/footer/FooterMenu";
import Content from "../src/components/Content";
import AboutPage from "./components/about/AboutPage";
import ResumePage from "./components/resumePage/ResumePage";
import NavBar from "./components/navbar/NavBar";
import WelcomePage from "./components/welcome/WelcomePage";
import ContactPage from "./components/contact/ContactPage";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css"

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
                <div class="top-section">
                    {/*<div className="navBar">*/}
                        <NavBar/>
                    {/*</div>*/}
                    {/*<div className="welcomePage">*/}
                        <WelcomePage
                            title="Welcome Page"
                            dark={false}
                            id="WelcomePage"
                        />
                    {/*</div>*/}
                </div>
                {/*</div>*/}
                {/*<div className="aboutPage">*/}
                <AboutPage
                    title="About Page"
                    dark={true}
                    id="AboutPage"
                />
                {/*</div>*/}
                {/*<div className="resumePage">*/}
                <ResumePage
                    title="Resume Page"
                    dark={false}
                    id="ResumePage"
                />
                {/*</div>*/}
                {/*<div className="contactPage">*/}
                <ContactPage
                    title="Contact Page"
                    dark={true}
                    id="ContactPage"
                />
                {/*</div>*/}
                <FooterMenu
                    title="Footer"
                    dark={false}
                    id="FooterPage"
                />
            </div>
            // <div
            //     style={{
            //       backgroundColor: styles.black(0.05),
            //       minHeight: "100vh",
            //       position: "relative"
            //     }}
            // >
            //   <TopBar styles={styles} />
            //   <Content styles={styles} />
            //   <FooterMenu menuItems={menuItems} styles={styles} />
            // </div>
        );
    }
}

export default App;
