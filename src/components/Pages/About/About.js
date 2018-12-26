import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { faChalkboardTeacher, faFlask, faWrench } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Collapse, CardBody, Card, CardHeader } from 'reactstrap';
import firebase from 'firebase/app';
import 'firebase/database';
import cookies from 'browser-cookies';

export default class About extends Component {
    constructor() {
        super();

        this.state = {
            expanded: []
        }

        if (!sessionStorage.getItem("aboutVisited")) {
            sessionStorage.setItem("aboutVisited", true);
            let id = cookies.get('id');
            firebase.database().ref('/aboutPageView').push({
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                id
            });
        }

        this.skills = [
            {
                section: "Languages and Frameworks",
                list: [
                    "JavaScript", "React",
                    "HTML", "CSS", "NodeJS",
                    "Jest", "Flow", "Java",
                    "Python", "R", "MATLAB",
                    "C++", "LaTeX", "Firebase", "JQuery", "React Router", 'Bootstrap',
                    "MaterialUI", "Git"
                ]
            },
            {
                section: "Tools",
                list: [
                    "Microsoft Office", "Solidworks", "VSCode",
                    "WebStorm", "Eclipse Java Neon", "Photoshop",
                    "Illustrator", "Fusion 360", "Inventor"
                ]
            },
            {
                section: "Experience",
                list: [
                    "Web Development", "Data Analysis", "Research",
                    "Teaching", "Managing"
                ]
            }
        ];

        this.workExp = [
            {
                place: "University of Washington iSchool - Seattle, Washington",
                role: "Undergraduate Tutor",
                timeAt: "January 2018 - Present",
                blurb: `I am a resource for students enrolled in technical informatics classes. I help and tutor students on all technical content in required courses, such as INFO 201 Technical Foundations of Informatics, INFO 340 Client Side Development, and INFO 330 Databases and Data Modeling. I provide assistance with R, R Shiny, R Markdown, git, HTML, CSS, JavaScript, jQuery, React, Firebase, React Router, misc JavaScript libraries, and SQL. In addition, I am working on a tutor hub and tutor queue. The tutor hub will be a page hosted on my website with written tutorials on how to do various topics covered within the courses, as well as video tutorials for some of the topics. I will be collecting data on the traffic on these pages to determine what topics people struggle with the most. The tutor queue is a queuing system for first come first serve questions by students when me or other tutor(s) are in the lab space. This will also collect usage data for hard topics.`,
                links: [
                    {
                        title: "Info Tutor Homepage",
                        link: "https://williamk.info/blog/infotutor-home"
                    },
                    {
                        title: "TutorQ",
                        link: "https://williamk.info/tutorq"
                    },
                    {
                        title: "TutorQ Code",
                        link: "https://github.com/kwokwilliam/personalwebsite/tree/master/src/components/Pages/TutorQ"
                    },
                    {
                        title: "Making TutorQ",
                        link: "https://williamk.info/blog/makingtutorq"
                    },
                ],
                icon: faChalkboardTeacher
            },
            {
                place: "University of Washington iSchool - Seattle, Washington",
                role: "Undergraduate Teaching Assistant",
                timeAt: "September 2018 - December 2018",
                blurb: `I teach students the foundational skills required to build client side applications (INFO 340). I host lab sections
                of about 40 students and answering questions related to front end development. `,
                links: [
                    {
                        title: "Class Github Page",
                        link: "https://github.com/info340d-au18"
                    }
                ],
                icon: faChalkboardTeacher
            },
            {
                place: "Code and Cognition Lab - Seattle, Washington",
                role: "Undergraduate Researcher",
                timeAt: "June 2018 - Present",
                blurb: `At the Code and Cognition Lab led by Dr. Andy Ko, I design and build research prototypes using ReactJS, 
                    plan studies, gather data, and prepare presentations. I also collected and analyzed data for writing a paper that was
                    submitted and accepted to SIGCSE 2019.`,
                links: [
                    {
                        title: "Lab website",
                        link: "http://faculty.washington.edu/ajko/students"
                    },
                    {
                        title: "Bits and Behavior - Lab blog",
                        link: "https://medium.com/bits-and-behavior"
                    }
                ],
                icon: faFlask
            },
            {
                place: "Washington iGEM - Seattle, Washington",
                role: "Web Development Lead, Ex Hardware/Software Lead Engineer",
                timeAt: "February 2017 - Present",
                blurb: `iGEM is the international Genetically Engineered Machine competition held in Boston annually. 
                I design and oversee a yearly hardware and software project that is made in conjunction with a synthetic biology aspect of the project.
                I also am in charge of development of the team website and iGEM Team Wiki (required for competition judging). The 2018 website uses the React framework.`,
                links: [
                    {
                        title: "2018 Website (WIP)",
                        link: "http://2018.igem.org/Team:Washington"
                    },
                    {
                        title: "2017 Website",
                        link: "http://2017.igem.org/Team:Washington"
                    },
                    {
                        title: "Team Website",
                        link: "http://students.washington.edu/uwigem/"
                    },
                    {
                        title: "VIP Course Site",
                        link: "http://students.washington.edu/uwigem/18sp/"
                    }
                ],
                icon: faWrench
            },
            {
                place: "Biomedical Image Computing Group - Seattle, Washington",
                role: "Undergraduate Researcher",
                timeAt: "January 2018 - June 2018",
                blurb: `At the BICG lab, led by Dr. Colin Studholme, I worked closely with my mentor on a convolutional
                neural network program to autonomously map out the brain. When I joined, I eagerly took on the hurdle of 
                programming in a new language and studying how machine learning operates.`,
                links: [
                    {
                        title: "BICG Homepage",
                        link: "http://depts.washington.edu/bicg/home/"
                    },
                    {
                        title: "Paper reference",
                        link: "https://arxiv.org/abs/1703.02083"
                    }
                ],
                icon: faFlask
            },
            {
                place: "Punahou School - Honolulu, Hawaii",
                role: "Summer Teacher Aide",
                timeAt: "June 2015 - July 2015",
                blurb: `During this summer teacher aide experience in high school, I did the standard job of
                helping the teacher organize paperwork and supplies. Along with that, I got to solder underwater ROV
                controllers, and help middle school students build PVC ROVs, to get them excited about robotics and
                engineering.`,
                icon: faChalkboardTeacher,
                links: [
                    {
                        title: "Punahou School",
                        link: "https://www.punahou.edu/"
                    }
                ]
            },
        ]

        this.quarters = [
            {
                quarter: "Autumn 2016",
                classes: [
                    "CSE 143 - Computer Programming II",
                    "MATH 126 - Calculus with Analytic Geometry III",
                    "PSYCH 101 - Introduction to Psychology"
                ]
            },
            {
                quarter: "Winter 2017",
                classes: [
                    "CHEM 142 - General Chemistry I",
                    "ENGL 111 - English Composition: Literature",
                    "ARCH 150 - Appreciation of Architecture I",
                    "MATH 308 - Matrix Algebra"
                ]
            },
            {
                quarter: "Spring 2017",
                classes: [
                    "AMATH 301 - Beginning Scientific Computing",
                    "CSE 154 - Introductory Web Programming",
                    "INFO 200 - Intellectual Foundations of Informatics",
                    "MATH 307 - Introduction to Differential Equations"
                ]
            },
            {
                quarter: "Summer 2017",
                classes: [
                    "AA 210- Engineering Statics",
                    "PHYS 122 - Electromagnetism"
                ]
            },
            {
                quarter: "Autumn 2017",
                classes: [
                    "CHEM 152 - General Chemistry II",
                    "INFO 201 - Technical Foundations of Informatics",
                    "STAT 220 - Principles of Statistical Reasoning"
                ]
            },
            {
                quarter: "Winter 2018",
                classes: [
                    "INFO 343 - Client Side Development",
                    "INFO 362 - Visual Information Design",
                    "PSYCH 210- Psychology of Human Sexuality"
                ]
            },
            {
                quarter: "Spring 2018",
                classes: [
                    "ME 123 - Visualization and CAD",
                    "MATH 390 - Statistical Methods in Engineering and Science",
                    "PHIL 120 - Introduction to Logic"
                ]
            },
            {
                quarter: "Summer 2018",
                classes: [
                    "CSE 373 - Data Structures and Algorithms"
                ]
            },
            {
                quarter: "Autumn 2018",
                classes: [
                    "INFO 300 - Research Methods",
                    "INFO 330 - Databases and Data Modeling",
                    "(TA) INFO 340 - Client Side Development",
                    "INFO 360 - Design Methods"
                ]
            }
        ];


    }

