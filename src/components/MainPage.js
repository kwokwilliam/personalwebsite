import React, { Component } from 'react';
import mainImg from '../assets/imgs/main/main.jpg'; // TODO: make file smaller, prefetch img
import './MainPage.css';
import Fade from 'react-reveal/Fade';
import { Grid, Row, Col } from 'react-flexbox-grid';

export default class MainPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loaded: false
        }
    }
    render() {
        return <Grid fluid>
            <Row>
                <Col xs={12} md={6}>
                    <Fade clear when={this.state.loaded}>
                        <img src={mainImg} onLoad={() => { this.setState({ loaded: true }); }} className={`mainimg-1 ${!this.props.mobile ? 'mainimg' : 'mainimg-mobile'}`} />
                    </Fade>
                </Col>
                <Col xs={12} md={6}><div>Content</div></Col>
            </Row>

            <div>fdsafdsa</div>
        </Grid >
    }
}