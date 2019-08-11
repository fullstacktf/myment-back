db.createUser({
  user: 'wizard',
  pwd: '1234',
  roles: [{ role: 'readWrite', db: 'myment' }],
});
db = db.getSiblingDB('myment');
db.createCollection('activities');
db.activities.insertMany([
  {
    category: 'lodging',
    color: 'orange',
    ideas: [
      {
        locations: {
          name: 'Santa Cruz de Tenerife',
          zone: 'Llano del Moro',
        },
        name: 'Casa Domi',
        description: 'Buen sitio para descansar y echarte un sueño',
        coordinates: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: [-16.318302154541016, 28.481819102847485],
          },
        },
        startTime: [9, 0],
        endTime: [15, 0],
        link: 'http://...',
      },
      {},
      {},
    ],
  },
  {
    category: 'food',
    color: 'green',
    ideas: [
      {
        locations: {
          name: 'Santa Cruz de Tenerife',
          zone: 'Añaza',
        },
        name: 'Guachinche Ivan',
        description: 'Go to Guachinche Ivan in La Laguna and take a rabbit',
        coordinates: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: [-16.318302154541016, 28.481819102847485],
          },
        },
        startTime: [9, 0],
        endTime: [11, 0],
        link: 'http://...',
      },
      {},
      {},
    ],
  },
  {
    category: 'leisure',
    color: 'violet',
    ideas: [
      {
        locations: {
          name: 'Santa Cruz de Tenerife',
          zone: 'La Gallega',
        },
        name: 'Victor Cinema',
        description: 'Go to the cinema and enjoy movies',
        coordinates: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Point',
            coordinates: [-16.318302154541016, 28.481819102847485],
          },
        },
        startTime: [15, 0],
        endTime: [16, 0],
        link: 'http://...',
      },
      {},
      {},
    ],
  },
]);
db.createCollection('locations');

db.locations.insertMany([
  {
    name: 'Santa Cruz de Tenerife',
    coordinates: {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-16.296672821044922, 28.521946867678032],
            [-16.347484588623047, 28.49615219918497],
            [-16.344566345214844, 28.479706692570073],
            [-16.306285858154297, 28.462051326298756],
            [-16.27967834472656, 28.467031343699137],
            [-16.28499984741211, 28.511840936255435],
            [-16.296672821044922, 28.521946867678032],
          ],
        ],
      },
    },
    zone: [
      {
        name: 'La Gallega',
        coordinates: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-16.320362091064453, 28.493134866934206],
                [-16.320018768310547, 28.488156080151704],
                [-16.31366729736328, 28.487099943678324],
                [-16.31246566772461, 28.495247008566704],
                [-16.320362091064453, 28.493134866934206],
              ],
            ],
          },
        },
      },
      {
        name: 'Añaza',
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-16.283798217773438, 28.466276810692897],
              [-16.30817413330078, 28.45239244190383],
              [-16.302337646484375, 28.436996771113794],
              [-16.285171508789062, 28.432770116558117],
              [-16.271438598632812, 28.447260800643516],
              [-16.283798217773438, 28.466276810692897],
            ],
          ],
        },
      },
      {
        name: 'Llano del Moro',
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Polygon',
          coordinates: [
            [
              [-16.299591064453125, 28.45722199441565],
              [-16.280364990234375, 28.468691297348148],
              [-16.27967834472656, 28.48015935547218],
              [-16.30542755126953, 28.466276810692897],
              [-16.316757202148434, 28.44937385955666],
              [-16.308517456054688, 28.44846826804955],
              [-16.299591064453125, 28.45722199441565],
            ],
          ],
        },
      },
    ],
  },
  {
    name: 'San Cristobal de La Laguna',
    coordinates: {
      type: 'Feature',
      properties: {},
      geometry: {
        type: 'Polygon',
        coordinates: [
          [
            [-16.360702514648438, 28.490720939030837],
            [-16.360702514648438, 28.467484060916792],
            [-16.32259368896484, 28.459334854263627],
            [-16.29169464111328, 28.472312923883393],
            [-16.25598907470703, 28.492229650439278],
            [-16.242599487304688, 28.53506804954235],
            [-16.26697540283203, 28.552560417329666],
            [-16.360702514648438, 28.490720939030837],
          ],
        ],
      },
    },
    zone: [
      {
        name: 'Parque Rural de Anaga',
        coordinates: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-16.28070831298828, 28.54260821944432],
                [-16.286888122558594, 28.52813061665919],
                [-16.26251220703125, 28.518176111013897],
                [-16.248092651367188, 28.523605957887614],
                [-16.242599487304688, 28.53567128299287],
                [-16.266632080078125, 28.552861984402025],
                [-16.28070831298828, 28.54260821944432],
              ],
            ],
          },
        },
      },
      {
        name: 'Vega de las mercedes',
        coordinates: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-16.31572723388672, 28.523605957887614],
                [-16.314353942871094, 28.49977288402306],
                [-16.290664672851562, 28.494945276635455],
                [-16.281394958496094, 28.509427436248068],
                [-16.285858154296875, 28.5205894108141],
                [-16.31572723388672, 28.523605957887614],
              ],
            ],
          },
        },
      },
      {
        name: 'Centro Historico',
        coordinates: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'Polygon',
            coordinates: [
              [
                [-16.325340270996094, 28.478197802217927],
                [-16.31641387939453, 28.472614720490967],
                [-16.311264038085938, 28.478650471586988],
                [-16.313838958740234, 28.487099943678324],
                [-16.32619857788086, 28.49011744843003],
                [-16.325340270996094, 28.478197802217927],
              ],
            ],
          },
        },
      },
    ],
  },
]);

db.createCollection('tags');

db.tags.insertMany([
  {
    name: 'Bonito',
    category: ['leisure', 'lodging'],
  },
  {
    name: 'Rico',
    category: ['food'],
  },
  {
    name: 'Sabroso',
    category: ['food'],
  },
  {
    name: 'Aventura',
    category: ['leisure'],
  },
  {
    name: 'Extremo',
    category: ['leisure'],
  },
  {
    name: 'Tranquilo',
    category: ['leisure', 'lodging'],
  },
  {
    name: 'Cuidado',
    category: ['lodging'],
  },
  {
    name: 'Bonito',
    category: ['leisure', 'lodging'],
  },
]);
