import React from 'react'

export const Set2Child = ({greetHandler, greeting}) => {    
    const newGreeting = greeting === "Child" ? "Parent" : "Child";
    return (
        <div>
            <button onClick={() => greetHandler(newGreeting)}>Greet {newGreeting}</button>
        </div>
    )
}
