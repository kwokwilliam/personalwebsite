import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import { PDFExport } from '@progress/kendo-react-pdf';
import { Grid, Row, Col } from 'react-flexbox-grid';

import { faDownload, faEnvelope, faPhone, faGlobe, faGraduationCap, faBriefcase, faLaptop, faFileCode, faWrench } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOMServer from 'react-dom/server';
import './Resume.css';
import canvg from 'canvg';

export default class Resume extends Component {
    resume;
    constructor() {
        super();
        this.state = {
        }

        this.leftHeader = [
            {
                icon: faEnvelope,
                text: 'wkwok16@uw.edu'
            },
            {
                icon: faPhone,
                text: '(808) 218 - 3017'
            }
        ];

        this.middleHeader = [
            "William Kwok"
        ];

        this.rightHeader = [
            {
                icon: faGithub,
                text: 'kwokwilliam'
            },
            {
                icon: faLinkedin,
                text: 'william-w-kwok'
            },
            {
                icon: faGlobe,
                text: 'https://williamk.info'
            }
        ]

        this.mainBody = [
            {
                title: "EDUCATION",
                icon: faGraduationCap,
                content: [
                    {
                        title: "University of Washington - Seattle, Washington",
                        rightContent: "June 2020",
                        bullets: [
                            "GPA: 3.66/4.0 (Dean's List)",
                            "Bachelor of Science in Informatics with a focus in Data Science, Human-Computer Interaction, and Information Architecture",
                            "Minor in Mathematics",
                            "Current coursework: Databases and Data Modeling, Research Methods in Data Science, Design Methods",
                            `Past coursework: Computer Programming II, Matrix Algebra, Beginning Scientific Computing, Foundations of Data Science, 
                             Introductory Web Programming, Differential Equations, Client Side Development, Visual Information Design, Statistical Methods
                             in Engineering and Science, Data Structures and Algorithms`
                        ]
                    }
                ]
            },
            {
                title: "EXPERIENCE",
                icon: faBriefcase,
                content: [
                    {
                        title: "Code and Cognition Lab, Undergraduate Researcher",
                        rightContent: "June 2018 - Present",
                        bullets: [
                            "Design and build research prototypes using ReactJS, plan studies, gather data, and prepare presentations"
                        ]
                    },
                    {
                        title: "Washington iGEM, Hardware / Software Lead Engineer, Web Dev Lead",
                        rightContent: "February 2017 - Present",
                        bullets: [
                            "Design and oversee a yearly hardware and software project that is made alongside a synthetic biology aspect of the project",
                            "Develop the team website and iGEM Team Wiki (required for competition judging) using ReactJS"
                        ]
                    },
                    {
                        title: "Biomedical Image Computing Group, Undergraduate Researcher",
                        rightContent: "January 2018 - June 2018",
                        bullets: [
                            "Statistical/data analysis of MRI scans using Python, R, and C++",
                            "Process MRI scans using in house software libraries",
                            "Create neural network models in TinyCNN, MXNet, and Tensorflow"
                        ]
                    },
                    {
                        title: "Punahou School, Teacher Aide",
                        rightContent: "June 2015 - July 2015",
                        bullets: [
                            "Soldered underwater ROV controllers",
                            "Helped middle school students build PVC ROVs and got them excited about robotics and engineering"
                        ]
                    }
                ]
            },
            {
                title: "RECENT PROJECTS",
                icon: faFileCode,
                content: [
                    {
                        title: "Koconut, Code and Cognition Lab",
                        rightContent: "June 2018 - September 2018",
                        bullets: [
                            "A web tutor that uses the Bayesian Knowledge Tracing algorithm to help users effectively learn programming concepts.",
                            "Enzyme, Express, Firebase, Flow, JavaScript, Jest, Lodash, MaterialUI, React, React Router, Sass"
                        ]
                    },
                    {
                        title: "PSTutor, Code and Cognition Lab",
                        rightContent: "June 2018 - July 2018",
                        bullets: [
                            "A web tutor for problem solving process in the context of canvas drawings",
                            "Firebase, JavaScript, Lodash, MaterialUI, React, React Router"
                        ]
                    },
                    {
                        title: "FRC Scouting App 2018",
                        rightContent: "March 2018",
                        bullets: [
                            "A web application that allows the Hawaii Robotics community to visualize their performance at the state championships.",
                            "Bootstrap, D3js, Firebase, JavaScript, React, React Router"
                        ]
                    },
                    {
                        title: "Planet Trip Planner",
                        rightContent: "February 2018 - March 2018",
                        bullets: [
                            "A trip planner application that allows users to interactively create an itinerary and visualize their budget.",
                            "Firebase, JavaScript, MaterialUI, React, React Router"
                        ]
                    }
                ]
            }
        ]

        this.bottom = [
            {
                title: "SKILLS",
                icon: faWrench,
                items: [
                    {
                        title: "Languages: ",
                        list: [
                            "C++", "CSS", "HTML", "Java", "JavaScript (ES6)", "LaTeX", "MATLAB", "Python", "R"
                        ]
                    },
                    {
                        title: "Tools and Frameworks: ",
                        list: [
                            "Bootstrap", "Enzyme", "Firebase", "Flow", "git", "Jest", "jQuery", "MaterialUI", "React", "React Native", "React Router", "R Shiny", "Vue"
                        ]
                    },
                    {
                        title: "Processes: ",
                        list: [
                            "Agile Development, Data Analysis, Managing, Research, Teaching, Web Development"
                        ]
                    }
                ]
            }
        ]

        this.canvLoaded = false;
        this.remainingHeightForBody = styles().paperStyle.height - (styles().paperBorder.padding * 2 + styles().header.height);
    }