    toggle = i => {
        let expanded = this.state.expanded;
        expanded[i] = expanded[i] ? !expanded[i] : true;
        this.setState({ expanded });
    }

    render() {
        return <Grid fluid >
            <Row>
                <div style={{ width: '100%' }}>
                    <Fade right cascade>
                        <div>
                            <Card style={{ marginBottom: '1rem' }}>
                                <CardHeader onClick={() => this.toggle(0)}
                                    style={{
                                        ...styles(this.props.mobile).headingText,
                                        ...styles(this.props.mobile).courseworkList
                                    }}
                                    aria-expanded={this.state.expanded[0]}>
                                    <div>Skills and Familiarities</div>
                                </CardHeader>
                                <Collapse isOpen={this.state.expanded[0]}>
                                    <CardBody>
                                        <Fade clear when={this.state.expanded[0]}>
                                            <Grid fluid>
                                                <Row style={styles(this.props.mobile).quarterSegText}>
                                                    {this.skills.map((skill, i) => {
                                                        let orderedSkillList = skill.list.sort();
                                                        return <Col md={4} key={"skill" + i}>{skill.section}
                                                            <ul style={{ margin: 0, fontSize: 15, marginBottom: 5 }}>
                                                                {orderedSkillList.map((className, j) => {
                                                                    return <li key={"subskill" + i + '-' + j}>{className}</li>
                                                                })}
                                                            </ul>
                                                        </Col>
                                                    })}
                                                </Row>
                                            </Grid>
                                        </Fade>
                                    </CardBody>
                                </Collapse>
                            </Card>
                            <Card style={{ marginBottom: '1rem' }}>
                                <CardHeader onClick={() => this.toggle(1)}
                                    style={{
                                        ...styles(this.props.mobile).headingText,
                                        ...styles(this.props.mobile).courseworkList
                                    }}
                                    aria-expanded={this.state.expanded[1]}>
                                    <div>Work and Experience</div>
                                </CardHeader>
                                <Collapse isOpen={this.state.expanded[1]}>
                                    <CardBody>
                                        <Fade clear when={this.state.expanded[1]}>
                                            <Grid fluid>
                                                <Row style={styles(this.props.mobile).quarterSegText}>
                                                    <Fade right cascade>
                                                        <div>
                                                            {this.workExp.map((job, i) => {
                                                                return <Col key={"job" + i} md={12} style={{
                                                                    marginBottom: 30
                                                                }}>
                                                                    <span style={{ textAlign: 'center', marginRight: 8 }}><FontAwesomeIcon icon={job.icon} size={"1x"} /></span>{job.place}
                                                                    <div style={{ fontSize: 18 }}>{job.role}</div>
                                                                    <div style={{ fontSize: 15, fontWeight: 'bold', marginBottom: 5 }}>{job.timeAt}</div>
                                                                    <div style={{ fontSize: 15 }}>{job.blurb}</div>
                                                                    <div style={{ fontSize: 13, marginTop: 10 }}>
                                                                        <Grid fluid>
                                                                            <Row>
                                                                                {
                                                                                    job.links.map((link, j) => {
                                                                                        return <Col xs={6} md={3} key={"job-" + i + '-' + j}><a href={link.link}
                                                                                            style={{
                                                                                                textDecoration: 'none',
                                                                                                color: '#005696',
                                                                                                marginBottom: 20,
                                                                                                textAlign: 'center',

                                                                                            }}>
                                                                                            <div style={{
                                                                                                border: '1px solid gray',
                                                                                                padding: 4,
                                                                                                paddingBottom: 15,
                                                                                                borderRadius: '10px',
                                                                                                height: '80%',
                                                                                            }}>
                                                                                                {link.title}
                                                                                            </div>

                                                                                        </a></Col>
                                                                                    })
                                                                                }
                                                                            </Row>
                                                                        </Grid>
                                                                    </div>
                                                                </Col>
                                                            })}
                                                        </div>
                                                    </Fade>
                                                </Row>
                                            </Grid>
                                        </Fade>
                                    </CardBody>
                                </Collapse>
                            </Card>
                            <Card style={{ marginBottom: '1rem' }}>
                                <CardHeader onClick={() => this.toggle(2)}
                                    style={{
                                        ...styles(this.props.mobile).headingText,
                                        ...styles(this.props.mobile).courseworkList
                                    }}
                                    aria-expanded={this.state.expanded[2]}>
                                    <div>Coursework @ University of Washington</div>
                                </CardHeader>
                                <Collapse isOpen={this.state.expanded[2]}>
                                    <CardBody>
                                        <Fade right when={this.state.expanded[2]}>
                                            <Grid fluid>
                                                <Row style={styles(this.props.mobile).quarterSegText}>
                                                    {this.quarters.map((quarter, i) => {
                                                        return <Col md={3} key={'quarter' + i}>{quarter.quarter}
                                                            <ul style={{ margin: 0, fontSize: 15, marginBottom: 5 }}>
                                                                {quarter.classes.map((className, j) => {
                                                                    return <li key={'quarter' + i + '-' + j}>{className}</li>
                                                                })}
                                                            </ul>
                                                        </Col>
                                                    })}
                                                </Row>
                                            </Grid>
                                        </Fade>
                                    </CardBody>
                                </Collapse>
                            </Card>
                        </div>
                    </Fade>
                </div>
            </Row>
        </Grid >
    }
}

const styles = (mobile) => {
    return {
        courseworkList: {
            color: '#005696',
            border: '1px solid gray',
            padding: '7px',
            borderRadius: '5px',
            background: '#efefef',
            width: '100%',
            boxShadow: '5px 5px 5px #dddddd',
            height: '100%',
            cursor: 'pointer'
        },
        headingText: {
            fontSize: 30
        },
        quarterSegText: {
            fontSize: 20,
            marginLeft: '2%',
            cursor: 'text',
            color: 'black'
        },
        row: {
            marginBottom: 20
        }
    }
}