import React from 'react'

//! without react.memo component would rerender every time
function Set13Child1() {
    console.log('Rendering title');
    return (
        <div>
            useCallback Hook
        </div>
    )
}

export default React.memo(Set13Child1);
