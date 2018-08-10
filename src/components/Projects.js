import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Collapse, CardBody, Card, CardHeader, Input } from 'reactstrap';

import walkerImg from '../assets/imgs/projects/walker.png';
import dfSim from '../assets/imgs/projects/dfSim.png';
import igem2017 from '../assets/imgs/projects/igem2017.jpg';
import planet from '../assets/imgs/projects/planet.png';
import pr from '../assets/imgs/projects/pr.png';
import safecycleJS from '../assets/imgs/projects/safecycleJS.png';
import safecycleR from '../assets/imgs/projects/safecycleR.png';
import scout from '../assets/imgs/projects/scout.png';
import teammanager from '../assets/imgs/projects/teammanager.png';

import { Button } from 'reactstrap';
import { Grid, Row, Col } from '../../node_modules/react-flexbox-grid';
export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            expanded: [],
            po: poType.date, // DATE, TOOL
            filterString: '',
            highlighted: '',
            dropdownOpen: false
        }

        this.projects = [
            /* Copy paste this as a template, Barbarian!
            {
                title: "",
                thumbnail: "",
                description: ``,
                link: "",
                githubLink: "",
                tools: [],
                seeAlso: [],
                time: "",
                type: "",
                hash: ""
            },
            */
            {
                title: "FRC Scouting App",
                thumbnail: scout,
                description: [`During spring break, I headed back home to Hawaii. The FIRST Robotics 
                Competition Hawaii Regional was going on during my stay. I wanted to put the skills 
                I learned in the classroom to use, and incorporate some data analysis to better the 
                community I used to be a part of.`,
                    `A day before the competition, I slapped together a scouting app that would be internal
                to my old team. They collected data that would later be input to the app. This app 
                allowed them to use live updating data during their alliance selection to pick the best,
                most compatible team.`,
                    `After the competition, the data was released to the Hawaii Robotics community so teams 
                could better understand their performance going into the world championship.
                The application was programmed using NodeJS, JavaScript, and the React Framework.`],
                link: "https://students.washington.edu/wkwok16/frc2090scouting2018public/#/",
                githubLink: "https://github.com/kwokwilliam/frc2090scouting2018public",
                tools: ["React Router", "Lodash", "Firebase", "Bootstrap", "MaterialUI", "ReactJS", "NodeJS", "JavaScript"],
                seeAlso: [],
                time: "March 2018",
                type: "Programming",
                hash: "2018scouting"
            },
            {
                title: "Planet Trip Planner",
                thumbnail: planet,
                description: [`Planet is a trip planner application that shares information about what the 
                user has planned already and what their current estimated cost is versus their max budget 
                (segmented by category). Users are able to interactively create their itinerary, similar 
                to Google Calendar. See the github page for an in depth detail.`,
                    `This project was built for INFO 343 as a final group project partnered with 
                Laura Freeman, Farrah Lee, and Sangchul Hwang.`],
                link: "https://students.washington.edu/wkwok16/info343-final-project/#/",
                githubLink: "https://github.com/ferily7/info343-final-project",
                tools: ['Firebase', "JavaScript", "React Router", "Firebase", "MaterialUI"],
                seeAlso: [],
                time: "February 2018 - March 2018",
                type: "Programming",
                hash: "planetplanner"
            },
            {
                title: "Team Manager",
                thumbnail: teammanager,
                description: `I created a basic team manager application for my INFO 343 class that allows 
                admins of an established organization to create a page, invite users and admins to the page,
                make announcements, and make events to attend. It uses Firebase as a secure authentication 
                and database service, React, and React Router.`,
                link: "https://students.washington.edu/wkwok16/p4-kwokwilliam/#/",
                githubLink: "https://github.com/kwokwilliam/INFO343-Project4",
                tools: ['Firebase', 'JavaScript', 'ReactJS', "NodeJS", 'React Router', "Bootstrap"],
                seeAlso: [],
                time: "February 2018",
                type: "Programming",
                hash: "tmanager"
            },
            {
                title: "Seattle SafeCycleJS",
                thumbnail: safecycleJS,
                description: `This project is an iteration of a past project, Seattle SafeCycle, remade 
                completely using the React JavaScript framework. This iteration now allows real time 
                querying from a dataset provided by the Seattle Department of Transportation, asynchronous 
                processing of data, and displays to the user more data about each bike rack.`,
                link: "https://students.washington.edu/wkwok16/p3-mockingod1841/",
                githubLink: "https://github.com/kwokwilliam/INFO343-Project3",
                tools: ["JavaScript", "ReactJS", "OpenDataPortal", "NodeJS"],
                seeAlso: [{
                    name: "Seattle SafeCycle",
                    hash: "safecycleR"
                }],
                time: "February 2018",
                type: "Programming",
                hash: "safecycleJS"
            },
            {
                title: "Differential Flow Simulator",
                thumbnail: dfSim,
                description: `This simulator allows users to model fluid flow through different containers. 
                It is built using JavaScript Canvas elements.`,
                link: "https://students.washington.edu/wkwok16/p2-mockingod1841/",
                githubLink: "https://github.com/kwokwilliam/INFO343-Project2",
                tools: ["JavaScript", "HTML5 Canvas", "NodeJS"],
                seeAlso: [],
                time: "January 2018 - February 2018",
                type: "Programming",
                hash: "dfsim"
            },
            {
                title: "Seattle SafeCycle",
                thumbnail: safecycleR,
                description: `Seattle SafeCycle is a web app programmed using R and R Shiny that uses data 
                from the Seattle Open Data Portal to visualize all the bike racks and bike thefts in the 
                Seattle area, in order to determine which bike racks are the safest to park at. I focused on 
                programming all the functionality and algorithms, as well as writing the post report and
                resenting it.`,
                link: "https://wkwok16.shinyapps.io/bb4-finalproj/",
                githubLink: "https://github.com/info201b-au17/bb4-finalproj",
                tools: ["R", "RShiny", "OpenDataPortal"],
                seeAlso: [{
                    name: "Seattle SafeCycleJS",
                    hash: "safecycleJS"
                }],
                time: "November 2017 - December 2017",
                type: "Programming",
                hash: "safecycleR"
            },
            {
                title: "Viva la Violacein",
                thumbnail: igem2017,
                description: [`For the hardware and software side of the Washington iGEM Project, we prototyped 
                an affordable, modular bioreactor dubbed the "Chromastat" that utilizes a closed-loop feedback 
                control system to control and optimize the production of a desired product. It allows the 
                reduction of time and effort needed to maintain cultures through automated, real-time 
                metabolite analysis.`,
                    `I designed a modular 3D printable, open source syringe pump that was cost effective compared 
                to industrial solutions. It was accurate to the ±0.01 mL for any given dispense action using 
                a standard 3 mL syringe.`,
                    `Along with that, I designed and programmed the 2017 Team Washington website from the ground up.`],
                link: "http://2017.igem.org/Team:Washington",
                githubLink: "https://github.com/uwigem/uwigem2017",
                tools: ["Java", "HTML", "CSS", "JavaScript", "Fusion 360", "Bootstrap"],
                seeAlso: [],
                time: "January 2017 - November 2017",
                type: "Programming",
                hash: "igem17"
            },
            {
                title: "Fear Filter",
                thumbnail: "",
                description: `Fear Filter is a Google Chrome extension that checks all images displayed on a 
                website and filters it for a user's specified phobia. It utilizes Microsoft Azure Computer 
                Vision API v1.0 using tags to determine if it must be filtered or not. I worked on the 
                JavaScript functionality for ensuring the correct images get blocked out.`,
                link: "https://www.phobiacensor.tech/",
                githubLink: "https://github.com/Ryabn/DubhacksProject",
                tools: ["Azure Vision", "JavaScript", "jQuery"],
                seeAlso: [],
                time: "October 2017",
                type: "Programming",
                hash: "ff"
            },
            {
                title: "Physerapy",
                thumbnail: pr,
                description: `Physerapy is a prototype physical therapy app that replaces the need for going 
                into a therapist just to get a sheet of paper with exercises on it. My group introduced
                proof of concept integration with encrypted medical records using APIs such as eCare. 
                We also played with the idea of integration with external devices such as Xbox Kinect or 
                Smartwatches.`,
                link: "https://projects.invisionapp.com/share/UPBXZ9MC7",
                githubLink: "",
                tools: ["InVision"],
                seeAlso: [],
                time: "April 2017 - May 2017",
                type: "Design",
                hash: "physerapy"
            },
            {
                title: "High School Capstone",
                thumbnail: walkerImg,
                description: `During my senior year of high school for a community service CAPSTONE class, 
                the project I decided on was to manufacture a walker. The walker was designed in OnShape, 
                machined from raw aluminum, and welded together. Assistive Technology Resource Center of 
                Hawaii received the walker when it was completed.`,
                link: "https://www.youtube.com/watch?v=DI9dS9Vm-T8",
                githubLink: "",
                tools: ["OnShape", "Machine Shop"],
                seeAlso: [],
                time: "October 2015 - December 2015",
                type: "Hardware",
                hash: "hsCapstone"
            },
        ]
    }

    toggle = i => {
        let expanded = this.state.expanded;
        expanded[i] = expanded[i] ? !expanded[i] : true;
        this.setState({ expanded });
    }

    getProjectsOrder = (po, fs) => {
        let temp = [];
        let fse = fs.split(",");
        switch (po) {
            case poType.date:
                return this.projects;
            case poType.tool:
                if (fse.length > 0 && fse[fse.length - 1] !== "") {
                    this.projects.forEach(project => {
                        let count = 0;
                        project.tools.forEach((tool) => {
                            fse.forEach(fsee => {
                                if (tool.toLowerCase() === fsee.trim().toLowerCase()) {
                                    count++
                                }
                            })
                        })
                        if (count === fse.length) {
                            temp.push(project);
                        }
                    });
                    return temp;
                } else {
                    return this.projects;
                }
            case poType.type:
                if (fse.length > 0) {
                    this.projects.forEach(project => {
                        if (project.type.indexOf(fse[0]) !== -1) {
                            temp.push(project);
                        }
                    });
                    return temp;
                } else {
                    return this.projects;
                }
            case poType.dateRev:
                return this.projects.slice().reverse();
            default:
                return this.projects;
        }
    }

    setFS = (e) => {
        this.setState({ filterString: e.target.value });
    }

    setHighlighted = hash => {
        this.setState({ highlighted: hash }, () => {
            setTimeout(() => {
                this.setState({ highlighted: '' });
            }, 1000);
        })
    }

    toggleDropdown = () => {
        this.setState({ dropdownOpen: !this.state.dropdownOpen });
    }

    render() {
        const projects = this.getProjectsOrder(this.state.po, this.state.filterString);
        const sortby = [
            {
                name: 'date (newest)',
                set: poType.date,
            },
            {
                name: 'date (oldest)',
                set: poType.dateRev
            },
            {
                name: 'tools used',
                set: poType.tool
            },
            {
                name: 'type',
                set: poType.type
            }
        ]
        return <Grid fluid>
            <Row>
                <div style={{ width: '100%' }}>
                    <Fade right cascade>
                        <div>
                            <Row style={{ marginBottom: 20, marginLeft: 10 }}>
                                <span style={{ textAlign: 'center', fontSize: 25, marginBottom: 10 }}>Sort by: </span>
                                {sortby.map((d, i) => {
                                    return <Button key={'sort' + i}
                                        onClick={() => this.setState({ po: d.set })}
                                        style={{ marginLeft: 10, backgroundColor: '#005696', marginBottom: 10 }}>
                                        {d.name}
                                    </Button>
                                })}
                                <span style={{ marginLeft: 10, width: '100%' }}>
                                    <Fade when={this.state.po === poType.tool || this.state.po === poType.type} collapse style={{ width: '100%' }}>
                                        <Input type="text" name="filter by" placeholder={this.state.po === poType.type ? "Programming, Design, Hardware" : "JavaScript, R, Java"}
                                            onChange={this.setFS} style={{ width: '70%' }} />
                                    </Fade>
                                </span>
                            </Row>
                            {projects.map((project, index) => {
                                return <Card style={{ marginBottom: '1rem' }}
                                    key={"project" + index}>
                                    <CardHeader onClick={() => {
                                        this.toggle(index);
                                    }}
                                        style={{
                                            ...styles(this.props.mobile).headingText,
                                            ...styles(this.props.mobile).courseworkList,
                                            border: this.state.highlighted === project.hash ? "2px solid green" :
                                                '1px solid gray'
                                        }}
                                        aria-expanded={this.state.expanded[index]}>
                                        {project.title}
                                        <div style={{
                                            fontSize: 15, fontWeight: 'bold',
                                            color: 'black'
                                        }}>{project.time}</div>
                                    </CardHeader>
                                    <Collapse isOpen={this.state.expanded[index]}>
                                        <CardBody>
                                            <Fade clear when={this.state.expanded[index]}>
                                                <Row>
                                                    {project.thumbnail !== "" && <Col xs={12} md={6}>
                                                        <div style={{ textAlign: 'center' }}><img src={project.thumbnail} style={{
                                                            maxHeight: 400,
                                                            maxWidth: '100%',
                                                            margin: 'auto',
                                                            marginBottom: 10,
                                                            border: '2px solid #005696',
                                                            borderRadius: '20px',
                                                            boxShadow: '5px 5px 5px #dddddd',
                                                        }}
                                                            alt={project.title} /></div>
                                                    </Col>}
                                                    <Col xs={12} md={6}>
                                                        {typeof (project.description) === "object" ?
                                                            project.description.map((descPar, j) => {
                                                                return <p key={"dpar" + index + "--" + j}>{descPar}</p>
                                                            }) :
                                                            <p>{project.description}</p>
                                                        }
                                                        <Row style={{ marginLeft: 15 }}>
                                                            <a href={project.link}
                                                                style={{
                                                                    textDecoration: 'none',
                                                                    color: '#005696',
                                                                    textAlign: 'center'
                                                                }}>
                                                                <div style={{
                                                                    border: '1px solid gray',
                                                                    padding: 4,
                                                                    paddingBottom: 10,
                                                                    borderRadius: '10px',
                                                                    height: '80%',
                                                                }}>
                                                                    Project
                            </div>
                                                            </a>
                                                            {project.githubLink && <a href={project.githubLink}
                                                                style={{
                                                                    textDecoration: 'none',
                                                                    color: '#005696',
                                                                    textAlign: 'center',
                                                                    marginLeft: 10
                                                                }}>
                                                                <div style={{
                                                                    border: '1px solid gray',
                                                                    padding: 4,
                                                                    paddingBottom: 10,
                                                                    borderRadius: '10px',
                                                                    height: '80%',
                                                                }}>
                                                                    Github
                            </div>
                                                            </a>}
                                                        </Row>
                                                        Tools used:
                            <Row style={{ marginTop: 10, marginLeft: 15 }}>
                                                            {project.tools.map((tool, toolIndex) => {
                                                                return <div style={{
                                                                    border: '1px solid gray',
                                                                    padding: 4,
                                                                    borderRadius: '10px',
                                                                    height: '80%',
                                                                    textAlign: 'center',
                                                                    marginBottom: 10,
                                                                    marginRight: 10
                                                                }} key={'tools-' + index + '-' + toolIndex}>
                                                                    {tool}
                                                                </div>
                                                            })}
                                                        </Row>
                                                        {project.seeAlso.length > 0 &&
                                                            <Row style={{ marginLeft: 15 }}>
                                                                See also: {project.seeAlso.map((extend, extendIndex) => {
                                                                    return <a href={'#' + extend.hash}
                                                                        style={{
                                                                            textDecoration: 'none',
                                                                            color: '#005696',
                                                                            textAlign: 'center',
                                                                            marginLeft: 10
                                                                        }}
                                                                        onClick={() => this.setHighlighted(extend.hash)}
                                                                        key={'extend' + index + '-' + extendIndex}>
                                                                        <div style={{
                                                                            border: '1px solid gray',
                                                                            padding: 4,
                                                                            paddingBottom: 10,
                                                                            borderRadius: '10px',
                                                                            height: '80%',
                                                                        }}>
                                                                            {extend.name}
                                                                        </div>
                                                                    </a>
                                                                })}
                                                            </Row>
                                                        }
                                                    </Col>
                                                </Row>


                                            </Fade>
                                        </CardBody>
                                    </Collapse>
                                </Card>
                            })}
                        </div>
                    </Fade>
                </div>
            </Row>
        </Grid>
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
            fontSize: 20
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

const poType = {
    date: "DATE",
    dateRev: "DATE_REVERSE",
    tool: "TOOL",
    type: "TYPE"
}