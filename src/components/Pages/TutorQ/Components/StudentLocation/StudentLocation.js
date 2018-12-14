import React, { useState, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import TELabMap from './Assets/TELabMap.png'

export default function StudentLocation({ location, setLocation, student }) {
    const [imgPos, setImgPos] = useState({ x: 0, y: 0 });
    const imgRef = useRef(null);
    return <div style={{ height: '60%' }}>
        <img ref={imgRef} src={TELabMap} style={{ maxHeight: '50vh', maxWidth: '90vw' }} onClick={(e) => {
            setImgPos({ x: e.target.offsetLeft, y: e.target.offsetTop });
            console.log(e.target.offsetLeft, e.target.height);
        }} />
        <div style={{ position: 'absolute', left: imgPos.x, top: imgPos.y }}><FontAwesomeIcon icon={faCircle} /></div>
    </div>
}