    exportPDFWithMethod = () => {
        this.resume.save();
    }

    inchToPixels = (inch) => {
        return 72 * inch;
    }

    convertSvgToImage = (canv, arr) => {
        arr.forEach((d, i) => {
            let htmlString = ReactDOMServer.renderToStaticMarkup(
                <FontAwesomeIcon icon={d.icon} size={"3x"} style={{ color: '#005696', height: '500px', width: '500px' }} />
            );
            canvg(canv, htmlString);
            d.icon = canv.toDataURL("image/png");
        })
    }


    render() {
        let canv = this.refs.canvas;

        if (canv && !this.canvLoaded) {
            this.canvLoaded = true;
            let ctx = canv.getContext("2d");
            this.convertSvgToImage(canv, this.leftHeader);
            this.convertSvgToImage(canv, this.rightHeader);
            this.convertSvgToImage(canv, this.mainBody);
            this.convertSvgToImage(canv, this.bottom);
        }


        let resumeObj =
            <PDFExport paperSize={'Letter'}
                fileName="WilliamKwokResume.pdf"
                title="William Kwok"
                subject="William Kwok"
                keywords="William Kwok Resume React Javascript Java Python C++ Vue ReactJS Native VueJS Bootstrap CSS HTML HTML5 JQuery LaTeX NodeJS Node.js Node Git Flow Firebase Router Redux"
                ref={(r) => this.resume = r}>
                <div style={styles(this.props.mobile).paperStyle} className={'resume'}> {/* Resume content starts in here */}
                    <div style={styles().paperBorder}>
                        <Grid fluid style={{ padding: 0 }}>
                            {/* =============================== Header =============================== */}
                            <Row style={styles().header}>
                                <div style={{ ...styles().col, ...styles().minHCol }}>
                                    {this.leftHeader.map((item, index) => {
                                        return <Row middle="xs" style={{ ...styles().headerItems }} key={'hiL' + index}>
                                            <span style={styles().headerItemIcon}>
                                                <img src={item.icon} style={styles().headerIconSize} />
                                            </span>
                                            {item.text}
                                        </Row>
                                    })}
                                </div>
                                <div style={{ ...styles().col, ...styles().maxHCol, ...styles().middleHeader }}>{this.middleHeader[0]}</div>
                                <div style={{ ...styles().col, ...styles().minHCol, ...styles().rightHeader }}>
                                    {this.rightHeader.map((item, index) => {
                                        return <Row middle="xs" style={{ ...styles().headerItems }} key={'hiR' + index}>
                                            <span style={styles().headerItemIcon}>
                                                <img src={item.icon} style={styles().headerIconSize} />
                                            </span>
                                            {item.text}
                                        </Row>
                                    })}
                                </div>
                            </Row>

                            {/* =============================== Main Body =============================== */}
                            {this.mainBody.map((bodyItem, index) => {
                                return <Row style={{ ...styles().body }} key={"mainBody" + index}>
                                    <Row middle="xs" style={{ ...styles().bodyHeaders, marginBottom: 5 }}>
                                        <span style={styles().bodyItemIcon}>
                                            <img src={bodyItem.icon} style={styles().bodyIconSize} />
                                        </span>
                                        {bodyItem.title}
                                    </Row>
                                    {bodyItem.content.map((contentItem, j) => {
                                        return <Row key={"bc" + index + '-' + j} style={{ ...styles().bodyContentHeaders, padding: 0, marginBottom: 5 }}>
                                            <div style={{ ...styles().contentItemTitle, width: '70%', paddingLeft: 3, marginBottom: 2 }}>{contentItem.title}</div>
                                            <div style={{ ...styles().contentItemRightContent, width: '30%', }}>{contentItem.rightContent}</div>
                                            <ul style={{ paddingLeft: 0, margin: 0, listStylePosition: 'inside', fontSize: 8 }}>
                                                {contentItem.bullets.map((bullet, k) => {
                                                    return <li key={'bc' + index + '-' + j + '-' + k} style={{ marginBottom: 0, paddingLeft: 7 }}>
                                                        <span style={{ marginLeft: -4, fontSize: 10 }}>{bullet}</span>
                                                    </li>
                                                })}
                                            </ul>
                                        </Row>
                                    })}

                                </Row>
                            })

                            }


                        </Grid>
                    </div>
                </div>
            </PDFExport>;


        return <Grid fluid>
            <Row>
                <div style={{ width: '100%' }}>
                    {!this.canvLoaded && <canvas ref="canvas" style={{ display: 'none' }}></canvas>}
                    <Fade clear cascade>
                        <div>
                            <div style={{ margin: 'auto', textAlign: 'center', marginBottom: 10 }}>
                                This page doesn't appear correctly on mobile, sorry!<br /><br />
                                <a onClick={this.exportPDFWithMethod} style={{ cursor: 'pointer', margin: 'auto', textDecoration: 'none', color: '#005696', minWidth: "60px", textAlign: 'center' }}>
                                    <FontAwesomeIcon icon={faDownload} size={"2x"} /> Download PDF
                                </a>
                            </div>
                            {resumeObj}
                        </div>
                    </Fade>
                </div>
            </Row>
        </Grid>
    }
}

