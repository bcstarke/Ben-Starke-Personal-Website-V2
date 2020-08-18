import React, {Component} from "react";
// import './ResumePage.css'
// import logo from './images/oracle-logo.png'
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
                                    //src={logo}
                                    alt="oracle-logo"
                                />
                            </div>
                        </div>
                        {/*<div className="long oracle-title">*/}
                        {/*    <div className="row">*/}
                        {/*        <i>Oracle | Burlington, MA | May 2020 -*/}
                        {/*            December 2020</i>*/}
                        {/*    </div>*/}
                        {/*</div>*/}
                        {/*<div className="row col-13 oracle-job-description">*/}
                        {/*    <ul>*/}
                        {/*        <li>Developed Java apps</li>*/}
                        {/*        <li>Developed Javascript apps</li>*/}
                        {/*    </ul>*/}
                        {/*</div>*/}

                    </section>

                    {/*</div>*/}

                    {/*</div>*/}


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


            <div className="education container">
                <div className="row">
                    <div className="row education-header">
                        <div className="col-12">
                            <div className="row col-2">
                                <h2>Education</h2>
                            </div>
                            <div className="row col-10">
                                <h4>Northeastern University</h4>
                                <i>Candidate for Masters of Science in Computer Science |
                                    Concentration
                                    in Software Engineering and Data Science | Expected
                                    Graduation
                                    April
                                    2021</i>
                                <p>school stuff here</p>
                            </div>
                            <div className="row col-8">
                                <h4>Seton Hall University</h4>
                                <i>Bachelors of Science in Biochemistry</i>
                            </div>
                            <div className="row">
                                <ul>
                                    <li></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // </div>
    )
}

