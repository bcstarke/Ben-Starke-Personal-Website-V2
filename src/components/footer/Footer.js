import React, {Component} from 'react';
import {Link, animateScroll as scroll} from "react-scroll";
import "./Footer.css"

export default class Footer extends Component {
    constructor(props) {
        super(props);
    }

    scrollToTop = () => {
        scroll.scrollToTop();
    };

    render() {
        return (
            <footer>
                <div class="scroll-to-top">
                    <button class="scroll-button">
                        <Link
                            activeClass="active"
                            onClick={this.scrollToTop}
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500}
                        >
                            <i className="fa fa-arrow-up fa-3x" aria-hidden="true"></i>
                            {/*<p>Back to top</p>*/}
                        </Link>
                    </button>
                    {/*</div>*/}
                    <hr/>
                    <p>Author: Benjamin Starke</p>
                    <p>Background Photo credit: @mischievous_penguins</p>
                </div>
            </footer>
        );
    }

}
