import React from 'react';
import '../styles/globals.css'
import Navbar from './navbar'
export default function App({ Component, pageProps }) {


  
  return <div>
<Navbar/>
<Component {...pageProps} />
  </div> 
}

