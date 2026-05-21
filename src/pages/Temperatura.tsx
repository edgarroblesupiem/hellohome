export default function Temperatura(){

  return(

    <div>

      <h1 className="page-title">
        TEMPERATURA IA
      </h1>

      <div className="page-grid">

        <div className="big-card">

          <div className="temperature">
            24°
          </div>

          <div className="heat-map"></div>

        </div>

        <div className="big-card">

          <h2>Calidad del Aire</h2>

          <div className="big-number">
            92%
          </div>

          <h2>Humedad</h2>

          <div className="big-number">
            48%
          </div>

          <h2>CO2</h2>

          <div className="big-number">
            620 ppm
          </div>

        </div>

      </div>

    </div>

  )
}
