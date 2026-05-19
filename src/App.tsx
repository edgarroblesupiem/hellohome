import './App.css'

import GaugeComponent from 'react-gauge-component'

import {
  FaTemperatureHigh,
  FaSolarPanel,
  FaWifi,
  FaTint,
  FaBolt,
  FaBatteryHalf
} from 'react-icons/fa'

import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from 'recharts'

import { motion } from 'framer-motion'

const data = [
  { hora: '1PM', agua: 80 },
  { hora: '2PM', agua: 75 },
  { hora: '3PM', agua: 70 },
  { hora: '4PM', agua: 68 },
  { hora: '5PM', agua: 60 },
  { hora: '6PM', agua: 55 },
]

function App() {

  const agua = 70
  const litros = 1400
  const temperatura = 24
  const wifi = 480
  const solar = 92

  return (

    <div className="dashboard">

      <div className="background-grid"></div>
      <h1>HelloHome</h1>

      <div className="top-status">

        <div className="status-card">
          <FaWifi />
          <span>WiFi Online</span>
        </div>

        <div className="status-card">
          <FaBolt />
          <span>Sistema Estable</span>
        </div>

        <div className="status-card">
          <FaBatteryHalf />
          <span>Batería 88%</span>
        </div>

      </div>

      <div className="container">

        {/* TANQUE */}

        <motion.div
          className="tank-card"
          whileHover={{ scale: 1.03 }}
        >

          <h2>
            <FaTint /> Tanque Inteligente
          </h2>

          <div className="circle">

            <div
              className="water"
              style={{
                height: `${agua}%`
              }}
            ></div>

            <div className="percentage">
              {agua}%
            </div>

          </div>

          <div className="litros">
            {litros} L
          </div>

        </motion.div>

        {/* TEMPERATURA */}

        <motion.div
          className="temp-card"
          whileHover={{ scale: 1.03 }}
        >

          <h2>
            <FaTemperatureHigh /> Temperatura
          </h2>

          <div className="temp-value">
            {temperatura}°C
          </div>

        </motion.div>

        {/* WIFI */}

        <motion.div
          className="gauge-card"
          whileHover={{ scale: 1.03 }}
        >

          <h2>
            <FaWifi /> Velocidad WiFi
          </h2>

          <GaugeComponent
            value={wifi}
            maxValue={1000}
          />

          <div className="speed-label">
            {wifi} Mbps
             </div>

        </motion.div>

        {/* SOLAR */}

        <motion.div
          className="solar-card"
          whileHover={{ scale: 1.03 }}
        >

          <h2>
            <FaSolarPanel /> Panel Solar
          </h2>

          <GaugeComponent
            value={solar}
            maxValue={100}
          />

          <div className="solar-efficiency">
            Eficiencia {solar}%
          </div>

        </motion.div>

      </div>

      {/* GRAFICA */}

      <div className="chart-card">

        <h2>Historial del Tanque</h2>

        <ResponsiveContainer width="100%" height={300}>

          <LineChart data={data}>

            <XAxis dataKey="hora" />

            <YAxis />

            <Tooltip />

            <Line
              type="monotone"
              dataKey="agua"
              stroke="#00bfff"
              strokeWidth={4}
            />

          </LineChart>

        </ResponsiveContainer>

      </div>

    </div>
  )
}

export default App