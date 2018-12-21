import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/functions';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
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

export default function TutorQAdminAdminQueue({ uid }) {
    const [currentStudent, setCurrentStudent] = useState(null);
    const [lengthOfQueue, setLengthOfQueue] = useState(0);
    const [loading, setLoading] = useState(false);
    const [confirmFinishModalOpen, setConfirmFinishModalOpen] = useState(false);
    const [confirmFinishAndGetNewStudentModalOpen, setConfirmFinishAndGetNewStudentModalOpen] = useState(false);


    useEffect(() => {
        const inprogressRef = firebase.database().ref(`/tutorq/inprogress/${uid}`);
        inprogressRef.on('value', (snap) => {
            const student = snap.val();
            if (student) {
                setCurrentStudent(student);
            } else {
                setCurrentStudent(null);
            }
            setLoading(false);
        });

        const queueRef = firebase.database().ref(`/tutorq/inqueue`);
        queueRef.on('value', (snap) => {
            const queue = snap.val() || {};
            let length = Object.keys(queue).length;
            setLengthOfQueue(length);
        });

        return () => {
            inprogressRef.off();
            queueRef.off();
        }
    });

    // const { timestamp, name, classNumber, problemCategory, problemDescription, id, location } = currentStudent ? currentStudent : {};
    // let dateTimestamp = timestamp ? new Date(timestamp) : null;

    return <>
        <BackToHubButton />
        {loading && <Loading />}

        {!loading && <>
            <h2 style={{ marginBottom: 50 }}>Size of queue: {lengthOfQueue}</h2>
            {currentStudent && <div>
                {/* <Card>
                    <CardBody>
                        <CardTitle>Name: {name}</CardTitle>
                        <CardSubtitle>Course: {classNumber} - {problemCategory}</CardSubtitle>
                        <CardText>Submitted: {dateTimestamp ? dateTimestamp.toLocaleDateString() : null} {dateTimestamp ? dateTimestamp.toLocaleTimeString() : null}</CardText>
                        <CardText>Description: {problemDescription}</CardText>
                        <StudentLocation student={false} locations={[location]} />
                        <Button style={{ backgroundColor: "#005696" }} onClick={() => {
                            setConfirmFinishModalOpen(true);
                        }}>Finished</Button>
                        <Button style={{ backgroundColor: "#005696" }} onClick={() => {
                            setConfirmFinishAndGetNewStudentModalOpen(true);
                        }}>Finished + Get New Student</Button>
                    </CardBody>
                </Card> */}
            </div>}

            {!currentStudent && <div >
                <div style={{ marginBottom: 10 }}>You currently do not have a student.</div>

                <div>
                    <Button disabled={lengthOfQueue <= 0}
                        style={{ backgroundColor: '#005696' }}
                        onClick={() => {
                            giveTutorStudent().then(r => {
                                console.log(r);
                            });
                        }}>Get student</Button>
                </div>

            </div>}
        </>}

    </>
}