import React from 'react';
import { NavLink } from "react-router-dom";

const links = [
    {
        to: '/',
        label: 'Home',
    },
    {
        to: '/posts',
        label: 'Posts',
    },
    {
        to: '/photos',
        label: 'Photos',
    },
    {
        to: '/contacts',
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