import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import BackToHubButton from '../BackToHubButton';
import { CardDeck } from 'reactstrap';
import PersonInQueue from './Components/PersonInQueue';

export default function TutorQAdminWhoIsInQueue() {
    const [queue, setQueue] = useState({});
    const [mapping, setMapping] = useState({});

    useEffect(() => {
        const queueRef = firebase.database().ref('/tutorq/inqueue');
        queueRef.on('value', (snap) => {
            let queue = snap.val() || {};
            setQueue(queue);
        });

        const mappingRef = firebase.database().ref('/tutorq/idToQueueInfo');
        mappingRef.on('value', (snap) => {
            let mapping = snap.val() || {};
            setMapping(mapping);
        })
        return () => {
            queueRef.off();
            mappingRef.off();
        }
    }, []);

    // creates a clone of the current queue
    let modifiedQueue = { ...queue };

    Object.keys(mapping).forEach(d => {
        if (mapping[d]) {
            let { queueKey, name } = mapping[d];
            let modQueuePointer = modifiedQueue[queueKey];
            if (modQueuePointer) {
                modQueuePointer.name = name;
                modQueuePointer.id = d;
            }
        }
    });

    let queueAsArr = Object.keys(modifiedQueue).sort((a, b) => {
        return modifiedQueue[a].timestamp - modifiedQueue[b].timestamp;
    }).map(d => {
        let person = modifiedQueue[d];
        return <PersonInQueue key={d} person={person} />
    });
    return <>
        <BackToHubButton />
        {queueAsArr.length === 0 && <div>There is nobody in the queue right now.</div>}
        {queueAsArr.length !== 0 && <>
            <h3>There are {queueAsArr.length} people in the queue.</h3>
            <CardDeck style={{ textAlign: 'left' }}>{queueAsArr}</CardDeck>
        </>}
    </>
}