import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './pages/home/Home'
import Hotels from './pages/hotels/Hotels'
import Flights from './pages/flights/Flights'
import FlightSearch from './pages/flights/FlightSearch'
import Header from './components/Header/Header'
import HotelSearch from './pages/hotels/HotelSearch'
import Footer from './components/Footer/Footer'
import Logout from './pages/Logout'
import ErrorPage from './pages/ErrorPage'
import Protected from './pages/Protected'
import HotelDetails from './pages/hotels/HotelDetails'
import Login from './pages/Login'

const App = () => {
  return (
    <BrowserRouter>
        <Header/>
        <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='/flights' element={<Flights/>}/>
          <Route path='/flight/:from/:to/:day/' element={<FlightSearch/>}/>
          <Route path='/hotels/' element={<Hotels/>} />
          <Route path='/hotels/:location/' element={<Protected Component={HotelSearch}/>} />
          <Route path='/hotel/:id/' element={<Protected Component={HotelDetails}/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='/logout' element={<Logout/>} />
          <Route path='*' element={<ErrorPage/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  )
}

export default App
