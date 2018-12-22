import React, { useState, useEffect } from 'react';
import StudentLocation from '../../../Components/StudentLocation/StudentLocation';
import firebase from 'firebase/app';
import 'firebase/database';
import BackToHubButton from '../BackToHubButton';

export default function TutorQAdminSeatingDistribution() {
    const [queueList, setQueueList] = useState({});

    useEffect(() => {
        const queueRef = firebase.database().ref(`/tutorq/inqueue`);
        queueRef.on('value', (snap) => {
            let queueVal = snap.val() || {};
            setQueueList(queueVal);
        });

        return () => {
            queueRef.off();
        }
    }, []);

    const locations = Object.keys(queueList).map(d => {
        return queueList[d].location;
    })
    return <>
        <BackToHubButton />
        <StudentLocation locations={locations} student={false} />
    </>
}