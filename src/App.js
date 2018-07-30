import React, { Component } from 'react';
import './App.css'
import Gear from './components/Gear';
import Fade from 'react-reveal/Fade';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
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

        window.addEventListener("resize", () => {
            if (!this.state.mobile && window.innerWidth < 560) {
                this.setState({ mobile: true });
            } else if (this.state.mobile && window.innerWidth >= 560) {
                this.setState({ mobile: false });
            }
        });

        this.pages = ["main", "about", "projects"];
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
                        {location.path !== "/" &&
                            <Navbar pages={this.pages} />
                        }
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                classNames="fade"
                                timeout={{ enter: 300, exit: 300 }}
                            >
                                <div className={"fix-container"}>
                                    <Switch location={location}>
                                        <Route exact path="/" render={routerProps => (
                                            <div style={{ position: 'fixed', top: '40%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                                <Fade clear enter={false} spy when={this.state.gearIn}>
                                                    <Gear fadeOutGear={this.fadeOutGear} />
                                                </Fade>
                                            </div>
                                        )} />
                                        {this.pages.map(d => {
                                            return <Route key={d} path={`/${d}`} render={() => <Page page={d} />} />
                                        })}
                                        <Route path="/main" render={routerProps => (<div><div>asdf</div></div>)} />
                                        <Route render={() => <div>Not Found</div>} />
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
