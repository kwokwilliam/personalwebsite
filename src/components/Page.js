import React, { Component } from 'react';
import './Page.css';
import MainPage from './MainPage';
import Projects from './Projects';
import About from './About';

export default class Page extends Component {
    constructor(props) {
        super(props);
    }

    renderPage() {
        switch (this.props.page) {
            case "main":
                return <MainPage />;
            case "projects":
                return <Projects />;
            case "about":
                return <About />;
            default:
                return <div>error</div>;
        }
    }

    render() {
        return <div className={"page"}>{this.renderPage()}</div>
    }
}