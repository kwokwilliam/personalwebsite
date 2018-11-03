import React, { Component } from 'react';
import './Page.css';
// import MainPage from './MainPage';
// import Projects from './Projects';
// import About from './About';
// import Resume from './Resume';
import Loadable from 'react-loadable';

const Loading = () => <div></div>;
const MainPage = Loadable({
    loader: () => import('./MainPage'),
    loading: Loading,
});
const Projects = Loadable({
    loader: () => import('./Projects'),
    loading: Loading,
});
const About = Loadable({
    loader: () => import('./About'),
    loading: Loading,
});
const Resume = Loadable({
    loader: () => import('./Resume'),
    loading: Loading,
});
const Blog = Loadable({
    loader: () => import('./Blog'),
    loading: Loading,
})

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
            case "resume":
                return <Resume mobile={this.state.mobile} />;
            case "blog":
                return <Blog mobile={this.state.mobile} post={this.props.match.params.blogpost} />;
            default:
                return <div>Error: Page doesn't exist</div>;
        }
    }

    render() { // height: window.innerHeight - 92 style={{ height: '100%' }}
        return <div className={"page"} >{this.renderPage()}</div>
    }
}