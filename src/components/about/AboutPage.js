import React, {Component} from "react";
import './AboutPage.css'

export default class AboutPage extends Component {
    render() {
        return (
            <section id="about">
                <div className="about-page">
                    <div className="container">
                        <div className="section-content container">
                            <h1 className="title">About Me</h1>
                            <hr color="#FFFFFF"/>
                            <p>
                                My journey into tech began after college while I was applying to
                                medical
                                school
                                and then PA school. I worked in a busy ER as a Clinical Information
                                Manager
                                for
                                3 years before deciding I wanted more out of life and decided to
                                switch
                                to
                                an
                                exciting career in
                                the technology industry. I'm a New Jersey native at heart but I love
                                the
                                city of
                                Boston.
                                I'm an outdoorsman at heart with an entrepreneurial spirit and
                                passion
                                for
                                coding.
                                I'm deeply interested in cloud computing and preparing towards the
                                AWS
                                CCP
                                certification.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

