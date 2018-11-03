import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Grid } from 'react-flexbox-grid';
import firebase from 'firebase/app';
import 'firebase/database';
import cookies from 'browser-cookies';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import './Blog.css';

export default class About extends Component {
    constructor() {
        super();

        this.state = {
            blogString: ""
        }

        if (!sessionStorage.getItem("blogVisited")) {
            sessionStorage.setItem("blogVisited", true);
            let id = cookies.get('id');
            firebase.database().ref('/blogPageView').push({
                timestamp: firebase.database.ServerValue.TIMESTAMP,
                id
            });
        }

    }

    componentWillMount() {
        // console.log(this.props.post);

        // IGNORE THIS JANK 
        // I first dynamically import it in order to get the markdown file path,
        // then I fetch it based on that dynamic path. This is important for code
        // splitting.
        import(`../assets/blogposts/${this.props.post}.md`).then(d =>
            fetch(d)
                .then(e => e.text())
                .then(blogString => { this.setState({ blogString }) })
                .catch(e => {
                    console.log(e);
                    this.renderError("Blog not found, please refresh or try again");
                })
        )
    }

    renderError(error) {
        this.setState({
            error
        });
    }

    render() {
        return <div style={{
            backgroundColor: 'white',
            borderRadius: 20,
            padding: 30
        }}><Grid fluid>
                {this.state.error &&
                    <p>{this.state.error}</p>
                }
                {this.state.blogString &&
                    <Fade clear when={this.state.blogString !== ""}><ReactMarkdown source={this.state.blogString}
                        renderers={{
                            code: CodeBlock,
                        }}
                        className={'wkmd'} />
                    </Fade>
                }
            </Grid >
        </div>
    }
}
