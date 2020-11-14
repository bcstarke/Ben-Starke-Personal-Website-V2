import React, {Component} from "react";
import './ResumePage.css'
// import oraclelogo from './images/oracle-logo.png'
// import envisionLogo from './images/envision-logo.jpg'

//export default function ResumePage({dark, id}) {
export default class ResumePage extends Component {
    render() {
        return (
            <div className="resume-page">
                <section>
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
                                            <br/>
                                            <i>05/2020 - Present
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row container-fluid">
                                    <ul>
                                        <li>Develop a completely new dashboard for the flagship
                                            Oracle Data Management Workbench product from scratch
                                            using HTML, CSS, and Oracle JavaScript Extension
                                            Toolkit (OJET)
                                        </li>
                                        <li>
                                            Dashboard serves as a central repository for all
                                            clinical trial data to mine, analyze, and combine data
                                            for more effective and impactful decision making for
                                            data management clients
                                        </li>
                                        <li>
                                            Incorporate data visualizations and analytics to create
                                            a more refined, insightful, and dynamic UX/UI
                                        </li>
                                        <li>
                                            Collaborate alongside project managers, designers, and
                                            developers within a distributed Agile development team
                                        </li>
                                        <li>
                                            Integrate front end with back end NodeJS server using
                                            REST API calls
                                        </li>
                                    </ul>
                                </div>
                                <div className="row header">
                                    <h5>Clinical Information Manager</h5>
                                    <div className="container-fluid">
                                        <div className="degree-field">
                                            <i>Envision Physician Services
                                            </i>
                                            <br/>
                                            <i>12/2015 - 12/2018
                                            </i>
                                        </div>
                                    </div>
                                </div>
                                <div className="row container-fluid">
                                    <ul>
                                        <li>Interacted closely with clinicians to accurately
                                            document
                                            patient information into electronic medical record (EMR)
                                        </li>
                                        <li>
                                            Applied constantly changing company and national
                                            documentation requirements to patient charts to maximize
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
                                            <i>Candidate for Masters of Science in Computer Science
                                                |
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
                </section>
                {/*</div>*/}
            </div>
        )
    }
}

