import React, { Component } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

import './TutorQButtons.css';

export default function TutorQButtons({ getPageNumber, prevStep, nextStep, totalPages }) {
    return <div style={{ position: 'absolute', left: 0, bottom: 30, width: '100%', margin: 'auto', textAlign: 'center' }}>
        <Grid fluid>
            <Row>
                <Col style={{ width: '50%' }}>
                    <button
                        disabled={getPageNumber() < 1}
                        className={`tutorbtn ${getPageNumber() < 1 ? 'btndisabled' : ''}`}
                        onClick={prevStep}>{'< Back'}</button>
                </Col>
                <Col style={{ width: '50%' }}>
                    <button
                        disabled={getPageNumber() > totalPages - 2}
                        className={`tutorbtn ${getPageNumber() > totalPages - 2 ? 'btndisabled' : ''}`}
                        onClick={nextStep}>{'Next >'}
                    </button>
                </Col>
            </Row>
        </Grid>
    </div>
}