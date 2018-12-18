import React, { Component } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';
import BackToHubButton from '../BackToHubButton';
import { CardDeck } from 'reactstrap';
import PersonInQueue from './Components/PersonInQueue';

export default class TutorQAdminWhoIsInQueue extends Component {
    constructor(props) {
        super(props);
        this.state = {
            queue: {},
            mapping: {}
        }

    }

    componentDidMount() {
        this.queueRef = firebase.database().ref('/tutorq/inqueue');

        this.queueRef.on('value', (snap) => {
            let queue = snap.val() || {};
            this.setState({ queue });
        });

        this.mappingRef = firebase.database().ref('/tutorq/idToQueueInfo');

        this.mappingRef.on('value', (snap) => {
            let mapping = snap.val() || {};
            this.setState({ mapping });
        })
    }

    componentWillUnmount() {
        this.queueRef.off();
        this.mappingRef.off();
    }

    render() {
        const { queue, mapping } = this.state;
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

        let queueAsArr = Object.keys(modifiedQueue).map(d => {
            let person = modifiedQueue[d];
            return <PersonInQueue key={d} person={person} />
        })
        return <>
            <BackToHubButton />
            {queueAsArr.length === 0 && <div>There is nobody in the queue right now.</div>}
            {queueAsArr.length !== 0 && <>
                <h3>There are {queueAsArr.length} people in the queue.</h3>
                <CardDeck style={{ textAlign: 'left' }}>{queueAsArr}</CardDeck>
            </>}
        </>
    }
}


