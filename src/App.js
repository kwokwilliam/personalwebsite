import React, { Component } from 'react';
import './App.css'
import Gear from './components/Gear';
import Fade from 'react-reveal/Fade';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from 'react-router-dom';
import Navbar from './components/Navbar';
import Page from './components/Page';

import mainImg from './assets/imgs/main/main.png';
import walkerImg from './assets/imgs/projects/walker.png';
import dfSim from './assets/imgs/projects/dfSim.png';
import igem2017 from './assets/imgs/projects/igem2017.jpg';
import planet from './assets/imgs/projects/planet.png';
import pr from './assets/imgs/projects/pr.png';
import safecycleJS from './assets/imgs/projects/safecycleJS.png';
import safecycleR from './assets/imgs/projects/safecycleR.png';
import scout from './assets/imgs/projects/scout.png';
import teammanager from './assets/imgs/projects/teammanager.png';
import reactresumepdf from './assets/imgs/projects/reactresumepdf.png';
import koconutImg from './assets/imgs/projects/koconut.jpg';

import Loadable from 'react-loadable';

const Loading = () => <div></div>;
const Test = Loadable({
    loader: () => import('./projects/Test'),
    loading: Loading,
})

class App extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            mobile: false,
            show: true,
            gearIn: true,
            finishedGear: false
        }
        this.fadeOutGear = this.fadeOutGear.bind(this);

        this.mobileSize = 768;

        window.addEventListener("resize", () => {
            if (!this.state.mobile && window.innerWidth < this.mobileSize) {
                this.setState({ mobile: true });
            } else if (this.state.mobile && window.innerWidth >= this.mobileSize) {
                this.setState({ mobile: false });
            }
        });
        document.title = "William Kwok"
        this.images = [mainImg,
            walkerImg,
            dfSim,
            igem2017,
            planet,
            pr,
            safecycleJS,
            safecycleR,
            scout,
            teammanager,
            reactresumepdf,
            koconutImg];

        this.pages = ["main", "about", "projects"];
    }

    componentWillMount() {
        if (window.innerWidth < this.mobileSize) {
            this.setState({ mobile: true });
        }
    }

    prefetchImages() {
        this.images.forEach(d => {
            const img = new Image();
            img.src = d;
        });
    }

    componentDidMount() {
        this.prefetchImages();
    }

    fadeOutGear() {
        this.setState({ gearIn: false });
        setInterval(() => {
            this.setState({ finishedGear: true });
        }, 700);
    }

    render() {
        return (
            <Router basename={process.env.PUBLIC_URL}>
                <Route render={({ location }) => (
                    <Switch>
                        <Route exact path="/Test" component={Test} />
                        <Route exact path="/Tes6t" component={Test} />
                        <Route render={() => <div>
                            {this.state.finishedGear && <Route exact path="/" render={() => (
                                <Redirect to="/main" />
                            )} />}
                            {/* Content */}

                            <TransitionGroup>
                                <CSSTransition
                                    key={location.key}
                                    classNames="fade"
                                    timeout={{ enter: 300, exit: 300 }}
                                >
                                    <div className={"fix-container"}>
                                        <Switch location={location}>
                                            <Route exact path="/" render={() => null} />
                                            <Route render={() => <Navbar pages={this.pages} mobile={this.state.mobile} />} />
                                        </Switch>
                                        <Switch location={location}>
                                            <Route exact path="/" render={routerProps => (
                                                <div style={{ position: 'fixed', top: '40%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                                    <Fade clear enter={false} spy when={this.state.gearIn}>
                                                        <Gear fadeOutGear={this.fadeOutGear} />
                                                    </Fade>
                                                </div>
                                            )} />
                                            {this.pages.map(d => {
                                                return <Route key={d} path={`/${d}`} render={() => <Page page={d} mobile={this.state.mobile} />} />
                                            })}
                                            <Route path={"/resume"} render={() => <Page page={'resume'} mobile={this.state.mobile} />} />
                                            <Route path={"/blog/:blogpost"} render={(renderProps) => <Page page={'blog'} mobile={this.state.mobile} {...renderProps} />} />
                                            <Route render={() => <div style={{ margin: 20 }}>Error: Page not found :(</div>} />
                                        </Switch>
                                    </div>
                                </CSSTransition>
                            </TransitionGroup>
                        </div>} />
                    </Switch>
                )} />
            </Router>
        );
    }
}

export default App;
