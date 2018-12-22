import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import { Grid } from 'react-flexbox-grid';
import firebase from 'firebase/app';
import 'firebase/database';
import cookies from 'browser-cookies';
import ReactMarkdown from 'react-markdown';
import CodeBlock from './CodeBlock';
import './Blog.css';

/**
 * The Blog class handles getting and generating the blog post based on the path
 * @class
 */
export default class Blog extends Component {
    constructor(props) {
        super(props);

        this.state = {
            blogString: ""
        }

        // if (!sessionStorage.getItem("blogVisited")) {
        // sessionStorage.setItem("blogVisited", true);
        let id = cookies.get('id');
        firebase.database().ref('/blogPageView').push({
            timestamp: firebase.database.ServerValue.TIMESTAMP,
            id,
            post: this.props.post
        });
        // }

    }


    async componentWillMount() {
        // console.log(this.props.post);

        // IGNORE THIS JANK 
        // I first dynamically import it in order to get the markdown file path,
        // then I fetch it based on that dynamic path. This is important for code
        // splitting.
        try {
            const file = await import(`../../../assets/blogposts/${this.props.post}.md`)
            const fetchFile = await fetch(file.default);
            const blogString = await fetchFile.text();
            this.setState({ blogString });
        } catch (e) {
            console.log(e);
            this.renderError("Blog not found, please refresh or try again");
        }
    }

    renderError(error) {
        this.setState({
            error
        });
    }

    render() {
        return <div style={{
            backgroundColor: 'white',
            borderRadius: this.props.mobile ? 10 : 20,
            padding: this.props.mobile ? 5 : 30
        }}><Grid fluid>
                {this.state.error &&
                    <p>{this.state.error}</p>
                }
                {this.state.blogString &&
                    <Fade clear when={this.state.blogString !== ""}><ReactMarkdown source={this.state.blogString}
                        renderers={{
                            code: CodeBlock,
                        }}
                        escapeHtml={false}
                        className={`wkmd ${this.props.mobile ? 'wkmd-m' : ''}`} />
                    </Fade>
                }
            </Grid >
        </div>
    }
}
