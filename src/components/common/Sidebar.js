import React from 'react';
import {Link} from 'react-router-dom';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

function SideBar(){
    return (
        <>
<div className="sidebar">
  <Link to="#home">Home</Link>
  <Link to="#about">About</Link>
  <Link to="#contact">Contact</Link>
</div>
</>
    );
}

export default SideBar;