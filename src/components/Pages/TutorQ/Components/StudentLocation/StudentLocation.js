import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import TELabMap from './Assets/TELabMap.png'

export default function StudentLocation({ location, setLocation, student }) {
    const [imgData, setImgData] = useState({ x: 0, y: 0 });
    return <div style={{ height: '60%' }}>
        <img src={TELabMap} style={{ maxHeight: '50vh', maxWidth: '90vw' }} onClick={(e) => {
            let { offsetLeft, offsetTop, width, height } = e.target
            setImgData({ x: offsetLeft, y: offsetTop, width, height });
            // console.log(e.target.offsetLeft, e.target.height);
        }} />
        <div style={{ position: 'absolute', left: imgData.x, top: imgData.y }}><FontAwesomeIcon icon={faCircle} /></div>
    </div>
}