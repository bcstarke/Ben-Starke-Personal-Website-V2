import React, {Component} from "react";

export default function ContactPage({dark, id}) {
    return (
        <div className={"ContactPage" + (dark ? " section-dark" : "")}>
            <div className="section-content" id={id}>
                <h1>Contact</h1>
            </div>
        </div>
    )
}

