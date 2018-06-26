import React, { Component } from 'react';
import Anime from 'react-anime';
import './Gear.css';

export default class Gear extends Component {
    constructor(props) {
        // Gear
        //  prop
        //     Loaded
        //     mobile
        //  state
        //     position {x%,y%}
        //     size
        //     showW
        //     showK
        //     spinning
        // viewbox numbers
        // width and height numbers
        // duration

        super(props);
        this.state = {
            position: { xPercent: 0.5, yPercent: 0.5 }, // position is stored as an xy object with percentages
            documentSize: { x: window.innerWidth, y: window.innerHeight },
            showW: true,
            showK: true,
            spinning: false
        }

        this.viewboxNumbers = "-230 562 460 460" // play around with these numbers when resizing
        this.width = 460;
        this.height = 460;
        this.duration = 3000;
        this.delay = 300;
    }
}