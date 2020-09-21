import React, {Component} from "react";
import './WelcomePage.css';
import Navbar from 'react-bootstrap/Navbar'
import {Nav} from "react-bootstrap"

export default class WelcomePage extends Component {
    render() {
        return (
            <div className="welcome-container">
                <div className="container-fluid" id="welcomeBox">
                    <div className="header-box container">
                        <div className="row header">
                            <h1 className="headline">Hi, I'm Ben Starke.</h1>
                            <p className="header-description">I'm currently a Software Engineer
                                co-op at
                                Oracle within the Health Sciences Global Business Unit (HSGBU).
                             Currently, I'm working on redesigning and building the Data Management Workbench Tool from scratch.
                                This tool is designed specifically for Oracle's pharmaceutical Data Management clients. I'm
                                also
                                a
                                graduate student pursuing my M.S. in Computer Science with a
                                concentration
                                in Software
                                Engineering and Data Science at Northeastern University in Boston,
                                MA.
                                This is my personal website coded from scratch using ReactJS, Bootstrap, and
                                hosted
                                on
                                Firebase.
                            </p>
                        </div>
                        <div className="social-links-nav">
                        <Navbar activeKey="/home" className="row social-links-nav">
                            <Nav.Item>
                                <Nav.Link href="https://www.linkedin.com/in/benjamin-starke"
                                          target="_blank">
                                    <i className="social-link-button fa fa-linkedin fa-3x"
                                       aria-hidden="true"
                                       color="#FFFFFF">
                                    </i>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://github.com/bcstarke"
                                          target="_blank">
                                    <i className="social-link-button fa fa-github fa-3x"
                                       aria-hidden="true">
                                    </i>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item>
                                <Nav.Link href="https://www.instagram.com/ben_starke93"
                                          target="_blank">
                                    <i className="social-link-button fa fa-instagram fa-3x"
                                       aria-hidden="true">
                                    </i>
                                </Nav.Link>
                            </Nav.Item>
                        </Navbar>
                        </div>

                        {/*</div>*/}
                    </div>
                </div>
            </div>
        )
    }
}
