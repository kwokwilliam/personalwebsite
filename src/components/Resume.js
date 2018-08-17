import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import { Grid, Row, Col } from '../../node_modules/react-flexbox-grid';
import { PDFExport } from '@progress/kendo-react-pdf';

import { faDownload, faEnvelope, faPhone } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import ReactDOMServer from 'react-dom/server';
import './Resume.css';
import canvg from 'canvg';

export default class Projects extends Component {
    resume;
    constructor() {
        super();
        this.state = {
        }

        this.leftHeader = [
            {
                icon: faEnvelope,
                text: 'wkwok16@uw.edu'
            },
            {
                icon: faPhone,
                text: '(808) 218 - 3017'
            }
        ]
    }

    exportPDFWithMethod = () => {
        this.resume.save();
    }

    inchToPixels = (inch) => {
        return 72 * inch;
    }

    render() {
        const htmlString = ReactDOMServer.renderToStaticMarkup(
            <FontAwesomeIcon icon={faDownload} size={"1x"} style={{ color: '#005696', height: '20px', width: '20px' }} />
        );
        let canv = this.refs.canvas;

        if (canv) {
            let ctx = canv.getContext("2d");
            canvg(canv, htmlString);
            this.image = canv.toDataURL("image/png");
        }


        let resumeObj =
            <PDFExport paperSize={'Letter'}
                ref={(r) => this.resume = r}>
                <div style={styles(this.props.mobile).paperStyle} className={'resume'}> {/* Resume content starts in here */}
                    <div style={styles().paperBorder}>
                        <Grid fluid>
                            <Row style={styles().header}>
                                <Col md={3} style={styles().col}>
                                    {this.leftHeader.map((item, index) => {
                                        return <Row middle="xs" style={styles().headerItems} key={'hiL' + index}>
                                            <span style={styles().headerItem}>
                                                <FontAwesomeIcon icon={item.icon} size={"2x"} />
                                            </span>
                                            {item.text}
                                            {this.image && <img src={this.image} />}
                                        </Row>
                                    })}
                                </Col>
                                <Col md={6} style={styles().col}>middle</Col>
                                <Col md={3} style={styles().col}>right</Col>
                            </Row>
                        </Grid>
                    </div>
                </div>
            </PDFExport>;
        return <Grid fluid>
            <Row>
                <div style={{ width: '100%' }}>
                    <canvas ref="canvas" style={{ display: 'none' }}></canvas>
                    <Fade clear cascade>
                        <div>

                            <div style={{ margin: 'auto', textAlign: 'center', marginBottom: 10 }}>
                                This page doesn't appear correctly on mobile, sorry!<br /><br />
                                <a onClick={this.exportPDFWithMethod} style={{ cursor: 'pointer', margin: 'auto', textDecoration: 'none', color: '#005696', minWidth: "60px", textAlign: 'center' }}>
                                    <FontAwesomeIcon icon={faDownload} size={"2x"} /> Download PDF
                                </a>
                            </div>
                            {resumeObj}
                        </div>
                    </Fade>
                </div>
            </Row>
        </Grid>
    }
}

const styles = (mobile) => {
    return {
        paperStyle: {
            height: '792px',
            width: '612px',
            padding: 'none',
            backgroundColor: 'white',
            boxShadow: '5px 5px 5px #888888',
            margin: 'auto',
            overflowX: 'hidden',
            overflowY: 'hidden'
        },
        paperBorder: {
            height: '100%',
            width: '100%',
            padding: '12px',
            overflowX: 'hidden',
            overflowY: 'hidden'

        },
        header: {
            height: '100px',
            padding: 0,
            margin: 0
        },
        col: {
            padding: 0
        },
        headerItems: {
            fontSize: 10,
            color: '#005696'
        },
        headerItem: {
            textDecoration: 'none',
            minWidth: "20px",
            textAlign: 'center',
            marginRight: 9,
        }
    }
}