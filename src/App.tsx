import './App.css'

import {
  Routes,
  Route,
  useNavigate
} from 'react-router-dom'

import Dashboard from './pages/Dashboard'
import Agua from './pages/Agua'
import Solar from './pages/Solar'
import Temperatura from './pages/Temperatura'
import Domotica from './pages/Domotica'

import {
  FaHome,
  FaTint,
  FaSolarPanel,
  FaTemperatureHigh,
  FaRobot
} from 'react-icons/fa'

function App() {

  const navigate = useNavigate()

  return (

    <div className="layout">

      <div className="sidebar">

        <div className="logo">

          <h1>HELLOHOME</h1>

          <p>AI CONTROL CENTER</p>

        </div>

        <button onClick={() => navigate('/')}>

          <FaHome />

          Resumen

        </button>

        <button onClick={() => navigate('/agua')}>

          <FaTint />

          Agua

        </button>

        <button onClick={() => navigate('/solar')}>

          <FaSolarPanel />

          Solar

        </button>

        <button onClick={() => navigate('/temperatura')}>

          <FaTemperatureHigh />

          Temperatura

        </button>

        <button onClick={() => navigate('/domotica')}>

          <FaRobot />

          Domótica

        </button>

      </div>

      <div className="content">

        <Routes>

          <Route
            path="/"
            element={<Dashboard />}
          />

          <Route
            path="/agua"
            element={<Agua />}
          />

          <Route
            path="/solar"
            element={<Solar />}
          />

          <Route
            path="/temperatura"
            element={<Temperatura />}
          />

          <Route
            path="/domotica"
            element={<Domotica />}
          />

        </Routes>

      </div>

    </div>

  )
}

export default App
