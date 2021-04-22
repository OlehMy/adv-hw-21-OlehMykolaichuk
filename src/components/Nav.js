import React from 'react';
import { NavLink } from "react-router-dom";

const links = [
    {
        to: '/adv-hw-21-OlehMykolaichuk/',
        label: 'Home',
    },
    {
        to: '/adv-hw-21-OlehMykolaichuk/posts',
        label: 'Posts',
    },
    {
        to: '/adv-hw-21-OlehMykolaichuk/photos',
        label: 'Photos',
    },
    {
        to: '/adv-hw-21-OlehMykolaichuk/contacts',
        label: 'Contacts',
    },
];

const Nav = () => {
    return (
        <nav>
            <ul className = "flex">
                {links.map(link => (
                    <li key = {link.to}>
                        <NavLink exact to = {link.to} activeClassName = "active">{link.label}</NavLink>
                    </li>
                ))}
            </ul>
        </nav>
    )    
};

export default Nav;