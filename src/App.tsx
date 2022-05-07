import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import './styles.css';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        {/* router no longer neccessary, but left it for future development */}
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
