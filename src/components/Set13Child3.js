import React from 'react'

//! without react.memo component would rerender every time
function Set13Child3({handleClick, children}) {
    console.log("Rendering button - ", children);
    return (
        <button onClick={handleClick}>
            {children}
        </button>
    )
}

export default React.memo(Set13Child3);