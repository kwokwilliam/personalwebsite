import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Button } from 'reactstrap';
import './TutorQButtons.css';

export default function TutorQButtons({ getPageNumber, prevStep, nextStep, totalPages }) {
    return <div style={{ position: 'absolute', left: 0, bottom: 30, width: '100%', margin: 'auto', textAlign: 'center' }}>
        <Grid fluid>
            <Row>
                <Col style={{ width: '50%' }}>
                    <Button
                        disabled={getPageNumber() < 1}
                        style={{ backgroundColor: '#005696' }}
                        onClick={prevStep}>{'< Back'}</Button>
                </Col>
                <Col style={{ width: '50%' }}>
                    <Button
                        disabled={getPageNumber() > totalPages - 2}
                        style={{ backgroundColor: '#005696' }}
                        onClick={nextStep}>{'Next >'}
                    </Button>
                </Col>
            </Row>
        </Grid>
    </div>
}