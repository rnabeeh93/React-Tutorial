import React from 'react'

function Set3Child({hero}) {
    return (        
        <h2 style={{color: hero.color}}>Hi my name is {hero.name}. I am {hero.age} years old. My weapon of choice is my {hero.weapon}</h2>        
    )
}

export default Set3Child
