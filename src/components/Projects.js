import React, { Component } from 'react';
import walkerImg from '../assets/imgs/projects/walker.png';

export default class Projects extends Component {
    constructor() {
        super();
        this.state = {
            expanded: []
        }

        this.projects = [
            {
                title: "",
                thumbnail: "",
                description: "",
                link: "",
                githubLink: "",
                tools: [],
                seeAlso: [],
                time: "",
                type: ""
            },
            {
                title: "Physerapy",
                thumbnail: "",
                description: "",
                link: "",
                githubLink: "",
                tools: [],
                seeAlso: [],
                time: "",
                type: "",
                link: "physerapy"
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
                link: "hsCapstone"
            },
        ]
    }

    toggle = i => {
        let expanded = this.state.expanded;
        expanded[i] = expanded[i] ? !expanded[i] : true;
        this.setState({ expanded });
    }


    render() {
        return <div>Projects Page</div>
    }
}