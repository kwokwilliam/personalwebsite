import React, { Component, useState } from 'react';
import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

export default function TutorQDropdown() { //{ name, data, change }
    const [dropdownOpen, setDropdownOpen] = useState(false);
    console.log(dropdownOpen);
    return <Dropdown isOpen={dropdownOpen} toggle={() => { setDropdownOpen(!dropdownOpen) }}>
        <DropdownToggle caret>
            Dropdown
        </DropdownToggle>
        <DropdownMenu>
            <DropdownItem>Header</DropdownItem>
            <DropdownItem disabled>Action</DropdownItem>
            <DropdownItem>Another Action</DropdownItem>
            <DropdownItem divider />
            <DropdownItem>Another Action</DropdownItem>
        </DropdownMenu>
    </Dropdown>
}