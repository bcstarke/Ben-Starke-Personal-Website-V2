import React, {Component} from "react";
// import logo from "../logo.svg";
import {Link, animateScroll as scroll} from "react-scroll";
import Nav from 'react-bootstrap/Nav'
import "./NavBar.css"
import AboutPage from "../about/AboutPage";

export default class NavBar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div className="container-fluid">
                <nav class="navbar navbar-dark bg-dark navbar-expand-lg justify-content-center sticky-top">
                    <Nav.Item class="nav-item">
                        <Nav.Link class="nav-item">
                            <Link
                                activeClass="active"
                                onClick={this.scrollToTop}
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                                color="#FFFFFF"
                            >
                                Home
                            </Link>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="AboutPage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                About
                            </Link>
                        </Nav.Link>
                    </Nav.Item>

                    <Nav.Item>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="ResumePage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Resume
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                    <Nav.Item>
                        <Nav.Link>
                            <Link
                                activeClass="active"
                                to="ContactPage"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500}
                            >
                                Contact
                            </Link>
                        </Nav.Link>
                    </Nav.Item>
                </nav>
            </div>
            // </div>

        );
    }
}
