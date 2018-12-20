import React from 'react';
import firebase from 'firebase/app';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
import 'firebase/auth';
import 'firebase/functions';


export default function TutorQAdminMain({ adminButtons }) {
    return <>
        <div style={{ fontSize: '150%' }}>
            {adminButtons.map(d => {
                return <div key={d.linkTo} style={{ marginBottom: 5 }}>
                    <Button style={{ backgroundColor: "#005696" }}>
                        <Link style={{ textDecoration: 'none', color: 'white' }} to={d.linkTo}>{d.linkText}</Link>
                    </Button>
                </div>
            })}

        </div>
        <div>
            <Button onClick={() => {
                firebase.auth().signOut();
            }}>
                Sign out
            </Button>
        </div>
    </>
}