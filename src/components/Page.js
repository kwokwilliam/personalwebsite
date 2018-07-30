import React, { Component } from 'react';
import './Page.css';

export default class Page extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <div className={"page"} >{this.props.page}</div>
    }
}