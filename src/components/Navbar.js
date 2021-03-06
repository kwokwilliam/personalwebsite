import React, { Component } from 'react';
import {
    Link,
} from 'react-router-dom';
import Logo from './Pages/Main/Gear/Logo';
import './Navbar.css';

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
        return <nav style={{ display: 'flex' }}>
            <div style={{ margin: 'auto', display: 'flex', padding: 10, paddingRight: 10, lineHeight: "70px" }}>
                <div style={{ marginRight: 80 }}><Link to={'/main'}><Logo /></Link></div>
                {
                    this.props.pages.map(d => {
                        return <div key={d} style={{ marginLeft: 10, marginRight: 10 }}>
                            <Link to={`/${d}`} style={{ textDecoration: 'none', color: '#005696', fontSize: this.props.mobile ? 20 : 30 }} ><div className={'link'}>{d}</div></Link>
                        </div>
                    })
                }
            </div>
        </nav>
    }
}