import React, { Component } from 'react';
import cookies from 'browser-cookies';
import TutorQButtons from './Components/TutorQButtons/TutorQButtons';
import TutorQDropdown from './Components/TutorQDropdown/TutorQDropdown';
import Fade from 'react-reveal/Fade';
import StudentLocation from '../Components/StudentLocation/StudentLocation';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/functions';
import { Input, Button, Alert } from 'reactstrap';
import './TutorQStudent.css';
import { Link } from 'react-router-dom'

export default class TutorQStudent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            page: 0,
            name: cookies.get('tutorqname') || '',
            classNumber: null,
            problemCategory: null,
            problemDescription: '',
            location: null,
            error: '',
            valid: false,
            queueLength: 0,
            positionInQueue: -1,
            inQueue: false,
            userInQueueKey: '',
            sentToFirebase: false
        }

        this.totalPages = 5;
        this.classes = [201, 330, 340];
        this.topics = {
            201: ['Setup', 'Markdown', 'Git/web servers', 'R', 'dplyr', 'Web APIs', 'R Markdown', 'ggplot2', 'R Shiny', 'Other'],
            330: ['ERDs and MetaData', 'Create table', 'Constraints', 'Inserting data', 'Views, Functions, Stored procedures', 'Permissions', 'Testing', 'Other'],
            340: ['Setup', 'HTML', 'CSS Fundamentals', 'CSS Selectors', 'CSS Layouting', 'Responsive CSS', 'CSS Frameworks', 'Basic JavaScript', 'jQuery', 'DOM', 'AJAX/Fetch', 'React', 'Routing', 'Firebase', 'Testing', 'Other']
        }

        this.id = cookies.get('id');
        // firebase.database().ref('/blogPageView').push({
        //     timestamp: firebase.database.ServerValue.TIMESTAMP,
        //     id,
        //     post: this.props.post
        // });
    }

    removeMeFromQueue = () => {
        this.setState({ removeButtonLoading: true });
        const removeUserFromQueue = firebase.functions().httpsCallable('removeUserFromQueue');
        removeUserFromQueue({ id: this.id }).then((r) => {
            this.setState({ removeButtonLoading: false, page: 0 });
            if (!r.data.success) {
                console.log(r.data);
                this.setState({ error: r.data.error });
            }
        });
    }

    componentDidMount = () => {
        this.idToQueueInfoRef = firebase.database().ref(`/tutorq/idToQueueInfo/${this.id}`);
        this.idToQueueInfoRef.on('value', (snap) => {
            let val = snap.val() || {};
            let { queueKey } = val;
            this.setState({ userInQueueKey: queueKey });
        })

        this.queueRef = firebase.database().ref('/tutorq/inqueue')

        this.queueRef.on('value', (snap) => {
            let queue = snap.val() || {};
            let queueArr = Object.keys(queue);
            let userInQueue = queueArr.indexOf(this.state.userInQueueKey);
            if (userInQueue > -1) {
                this.setState({
                    inQueue: true,
                    queueLength: queueArr.length,
                    positionInQueue: userInQueue + 1,
                    sentToFirebase: false,
                });
            } else {
                this.setState({
                    inQueue: false,
                    queueLength: queueArr.length,
                    positionInQueue: -1
                })
            }
        });
    }

    componentWillUnmount = () => {
        this.queueRef.off();
        this.idToQueueInfoRef.off();
    }

    change = (e) => {
        let { name, value } = e.target;
        if (name === "classNumber" && value !== this.state.classNumber) {
            this.setState({
                [name]: value,
                problemCategory: null,
                problemDescription: ''
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
        if (page === this.totalPages - 1) {
            this.checkValidityBeforeSendingToFirebase();
        }
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

    /**
     * @param {object} location has fields {xPercentage, yPercentage}
     */
    setLocation = (location) => {
        this.setState({ location });
    }

    setValid = (valid) => {
        this.setState({ valid });
    }

    checkValidityBeforeSendingToFirebase() {
        if (this.state.name === '') {
            this.setError("Please provide a valid name");
            this.setValid(false);
            return false;
        }

        if (this.state.classNumber === null) {
            this.setError("Invalid class number provided");
            this.setValid(false);
            return false;
        }

        if (this.state.problemCategory === null) {
            this.setError("Please choose a problem category");
            this.setValid(false);
            return false;
        }

        if (this.state.problemDescription === '') {
            this.setError("Please provide a description of the problem");
            this.setValid(false);
            return false;
        }

        if (this.state.location === null) {
            this.setError("Please provide your location in the TE lab");
            this.setValid(false);
            return false;
        }
        this.setError('');
        this.setValid(true);
        // this.setState({ page: 0 });
        return true;
    }

    sendDataToFirebase = () => {
        if (this.checkValidityBeforeSendingToFirebase()) {
            let { name, classNumber, problemCategory, problemDescription, location } = this.state;
            cookies.set('tutorqname', name);
            let queueKey = this.queueRef.push({
                classNumber,
                problemCategory,
                problemDescription,
                location,
                timestamp: firebase.database.ServerValue.TIMESTAMP,
            }, (e) => {
                if (e) {
                    this.setError(e.message);
                }
            }).key;

            if (queueKey) {
                firebase.database().ref(`/tutorq/idToQueueInfo/${this.id}`).set({ name, queueKey });
            }
        }

        // TODO: set a loading spinner!
    }

    render() {
        let { name,
            classNumber,
            page,
            problemCategory,
            problemDescription,
            location,
            error,
            valid,
            positionInQueue,
            queueLength } = this.state;
        return <>
            <h1 style={{ margin: 'auto', textAlign: 'center' }}>TutorQ</h1>


            {this.state.inQueue && <>
                <div style={{ marginTop: '10vh', textAlign: 'center' }}>
                    <h3 style={{ fontWeight: 'bold' }}>You are currently in queue at position: <span style={{ color: 'green', fontWeight: 'bold' }}>
                        {positionInQueue}/{queueLength}
                    </span>
                    </h3>
                    <div style={{ fontSize: '150%' }}>
                        <p>Please be patient, a tutor will assist you shortly.</p>
                        <p>In the meantime, please check out the <Link to="/blog/infotutor-home">Tutor Hub</Link>. Don't worry, your place in line will be saved!</p>
                        <p>If you would like to remove yourself from the queue, please click the button below:
                        </p>
                        <Button style={{ backgroundColor: '#005696' }}
                            onClick={this.removeMeFromQueue}
                            disabled={this.state.removeButtonLoading}
                        >Remove from queue</Button>
                    </div>
                </div>
            </>}

            {!this.state.inQueue &&
                <>
                    <div style={{ textAlign: 'center' }}>Page {page + 1}/{this.totalPages}</div>
                    <div style={{ marginTop: '10vh', textAlign: 'center' }}>
                        {page === 0 && <Fade>
                            <>
                                <h3>Welcome to TutorQ!</h3>
                                <p>This is an application used for the INFO tutor. Please have cookies enabled or the application will not function properly.
                                    Your data will be collected. See how it is being used <Link to="/blog/tutordata">here</Link>.</p>
                                <h3>Please enter your name</h3>
                                <Input placeholder={'Name'}
                                    name={'name'}
                                    onChange={this.change}
                                    value={name}
                                    style={{ maxWidth: 500, margin: 'auto', marginTop: 10 }} />
                            </>
                        </Fade>}
                        {page === 1 && <Fade>
                            <>
                                <h3>Please select your class</h3>
                                <TutorQDropdown change={this.change}
                                    name={"classNumber"}
                                    data={this.classes}
                                    initText={"Choose a class"}
                                    value={classNumber} />
                            </>
                        </Fade>}
                        {page === 2 && <Fade>
                            {classNumber
                                ?
                                <>
                                    <h3>Please select a topic</h3>
                                    <TutorQDropdown change={this.change}
                                        name={"problemCategory"}
                                        data={this.topics[classNumber]}
                                        initText={"Choose a topic"}
                                        value={problemCategory} />
                                    <h3 style={{ marginTop: 15 }}>Please describe your problem</h3>
                                    <Input placeholder={'Problem'}
                                        name={'problemDescription'}
                                        onChange={this.change}
                                        value={problemDescription}
                                        style={{ maxWidth: 500, margin: 'auto', marginTop: 30 }} />
                                </>
                                :
                                <h3>Please select a class on the previous page</h3>}
                        </Fade>}
                        {page === 3 && <Fade>
                            <>
                                <h3>Where in the TE Lab are you sitting?</h3>
                                <div>
                                    <StudentLocation student setLocation={this.setLocation} location={location} test="123" />
                                </div>
                            </>
                        </Fade>}
                        {page === 4 && <Fade>
                            <>
                                <h3>Submit</h3>

                                {error !== '' && <Alert color={"danger"}>{error}</Alert>}

                                <Button
                                    style={{ backgroundColor: '#005696' }}
                                    disabled={!valid}
                                    onClick={this.sendDataToFirebase}
                                >
                                    Join the queue!
                                </Button>

                                <p style={{ marginTop: 15 }}>By clicking this button, you acknowledge that your data is collected. See how your data is being used <Link to="/blog/tutordata">here</Link></p>

                            </>
                        </Fade>}
                    </div>
                    {/** Previous and next button */}
                    <TutorQButtons getPageNumber={this.getPageNumber}
                        prevStep={this.prevStep}
                        nextStep={this.nextStep}
                        totalPages={this.totalPages} />
                </>}
        </>
    }
}

        // tutorq
        //     inprogress
        //     helped
//     inqueue // remove from queue when in progress