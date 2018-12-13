import React, { useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import './TutorQDropdown.css';

export default function TutorQDropdown({ name, data, change, initText, classNumber }) { //
    const [dropdownOpen, setDropdownOpen] = useState(false);
    let asdf = () => {
        console.log('asdf')
    }
    return <Dropdown name={name}
        isOpen={dropdownOpen}
        toggle={() => { setDropdownOpen(!dropdownOpen) }}>
        <DropdownToggle caret>
            {classNumber ? classNumber : initText}
        </DropdownToggle>
        <DropdownMenu onChange={asdf}>
            {data.map(d => <DropdownItem key={d}
                onClick={() => change({ target: { name, value: d } })}
                style={{ cursor: 'pointer' }}>
                {d}
            </DropdownItem>)}
        </DropdownMenu>
    </Dropdown>
}