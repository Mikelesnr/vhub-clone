import React from 'react';
import {Link} from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHashtag, faV, faUserGroup } from '@fortawesome/free-solid-svg-icons';


function SideBar(){
    return (
        <>
<div className="sidebar">
  <Link to="#home"><FontAwesomeIcon icon={faV} style={{fontSize:'36px',color:'blue'}}/></Link>
  <Link to="#about"><FontAwesomeIcon icon={faUserGroup} style={{fontSize:'36px',color:'blue'}}/></Link>
  <Link to="#contact"><FontAwesomeIcon icon={faHashtag} style={{fontSize:'36px',color:'blue'}}/></Link>
</div>
</>
    );
}

export default SideBar;