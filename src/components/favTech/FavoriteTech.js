import React, {Component} from "react";
import './FavoriteTech.css';
import 'bootstrap/dist/js/bootstrap.bundle.min';
import 'bootstrap/dist/css/bootstrap.min.css';
import mobiscroll from '@mobiscroll/react';
import '@mobiscroll/react/dist/css/mobiscroll.min.css';
import java from '../../images/java_lang.png';
import python from '../../images/python_lang.png';

export default class FavoriteTech extends Component {
    render() {
        return (
            <section id="favTech">
                <div className="fav-tech-page">
                    <section>
                        <div className="favorite-tech container">
                            <div className="container-fluid">
                                <div className="section-header">
                                    <div className="row header">
                                        <h2>Favorite Tech</h2>
                                    </div>
                                    <hr color="#000"/>
                                </div>
                                {/*<div className="container-fluid">*/}
                                <div className="mbsc-grid">
                                    <div className="mbsc-row">
                                        <div className="col-sm-12 col-md-6 col-lg-3">
                                            <div className="tech-card">
                                                <div className="card-img">
                                                    <img class=".d-none .d-lg-block"
                                                         src={java}
                                                         alt="Java logo"
                                                         height="180px"
                                                         width="110px"/>
                                                </div>
                                                <h4>Java</h4>
                                                Java is my programming language of choice right now.
                                                I initially found it to be very difficult to
                                                understand, but have since learned to love the
                                                language and of its quirks. It is the language I am
                                                most familiar with in terms of algorithms and data
                                                structures, and my language of choice when doing
                                                code interviews.
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="col-sm-12 col-md-6 col-lg-3">
                                            <div className="tech-card">
                                                <div className="card-img">
                                                    <img class=".d-none .d-lg-block"
                                                         src={python}
                                                         alt="Python logo"
                                                         height="180px"
                                                         width="180px"/>
                                                </div>
                                                <h4>Python</h4>
                                                Python was my first programming language and truly
                                                helped me learn the fundamentals of computer
                                                programming. I plan to learn more data mining and
                                                machine learning concepts which will center around
                                                python.
                                            </div>
                                        </div>
                                        <br/>
                                        <div className="col-sm-12 col-md-6 col-lg-3">
                                            <div className="tech-card">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Neque convallis a cras semper.
                                                Nullam vehicula ipsum a arcu. Arcu cursus euismod
                                                quis viverra nibh. Enim ut sem viverra aliquet eget
                                                sit amet tellus cras. Cras fermentum odio eu feugiat
                                                pretium. Sed cras ornare arcu dui. Adipiscing elit
                                                duis tristique sollicitudin nibh. Urna nunc id
                                                cursus metus aliquam eleifend. Lectus magna
                                                fringilla urna porttitor. Tortor consequat id porta
                                                nibh venenatis cras sed felis eget. Augue eget arcu
                                                dictum varius duis at consectetur. Amet cursus sit
                                                amet dictum sit amet. Feugiat sed lectus vestibulum
                                                mattis.
                                            </div>
                                        </div>
                                        <br/>
                                        <div
                                            className="col-sm-12 col-md-6 col-lg-3">
                                            <div className="tech-card">
                                                Lorem ipsum dolor sit amet, consectetur adipiscing
                                                elit, sed do eiusmod tempor incididunt ut labore et
                                                dolore magna aliqua. Neque convallis a cras semper.
                                                Nullam vehicula ipsum a arcu. Arcu cursus euismod
                                                quis viverra nibh. Enim ut sem viverra aliquet eget
                                                sit amet tellus cras. Cras fermentum odio eu feugiat
                                                pretium. Sed cras ornare arcu dui. Adipiscing elit
                                                duis tristique sollicitudin nibh. Urna nunc id
                                                cursus metus aliquam eleifend. Lectus magna
                                                fringilla urna porttitor. Tortor consequat id porta
                                                nibh venenatis cras sed felis eget. Augue eget arcu
                                                dictum varius duis at consectetur. Amet cursus sit
                                                amet dictum sit amet. Feugiat sed lectus vestibulum
                                                mattis.
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                {/*</div>*/}
                                {/*<div className="col-sm-1"></div>*/}
                                {/*<Grid container spacing={3}>*/}
                                {/*    <Grid item sm>*/}
                                {/*        <Paper className="paper">xs</Paper>*/}
                                {/*    </Grid>*/}
                                {/*    <Grid item sm>*/}
                                {/*        <Paper className="paper">xs</Paper>*/}
                                {/*    </Grid>*/}
                                {/*    <Grid item sm>*/}
                                {/*        <Paper className="paper">xs</Paper>*/}
                                {/*    </Grid>*/}
                                {/*</Grid>*/}
                            </div>
                        </div>
                    </section>
                </div>
            </section>
        )
    }
}
