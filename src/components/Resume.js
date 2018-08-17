import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';

import { Grid, Row, Col } from '../../node_modules/react-flexbox-grid';
import { PDFExport } from '@progress/kendo-react-pdf';

import { faDownload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export default class Projects extends Component {
    resume;
    constructor() {
        super();
        this.state = {
        }
    }

    exportPDFWithMethod = () => {
        this.resume.save();
    }

    inchToPixels = (inch) => {
        return 72 * inch;
    }

    render() {
        let resumeObj =
            <PDFExport paperSize={'Letter'}
                ref={(r) => this.resume = r}>
                <div style={styles(this.props.mobile).paperStyle}> {/* Resume content starts in here */}
                    fdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab
            </div>
            </PDFExport>;
        return <Grid fluid>
            <Row>
                <div style={{ width: '100%' }}>
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
            margin: 'auto'
        }
    }
}