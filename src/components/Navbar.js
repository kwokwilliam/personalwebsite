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
        return <div style={{ display: 'flex', margin: 'auto', width: '100%', textAlign: 'center' }}>
            <div style={{ margin: 'auto', display: 'flex' }}>
                {
                    this.props.pages.map(d => {
                        return <div key={d}>
                            <Link to={`/${d}`}>{d}</Link>
                        </div>
                    })
                }
            </div>
        </div>
    }
}