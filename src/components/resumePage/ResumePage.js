import React, {Component} from "react";
import './ResumePage.css'
// import oraclelogo from './images/oracle-logo.png'
// import envisionLogo from './images/envision-logo.jpg'

export default function ResumePage({dark, id}) {
    return (
        <div className={"ResumePage" + (dark ? " section-dark" : "")}>
            <div className="section-content" id={id}>
                <div className="work-experience-box container-fluid">
                    <div className="row col-12">
                        {/*<div className="column long">*/}
                        {/*<div className="row experience-header">*/}
                        <h2>Work Experience</h2>
                        {/*</div>*/}
                        <hr className="top-hr" color="black"/>
                    </div>

                    <section>
                        <div className="row col-12">

                            {/*<div className="col-2"></div>*/}
                            <div className="long oracle-name col-7">
                                {/*<div className="row">*/}
                                <h4>Software Engineering Co-op</h4>
                                {/*</div>*/}
                            </div>
                            <div className="oracle-image col-3">
                                <img
                                    className="oracle-logo"
                                    // src={oraclelogo}
                                    alt="oracle-logo"
                                />
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="row">
                            <div className="envision-image col-3">
                                <img
                                    className="envision-logo"
                                    //src={envisionLogo}
                                    alt="envision-logo"
                                />
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

            {/*education section start*/}
            <div className="education-container">
                <div className="container-fluid" id="educationBox">
                    <div className="education-header">
                        <div className="row header">
                            <h2>Education</h2>
                            <h4>Northeastern University</h4>
                            <i>Candidate for Masters of Science in Computer Science |
                                Expected Graduation April 2021</i>
                            <li>GPA: 3.6</li>

                            <br/>
                            <br/>
                            <br/>

                            <h4>Seton Hall University</h4>
                            <i>Bachelors of Science in Biochemistry</i>
                             <li>GPA: 3.4</li>
                        </div>
                    </div>
                </div>
            </div>
        </div>
// </div>
    )
}

