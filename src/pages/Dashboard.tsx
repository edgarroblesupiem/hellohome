import {
  useNavigate
} from 'react-router-dom'

import {
  FaTint,
  FaSolarPanel,
  FaTemperatureHigh,
  FaRobot
} from 'react-icons/fa'

import GaugeComponent from 'react-gauge-component'

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'

import { motion } from 'framer-motion'

const data = [

  { hora:'8', valor:900 },
  { hora:'9', valor:1200 },
  { hora:'10', valor:800 },
  { hora:'11', valor:1600 },
  { hora:'12', valor:1400 },

]

export default function Dashboard(){

  const navigate = useNavigate()

  return(

    <div>

      <div className="top-title">

        <h1>
          HELLOHOME
        </h1>

        <p>
          Smart Luxury Control
        </p>

      </div>

      <div className="dashboard-grid">

        {/* AGUA */}

        <motion.div
          className="dashboard-card"
          whileHover={{ scale:1.02 }}
          onClick={() => navigate('/agua')}
        >

          <h2>
            <FaTint />
            Agua Inteligente
          </h2>

          <div className="tank-circle">

            <div
              className="water-fill"
              style={{
                height:'65%'
              }}
            ></div>

            <div className="tank-percent">
              65%
            </div>

          </div>

          <div className="liters">
            1300L
          </div>

        </motion.div>

        {/* SOLAR */}

        <motion.div
          className="dashboard-card solar-card"
          whileHover={{ scale:1.02 }}
          onClick={() => navigate('/solar')}
        >

          <h2>
            <FaSolarPanel />
            Seguidor Solar IA
          </h2>

          <div className="solar-system">

            <div className="sun-orbit">

              <div className="sun"></div>

            </div>

            <div className="solar-panel">

              <div className="panel-grid"></div>

            </div>

          </div>

          <div className="solar-stats">

            <div>
              <span>Orientación</span>
              <h3>128°</h3>
            </div>

            <div>
              <span>Elevación</span>
              <h3>35°</h3>
            </div>

            <div>
              <span>Eficiencia</span>
              <h3>92%</h3>
            </div>

          </div>

        </motion.div>

        {/* TEMPERATURA */}

        <motion.div
          className="dashboard-card"
          whileHover={{ scale:1.02 }}
          onClick={() => navigate('/temperatura')}
        >

          <h2>
            <FaTemperatureHigh />
            Temperatura IA
          </h2>

          <div className="temperature">
            24°
          </div>

          <ResponsiveContainer width="100%" height={150}>

            <LineChart data={data}>

              <XAxis dataKey="hora" />

              <YAxis />

              <Tooltip />

              <Line
                dataKey="valor"
                stroke="#ff8800"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </motion.div>

        {/* DOMOTICA */}

        <motion.div
          className="dashboard-card"
          whileHover={{ scale:1.02 }}
          onClick={() => navigate('/domotica')}
        >

          <h2>
            <FaRobot />
            Domótica
          </h2>

          <div className="device-list">

            <div className="device-item">
              Luces RGB
            </div>

            <div className="device-item">
              Bomba Agua
            </div>

            <div className="device-item">
              Contactos
            </div>

            <div className="device-item">
              Alexa Online
            </div>

          </div>

        </motion.div>

        {/* GENERACION */}

        <motion.div
          className="dashboard-card"
          whileHover={{ scale:1.02 }}
        >

          <h2>
            Generación Solar
          </h2>

          <GaugeComponent
            value={1.8}
            minValue={0}
            maxValue={3}
          />

          <div className="big-number">
            1.8 kW
          </div>

        </motion.div>

        {/* CONSUMO */}

        <motion.div
          className="dashboard-card"
          whileHover={{ scale:1.02 }}
        >

          <h2>
            Consumo Casa
          </h2>

          <GaugeComponent
            value={2.4}
            minValue={0}
            maxValue={5}
          />

          <div className="big-number">
            2.4 kW
          </div>

        </motion.div>

      </div>

    </div>
  )
}
