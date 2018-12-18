import React from 'react';
import { Button } from 'reactstrap';
import { Link } from 'react-router-dom';
export default function BackToHubButton() {
    return <div style={{ marginBottom: 10 }}>
        <Button style={{ backgroundColor: "#005696" }}>
            <Link style={{ textDecoration: 'none', color: 'white' }} to={"/tutorqadmin"}>Back to admin hub</Link>
        </Button>
    </div>;
}