import {
  ComposableMap,
  Geographies,
  Geography,
  Annotation,
} from "react-simple-maps";

type StateLabel = {
  state: string;
  coordinates: [number, number];
  name: string;
};

const CurrentlyServe = () => {
  // All US states that we serve
  const servedStates = [
    "MA",
    "WA",
    "CA",
    "OR",
    "WI",
    "ME",
    "MI",
    "NV",
    "NM",
    "CO",
    "WY",
    "KS",
    "NE",
    "OK",
    "MO",
    "IL",
    "IN",
    "VT",
    "AR",
    "TX",
    "RI",
    "AL",
    "MS",
    "NC",
    "VA",
    "IA",
    "MD",
    "DE",
    "PA",
    "NJ",
    "NY",
    "ID",
    "SD",
    "CT",
    "NH",
    "KY",
    "OH",
    "TN",
    "WV",
    "DC",
    "LA",
    "FL",
    "GA",
    "SC",
    "MN",
    "MT",
    "ND",
    "AZ",
    "UT",
    "HI",
    "AK",
  ];

  // Add state centers for labels
  const stateLabels: StateLabel[] = [
    { state: "AL", coordinates: [-86.79113, 32.806671], name: "AL" },
    { state: "AK", coordinates: [-153.369141, 66.160507], name: "AK" },
    { state: "AZ", coordinates: [-111.431221, 34.048928], name: "AZ" },
    { state: "AR", coordinates: [-92.373123, 34.969704], name: "AR" },
    { state: "CA", coordinates: [-119.681564, 36.116203], name: "CA" },
    { state: "CO", coordinates: [-105.311104, 39.059811], name: "CO" },
    { state: "CT", coordinates: [-72.755371, 41.597782], name: "CT" },
    { state: "DE", coordinates: [-75.507141, 39.318523], name: "DE" },
    { state: "FL", coordinates: [-81.686783, 27.664827], name: "FL" },
    { state: "GA", coordinates: [-83.643074, 32.157435], name: "GA" },
    { state: "HI", coordinates: [-155.665857, 19.898682], name: "HI" },
    { state: "ID", coordinates: [-114.478828, 44.240459], name: "ID" },
    { state: "IL", coordinates: [-88.986137, 40.349457], name: "IL" },
    { state: "IN", coordinates: [-86.258278, 39.849426], name: "IN" },
    { state: "IA", coordinates: [-93.210526, 42.011539], name: "IA" },
    { state: "KS", coordinates: [-96.726486, 38.5266], name: "KS" },
    { state: "KY", coordinates: [-84.670067, 37.66814], name: "KY" },
    { state: "LA", coordinates: [-91.867805, 31.169546], name: "LA" },
    { state: "ME", coordinates: [-69.381927, 44.693947], name: "ME" },
    { state: "MD", coordinates: [-76.802101, 39.063946], name: "MD" },
    { state: "MA", coordinates: [-71.530106, 42.230171], name: "MA" },
    { state: "MI", coordinates: [-84.536095, 43.326618], name: "MI" },
    { state: "MN", coordinates: [-93.900192, 45.694454], name: "MN" },
    { state: "MS", coordinates: [-89.678696, 32.741646], name: "MS" },
    { state: "MO", coordinates: [-92.288368, 38.456085], name: "MO" },
    { state: "MT", coordinates: [-110.454353, 46.921925], name: "MT" },
    { state: "NE", coordinates: [-98.268082, 41.12537], name: "NE" },
    { state: "NV", coordinates: [-117.055374, 38.313515], name: "NV" },
    { state: "NH", coordinates: [-71.563896, 43.452492], name: "NH" },
    { state: "NJ", coordinates: [-74.521011, 40.298904], name: "NJ" },
    { state: "NM", coordinates: [-106.248482, 34.840515], name: "NM" },
    { state: "NY", coordinates: [-74.948051, 42.165726], name: "NY" },
    { state: "NC", coordinates: [-79.806419, 35.630066], name: "NC" },
    { state: "ND", coordinates: [-99.784012, 47.528912], name: "ND" },
    { state: "OH", coordinates: [-82.764915, 40.388783], name: "OH" },
    { state: "OK", coordinates: [-96.928917, 35.565342], name: "OK" },
    { state: "OR", coordinates: [-122.070938, 44.572021], name: "OR" },
    { state: "PA", coordinates: [-77.209755, 40.590752], name: "PA" },
    { state: "RI", coordinates: [-71.51178, 41.680893], name: "RI" },
    { state: "SC", coordinates: [-80.945007, 33.856892], name: "SC" },
    { state: "SD", coordinates: [-99.438828, 44.299782], name: "SD" },
    { state: "TN", coordinates: [-86.692345, 35.747845], name: "TN" },
    { state: "TX", coordinates: [-97.563461, 31.054487], name: "TX" },
    { state: "UT", coordinates: [-111.862434, 40.150032], name: "UT" },
    { state: "VT", coordinates: [-72.710686, 44.045876], name: "VT" },
    { state: "VA", coordinates: [-78.169968, 37.769337], name: "VA" },
    { state: "WA", coordinates: [-121.490494, 47.400902], name: "WA" },
    { state: "WV", coordinates: [-80.954453, 38.491226], name: "WV" },
    { state: "WI", coordinates: [-89.616508, 44.268543], name: "WI" },
    { state: "WY", coordinates: [-107.290284, 42.755966], name: "WY" },
  ];

  return (
    <div className="w-full bg-white py-16">
      <div className="w-[80%] mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base font-semibold text-teal-400 tracking-wide uppercase">
            STATES WE
          </h2>
          <h3 className="mt-2 text-3xl leading-8 font-bold tracking-tight text-gray-900 sm:text-4xl">
            Currently Serve
          </h3>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-gray-500">
            We believe everyone should have access to treatment and care. That's
            why we're teaming up with providers all over the country. Click on a
            green state to see the insurance companies we currently accept and
            to learn more about online Suboxone doctors in your area.
          </p>
        </div>

        <div className="mt-12 flex flex-col lg:flex-row gap-8">
          {/* Toronto Image Section */}
          <div className="lg:w-1/3">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src=" /toronto.png"
                alt="Toronto Skyline"
                className="w-full h-auto"
              />
              <div className="p-4">
                <h4 className="text-xl font-semibold">Toronto</h4>
                <p className="text-teal-400 mt-2">
                  <span className="inline-block mr-2">📍</span>
                  Ottawa St. and Homer Weston Blvd.
                </p>
              </div>
            </div>
          </div>

          {/* Map Section */}
          <div className="lg:w-2/3">
            <ComposableMap projection="geoAlbersUsa">
              <Geographies geography="https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json">
                {({ geographies }) =>
                  geographies.map((geo) => {
                    const stateCode = geo.properties.postal;
                    const isServed = servedStates.includes(stateCode);
                    return (
                      <Geography
                        key={geo.rsmKey}
                        geography={geo}
                        fill={isServed ? "#008080" : "#EEE"}
                        stroke="#FFF"
                        strokeWidth={0.5}
                        style={{
                          default: {
                            outline: "none",
                            fill: "#49C7AB",
                          },
                          hover: {
                            fill: "#FFB6C1",
                            outline: "none",
                          },
                          pressed: {
                            outline: "none",
                          },
                        }}
                      />
                    );
                  })
                }
              </Geographies>
              {stateLabels.map(({ state, coordinates, name }) => (
                <Annotation
                  key={state}
                  subject={coordinates}
                  dx={0}
                  dy={0}
                  connectorProps={{}}
                >
                  <text
                    x={4}
                    y={4}
                    fontSize={8}
                    textAnchor="middle"
                    alignmentBaseline="middle"
                    fill="#333"
                  >
                    {name}
                  </text>
                </Annotation>
              ))}
            </ComposableMap>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentlyServe;
