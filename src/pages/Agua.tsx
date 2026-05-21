import GaugeComponent from 'react-gauge-component'

import {
  LineChart,
  Line,
  ResponsiveContainer,
  XAxis,
  YAxis,
  Tooltip
} from 'recharts'

const aguaData = [

  { hora:'8', flujo:800 },
  { hora:'9', flujo:1200 },
  { hora:'10', flujo:900 },
  { hora:'11', flujo:1800 },
  { hora:'12', flujo:1300 },

]

export default function Agua(){

  return(

    <div>

      <h1 className="page-title">
        SISTEMA DE AGUA
      </h1>

      <div className="page-grid">

        <div className="big-card">

          <GaugeComponent
            value={1300}
            maxValue={2000}
          />

          <div className="big-number">
            1300L
          </div>

        </div>

        <div className="big-card">

          <ResponsiveContainer width="100%" height={350}>

            <LineChart data={aguaData}>

              <XAxis dataKey="hora" />

              <YAxis />

              <Tooltip />

              <Line
                dataKey="flujo"
                stroke="#00bfff"
                strokeWidth={4}
              />

            </LineChart>

          </ResponsiveContainer>

        </div>

      </div>

    </div>
  )
}
