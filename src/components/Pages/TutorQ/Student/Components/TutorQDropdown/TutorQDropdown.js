import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './TutorQDropdown.css';

export default function TutorQDropdown({ name, data, change, initText, value }) { //
    const [dropdownOpen, setDropdownOpen] = useState(false);
    let asdf = () => {
        console.log('asdf')
    }
    return <Dropdown name={name}
        isOpen={dropdownOpen}
        toggle={() => { setDropdownOpen(!dropdownOpen) }}>
        <DropdownToggle caret
            style={{ zIndex: 500, backgroundColor: '#005696' }}>
            {value ? value : initText}
        </DropdownToggle>
        <DropdownMenu onChange={asdf} style={{ zIndex: 500 }}>
            {data.map(d => <DropdownItem key={d}
                onClick={() => change({ target: { name, value: d } })}
                style={{ cursor: 'pointer' }}>
                {d}
            </DropdownItem>)}
        </DropdownMenu>
    </Dropdown>
}