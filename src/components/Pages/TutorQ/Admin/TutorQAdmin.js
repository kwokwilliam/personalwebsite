import React, { Component } from 'react';
import firebase from 'firebase';
import { Input, Button, Alert } from 'reactstrap';
import Loader from 'react-loader-spinner'
import 'firebase/auth';


let provider = new firebase.auth.GoogleAuthProvider();

export default class TutorQAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                this.setState({ user, loading: false });
            } else {
                this.setState({ user: null, loading: false });
            }
        });
    }

    render() {
        console.log(this.state.user);
        return <div style={{ textAlign: 'center' }}>
            <h1>
                TutorQ Admin Panel
            </h1>

            {this.state.loading && <div><Loader
                type="Oval"
                color="#005696"
                height="100"
                width="100"
            />   </div>}
            <Button onClick={() => {
                firebase.auth().signInWithRedirect(provider);
            }}>Sign in with Google</Button>
            <Button onClick={() => {
                firebase.auth().signOut();
            }}>Sign out</Button>
            {this.state.user && <>Currently signed in</>}
        </div>
    }
}

//       ".write": "auth != null && root.child('Users').child(auth.uid).child('permission').val() === 'author'"
