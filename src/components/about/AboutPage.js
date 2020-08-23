import React, {Component} from "react";

export default function AboutPage({dark, id}) {
    return (
        <div className={"AboutPage" + (dark ? " section-dark" : "")}>
            <div className="section-content" id={id}>
                <h1>About Me</h1>
                <hr color="#FFFFFF"/>
                <p>
                    My journey into tech began after college while I was applying to medical school
                    and then PA school. I worked in a busy ER as a Clinical Information Manager for
                    3 years before deciding I wanted more out of life and decided to switch to an
                    exciting career in
                    the technology industry. I'm a New Jersey native at heart but I love the city of
                    Boston.
                    I'm an outdoorsman at heart with an entrepreneurial spirit and passion for
                    coding.
                    I'm deeply interested in cloud computing and preparing towards the AWS CCP
                    certification.
                </p>
            </div>
        </div>
    );
}
