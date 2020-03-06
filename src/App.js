import React, {useState} from 'react';
import Menu from './components/Menu/Menu';
import MenuContext from './MenuContext';
import './App.css';

function App() {
  const [pathname, setPathname] = useState()
  const showMenu =()=> {              
    const {pathname} = window.location;
    setPathname(pathname);
  }
  return (
  <MenuContext.Provider value={
    { 
      pathname,
      showMenu 
    }
  }>
    <div className="App">
      <Menu></Menu>
      
    </div>
  </MenuContext.Provider>
  );
}

export default App;
