import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircle } from '@fortawesome/free-regular-svg-icons';
import TELabMap from './Assets/TELabMap.png'

export default function StudentLocation({ locations, setLocation, student }) {
    const [imgData, setImgData] = useState({ x: 0, y: 0, width: 0, height: 0 });
    const imgRef = useRef(null);

    // Effect is used as a replacement for the constructor/componentWillUnmount in this case.
    // I want an event listener to listen for window resizes so I can modify where the circle is
    // But this ran when the component wasn't loaded, causing performance issues.
    // The callback function removes all the listeners.
    useEffect(() => {
        let resize = () => {
            if (imgRef.current) {
                let { offsetLeft, offsetTop, width, height } = imgRef.current;
                setImgData({ x: offsetLeft, y: offsetTop, width, height });
            }
        }
        if ((imgRef.current && imgData.x === 0 && imgData.y === 0) || (imgData.width === 0 || imgData.height === 0)) {
            let { offsetLeft, offsetTop, width, height } = imgRef.current;
            setImgData({ x: offsetLeft, y: offsetTop, width, height });
        }
        window.addEventListener('resize', resize);
        return () => {
            window.removeEventListener('resize', resize);
        }
    })
    return <div style={{ height: '60%' }}>
        <img alt={"TE Lab Map. Please see one of the tutors if you need any accessibility accommodations and tutoring."} ref={imgRef} src={TELabMap} style={{ maxHeight: '50vh', maxWidth: '90vw' }} onClick={(e) => {
            if (student && setLocation) {
                const { offsetLeft, offsetTop, width, height } = e.target
                const locationObj = {
                    xPercentage: (e.pageX - offsetLeft) / width,
                    yPercentage: (e.pageY - offsetTop) / height
                };
                setImgData({ x: offsetLeft, y: offsetTop, width, height });
                setLocation(locationObj);
            }
        }} />
        {locations && locations.map((d, i) => <div key={'loc-' + i} style={{
            position: 'absolute',
            left: imgData.x + (d ? d.xPercentage * imgData.width : 0),
            top: imgData.y + (d ? d.yPercentage * imgData.height : 0),
            transform: 'translate(-50%, -50%)',
            display: d ? '' : 'none'
        }}><FontAwesomeIcon icon={faCircle} size={'2x'} style={{ color: 'red' }} /></div>)}
    </div>
}