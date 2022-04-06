import * as React from 'react';
//this file will contain react-router
import Homepage from './Homepage';
import '../styles.css';

//do we need to type what it returns?
const App: React.FC = () => {
  return (
    <div>
      {/* <h1 className="name">DenoStore</h1> */}
      <Homepage />
    </div>
  );
};

export default App;
