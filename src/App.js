import React from 'react';
import Clicker from './components/Clicker';
import { ThemeProvider } from 'emotion-theming';
import { Flex, Box } from 'rebass'
import theme from './theme'
import './App.css';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Flex className="App" alignItems='center'>
        <Box width={1} height={128}>
          <Clicker />
        </Box>
      </Flex>
    </ThemeProvider>
  );
}

export default App;
