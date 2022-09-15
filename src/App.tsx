import React from 'react';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Home from './pages/home';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
          <CssBaseline />
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home />}></Route>
              </Routes>
          </BrowserRouter>
      </ThemeProvider>
  );
}

export default App;
