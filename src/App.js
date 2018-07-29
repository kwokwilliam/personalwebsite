import React, { Component } from 'react';
import './App.css'
import Gear from './components/Gear';
import Fade from 'react-reveal/Fade';

class App extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            mobile: false,
            show: true,
            gearIn: true
        }
        this.fadeOutGear = this.fadeOutGear.bind(this);
    }

    fadeOutGear() {
        this.setState({ gearIn: false });
    }

    render() {
        return (
            <div style={{ width: '100%' }}>
                <div style={{ margin: 'auto' }}>
                    <Fade clear enter={false} spy when={this.state.gearIn}>
                        <Gear fadeOutGear={this.fadeOutGear} />
                    </Fade>
                </div>
            </div>
        );
    }
}

export default App;
