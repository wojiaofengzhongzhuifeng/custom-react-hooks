import React from 'react';
import UseDebounce from "./customHooks/useDebounce";
import UseEventListener from './customHooks/useEventListener'


function App() {
  return (
    <div className="App">
      <UseDebounce />
      <UseEventListener/>
    </div>
  );
}

export default App;
