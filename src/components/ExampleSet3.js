import React, { Component } from 'react'
import Set3Child from './Set3Child';
import '../styles/appStyles.css'; //regular stylesheet
import styles from '../styles/appStyles.module.css'; //css module
import QuestionMark from './QuestionMark';

const examples = "List rendering, keys, styling";

class ExampleSet3 extends Component {
    render() {        
        //const names = ['Bruce', 'Clark', 'Diana'];        
        
        const heroes = [
            {id: 1, name: 'Bruce', age: 23, weapon: 'Batarang', color: 'black'},
            {id: 2, name: 'Clark', age: 21, weapon: 'Fist', color: 'red'},
            {id: 3, name: 'Diana', age: 25, weapon: 'Lasso', color: 'gold'}
        ]

        /*
            There are multiple ways to style in react:
                CSS Stylesheets
                Inline styling: to do inline styling you need a double set of {} one for jsx and one because the style is an object. 
                                the properties of the object are css with camel-case instead of dashes. Ex: background-color = backgroundColor
                CSS Modules: Uses naming convention: <name>.module.css, one advantage is that the classes rendered as props, so will never accidentally fall through to children elements since they are explicitly defined
                CSS in JS Libraries: These are javascript libraries that handle styling in their own unique way
        */

        /*  It is better to keep the html as it's own component. 
            Additionally mapping requires a key - this can be anything as long as it is unique. Keys are not accessible in children components 
            Keys help react understand when an element is removed or added by looping through the keys, then rerenders if there is a mutation. Most importantly it only updates the newest items, everything else stays the same
            You can use the second param of map (index) as a key. This is an anti-pattern, certain scenarios can cause serious issues: Inserting at the beginning of the array and sorting will cause all other keys to shift 
                - Only do this if: The items in the list don't have a unique id, the list is static, the list will never be reordered or filtered
                - else: use the id as a key, or create a hash from the values to create a unique key
        */                    
            //const list = names.map((name) => <h2>{`${name} Doe`}</h2> );
            //const list = names.map((name, index) => <h2 key={index}>{name}</h2>)
            const list = heroes.map((hero) => <Set3Child key={hero.id} hero={hero} />)                
            
        return (
            <div className={this.props.border && "ex3-parent"}>
                <QuestionMark examples={examples}  number={3}/>
                <div style={{display: 'flex', justifyContent: 'space-evenly'}}>
                    <h1 className={styles.success}>Success</h1>
                    <h1 className='error'>Error</h1>                    
                </div>                
                {list}    
            </div>
        )
    }
}

export default ExampleSet3
