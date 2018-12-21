import React, { Component } from 'react';
import StudentLocation from '../../../Components/StudentLocation/StudentLocation';
import firebase from 'firebase/app';
import 'firebase/database';

export default class TutorQAdminSeatingDistribution extends Component {
    constructor() {
        super();

        this.state = {
            queueList: {}
        }
    }


    componentDidMount() {
        this.queueRef = firebase.database().ref(`/tutorq/inqueue`);
        this.queueRef.on('value', (snap) => {
            let queueVal = snap.val() || {};
            this.setState({ queueList: queueVal });
        });
    }

    componentWillUnmount() {
        this.queueRef.off();
    }

    render() {
        const { queueList } = this.state;
        let locations = Object.keys(queueList).map(d => {
            console.log(queueList[d]);
            return queueList[d].location;
        })
        return <>
            <StudentLocation locations={locations} student={false} />
        </>
    }
}