
import Home from './pages/home/Home';
import './App.css';
import Navbar from './customer/Navbar/Navbar';
import customeTheme from './theme/costumeTheme';
import { ThemeProvider } from '@mui/material';


function App() {
  return (
    <div>
      <ThemeProvider theme={customeTheme}>
        <div>
          <Navbar/>
          <Home/>
        </div>
      </ThemeProvider>
    </div>
  );
}

export default App;
