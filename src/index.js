import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { MoralisProvider } from 'react-moralis';
import { BrowserRouter } from 'react-router-dom';
import { BookContextProvider } from './Context/BookContext';
// ReactDOM.render(
 
//     {/* <React.StrictMode> */}
//       <App />
//     {/* </React.StrictMode> */}
 
//   document.getElementById('root')
// );


const root = ReactDOM.createRoot(document.getElementById("root"));
const serverUrl = "https://4l12eh1rxwvl.usemoralis.com:2053/server";
const appId = "8ucaGXdBwPrVBET3LddW0B5X5d8PIYJtP87aGHCq";
root.render(
  
  <MoralisProvider appId= {appId} serverUrl={serverUrl}>
  <BookContextProvider>
  <BrowserRouter>
  <App />

    </BrowserRouter>
    </BookContextProvider>
    </MoralisProvider>,
   
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();