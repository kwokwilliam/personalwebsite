import React, { useState } from 'react';
import firebase from 'firebase/app';
import 'firebase/functions';
import {
    Card, CardText, CardBody,
    CardTitle, CardSubtitle, Button
} from 'reactstrap';

const removeUserFromQueue = firebase.functions().httpsCallable('removeUserFromQueue');

// TODO: Use an effect to stop setLoading from happening when component unmounts
export default function PersonInQueue({ person }) {
    const [loading, setLoading] = useState(false);

    const { timestamp, name, classNumber, problemCategory, problemDescription, id } = person;
    if (!timestamp) { return null; }
    let dateTimestamp = new Date(timestamp);
    return <Card>
        <CardBody>
            <CardTitle>Name: {name}</CardTitle>
            <CardSubtitle>Course: {classNumber} - {problemCategory}</CardSubtitle>
            <CardText>Submitted: {dateTimestamp.toLocaleDateString()} {dateTimestamp.toLocaleTimeString()}</CardText>
            <CardText>Description: {problemDescription}</CardText>
            <Button disabled={loading} style={{ backgroundColor: "#005696" }} onClick={() => {
                setLoading(true);
                removeUserFromQueue({ id, removedFromQueue: true }).then(r => {
                    setLoading(false);
                    if (!r.data.success) {
                        console.log(r.data);
                    }
                });
            }}>Remove</Button>
        </CardBody>
    </Card>
}