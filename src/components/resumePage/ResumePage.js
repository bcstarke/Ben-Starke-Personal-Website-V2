import React, {Component} from "react";
import './ResumePage.css'
// import oraclelogo from './images/oracle-logo.png'
// import envisionLogo from './images/envision-logo.jpg'

//export default function ResumePage({dark, id}) {
export default class ResumePage extends Component {
    render() {
        return (
            <div className="ResumePage">
                <div className="section-content">
                    <div className="work-experience-box container-fluid">
                        <div className="row header">
                            <h2>Work Experience</h2>
                            <hr className="top-hr" color="black"/>
                        </div>

                        <section>
                            <div className="row col-12">
                                {/*<div className="col-2"></div>*/}
                                <div className="long oracle-name col-7">
                                    <h4>Software Engineering Co-op</h4>
                                </div>
                                <div className="oracle-image col-3">
                                    {/*<img*/}
                                    {/*    className="oracle-logo"*/}
                                    {/*    // src={oraclelogo}*/}
                                    {/*    alt="oracle-logo"*/}
                                    {/*/>*/}
                                </div>
                            </div>
                        </section>
                        <section>
                            <div className="row">
                                <div className="envision-image col-3">
                                    {/*<img*/}
                                    {/*    className="envision-logo"*/}
                                    {/*    //src={envisionLogo}*/}
                                    {/*    alt="envision-logo"*/}
                                    {/*/>*/}
                                </div>
                                <div className="long envision-name">
                                    <h4>Clinical Information Manager</h4>
                                </div>
                            </div>
                            <div className="long envision-title">
                                <div className="row">
                                    <i>Envision Physician Services | Morristown, NJ | December 2015
                                        - December 2018</i>
                                </div>
                            </div>
                            <div className="row col-13 envision-job-description">
                                <ul>
                                    <li>scribe stuff 1</li>
                                    <li>scribe stuff 2</li>
                                </ul>
                            </div>
                        </section>
                    </div>
                </div>

                <div className="education-container">
                    <div className="container" id="educationBox">
                        <div className="education-header">
                            <div className="row header">
                                <h2>Education</h2>
                            </div>
                            <div className="row header">
                                <h4>Northeastern University</h4>
                                <div className="container">
                                    <div className="degree-field">
                                        <i>Candidate for Masters of Science in Computer Science |
                                            Expected Graduation April 2021
                                        </i>
                                    </div>
                                </div>
                            </div>
                            <div className="row container-fluid">
                                <ul>
                                    <li>GPA: 3.6</li>
                                </ul>
                            </div>
                            <br/>
                            <div className="row header">
                                <br/>
                                <h4>Seton Hall University</h4>
                                <div className="container">
                                    <div className="degree-field">
                                        <i>Bachelors of Science in Biochemistry</i>
                                    </div>
                                </div>
                            </div>
                            <div className="row container-fluid">
                                <ul>
                                    <li>GPA: 3.4</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            // </div>
        )
    }
}

