import { Route, Routes } from 'react-router-dom'
import './App.scss'
import {Navbar} from './components/Navbar'
import {Industrial} from './components/Pages/Industrial'
import {HouseHold} from  './components/Pages/HouseHold'
import {About} from './components/Pages/About/About'
import {Home} from './components/Pages/Home'

function App() {
  return <div className='App'>
    <Navbar/>
    <Routes>
      <Route path='/nova/' element={<Home/>} />
      <Route path='/nova/industrial' element={<Industrial/>} />
      <Route path='/nova/houseHold' element={<HouseHold/>} />
      <Route path='/nova/about' element={<About/>} />
    </Routes>
  </div>
}

export default App
