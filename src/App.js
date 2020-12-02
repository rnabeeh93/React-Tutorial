import React from 'react';
import './App.css';
import {UserProvider} from './components/userContext';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import ExampleSet1 from './components/ExampleSet1'; //setstate callback, this binding, destructuring props/state
import ExampleSet2 from './components/ExampleSet2'; //Method props, child-parent communication, conditional rendering
import ExampleSet3 from './components/ExampleSet3'; //List rendering, keys, styling
import ExampleSet4 from './components/ExampleSet4'; //Form handling, lifecycle methods (mount, unmount, update, error)
import ExampleSet5 from './components/ExampleSet5'; //Fragments, pure components, memo
import ExampleSet6 from './components/ExampleSet6'; //Refs
import ExampleSet7 from './components/ExampleSet7'; //Portals
import ExampleSet8 from './components/ExampleSet8'; //Higher order components, Render Props
import ExampleSet9 from './components/ExampleSet9'; //Context
import ExampleSet10 from './components/ExampleSet10'; //Hooks - useState
import ExampleSet11 from './components/ExampleSet11'; //Hooks - useEffect
import ExampleSet12 from './components/ExampleSet12'; //Hooks - useContext, useReducer
import ExampleSet13 from './components/ExampleSet13'; //Hooks - useCallback, useMemo
import ExampleSet14 from './components/ExampleSet14'; //Hooks - useRef, useImperativeHandle, useLayoutEffect, useDebugValue
import ExampleSet15 from './components/ExampleSet15'; //Hooks - Custom hooks

// import logo from './logo.svg';
// import { Greet } from './components/Greet';
// import Welcome from './components/Welcome';

function App() {
  return (
    <div className="App">
      {/* Commenting out the UserProvider element will use the default value that was set during instantiation */}
      <UserProvider value="Rameal">         
          <ExampleSet1 name="Bruce Wayne" heroName="Batman" />
          <hr/>
          <ExampleSet2 render={true}/>
          <hr/>
          <ExampleSet3 border={true} />
          <hr/>
          <ExampleSet4 />
          <hr />
          <ExampleSet5 />
          <hr />
          <ExampleSet6 />
          <hr/>
          <ExampleSet7/>
          <hr/>
          <ExampleSet8/>
          <hr/>      
          <ExampleSet9/>  
          <hr/>   
          <ExampleSet10/>    
          <hr/>
          <ExampleSet11/>   
          <hr/>
          <ExampleSet12/>
          <hr/>
          <ExampleSet13/>
          <hr/>
          <ExampleSet14/>
          <hr/>
          <ExampleSet15/>
      </UserProvider> 
      <hr/>  
      <PostList/>
      <hr/>
      <PostForm/>
    </div>
  );
}

export default App;
