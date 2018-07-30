import React, { Component } from 'react';
import mainImg from '../assets/imgs/main/main.jpg';

export default class MainPage extends Component {
    render() {
        return <div>Main Page {this.props.mobile && 'mobile'}
            <img src={mainImg} className={`${this.props.mobile ? 'mainimg' : 'mainimg-mobile'}`} /></div>
    }
}