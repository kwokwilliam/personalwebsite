import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Fade from 'react-reveal/Fade';
import { Collapse, CardBody, Card, CardHeader, Input } from 'reactstrap';

import { Button } from 'reactstrap';
import { Grid, Row, Col } from '../../node_modules/react-flexbox-grid';
import { PDFExport, savePDF } from '@progress/kendo-react-pdf';

export default class Projects extends Component {
    resume;
    constructor() {
        super();
        this.state = {
            expanded: [],
            po: poType.date, // DATE, TOOL
            filterString: '',
            highlighted: '',
            dropdownOpen: false
        }
    }

    exportPDFWithMethod = () => {
        this.resume.save();
    }

    render() {
        let resumeObj = <PDFExport paperSize={'Letter'}
            ref={(r) => this.resume = r}>
            <div style={styles(this.props.mobile).paperStyle}>
                fdsaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaab
            </div>
        </PDFExport>;
        return <Grid fluid>
            <Row>
                <div style={{ width: '100%' }}>
                    <Fade right cascade>
                        <button onClick={this.exportPDFWithMethod}>export</button>
                        {resumeObj}
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
            margin: 'none',
            backgroundColor: 'red',
            boxShadow: '5px 5px 5px #888888',
            margin: 'auto'
        },
        courseworkList: {
            color: '#005696',
            border: '1px solid gray',
            padding: '7px',
            borderRadius: '5px',
            background: '#efefef',
            width: '100%',
            boxShadow: '5px 5px 5px #dddddd',
            height: '100%',
            cursor: 'pointer'
        },
        headingText: {
            fontSize: 20
        },
        quarterSegText: {
            fontSize: 20,
            marginLeft: '2%',
            cursor: 'text',
            color: 'black'
        },
        row: {
            marginBottom: 20
        }
    }
}

const poType = {
    date: "DATE",
    dateRev: "DATE_REVERSE",
    tool: "TOOL",
    type: "TYPE"
}