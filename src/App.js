import React from 'react';
import Clicker from './components/Clicker';
import { ThemeProvider } from 'emotion-theming';
import theme from './theme'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Clicker />
      </div>
    </ThemeProvider>
  );
}

export default App;
