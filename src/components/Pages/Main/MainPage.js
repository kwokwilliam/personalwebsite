import React, { Component } from 'react';
import mainImg from '../../../assets/imgs/main/main.png'; // TODO: make file smaller, prefetch img
import './MainPage.css';
import Fade from 'react-reveal/Fade';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faEnvelope, faChalkboardTeacher } from '@fortawesome/free-solid-svg-icons';
import {
    Link,
} from 'react-router-dom';
import { Helmet } from 'react-helmet';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }

        this.iconsRender = [
            {
                icon: faGithub,
                text: "kwokwilliam",
                link: "https://github.com/kwokwilliam"
            },
            {
                icon: faLinkedin,
                text: "william-w-kwok",
                link: "https://linkedin.com/in/william-w-kwok/"
            },
            {
                icon: faEnvelope,
                text: "wkwok16@uw.edu",
                link: "mailto:wkwok16@uw.edu"
            }
        ];

        this.mainText = [
            {
                __html: `Hi, I'm a full stack developer and third year student at the University of Washington Seattle obtaining a B.S. in Informatics with a focus in Software Development.`
            },
            {
                // __html: `Currently, I am an Undergraduate Tutor for the UW Informatics Department. I also work under Dr. Andy Ko in the <a style="text-decoration: none; color: #005696" target="_blank" rel="noopener noreferrer" href="http://faculty.washington.edu/ajko/students" 
                // alt="Code and Cognition Lab">Code and Cognition Lab</a>. This Summer 2019, I will be working with Qualtrics as a Software Engineering Intern.`
                __html: `Currently, I am a Software Engineering Intern at Qualtrics. I also program websites for <a style="text-decoration: none; color: #005696" target="_blank" rel="noopener noreferrer" href="http://uwigem.com"> Washington iGEM. Previously, I tutored/TA'd undergraduates, participated in research with the <a style="text-decoration: none; color: #005696" target="_blank" rel="noopener noreferrer" href="http://faculty.washington.edu/ajko/students">Code and Cognition Lab</a>.`
            },
            {
                __html: `I enjoy playing video games and programming side projects.`
            }
        ]

    }
    render() {
        return <main>
            <Helmet>
                <title>William Kwok</title>
                <meta name="description" content="William Kwok is a full stack developer and Informatics major at the University of Washington. He tutors/TAs undergraduates, participates in research with the UW iSchool, and programs websites for Washington iGEM." />
            </Helmet>
            <Grid fluid>
                <Row>
                    <Col xs={12} md={6}>
                        <Fade clear when={this.state.loaded}>
                            <img src={mainImg} onLoad={() => { this.setState({ loaded: true }); }} className={`mainimg-1 ${!this.props.mobile ? 'mainimg' : 'mainimg-mobile'}`}
                                alt={"William Kwok sitting in front of a computer with two monitors full of code"} />
                        </Fade>
                    </Col>
                    <Col xs={12} md={6}>
                        <div style={{ padding: 20, paddingTop: this.props.mobile ? 20 : 0, paddingBottom: this.props.mobile ? 10 : 0 }}>
                            <Fade right cascade >
                                <div>
                                    <div>
                                        <Row>
                                            <header>
                                                <h1 style={{ fontSize: this.props.mobile ? 20 : 40, fontWeight: 'bold' }}>
                                                    William Kwok
                                            </h1>
                                            </header>
                                        </Row>
                                    </div>
                                    {this.mainText.map((d, i) => {
                                        return <Row style={{ marginBottom: this.props.mobile ? 10 : 20 }} key={"text" + i}>
                                            <p style={{ margin: 0, fontSize: window.innerHeight < 700 ? 18 : (this.props.mobile ? 18 : 25) }} dangerouslySetInnerHTML={d}>
                                            </p>
                                        </Row>
                                    })}

                                    {!this.props.mobile &&
                                        this.iconsRender.map((d, i) => {
                                            return (
                                                <div key={"iconsRender" + i}>
                                                    <Row middle="xs" style={{ marginBottom: 10 }}>
                                                        <a href={d.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#005696', minWidth: "60px", textAlign: 'center' }}>
                                                            <FontAwesomeIcon icon={d.icon} size={"3x"} />
                                                        </a>
                                                        <a href={d.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#005696' }}>
                                                            <span style={{ fontSize: 25, paddingLeft: 10 }}>{d.text}</span>
                                                        </a>
                                                    </Row>
                                                </div>
                                            )
                                        })
                                    }
                                    {!this.props.mobile &&
                                        <div>
                                            <Row middle="xs" style={{ marginBottom: 10 }}>
                                                <Link to="/resume" style={{ textDecoration: 'none', color: '#005696', minWidth: "60px", textAlign: 'center' }}>
                                                    <FontAwesomeIcon icon={faFileAlt} size={"3x"} />
                                                </Link>
                                                <Link to="/resume" style={{ textDecoration: 'none', color: '#005696' }}>
                                                    <span style={{ fontSize: 25, paddingLeft: 10 }}>{"resume (october '18)"}</span>
                                                </Link>
                                            </Row>

                                        </div>
                                    }
                                    {!this.props.mobile &&
                                        <div>
                                            <Row middle="xs" style={{ marginBottom: 10 }}>
                                                <Link to="/blog/infotutor-home" style={{ textDecoration: 'none', color: '#005696', minWidth: "60px", textAlign: 'center' }}>
                                                    <FontAwesomeIcon icon={faChalkboardTeacher} size={"3x"} />
                                                </Link>
                                                <Link to="/blog/infotutor-home" style={{ textDecoration: 'none', color: '#005696' }}>
                                                    <span style={{ fontSize: 25, paddingLeft: 10 }}>{"INFO Tutoring Hub"}</span>
                                                </Link>
                                            </Row>
                                        </div>
                                    }

                                    {this.props.mobile &&
                                        <Row style={{ margin: 'auto', textAlign: 'center', justifyContent: 'center' }}>
                                            {this.iconsRender.map((d, i) => {
                                                return (
                                                    <Col xs={2} style={{ marginBottom: 0 }} key={"iconsRender" + i}>
                                                        <a href={d.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: '#005696', minWidth: "60px", textAlign: 'center' }}>
                                                            <FontAwesomeIcon icon={d.icon} size={this.props.mobile ? "2x" : "3x"} />
                                                        </a>
                                                    </Col>
                                                )
                                            })}
                                            <Col xs={2} style={{ marginBottom: 0 }}>
                                                <Link to="/resume" style={{ textDecoration: 'none', color: '#005696', minWidth: "60px", textAlign: 'center' }}>
                                                    <FontAwesomeIcon icon={faFileAlt} size={this.props.mobile ? "2x" : "3x"} />
                                                </Link>
                                            </Col>
                                            <Col xs={2} style={{ marginBottom: 0 }}>
                                                <Link to="/blog/infotutor-home" style={{ textDecoration: 'none', color: '#005696', minWidth: "60px", textAlign: 'center' }}>
                                                    <FontAwesomeIcon icon={faChalkboardTeacher} size={this.props.mobile ? "2x" : "3x"} />
                                                </Link>
                                            </Col>
                                        </Row>
                                    }
                                </div>
                            </Fade>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </main>
    }
}