import React, { Component } from 'react';
import firebase from 'firebase/app';
import { Button } from 'reactstrap';
import { Route } from 'react-router-dom';
import Spinner from 'react-loader-spinner';
import 'firebase/auth';
import Loadable from 'react-loadable';

const Loading = () => <div><Spinner
    type="Oval"
    color="#005696"
    height="100"
    width="100"
/></div>;

const TutorQAdminMain = Loadable({
    loader: () => import('./Components/Main/TutorQAdminMain'),
    loading: Loading,
})

const TutorQAdminWhoIsInQueue = Loadable({
    loader: () => import('./Components/WhoInQueue/TutorQAdminWhoIsInQueue'),
    loading: Loading,
})

let provider = new firebase.auth.GoogleAuthProvider();

export default class TutorQAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true
        }

        this.adminButtons = [
            {
                linkTo: "/tutorqadmin/adminqueue",
                linkText: "Main Admin Tool"
            },
            {
                linkTo: "/tutorqadmin/whosinqueue",
                linkText: "See Queue List"
            },
            {
                linkTo: "/tutorqadmin/seatingdistribution",
                linkText: "Seating Distribution"
            },
            {
                linkTo: "/tutorqadmin/statistics",
                linkText: "Tutor Statistics"
            }
        ]
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
        const { loading, user } = this.state;
        return <div style={{ textAlign: 'center' }}>
            <h1 style={{ marginBottom: '5vh' }}>
                TutorQ Admin Panel
            </h1>

            {loading && <div><Spinner
                type="Oval"
                color="#005696"
                height="100"
                width="100"
            /></div>}

            {!loading && !user && <div>
                <Button onClick={() => {
                    firebase.auth().signInWithRedirect(provider);
                }} style={{ backgroundColor: "#005696" }}>Sign in with Google</Button>
            </div>}

            {user && <>
                <Route exact path={"/tutorqadmin"} render={() => <TutorQAdminMain adminButtons={this.adminButtons} />} />
                <Route path={"/tutorqadmin/whosinqueue"} render={() => <TutorQAdminWhoIsInQueue />} />
            </>}
        </div>
    }
}

//       ".write": "auth != null && root.child('Users').child(auth.uid).child('permission').val() === 'author'"

// tutorq/adminList/uid
