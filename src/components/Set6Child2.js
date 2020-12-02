import React from 'react'

//Showcases ref forwarding
const Set6Child2 = React.forwardRef((props, ref) => {
    return (
        <React.Fragment>
            <input type="text" ref={ref}/>
        </React.Fragment>
    )
});

export default Set6Child2
