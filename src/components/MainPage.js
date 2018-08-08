import React, { Component } from 'react';
import mainImg from '../assets/imgs/main/main.jpg'; // TODO: make file smaller, prefetch img
import './MainPage.css';
import Fade from 'react-reveal/Fade';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { faFileAlt, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import resume from '../assets/resume/resume7-18.pdf';

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
            },
            {
                icon: faFileAlt,
                text: "resume (july '18)",
                link: resume
            }
        ];

        this.mainText = [
            {
                __html: `Hi, I'm a third year student at the University of Washington Seattle obtaining a degree in Informatics with a minor in Mathematics.`
            },
            {
                __html: `Currently, I work with Dr. Andy Ko in the <a style="text-decoration: none; color: #005696" target="_blank" href="http://faculty.washington.edu/ajko/students" 
                alt="Code and Cognition Lab">Code and Cognition Lab</a>`
            },
            {
                __html: `I enjoy playing video games and programming side projects.`
            }
        ]

    }
    render() {
        return <Grid fluid>
            <Row>
                <Col xs={12} md={6}>
                    <Fade clear when={this.state.loaded}>
                        <img src={mainImg} onLoad={() => { this.setState({ loaded: true }); }} className={`mainimg-1 ${!this.props.mobile ? 'mainimg' : 'mainimg-mobile'}`}
                            alt={"William Kwok"} />
                    </Fade>
                </Col>
                <Col xs={12} md={6}>
                    <div style={{ padding: 20 }}>
                        <Fade right cascade duration={1000}>
                            <div>
                                <div>
                                    <Row>
                                        <div style={{ fontSize: this.props.mobile ? 20 : 40, fontWeight: 'bold' }}>
                                            William Kwok
                                        </div>
                                    </Row>
                                </div>
                                {this.mainText.map((d, i) => {
                                    return <Row style={{ marginBottom: this.props.mobile ? 10 : 20 }} key={"text" + i}>
                                        <div style={{ fontSize: window.innerHeight < 700 ? 12 : (this.props.mobile ? 18 : 25) }} dangerouslySetInnerHTML={d}>
                                        </div>
                                    </Row>
                                })}

                                {!this.props.mobile &&
                                    this.iconsRender.map((d, i) => {
                                        return (
                                            <div key={"iconsRender" + i}>
                                                <Row middle="xs" style={{ marginBottom: 10 }}>
                                                    <a href={d.link} target="_blank" style={{ textDecoration: 'none', color: '#005696', minWidth: "60px", textAlign: 'center' }}>
                                                        <FontAwesomeIcon icon={d.icon} size={"3x"} />
                                                    </a>
                                                    <a href={d.link} target="_blank" style={{ textDecoration: 'none', color: '#005696' }}>
                                                        <span style={{ fontSize: 25, paddingLeft: 10 }}>{d.text}</span>
                                                    </a>
                                                </Row>
                                            </div>
                                        )
                                    })}

                                {this.props.mobile &&
                                    <Row>
                                        {this.iconsRender.map((d, i) => {
                                            return (
                                                <Col xs={3} style={{ marginBottom: 0 }} key={"iconsRender" + i}>
                                                    <a href={d.link} target="_blank" style={{ textDecoration: 'none', color: '#005696', minWidth: "60px", textAlign: 'center' }}>
                                                        <FontAwesomeIcon icon={d.icon} size={this.props.mobile ? "2x" : "3x"} />
                                                    </a>
                                                </Col>
                                            )
                                        })}
                                    </Row>
                                }
                            </div>
                        </Fade>
                    </div>
                </Col>
            </Row>
        </Grid >
    }
}