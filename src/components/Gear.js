import React, { Component } from 'react';
import Anime from 'react-anime';
import Fade from 'react-reveal/Fade';
import './Gear.css';

export default class Gear extends Component {
    constructor(props) {
        super(props);
        this.state = {
            position: { xPercent: 0.5, yPercent: 0.5 }, // position is stored as an xy object with percentages
            documentSize: { x: window.innerWidth, y: window.innerHeight },
            showW: true,
            showK: true,
            spinning: false,

            // used
            show: true

            // react transition group
        }

        if(this.state.documentSize.x < 560) {
            this.width = this.state.documentSize.x * 0.8;
            this.height = this.width;
        } else {
            this.height = this.state.documentSize.y * 0.4;
            this.width = this.height;
        }
        this.viewboxNumbers = "-230 562 460 460" // play around with these numbers when resizing

        setInterval(() => {
            if(this.mounted) this.setState({spinning: true})
        }, 1000);

        setInterval(() => {
            if(this.mounted) this.props.fadeOutGear();
        }, 1500);
    }

    componentWillMount() {
        this.mounted = true;
    }

    componentWillUnmount() {
        this.mounted = false;
    }

    render() {
        return (
            <div style={{overflowX: 'hidden', overflowY: 'hidden'}}>
                <svg style={{ display: 'block', margin: 'auto'}} className={`${this.state.spinning ? 'spin' : ''} ${this.state.show ? 'show' : 'hide'}`} version="1.1" xmlns="http://www.w3.org/2000/svg" width={this.width} height={this.height} viewBox="-230 562 460 460">
                    {/* Must go into react-anime.js and comment out the componentWillReceiveProps
                        method because it is bugged */}
                    <Anime easing="easeOutCubic"
                        duration={500}
                        loop={false}
                        delay={(el, index) => index * 200}
                        strokeDashoffset={(el) => {
                            var pathLength = 0;
                            if (el.getTotalLength) {
                                pathLength = el.getTotalLength();
                                el.setAttribute('stroke-dasharray', pathLength);
                            }
                            return [pathLength, 0];
                        }
                        }
                        key={"1"}>
                        <circle className="st1" cx="0.172" cy="792" r="164.928"/>
                        <path className="st1" d="
                            M226.84,806.436V777.54c-10.004,0-18.738-4.737-23.651-11.835c-1.192-9.3-2.988-18.407-5.383-27.274
                            c1.85-8.403,8.09-16.083,17.294-19.895l-11.057-26.697c-9.229,3.823-19.095,2.797-26.348-1.863
                            c-4.632-8.049-9.784-15.754-15.43-23.067c-1.548-8.497,1.271-18.028,8.344-25.101l-20.433-20.433
                            c-7.073,7.073-16.598,9.9-25.09,8.356c-7.31-5.643-15.012-10.793-23.058-15.423c-4.665-7.256-5.699-17.125-1.876-26.353
                            l-26.697-11.059c-3.813,9.205-11.484,15.448-19.882,17.3c-8.87-2.397-17.981-4.193-27.285-5.385
                            c-7.105-4.914-11.851-13.647-11.851-23.65H-14.46c0,10.004-4.737,18.738-11.835,23.651c-9.297,1.192-18.401,2.987-27.266,5.381
                            c-8.397-1.852-16.068-8.096-19.881-17.301l-26.697,11.057c3.822,9.228,2.788,19.098-1.878,26.353
                            c-8.049,4.631-15.755,9.783-23.068,15.429c-8.493,1.544-18.016-1.283-25.09-8.356l-20.433,20.433
                            c7.073,7.073,9.892,16.603,8.344,25.1c-5.644,7.31-10.794,15.011-15.424,23.057c-7.253,4.659-17.119,5.684-26.348,1.861
                            l-11.059,26.697c9.204,3.813,15.444,11.493,17.293,19.896c-2.397,8.87-4.194,17.981-5.387,27.285
                            c-4.913,7.098-13.647,11.835-23.651,11.835v28.896c10.004,0,18.737,4.746,23.65,11.851c1.192,9.3,2.987,18.408,5.382,27.275
                            c-1.852,8.397-8.096,16.068-17.301,19.88l11.058,26.697c9.228-3.822,19.098-2.788,26.353,1.878
                            c4.631,8.05,9.783,15.755,15.429,23.068c1.544,8.493-1.283,18.016-8.356,25.09l20.433,20.433c7.073-7.073,16.603-9.892,25.1-8.344
                            c7.31,5.644,15.012,10.794,23.057,15.424c4.659,7.253,5.684,17.119,1.861,26.348l26.697,11.059
                            c3.813-9.204,11.493-15.444,19.896-17.293c8.87,2.397,17.981,4.194,27.285,5.387c7.098,4.913,11.835,13.647,11.835,23.651h28.896
                            c0-10.004,4.746-18.737,11.851-23.65c9.303-1.192,18.413-2.988,27.283-5.385c8.403,1.85,16.083,8.09,19.895,17.294l26.697-11.057
                            c-3.823-9.229-2.797-19.095,1.863-26.348c8.049-4.632,15.754-9.784,23.067-15.43c8.497-1.548,18.028,1.271,25.101,8.344
                            l20.433-20.433c-7.073-7.073-9.9-16.597-8.356-25.09c5.643-7.31,10.793-15.012,15.423-23.058c7.256-4.665,17.125-5.699,26.353-1.877
                            l11.059-26.697c-9.205-3.813-15.449-11.484-17.3-19.882c2.397-8.87,4.193-17.981,5.385-27.285
                            C208.103,811.183,216.835,806.436,226.84,806.436z"/>
                            <path className="st1" d="M-30.474,832.93l-9.463,0.091
                            l-16.832-49.131l-16.741,49.131l-9.462-0.091l-15.832-71.059h-3.73c-1.82,0-3.125-0.364-3.913-1.092
                            c-0.789-0.728-1.183-1.667-1.183-2.821c0-1.092,0.394-2.001,1.183-2.729c0.788-0.728,2.093-1.092,3.913-1.092h21.017
                            c1.82,0,3.124,0.364,3.913,1.092c0.788,0.728,1.183,1.669,1.183,2.821c0,1.092-0.395,2.001-1.183,2.729
                            c-0.789,0.728-2.093,1.092-3.913,1.092h-9.735l13.557,60.595l16.286-48.403h9.099l16.741,48.403l13.011-60.595h-9.644
                            c-1.82,0-3.14-0.364-3.958-1.092c-0.819-0.728-1.229-1.667-1.229-2.821c0-1.092,0.394-2.001,1.183-2.729
                            c0.788-0.728,2.123-1.092,4.004-1.092h20.926c1.88,0,3.215,0.364,4.004,1.092c0.787,0.728,1.183,1.669,1.183,2.821
                            c0,1.092-0.396,2.001-1.183,2.729c-0.789,0.728-2.124,1.092-4.004,1.092h-3.64L-30.474,832.93z"/>
                            <path className="st1" d="M39.493,798.902v34.028H21.569
                            c-1.819,0-3.124-0.364-3.912-1.092c-0.789-0.728-1.183-1.638-1.183-2.729c0-1.151,0.394-2.077,1.183-2.775
                            c0.788-0.697,2.093-1.046,3.912-1.046H31.85v-98.809H21.569c-1.819,0-3.124-0.364-3.912-1.092c-0.789-0.728-1.183-1.667-1.183-2.82
                            c0-1.092,0.394-2.002,1.183-2.729c0.788-0.728,2.093-1.092,3.912-1.092h17.925v70.422l32.48-27.295h-3.912
                            c-1.819,0-3.124-0.364-3.912-1.092c-0.789-0.728-1.183-1.638-1.183-2.729c0-1.152,0.394-2.093,1.183-2.821
                            c0.788-0.728,2.093-1.092,3.912-1.092h24.475c1.88,0,3.215,0.364,4.004,1.092c0.787,0.728,1.183,1.669,1.183,2.821
                            c0,1.092-0.396,2.001-1.183,2.729c-0.789,0.728-2.124,1.092-4.004,1.092h-8.825l-29.843,24.93l37.759,38.486h8.825
                            c1.879,0,3.214,0.35,4.003,1.046c0.788,0.698,1.184,1.624,1.184,2.775c0,1.092-0.396,2.001-1.184,2.729
                            c-0.789,0.728-2.124,1.092-4.003,1.092H75.705c-1.819,0-3.124-0.364-3.912-1.092c-0.789-0.728-1.183-1.638-1.183-2.729
                            c0-1.151,0.394-2.077,1.183-2.775c0.788-0.697,2.093-1.046,3.912-1.046h5.368l-32.845-33.755L39.493,798.902z"/>
                    </Anime>
                </svg>
                <Fade duration={500}>
                    <div style={{textAlign: 'center', fontSize: 50, width: '80%', margin: 'auto', color: "#005696"}}>
                        <div>
                            William Kwok
                        </div>
                        <div style={{height: 2, width: '80%', backgroundColor: '#005696', margin: 'auto'}}></div>
                        <div>
                            UW Informatics 2020
                        </div>
                    </div>
                </Fade>
            </div>
        )
    }
}