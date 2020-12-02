import React from 'react'

//! without react.memo component would rerender every time
function Set13Child2({text, count}) {
    console.log(`Rendering ${text}`);
    return (
        <div>
            {text} - {count}
        </div>
    )
}

export default React.memo(Set13Child2);