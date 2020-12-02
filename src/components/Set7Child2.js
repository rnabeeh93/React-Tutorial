import React from 'react'

//Showcases throwing errors
export default function Set7Child2(props) {
    if(props.hero === "Joker"){
        throw new Error("Not a hero!");
    }
    return (
        <h2>
            {props.hero}
        </h2>
    )
}
