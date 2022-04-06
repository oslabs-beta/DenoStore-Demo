// import * as React from 'react';
// import * as ReactDOM from 'react-dom';
// import App from './components/App';

// ReactDOM.render(<App />, document.getElementById('app'));



   
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { render } from 'react-dom';
import {
    BrowserRouter,
    Routes,
    Route,
  } from "react-router-dom";
import App from './components/App';




// ReactDOM.render(<App />, document.getElementById('app'));

const rootElement = document.getElementById('app');
render(
  <BrowserRouter>
  
        <App/>
      
      {/* <Route path="/" element={<App />} /> */}

    
  </BrowserRouter>,
  rootElement
);