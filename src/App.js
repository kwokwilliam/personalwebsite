import React, { Component } from 'react';
import './App.css'
import Gear from './components/Gear';

class App extends Component {
    constructor() {
        super();
        this.state = {
            loaded: false,
            mobile: false,
            show: true
        }
    }

    render() {
        return (
            <div className="App">
                <Gear />
            </div>
        );
    }
}

export default App;
