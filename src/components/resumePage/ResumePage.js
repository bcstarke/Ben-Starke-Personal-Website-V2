import React, {Component} from "react";
import './ResumePage.css'
import oraclelogo from '../../images/oracle-logo.png'
import envisionLogo from '../../images/envision-logo.png'
import northeasternLogo from '../../images/northeastern-logo.png'
import $ from 'jquery';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';

//export default function ResumePage({dark, id}) {
export default class ResumePage extends Component {
    render() {
        return (
            <section id="resume">
                <div className="resume-page">
                    <section>
                        <div className="work-experience container">
                            <div className="container-fluid">
                                <div className="section-header">
                                    <div className="row header">
                                        <h2>Work Experience</h2>
                                    </div>
                                    <hr color="#000"/>
                                    <div className="row header">
                                        <h5>Software Engineering Co-op</h5>
                                        {/*<div class="company-logo-section">*/}
                                        {/*<img class="company-logo .d-none .d-lg-block"*/}
                                        {/*     src={oraclelogo}*/}
                                        {/*     alt="oracle logo"*/}
                                        {/*     height="80px"*/}
                                        {/*     width="250px"/>*/}
                                        {/*</div>*/}
                                    </div>
                                    <div className="row header-title">
                                        <div className="container-fluid">
                                            <div className="degree-field">
                                                <i>Oracle Health Sciences
                                                </i>
                                                <br/>
                                                <i>Burlington, MA | 05/2020 - 12/2020
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row container-fluid">
                                        <ul>
                                            <li>Developed a completely new dashboard for the
                                                flagship
                                                Oracle Data Management Workbench product from
                                                scratch
                                                using HTML, CSS, and  JavaScript
                                            </li>
                                            <li>
                                                Dashboard serves as a central repository for all
                                                clinical trial data to mine, analyze, and combine
                                                data
                                                for more effective and impactful decision making for
                                                data management clients
                                            </li>
                                            <li>
                                                Incorporated data visualizations and analytics to
                                                create
                                                a more refined, insightful, and dynamic UX/UI
                                            </li>
                                            <li>
                                                Collaborated alongside project managers, designers,
                                                and
                                                developers within a distributed Agile development
                                                team
                                                to complete project
                                            </li>
                                            <li>
                                                Integrated the front end with the back-end NodeJS
                                                server
                                                using REST API calls
                                            </li>
                                            <li>
                                                Achieved 50-70% reduction in the number of clicks
                                                and
                                                time spent by the end user from the previous
                                                approach
                                            </li>
                                        </ul>
                                    </div>
                                    <div className="row header">
                                        <h5>Clinical Information Manager</h5>
                                    </div>
                                    {/*<img className="company-logo" src={envisionLogo}*/}
                                    {/*     alt="envision logo"*/}
                                    {/*     height="60px"*/}
                                    {/*     width="250px"/>*/}
                                    <div className="row header-title">
                                        <div className="container-fluid">
                                            <div className="degree-field">
                                                <i>Envision Physician Services
                                                </i>
                                                <br/>
                                                <i>Morristown, NJ | 12/2015 - 12/2018</i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row container-fluid">
                                        <ul>
                                            <li>Interacted closely with clinicians to accurately
                                                document
                                                patient information into electronic medical record
                                                (EMR)
                                            </li>
                                            <li>
                                                Applied constantly changing company and national
                                                documentation requirements to patient charts to
                                                maximize
                                                accuracy and billing reimbursement
                                            </li>
                                            <li>
                                                Reviewed physician documentation for medical coding
                                                criteria and make recommendations for selecting
                                                appropriate medical codes
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                    <section>
                        <div className="education-container container">
                            <div className="container-fluid">
                                {/*id="educationBox" above*/}
                                <div className="section-header">
                                    <br/>
                                    <br/>
                                    <br/>
                                    <div className="row header">
                                        <h2>Education</h2>
                                    </div>
                                    <hr color="#000"/>
                                    <div className="row header">
                                        {/*<div className="col-10">*/}
                                        <h5>Northeastern University</h5>
                                        {/*</div>*/}
                                        {/*<div className="col-2">*/}
                                        {/*    <img className="university-logo"*/}
                                        {/*         src={northeasternLogo}*/}
                                        {/*         alt="northeastern logo"*/}
                                        {/*         height="150px"*/}
                                        {/*         width="150px"/>*/}
                                    </div>
                                    <div className="row header-title">
                                        <div className="container-fluid">
                                            <div className="degree-field">
                                                <i>Candidate for Masters of Science in Computer
                                                    Science
                                                    |
                                                    Expected Graduation May 2021
                                                </i>
                                                <br/>
                                                <i>Boston, MA | 01/2019 - Present
                                                </i>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="row container-fluid">
                                        <ul>
                                            <li>GPA: 3.55</li>
                                        </ul>
                                    </div>
                                    <br/>
                                    <div className="row header">
                                        <h5>Seton Hall University</h5>
                                    </div>
                                    <div className="row header-title">
                                        <div className="container-fluid">
                                            <div className="degree-field">
                                                <i>Bachelors of Science in Biochemistry</i>
                                                <br/>
                                                <i>South Orange, NJ | 08/2011 - 05/2015
                                                </i>
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
                    </section>
                    {/*</div>*/
                    }
                </div>
            </section>
        )
    }
}


