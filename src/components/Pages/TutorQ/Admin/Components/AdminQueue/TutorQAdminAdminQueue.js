import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/functions';
import {
    Card, CardText, CardBody, CardTitle, CardSubtitle, Button,
    Modal, ModalHeader, ModalFooter
} from 'reactstrap';
import Spinner from 'react-loader-spinner';
import BackToHubButton from '../BackToHubButton';
import StudentLocation from '../../../Components/StudentLocation/StudentLocation';

const Loading = () => <div><Spinner
    type="Oval"
    color="#005696"
    height="100"
    width="100"
/></div>;

const giveTutorStudent = firebase.functions().httpsCallable('giveTutorStudent');
const finishTutorStudent = firebase.functions().httpsCallable('finishTutorStudent');

export default class TutorQAdminAdminQueue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentStudent: null,
            lengthOfQueue: 0,
            loading: false,
            confirmFinishModalOpen: false,
            confirmFinishAndGetNewStudentModalOpen: false,
            uid: props.uid
        }
    }

    componentDidMount() {
        this.inprogressRef = firebase.database().ref(`/tutorq/inprogress/${this.state.uid}`);
        this.inprogressRef.on('value', (snap) => {
            const student = snap.val();
            let currentStudent = null;
            if (student) {
                currentStudent = student;
            }
            this.setState({ loading: false, currentStudent });
        });

        this.queueRef = firebase.database().ref(`/tutorq/inqueue`);
        this.queueRef.on('value', (snap) => {
            const queue = snap.val() || {};
            let lengthOfQueue = Object.keys(queue).length;
            this.setState({ lengthOfQueue });
        });
    }

    componentWillUnmount() {
        this.inprogressRef.off();
        this.queueRef.off();
    }

    toggleFinishModal = () => {
        this.setState({
            confirmFinishModalOpen: !this.state.confirmFinishModalOpen
        })
    }

    toggleFinishAndNewStudentModal = () => {
        this.setState({
            confirmFinishAndGetNewStudentModalOpen: !this.state.confirmFinishAndGetNewStudentModalOpen
        })
    }

    render() {
        const { currentStudent, loading, lengthOfQueue, confirmFinishModalOpen, confirmFinishAndGetNewStudentModalOpen } = this.state;
        const { timestampJoinedQueue, name, classNumber, problemCategory, problemDescription, location } = currentStudent ? currentStudent : {};
        let dateTimestamp = null;

        if (timestampJoinedQueue) {
            dateTimestamp = new Date(timestampJoinedQueue);
        }

        let locations = [];
        locations.push(location);
        return <>
            <BackToHubButton />
            {loading && <Loading />}

            {!loading && <>
                <h2 style={{ marginBottom: 50 }}>Size of queue: {lengthOfQueue}</h2>
                {currentStudent && <div>
                    <Card>
                        <StudentLocation student={false} locations={locations} />
                        <CardBody style={{ textAlign: 'left' }}>
                            <CardTitle>Name: {name}</CardTitle>
                            <CardSubtitle>Course: {classNumber} - {problemCategory}</CardSubtitle>
                            <CardText>Submitted: {dateTimestamp ? dateTimestamp.toLocaleDateString() : null} {dateTimestamp ? dateTimestamp.toLocaleTimeString() : null}</CardText>
                            <CardText>Description: {problemDescription}</CardText>
                            <div style={{ marginBottom: 5 }}><Button style={{ backgroundColor: "#005696" }} onClick={() => {
                                this.setState({ confirmFinishModalOpen: true });
                            }}>Finished</Button></div>
                            <div><Button style={{ backgroundColor: "#005696" }} onClick={() => {
                                this.setState({ confirmFinishAndGetNewStudentModalOpen: true });
                            }} disabled={lengthOfQueue <= 0}>Finished + Get New Student</Button></div>
                        </CardBody>
                    </Card>

                    <Modal isOpen={confirmFinishModalOpen} toggle={this.toggleFinishModal}>
                        <ModalHeader toggle={this.toggleFinishModal}>Confirm finished?</ModalHeader>
                        <ModalFooter>
                            <Button style={{ backgroundColor: "#005696" }} onClick={() => {
                                this.toggleFinishModal();
                                this.setState({ loading: true });
                                finishTutorStudent();
                            }}>Confirm</Button>{' '}
                            <Button color="secondary" onClick={this.toggleFinishModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>

                    <Modal isOpen={confirmFinishAndGetNewStudentModalOpen} toggle={this.toggleFinishAndNewStudentModal}>
                        <ModalHeader toggle={this.toggleFinishAndNewStudentModal}>Confirm finished + get new student?</ModalHeader>
                        <ModalFooter>
                            <Button style={{ backgroundColor: "#005696" }} onClick={() => {
                                this.toggleFinishAndNewStudentModal();
                                this.setState({ loading: true });
                                finishTutorStudent().then(r => {
                                    if (r.data.success) {
                                        giveTutorStudent();
                                    }
                                });
                            }} disabled={lengthOfQueue <= 0}>Confirm</Button>{' '}
                            <Button color="secondary" onClick={this.toggleFinishAndNewStudentModal}>Cancel</Button>
                        </ModalFooter>
                    </Modal>
                </div>}

                {!currentStudent && <div >
                    <div style={{ marginBottom: 10 }}>You currently do not have a student.</div>

                    <div>
                        <Button disabled={lengthOfQueue <= 0}
                            style={{ backgroundColor: '#005696' }}
                            onClick={() => {
                                this.setState({ loading: true });
                                giveTutorStudent();
                            }}>Get student</Button>
                    </div>

                </div>}
            </>}

        </>
    }
}