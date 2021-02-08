import React, { Component, useEffect } from "react";
import {Link, animateScroll as scroll} from "react-scroll";
import Navbar from 'react-bootstrap/Navbar'
import "./NavBar.css"

export default class NavBar extends Component {
    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <div class="container-fluid">
                <Navbar id="navbar_top">
                        <ul class="nav-items-top">
                            <li className="nav-item-top">
                                <Link
                                    activeClass="active"
                                    to="home"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Home
                                </Link>
                            </li>
                            <li className="nav-item-top">
                                <Link
                                    activeClass="active"
                                    to="about"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    About
                                </Link>
                            </li>
                            <li className="nav-item-top">
                                <Link
                                    activeClass="active"
                                    to="resume"
                                    spy={true}
                                    smooth={true}
                                    offset={-70}
                                    duration={500}
                                >
                                    Resume
                                </Link>
                            </li>
                        </ul>
                </Navbar>
                    {/*<div className="nav-content">*/}
                    {/*    <ul className="nav-items">*/}
                    {/*        <li className="nav-item">*/}
                    {/*            <Link*/}
                    {/*                activeClass="active"*/}
                    {/*                to="ResumePage"*/}
                    {/*                spy={true}*/}
                    {/*                smooth={true}*/}
                    {/*                offset={-70}*/}
                    {/*                duration={500}*/}
                    {/*            >*/}
                    {/*                Section 1*/}
                    {/*            </Link>*/}
                    {/*        </li>*/}
                    {/*    </ul>*/}
                    {/*</div>*/}
                    {/*<Nav.Item class="nav-item">*/}
                    {/*    <Nav.Link class="nav-item">*/}
                    {/*        <Link*/}
                    {/*            activeClass="active"*/}
                    {/*            onClick={this.scrollToTop}*/}
                    {/*            spy={true}*/}
                    {/*            smooth={true}*/}
                    {/*            offset={-70}*/}
                    {/*            duration={500}*/}
                    {/*            color="#FFFFFF"*/}
                    {/*        >*/}
                    {/*            Home*/}
                    {/*        </Link>*/}
                    {/*    </Nav.Link>*/}
                    {/*</Nav.Item>*/}

                    {/*<Nav.Item>*/}
                    {/*    <Nav.Link>*/}
                    {/*        <Link*/}
                    {/*            activeClass="active"*/}
                    {/*            to="AboutPage"*/}
                    {/*            spy={true}*/}
                    {/*            smooth={true}*/}
                    {/*            offset={-70}*/}
                    {/*            duration={500}*/}
                    {/*            href="#AboutPage"*/}
                    {/*        >*/}
                    {/*            About*/}
                    {/*        </Link>*/}
                    {/*    </Nav.Link>*/}
                    {/*</Nav.Item>*/}

                    {/*<Nav.Item>*/}
                    {/*    <Nav.Link>*/}
                    {/*        <Link*/}
                    {/*            activeClass="active"*/}
                    {/*            to="ResumePage"*/}
                    {/*            spy={true}*/}
                    {/*            smooth={true}*/}
                    {/*            offset={-70}*/}
                    {/*            duration={500}*/}
                    {/*        >*/}
                    {/*            Resume*/}
                    {/*        </Link>*/}
                    {/*    </Nav.Link>*/}
                    {/*</Nav.Item>*/}
                    {/*<Nav.Item>*/}
                    {/*    <Nav.Link>*/}
                    {/*        <Link*/}
                    {/*            activeClass="active"*/}
                    {/*            to="ContactPage"*/}
                    {/*            spy={true}*/}
                    {/*            smooth={true}*/}
                    {/*            offset={-70}*/}
                    {/*            duration={500}*/}
                    {/*        >*/}
                    {/*            Contact*/}
                    {/*        </Link>*/}
                    {/*    </Nav.Link>*/}
                    {/*</Nav.Item>*/}
                {/*</nav>*/}
            </div>
        );
    }
}
