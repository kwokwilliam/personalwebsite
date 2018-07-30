import React, { Component } from 'react';
import mainImg from '../assets/imgs/main/main.jpg'; // TODO: make file smaller, prefetch img
import './MainPage.css';
import Fade from 'react-reveal/Fade'

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }
    render() {
        return <div style={{ display: 'flex' }}>
            <Fade clear when={this.state.loaded}>
                <img src={mainImg} onLoad={() => { this.setState({ loaded: true }); }} className={`mainimg-1 ${!this.props.mobile ? 'mainimg' : 'mainimg-mobile'}`} />
            </Fade>
        </div>
    }
}