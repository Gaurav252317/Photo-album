import React from 'react';
// import pages from "../src/pages";

const NavLinks=()=> {
  return (
        <ul>
            <li>
                <a href='/header'>Home</a>
            </li>
            <li>
                <a href='/video'>Video Album</a>
            </li>
            <li>
                <a href='/hidden-security'>Hidden Album</a>
            </li>
            <li>
                <a href='/'>Logout</a>
            </li>
        </ul>
  )
}

export default NavLinks