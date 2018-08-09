import React, { Component } from 'react';
import './App.css'
import mainImg from './assets/imgs/main/main.png';
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
        this.images = [mainImg];
        this.prefetchImages();

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
        })

    }

    fadeOutGear() {
        this.setState({ gearIn: false });
        setInterval(() => {
            this.setState({ finishedGear: true });
        }, 700);
    }

    render() {
        return (
            <Router>
                <Route render={({ location }) => (
                    <div>
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
                                        <Route render={() => <div style={{ margin: 20 }}>Error: Page not found :(</div>} />
                                    </Switch>
                                </div>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                )} />
            </Router>
        );
    }
}

export default App;
