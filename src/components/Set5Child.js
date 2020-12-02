import React from 'react'

//Showcases memos and fragments
function Set5Child({name}) {    
    console.log("Render: Set5Child");
    return (
        <React.Fragment>            
            <h1>{name}: Using a fragment to avoid a wrapping div</h1>
        </React.Fragment>
    )
}

export default React.memo(Set5Child)
