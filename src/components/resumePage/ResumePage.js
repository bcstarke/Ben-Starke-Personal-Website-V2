import React, {Component} from "react";
import './ResumePage.css'
// import oraclelogo from './images/oracle-logo.png'
// import envisionLogo from './images/envision-logo.jpg'

//export default function ResumePage({dark, id}) {
export default class ResumePage extends Component {
    render() {
        return (
            <div className="resume-page">
                <div className="work-experience-container">
                    <div className="container-fluid">
                        <div className="section-header">
                            <div className="row header">
                                <h2>Work Experience</h2>
                            </div>
                            <div className="row header">
                                <h5>Software Engineering Co-op</h5>
                                <div className="container-fluid">
                                    <div className="degree-field">
                                        <i>Oracle Health Sciences
                                        </i>
                                    </div>
                                </div>
                            </div>

                        {/*<section>*/}
                        {/*    <div className="row col-12">*/}
                        {/*        <div className="long oracle-name col-7">*/}
                        {/*            <h4>Software Engineering Co-op</h4>*/}
                        {/*        </div>*/}
                        {/*        <div className="oracle-image col-3">*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*</section>*/}
                        {/*<section>*/}
                        {/*    <div className="row">*/}
                        {/*        <div className="envision-image col-3">*/}
                        {/*        </div>*/}
                        {/*        <div className="long envision-name">*/}
                        {/*            <h4>Clinical Information Manager</h4>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="long envision-title">*/}
                        {/*        <div className="row">*/}
                        {/*            <i>Envision Physician Services | Morristown, NJ | December 2015*/}
                        {/*                - December 2018</i>*/}
                        {/*        </div>*/}
                        {/*    </div>*/}
                        {/*    <div className="row col-13 envision-job-description">*/}
                        {/*        <ul>*/}
                        {/*            <li>scribe stuff 1</li>*/}
                        {/*            <li>scribe stuff 2</li>*/}
                        {/*        </ul>*/}
                        {/*    </div>*/}
                        {/*</section>*/}
                    </div>
                </div>

                <div className="education-container">
                    <div className="container-fluid" id="educationBox">
                        <div className="section-header">
                            <div className="row header">
                                <h2>Education</h2>
                            </div>
                            <div className="row header">
                                <h5>Northeastern University</h5>
                                <div className="container-fluid">
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
                                <h5>Seton Hall University</h5>
                                <div className="container-fluid">
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