const styles = (mobile) => {
    return {
        paperStyle: {
            height: 792,
            width: 612,
            padding: 'none',
            backgroundColor: 'white',
            boxShadow: '5px 5px 5px #888888',
            margin: 'auto',
            overflowX: 'hidden',
            overflowY: 'hidden'
        },
        paperBorder: {
            height: '100%',
            width: '100%',
            padding: 12,
            overflowX: 'hidden',
            overflowY: 'hidden'

        },
        header: {
            height: 60,
            padding: 0,
            margin: 0
        },
        body: {
            padding: 0,
            margin: 0
        },
        bodyHeaders: {
            color: "#005696",
            fontSize: 19,
            fontWeight: 'bold',
            margin: 0,
            width: '100%',
            paddingBottom: 4,
            borderBottom: "0.5px solid #005696"
        },
        bodyContentHeaders: {
            margin: 0,
            width: '100%'
        },
        contentItemTitle: {
            color: "#005696",
            fontSize: 12,
            fontWeight: 'bold',
            padding: 0
        },
        contentItemRightContent: {
            fontSize: 12,
            textAlign: 'right',
            padding: 0
        },
        col: {
            padding: 0
        },
        headerItems: {
            fontSize: 10.5,
            color: '#005696',
            marginLeft: 0,
            marginBottom: 5        // between header items
        },
        headerItemIcon: {
            textDecoration: 'none',
            textAlign: 'center',
            marginRight: 5,
        },
        bodyItemIcon: {
            textDecoration: 'none',
            textAlign: 'center',
            marginRight: 5,
        },
        minHCol: {
            width: (612 - 24) / 4 + 'px'
        },
        maxHCol: {
            width: (612 - 24) / 2 + 'px'
        },
        middleHeader: {
            textAlign: 'center',
            fontSize: 40,
            fontWeight: 'bold',
            color: '#005696'
        },
        rightHeader: {
            paddingLeft: 35 /// padding for right header
        },
        headerIconSize: {
            height: 15,
            width: 15
        },
        bodyIconSize: {
            height: 20,
            width: 20
        }
    }
}