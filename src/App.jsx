import { useState } from 'react'
//import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Payment from './components/Payment';
import ItemList from './components/Itemcard';
import Items from './components/Items';

function App() {
  return (
    <>
      <Navbar/>
      <Body/>
      <Payment/>
    </>
  )
}

export default App;
