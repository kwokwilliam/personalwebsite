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
} from 'react-router-dom'

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
                            <Redirect to="/home" />
                        )} />}

                        {/* Navigation bar */}
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                classNames="fade"
                                timeout={300}
                            >
                                <Switch location={location}>
                                    <Route exact path="/" render={() => { return <div></div> }} />
                                    <Route render={routerProps => { return (<div>fdsafdsa</div>) }} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>

                        {/* Content */}
                        <TransitionGroup>
                            <CSSTransition
                                key={location.key}
                                classNames="fade"
                                timeout={300}
                            >
                                <Switch location={location}>
                                    <Route exact path="/" render={routerProps => (
                                        <div style={{ position: 'fixed', top: '40%', left: '50%', transform: 'translate(-50%,-50%)' }}>
                                            <Fade clear enter={false} spy when={this.state.gearIn}>
                                                <Gear fadeOutGear={this.fadeOutGear} />
                                            </Fade>
                                        </div>
                                    )} />
                                    <Route path="/home" render={routerProps => (<div><div>asdf</div></div>)} />
                                    <Route render={() => <div>Not Found</div>} />
                                </Switch>
                            </CSSTransition>
                        </TransitionGroup>
                    </div>
                )} />
            </Router>
        );
    }
}

export default App;
