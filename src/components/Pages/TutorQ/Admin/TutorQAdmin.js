import React, { Component } from 'react';
import firebase from 'firebase/app';
import { Button } from 'reactstrap';
import { Route } from 'react-router-dom';
import Spinner from 'react-loader-spinner';
import 'firebase/auth';
import 'firebase/functions';
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
});

const TutorQAdminWhoIsInQueue = Loadable({
    loader: () => import('./Components/WhoInQueue/TutorQAdminWhoIsInQueue'),
    loading: Loading,
});

const TutorQAdminAdminQueue = Loadable({
    loader: () => import('./Components/AdminQueue/TutorQAdminAdminQueue'),
    loading: Loading,
});

const TutorQAdminSeatingDistribution = Loadable({
    loader: () => import('./Components/SeatingDistribution/TutorQAdminSeatingDistribution'),
    loading: Loading,
});

let provider = new firebase.auth.GoogleAuthProvider();
const isUserAdmin = firebase.functions().httpsCallable('isUserAdmin');

export default class TutorQAdmin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            user: null,
            loading: true,
            admin: false
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
            // {
            //     linkTo: "/tutorqadmin/statistics",
            //     linkText: "Tutor Statistics"
            // }
        ]
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged(user => {
            if (user) {
                isUserAdmin().then(r => {
                    if (r.data) {
                        this.setState({ admin: true, user, loading: false });
                    } else {
                        this.setState({ admin: false, user, loading: false });
                    }
                })
            } else {
                this.setState({ user: null, loading: false });
            }
        });
    }

    render() {
        const { loading, user, admin } = this.state;
        return <div style={{ textAlign: 'center' }}>
            <h1 style={{ marginBottom: '5vh' }}>
                TutorQ Admin Panel
            </h1>

            {loading && <Loading />}

            {!loading && !user && <div>
                <Button onClick={() => {
                    firebase.auth().signInWithRedirect(provider);
                }} style={{ backgroundColor: "#005696" }}>Sign in with Google</Button>
            </div>}

            {user && admin && <>
                <Route exact path={"/tutorqadmin"} render={() => <TutorQAdminMain adminButtons={this.adminButtons} />} />
                <Route path={"/tutorqadmin/adminqueue"} render={() => <TutorQAdminAdminQueue uid={user.uid} />} />
                <Route path={"/tutorqadmin/whosinqueue"} render={() => <TutorQAdminWhoIsInQueue />} />
                <Route path={"/tutorqadmin/seatingdistribution"} render={() => <TutorQAdminSeatingDistribution />} />
            </>}

            {user && !admin && <>
                <h1>You are not permitted to view this page.</h1>
                <Button onClick={() => {
                    firebase.auth().signOut();
                }}>
                    Sign out
                </Button>
            </>}
        </div>
    }
}

// TODO: CONCURRENCY AND SLOW INTERNET