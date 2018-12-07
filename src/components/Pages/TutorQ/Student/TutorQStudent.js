import React, { Component } from 'react';
import cookies from 'browser-cookies';
import TutorQButtons from './Components/TutorQButtons/TutorQButtons';
import TutorQDropdown from './Components/TutorQDropdown/TutorQDropdown';
import Fade from 'react-reveal/Fade';
import { Input } from 'reactstrap';
import './TutorQStudent.css';

export default class TutorQStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            name: '',
            classNumber: null,
            problemCategory: null,
            problemCategoryExpand: '',
            position: null,
            error: '',

        }

        this.totalPages = 4;
        this.classes = [201, 330, 340];

        this.id = cookies.get('id');
        // firebase.database().ref('/blogPageView').push({
        //     timestamp: firebase.database.ServerValue.TIMESTAMP,
        //     id,
        //     post: this.props.post
        // });

    }

    change = (e) => {
        let { name, value } = e.target;
        if (name === "classNumber") {
            this.setState({
                [name]: value,
                problemCategory: null,
                problemCategoryExpand: ''
            });
        } else {
            this.setState({ [name]: value });
        }
    }

    getPageNumber = () => {
        return this.state.page;
    }

    nextStep = () => {
        let page = this.state.page + 1;
        if (page > this.totalPages - 1) {
            page = this.totalPages;
        }
        this.setState({ page });
    }

    prevStep = () => {
        let page = this.state.page - 1;
        if (page < 0) {
            page = 0;
        }
        this.setState({ page });
    }

    setError(error) {
        this.setState({ error });
    }

    checkValidityBeforeSendingToFirebase() {
        let returnValue = true;
        if (this.state.name === '') {
            this.setError("Please provide a valid name");
            returnValue = false;
        }

        if (this.state.classNumber === null) {
            this.setError("Invalid class number provided");
            returnValue = false;
        }

        if (this.state.problemCategory === null) {
            this.setError("Please choose a problem category");
            returnValue = false;
        }

        if (this.state.problemCategory === "other" && this.state.problemCategoryExpand === '') {
            this.setError("Please provide a description of the problem");
            returnValue = false;
        }

        if (this.state.position === null) {
            this.setError("Please provide your location in the TE lab");
            returnValue = false;
        }
        return returnValue;
    }

    render() {
        let { name } = this.state;
        return <>
            <h1 style={{ margin: 'auto', textAlign: 'center' }}>TutorQ</h1>
            <div style={{ textAlign: 'center' }}>Page {this.state.page + 1}/{this.totalPages}</div>
            <div style={{ marginTop: '10vh', textAlign: 'center' }}>
                {this.state.page === 0 && <Fade>
                    <>
                        <h3>Please enter your name</h3>
                        <Input placeholder={'Name'}
                            name={'name'}
                            onChange={this.change}
                            value={name} />
                    </>
                </Fade>}
                {this.state.page === 1 && <Fade>
                    <>
                        <h3>Please select your class</h3>
                        <TutorQDropdown />
                    </>
                </Fade>}
            </div>
            {/** Previous and next button */}
            <TutorQButtons getPageNumber={this.getPageNumber}
                prevStep={this.prevStep}
                nextStep={this.nextStep}
                totalPages={this.totalPages} />
        </>
    }
}