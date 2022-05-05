import * as React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Homepage from './containers/Homepage';
import DocumentationPage from './containers/DocumentationPage';
import './styles.css';

const App: React.FC = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
