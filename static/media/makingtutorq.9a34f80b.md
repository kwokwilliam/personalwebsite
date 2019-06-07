# Making a Queueing App with React Hooks and Firebase Cloud Functions / Realtime Database

## About and Why
I wanted to make a Queueing App focused towards tutoring individuals and collecting usage data to determine what topics were a common pain point. I would be able to see these topics and rush to make a written explanation that others can immediately find without having to enter the queue. I have a position in my school's Informatics department as an Undergraduate Tutor this upcoming quarter. This tool would help me keep track of who has questions, and who to answer first. Even if I don't end up using it extensively, it is a good proof of concept.

Note I am still learning best practices. I understand that any code snippets below might not be perfect. Please leave me some feedback on better ways to do something if you know of it! Thank you!

## Requirements
There are many requirements for this application:

1. Mobile friendly
2. Able to work with low to decent connection
   * The computer lab I will be working in doesn't have the greatest mobile connection. 
3. FERPA compliant
   * I don't ever collect grades. I anonymized my data as much as possible regardless.
4. Secure and anonymous after the student has been helped
5. Could be used by multiple tutors concurrently
6. Scalable to many individuals per day
7. Stays true to First In First Out via timestamps

Following these requirements, I also wanted to experiment with using [React](https://reactjs.org/)'s upcoming [hooks](https://reactjs.org/docs/hooks-intro.html) feature. I also wanted to experiment with [Firebase Cloud Functions](https://firebase.google.com/docs/functions/) (in the context of async await syntax) because I knew I would need this back end to manage security and make things a lot easier on the front end side.

## Logistics
I thought about how a regular line works in real life. A person might fill out a questionnaire and then join the line. They would want to maybe browse their phone while they are in line. They might have an emergency and have to leave the line. If they are trying to ask for help they might have figured their problem out and leave the line after they figure it out. 

<div style="text-align: center">
    <img src="/blogimgs/makingtutorq/tutorqWhere.png" />
</div>

As such, I had the user fill out their name, class number, problem, a short description, and then tap a map of the room for their location. When they join the queue, they see their position in line as well as the option to remove themselves from the queue.

<div style="text-align: center">
    <img src="/blogimgs/makingtutorq/tutorqSee.png" />
</div>

In order for users to see their position in the queue, the client application would want to either invoke a function that gets their position and length of queue, or just read directly from the database. Because the free tier of firebase is limited to 150,000 function invocations a month, I decided to be safe and just have it read from the database. This is because if I assume I will have around 15 students in the queue on average at once, I will have about (1 + 2 + 3 + .... + 15) * 2 function invocations every single time I do this-- around 240 invocations at worst case. This number gets exponentially higher at even worse cases, and I did want this solution to be scalable. This number is still nowhere near the 150,000 invocation limit, but I decided to just err on the safer side. 

I personally could not think of anything better but to read from the database, but there is probably a solution that I may not have looked into all the way. 

I ensure that the ids to names on firebase are kept in a separate branch that is never accessible to the students. Only the admin can see this information. 

And on the admin side, I would need to be able to see who is in the queue, double check the current logged in user is an admin, remove users from the queue, and get a new student to tutor. I could have done admin checks and logistics for these all on the client side, but it would be a separation of concerns to put it on the server side. I figured that I would run into two admins working at the same time as well. In the end, I only had to write a few lines of code in my front end and not mix in the database logic with the front end.

## Front End + Basic React Hooks
When I was taught to use references to Firebase Realtime Databases with React, I was taught to do something like this:

```jsx
import React, {Component} from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

export default class Example extends Component {
    constructor() {
        super();
        this.state = {
            data: {}
        };
    }

    // When component mounts, set up a reference to firebase database branch
    // then set up a listener so on value change on firebase, it will take
    // the snapshot and set a state to either the snapshot or an empty object
    //
    // Some things to know are:
    // 1. As far as I know, firebase opens up a websocket connection when you 
    //    use on value
    // 2. `null || 'abc'` will always result in the right side of the operator
    //    be what is used. So in this case if snap.val() is null, it will be
    //    instead set to empty object
    componentDidMount() {
        this.dataRef = firebase.database().ref('/branch/url');
        this.dataRef.on('value', (snap) => {
            const data = snap.val() || {};
            this.setState({ data });
        });
    }

    // When the component unmounts, turn off the connection. Otherwise it will 
    // be unnecessarily opened, and will continue to try setting state on an 
    // unmounted component.
    componentWillUnmount() {
        this.dataRef.off();
    }

    render() {
        const { data } = this.state;
        let dataMapped = Object.keys(data).map(d => {
            return <div>{data[d].informationString}</div>;
        });
        return <>
            {dataMapped}
        </>
    }
}
```

There were times where I instantly knew that the above was the format that would immediately create the thing I needed, but I forced myself to use hooks and find out what is a huge pain to do and what was not very clear.

The above in terms of hooks would look like:

```jsx
import React, { useState, useEffect } from 'react';
import firebase from 'firebase/app';
import 'firebase/database';

export default function Example() {
    const [data, setData] = useState({});

    // useEffect acts like a mix between componentDidMount, componentDidUpdate,
    // and componentWillUnmount.
    useEffect(() => {
        // set up the firebase listener, looks the same as earlier
        const dataRef = firebase.database().ref('/branch/url');
        dataRef.on('value', (snap) => {
            const data = snap.val() || {};
            setData(data);
        });

        // This anonymous function that is returned will be invoked
        // when the component unmounts
        return () => {
            dataRef.off();
        }
        
        // This empty array parameter should have variables to 'watch'. For example,
        // if this array had "count" in it, it would re-run this entire effect if
        // the count changed. Because we don't rely on that, we don't put anything inside
        // but it is still necessary to have, otherwise it'll just continuously re-run
        // the effect, which continually creates and destroys the connection.
    }, []);
        
    let dataMapped = Object.keys(data).map(d => {
        return <div>{data[d].informationString}</div>;
    });

    return <>
        {dataMapped}
    </>
}
```

I also used `useRef` in the StudentLocation.js file, but that was a fairly simple usage that doesn't warrant explanation. This is the extent to which I have experimented with hooks. I think I have only scratched the surface of what these are capable of. I could probably condense my code further or make these effects reusable. I didn't want to put everything on this app into hooks, just in case the API changed. That is why I only used basic hooks and didn't mess around much with context and reducer. 

## Firebase Cloud Functions + Async Await

You will be able to see the functions I created with heavy code commenting [here](https://github.com/kwokwilliam/personalsite-firebasefunctions). 

To get started, I simply followed the steps outlined [here](https://firebase.google.com/docs/functions/get-started) on Firebase's functions start guide. However, this only granted me access to the old promise syntax and when I tried to use `async await` it failed to compile. I found out online a very simple fix was to add the following to your `package.json` file:

```json
"engines": {
    "node": "8"
},
```

To start out a single function, I had this as a starting point:

```js
const functions = require('firebase-functions');
const admin = require('firebase-admin');

const func = functions.https.onCall(async (data, context) => {
    
});

module.exports = func;
```

I made sure to call it in the `index.js` file for later deployment. `firebase-admin` allows the function to access the database as an admin. This bypasses any security settings you have on your realtime database. Meaning, I had to take extra care to not return any data that the user should not have access to.

The client would have code that looks like this:

```jsx
import firebase from 'firebase/app';
import 'firebase/functions';

const func = firebase.functions().httpsCallable('func');
func({ abc: 123, def: 234 }).then(response => {
    console.log(response);
});
```

The object gets passed to the function and can be accessed like `data.abc` or `data.def`. The `context` variable allows the function to check things like the user id of the logged in user using `context.auth.uid`. 

`async await` waits for the awaited promise to resolve before going to the next line of code. You can see in one of my functions, `removeUserFromQueue`, I await a push of data into a certain branch and a removal, then I return the success. I currently have not programmed in rollbacking a transaction like you can do in SQL. However, this application is currently not mission critical to that degree. At most, if anything fails along the line, it will only be the post-tutor analysis branch that is negatively affected.

```js
await admin.database().ref(`tutorq/notInQueueAnymore`).push({
    classNumber,
    location,
    problemCategory,
    problemDescription,
    timestampJoinedQueue,
    timestampLeftQueue: admin.database.ServerValue.TIMESTAMP,
    whoHelped,
    reason: removeReason,
    id
});
await dbQueueRef.remove();
await idInfoRef.remove();
return { success: true };
```

## Final product: TutorQ
I wrote mostly a summary of the most technically challenging parts of the program, and my rational behind some of the code structure. If anything is unclear, feel free to ask! I want to know what I should write more on, and what might not have been clear. Hopefully if you have read this, you learned how to use the basics of React hooks or firebase cloud functions.

Thank you for reading!

## Aside
One other thing that was very annoying was on the location selector, Firefox automatically added `position: relative` to the parent element but Chrome did not. It took me about three hours to figure out this problem. 