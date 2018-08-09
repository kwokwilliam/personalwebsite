import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class About extends Component {
    constructor() {
        super();



        this.skills = [
            {
                section: "Languages and Frameworks",
                list: [
                    "Javascript", "React",
                    "HTML", "CSS", "NodeJS",
                    "Jest", "Flow", "Java",
                    "Python", "R", "MATLAB",
                    "C++", "LaTeX", "Firebase"
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
                place: "",
                timeAt: "",
                blurb: "",
                icon: ""
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

        ]

    }

    render() {
        return <Grid fluid>
            <Row>
                <Fade right cascade collapse>
                    <div>
                        <div>
                            <Row>
                                <div style={{
                                    ...styles(this.props.mobile).headingText,
                                    ...styles(this.props.mobile).courseworkList
                                }}>
                                    Skills and Familiarities
                                    <Grid fluid>
                                        <Row style={styles(this.props.mobile).quarterSegText}>
                                            {this.skills.map(skill => {
                                                let orderedSkillList = skill.list.sort();
                                                return <Col md={4}>{skill.section}
                                                    <ul style={{ margin: 0, fontSize: 15, marginBottom: 5 }}>
                                                        {orderedSkillList.map(className => {
                                                            return <li>{className}</li>
                                                        })}
                                                    </ul>
                                                </Col>
                                            })}
                                        </Row>
                                    </Grid>
                                </div>
                            </Row>
                        </div>
                        <div>
                            <Row>Places worked</Row>
                        </div>
                        <div>
                            <Row>
                                <div style={{
                                    ...styles(this.props.mobile).headingText,
                                    ...styles(this.props.mobile).courseworkList
                                }}>
                                    Coursework
                                    <Grid fluid>
                                        <Row style={styles(this.props.mobile).quarterSegText}>
                                            {this.quarters.map(quarter => {
                                                return <Col md={3}>{quarter.quarter}
                                                    <ul style={{ margin: 0, fontSize: 15, marginBottom: 5 }}>
                                                        {quarter.classes.map(className => {
                                                            return <li>{className}</li>
                                                        })}
                                                    </ul>
                                                </Col>
                                            })}
                                        </Row>
                                    </Grid>
                                </div>
                            </Row>
                        </div>
                    </div>
                </Fade>
            </Row>
        </Grid>

        // Coursework
        // Skills
        // Places worked
    }
}

const styles = (mobile) => {
    return {
        courseworkList: {
            color: '#005696',
            border: '1px solid gray',
            padding: '7px',
            borderRadius: '5px',
            minWidth: '100%',
            background: '#efefef',
            boxShadow: '5px 5px 5px #dddddd',
            height: '100%'
        },
        headingText: {
            fontSize: 30
        },
        quarterSegText: {
            fontSize: 20,
            marginLeft: '2%',
            cursor: 'text',
            color: 'black'
        }
    }
}