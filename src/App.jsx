import './App.css'
import Navbar from './components/Navbar'
import { Outlet } from 'react-router'

function App() {

  return (
    <div>
      <Navbar></Navbar>
      <Outlet />
    </div>
  )
}

export default App
