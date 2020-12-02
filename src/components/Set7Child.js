import React from 'react'
import ReactDOM from 'react-dom';

//Showcases portals
export default function Set7Child() {      
    return ReactDOM.createPortal(
        <h3>
            Portal element
        </h3>
    , document.getElementById("portal-root"));    
}
