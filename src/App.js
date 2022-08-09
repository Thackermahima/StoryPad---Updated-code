import React from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './components/Home';
import UploadForm from './components/UploadForm';

import { Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      {/* <BookDetail></BookDetail> */}
<Header />
<Routes>
<Route path="/" element= {<Home />}/>
  <Route path ="/upload-form" element = {<UploadForm />}/>
  
  
</Routes>
<Footer />
      {/* <BookList></BookList> */}
      {/* <BookDetail></BookDetail> */}
    </div>
  );
}

export default App;