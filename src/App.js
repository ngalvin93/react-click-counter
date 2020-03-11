import React from 'react';
import Clicker from './components/Clicker';
import { ThemeProvider } from 'emotion-theming';
import preset from '@rebass/preset'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={preset}>
      <div className="App">
        <Clicker />
      </div>
    </ThemeProvider>
  );
}

export default App;
