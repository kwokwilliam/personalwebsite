import React, { Component } from 'react';
import walkerImg from '../assets/imgs/projects/walker.png';

import { Button } from 'reactstrap';
export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            expanded: []
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
                title: "FRC 2090 Scouting App",
                thumbnail: "",
                description: `During spring break, I headed back home to Hawaii. The FIRST Robotics 
                Competition Hawaii Regional was going on during my stay. I wanted to put the skills 
                I learned in the classroom to use, and incorporate some data analysis to better the 
                community I used to be a part of.\n
                A day before the competition, I slapped together a scouting app that would be internal
                to my old team. They collected data that would later be input to the app. This app 
                allowed them to use live updating data during their alliance selection to pick the best,
                most compatible team.\n
                After the competition, the data was released to the Hawaii Robotics community so teams 
                could better understand their performance going into the world championship. \n
                The application was programmed using NodeJS, JavaScript, and the React Framework..`,
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
                thumbnail: "",
                description: `Planet is a trip planner application that shares information about what the 
                user has planned already and what their current estimated cost is versus their max budget 
                (segmented by category). Users are able to interactively create their itinerary, similar 
                to Google Calendar. See the github page for an in depth detail.\n
                This project was built for INFO 343 as a final group project partnered with 
                Laura Freeman, Farrah Lee, and Sangchul Hwang.`,
                link: "https://students.washington.edu/wkwok16/info343-final-project/#/",
                githubLink: "https://github.com/ferily7/info343-final-project",
                tools: ['Firebase', "JavaScript", "React Router", "Firebase", "MaterialUI"],
                seeAlso: [],
                time: "February 2018 = March 2018",
                type: "Programming",
                hash: "planetplanner"
            },
            {
                title: "Team Manager",
                thumbnail: "",
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
                thumbnail: "",
                description: `This project is an iteration of a past project, Seattle SafeCycle, remade 
                completely using the React JavaScript framework. This iteration now allows real time 
                querying from a dataset provided by the Seattle Department of Transportation, asynchronous 
                processing of data, and displays to the user more data about each bike rack.`,
                link: "https://students.washington.edu/wkwok16/p3-mockingod1841/",
                githubLink: "https://github.com/kwokwilliam/INFO343-Project3",
                tools: ["JavaScript", "ReactJS", "OpenDataPortal", "NodeJS"],
                seeAlso: ["safecycleR"],
                time: "February 2018",
                type: "Programming",
                hash: "safecycleJS"
            },
            {
                title: "Differential Flow Simulator",
                thumbnail: "",
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
                thumbnail: "",
                description: `Seattle SafeCycle is a web app programmed using R and R Shiny that uses data 
                from the Seattle Open Data Portal to visualize all the bike racks and bike thefts in the 
                Seattle area, in order to determine which bike racks are the safest to park at. I focused on 
                programming all the functionality and algorithms, as well as writing the post report and
                resenting it.`,
                link: "https://wkwok16.shinyapps.io/bb4-finalproj/",
                githubLink: "https://github.com/info201b-au17/bb4-finalproj",
                tools: ["R", "RShiny", "OpenDataPortal"],
                seeAlso: ["safecycleJS"],
                time: "November 2017 - December 2017",
                type: "Programming",
                hash: "safecycleR"
            },
            {
                title: "Viva la Violacein",
                thumbnail: "",
                description: `For the hardware and software side of the Washington iGEM Project, we prototyped 
                an affordable, modular bioreactor dubbed the "Chromastat" that utilizes a closed-loop feedback 
                control system to control and optimize the production of a desired product. It allows the 
                reduction of time and effort needed to maintain cultures through automated, real-time 
                metabolite analysis.\n
                I designed a modular 3D printable, open source syringe pump that was cost effective compared 
                to industrial solutions. It was accurate to the ±0.01 mL for any given dispense action using 
                a standard 3 mL syringe.\n
                Along with that, I designed and programmed the 2017 Team Washington website from the ground up.`,
                link: "http://2017.igem.org/Team:Washington",
                githubLink: "https://github.com/uwigem/uwigem2017",
                tools: ["Java", "HTML", "CSS", "JavaScript", "Fusion 360", "Bootstrap"],
                seeAlso: ["igem18"],
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
                type: "Programming"
            },
            {
                title: "Physerapy",
                thumbnail: "",
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
                title: "Senior CAPSTONE Project",
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


    render() {
        return <div>Projects Page
            <Button>asdf</Button>
        </div>
    }
}