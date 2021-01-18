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
                                and then PA school with the idea of going into medicine. I worked in a busy ER as a Clinical Information
                                Manager
                                for
                                3 years before deciding I wanted more out of life and decided to
                                switch
                                to
                                an
                                exciting career in
                                the technology industry. I will be graduating in May 2021 and currently seeking software engineering positions.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

