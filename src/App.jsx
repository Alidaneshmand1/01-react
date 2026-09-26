import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
 
 const numbers = [1,2,3,4]
 const duble = numbers.map(x => x*2)
document.getElementById('root').innerHTML = duble

}

export default App
