import React, { useState } from 'react';
import TELabMap from './Assets/TELabMap.png'

export default function StudentLocation({ location, setLocation, student }) {

    return <div style={{ height: '60%' }}>
        <img src={TELabMap} style={{ maxHeight: '50vh', maxWidth: '90vw' }} />
    </div>
}