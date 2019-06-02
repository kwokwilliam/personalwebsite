import React, { Component } from 'react';
import './Page.css';
// import MainPage from './MainPage';
// import Projects from './Projects';
// import About from './About';
// import Resume from './Resume';
import Loadable from 'react-loadable';

const Loading = () => <div></div>;
const MainPage = Loadable({
    loader: () => import('./Main/MainPage'),
    loading: Loading,
});
const Projects = Loadable({
    loader: () => import('./Projects/Projects'),
    loading: Loading,
});
const About = Loadable({
    loader: () => import('./About/About'),
    loading: Loading,
});
const Resume = Loadable({
    loader: () => import('./Resume/Resume'),
    loading: Loading,
});
const Blog = Loadable({
    loader: () => import('./Blog/Blog'),
    loading: Loading,
});
const TutorQStudent = Loadable({
    loader: () => import('./TutorQ/Student/TutorQStudent'),
    loading: Loading,
});
const TutorQAdmin = Loadable({
    loader: () => import('./TutorQ/Admin/TutorQAdmin'),
    loading: Loading,
});

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
                // document.title = "William Kwok";
                return <MainPage mobile={this.state.mobile} />;
            case "projects":
                // document.title = "William Kwok's Projects";
                return <Projects mobile={this.state.mobile} />;
            case "about":
                document.title = "About William Kwok";
                return <About mobile={this.state.mobile} />;
            case "resume":
                document.title = "William Kwok's Resume";
                return <Resume mobile={this.state.mobile} />;
            case "blog":
                document.title = "William Kwok's Blog";
                return <Blog mobile={this.state.mobile} post={this.props.match.params.blogpost} />;
            case "tutorq":
                document.title = "TutorQ";
                return <TutorQStudent mobile={this.state.mobile} />;
            case "tutorqadmin":
                document.title = "TutorQ Admin Panel";
                return <TutorQAdmin mobile={this.state.mobile} />;
            default:
                return <div>Error: Page doesn't exist</div>;
        }
    }

    render() { // height: window.innerHeight - 92 style={{ height: '100%' }}
        return <div className={"page"} >{this.renderPage()}</div>
    }
}