import React, { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import TELabMap from './Assets/TELabMap.png'

export default function StudentLocation({ location, setLocation, student, test }) {
    const [imgData, setImgData] = useState({ x: 0, y: 0 });

    // Effect is used as a replacement for the constructor/componentWillUnmount in this case.
    // I want an event listener to listen for window resizes so I can modify where the circle is
    // But this ran when the component wasn't loaded, causing performance issues.
    // The callback function removes all the listeners.
    useEffect(() => {
        let resize = () => {
            console.log('test')
        }
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        }
    })

    return <div style={{ height: '60%' }}>
        <img src={TELabMap} style={{ maxHeight: '50vh', maxWidth: '90vw' }} onClick={(e) => {
            let { offsetLeft, offsetTop, width, height } = e.target
            setImgData({ x: offsetLeft, y: offsetTop, width, height });
            // console.log(e.target.offsetLeft, e.target.height);
        }} />
        <div style={{ position: 'absolute', left: imgData.x, top: imgData.y, transform: 'translate(-50%, -50%)' }}><FontAwesomeIcon icon={faCircle} /></div>
    </div>
}