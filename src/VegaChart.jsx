// Importiert die VegaLite-Komponente aus der react-vega-Bibliothek
import { VegaLite } from "react-vega";

// Importiert das JSON-Objekt "spec", das die Spezifikation für die VegaLite-Visualisierung enthält
import spec from "./visualisation.json";

// Definiert eine React-Komponente namens VegaChart
const VegaChart = () => {
  return (
    // Wrapper-Div für die gesamte Komponente mit flexibler Layoutgestaltung
    <div
      style={{
        display: "flex", // Setzt das Layout des Div auf Flexbox
        flexDirection: "column", // Ordnet die Kinder-Komponenten vertikal an
        alignItems: "center", // Zentriert die Kinder-Komponenten horizontal
        justifyContent: "center", // Zentriert die Kinder-Komponenten vertikal
      }}
    >
      {/* Überschrift für die Visualisierung */}
      <h2 style={{ textAlign: "center" }}>
        Zusammenhang zwischen Motorleistung, Beschleunigung und Gewicht von
        Autos nach Herkunftsregionen
      </h2>

      {/* Container für das Diagramm mit einer maximalen Breite */}
      <div style={{ width: "100%", maxWidth: "800px" }}>
        {/* Einbettung der VegaLite-Komponente mit der importierten Spezifikation */}
        <VegaLite spec={spec} />
      </div>
    </div>
  );
};

// Exportiert die VegaChart-Komponente, damit sie in anderen Dateien verwendet werden kann
export default VegaChart;
