import React, {useState, useEffect} from 'react';
import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Splash from './components/pages/Splash';
import Artwork from './components/pages/Artwork';
import Achieve from './components/pages/Achieve';

function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    setTimeout(() => {
      setLoading(false)
    }, 3000)
  }, [])


  return (
    <>
      {
        loading ? <Splash /> :
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path='/' exact element={<Home></Home>} />
          <Route path='/artwork' exact element={<Artwork></Artwork>}></Route>
          <Route path='/achieve' exact element={<Achieve></Achieve>}></Route>
        </Routes>
      </Router>
      }
    </>
  );
}

export default App;
