# Making a Queueing App with React Hooks and Firebase Cloud Functions

## About and Why
I wanted to make a Queueing App focused towards tutoring individuals and collecting usage data to determine what topics were a common pain point. I would be able to see these topics and rush to make a written explanation that others can immediately find without having to enter the queue. I have a position in my school's Informatics department as an Undergraduate Tutor this upcoming quarter. This tool would help me keep track of who has questions, and who to answer first. Even if I don't end up using it extensively, it is a good proof of concept.

## Requirements
There are many requirements for this application:

1. Mobile friendly
1. Able to work with low to decent connection
   * The computer lab I will be working in doesn't have the greatest mobile connection. 
2. FERPA compliant
   * I don't ever collect grades. I anonymized my data as much as possible regardless.
3. Secure and anonymous after the student has been helped
4. Could be used by multiple tutors concurrently
5. Scalable to many individuals per day
6. Stays true to First In First Out via timestamps

Following these requirements, I also wanted to experiment with using [React](https://reactjs.org/)'s upcoming [hooks](https://reactjs.org/docs/hooks-intro.html) feature. I also wanted to experiment with [Firebase Cloud Functions](https://firebase.google.com/docs/functions/) because I knew I would need this back end to manage security and make things a lot easier on the front end side.

## Logistics
I thought about how a regular line works in real life. A person might fill out a questionnaire and then join the line. They would want to maybe browse their phone while they are in line. They might have an emergency and have to leave the line. If they are trying to ask for help they might have figured their problem out and leave the line after they figure it out. 

<div style="text-align: center">
    <img src="/blogimgs/makingtutorq/tutorqWhere.png" />
</div>

As such, I had the user fill out their name, class number, problem, a short description, and then tap a map of the room for their location. When they join the queue, they see their position in line as well as the option to remove themselves from the queue.

<div style="text-align: center">
    <img src="/blogimgs/makingtutorq/tutorqSee.png" />
</div>

## Boring Front End



concurrency, slow internet is a real problem
security of students names and separating out into a new branch
location with hooks and painful firefox vs chrome