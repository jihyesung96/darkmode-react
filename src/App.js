import './App.css';
import Footer from './components/Footer';
import Main from './components/Main';
import Header from './components/Header';
import { NameContext } from './context/NameContext';
import { useState } from 'react';
import { DarkContext } from './context/DarkContext';
//export default 로 보낸애들은 그냥 이름 적고 
//export 로 보낸앤들은 {이름} 적어서 쓴다


function App() {
   const [isDark,setIsDark] =useState(false);
  return (
    <NameContext.Provider value='bbbbb'>
      <DarkContext.Provider value={{isDark,setIsDark}}>
    <div className="App">
      <Header /> 
      <Main />
      <Footer />
    </div>
    </DarkContext.Provider>
    </NameContext.Provider>
  );
}

export default App;