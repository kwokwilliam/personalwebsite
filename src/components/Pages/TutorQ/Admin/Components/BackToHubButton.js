import React from 'react';
import { Link } from 'react-router-dom';
export default function BackToHubButton() {
    return <div style={{ marginBottom: 10 }}>
        <Link className="btn" style={{ textDecoration: 'none', color: 'white', backgroundColor: "#005696" }} to={"/tutorqadmin"}>Back to admin hub</Link>
    </div>;
}