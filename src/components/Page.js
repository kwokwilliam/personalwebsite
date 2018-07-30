import React, { Component } from 'react';
import './Page.css';
import MainPage from './MainPage';
import Projects from './Projects';
import About from './About';

export default class Page extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: false
        }
    }

    componentDidMount() {
        this.setState({ mobile: this.props.mobile });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ mobile: nextProps.mobile });
    }

    renderPage() {
        switch (this.props.page) {
            case "main":
                return <MainPage mobile={this.state.mobile} />;
            case "projects":
                return <Projects mobile={this.state.mobile} />;
            case "about":
                return <About mobile={this.state.mobile} />;
            default:
                return <div>error</div>;
        }
    }

    render() {
        return <div className={"page"} style={{ height: window.innerHeight - 92 }}>{this.renderPage()}</div>
    }
}