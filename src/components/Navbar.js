import React, { Component } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from 'react-router-dom';

export default class Navbar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            mobile: false
        }

    }

    componentWillMount() {
        this.setState({ mobile: this.props.mobile });
    }

    componentWillReceiveProps(nextProps) {
        this.setState({ mobile: nextProps.mobile });
    }

    render() {
        return <div>{
            this.props.pages.map(d => {
                return <div>
                    <Link to={`/${d}`}>{d}</Link>
                </div>
            })
        }</div>
    }
}