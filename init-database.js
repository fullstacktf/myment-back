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
    locations: {
      country: 'España',
      city: 'Santa Cruz de Tenerife',
      zone: 'Plaza',
    },
    name: 'Casa Domi',
    description: 'Buen sitio para descansar y echarte un sueño',
    loc: {
      type: 'Point',
      coordinates: [-16.318302154541016, 28.481819102847485],
    },
    startTime: {
      hour: 9,
      minutes: 0,
    },
    endTime: {
      hour: 15,
      minutes: 0,
    },
    link: 'http://...',
    tags: ['Rural'],
  },
  {
    category: 'lodging',
    color: 'orange',
    locations: {
      country: 'España',
      city: 'Santa Cruz de Tenerife',
      zone: 'Añaza',
    },
    name: 'Casa Añaza',
    description: 'Buen sitio para descansar y echarte un sueño',
    loc: {
      type: 'Point',
      coordinates: [-16.318302154541016, 28.481819102847485],
    },
    startTime: {
      hour: 9,
      minutes: 0,
    },
    endTime: {
      hour: 15,
      minutes: 0,
    },
    link: 'http://...',
    tags: ['Relax'],
  },
  {
    category: 'lodging',
    color: 'orange',
    locations: {
      country: 'España',
      city: 'Santa Cruz de Tenerife',
      zone: 'La Gallega',
    },
    name: 'Casa Gallega',
    description: 'Buen sitio para descansar y echarte un sueño',
    loc: {
      type: 'Point',
      coordinates: [-16.318302154541016, 28.481819102847485],
    },
    startTime: {
      hour: 9,
      minutes: 0,
    },
    endTime: {
      hour: 15,
      minutes: 0,
    },
    link: 'http://...',
    tags: ['Tranquilo'],
  },
  {
    category: 'food',
    color: 'green',
    locations: {
      country: 'España',
      city: 'Santa Cruz de Tenerife',
      zone: 'Añaza',
    },
    name: 'Meson Lord',
    description: 'Go to Guachinche Ivan in La Laguna and take a rabbit',
    loc: {
      type: 'Point',
      coordinates: [-16.318302154541016, 28.481819102847485],
    },
    startTime: { hour: 9, minutes: 0 },
    endTime: { hour: 11, minutes: 15 },
    link: 'http://...',
    tags: ['Carnes'],
  },
  {
    category: 'food',
    color: 'green',
    locations: {
      country: 'España',
      city: 'Santa Cruz de Tenerife',
      zone: 'Añaza',
    },
    name: 'Guachinche Añaza',
    description: 'Go to Guachinche Ivan in La Laguna and take a rabbit',
    loc: {
      type: 'Point',
      coordinates: [-16.318302154541016, 28.481819102847485],
    },
    startTime: { hour: 9, minutes: 0 },
    endTime: { hour: 11, minutes: 15 },
    link: 'http://...',
    tags: ['Carnes'],
  },
  {
    category: 'food',
    color: 'green',
    locations: {
      country: 'España',
      city: 'Santa Cruz de Tenerife',
      zone: 'La Gallega',
    },
    name: 'Guachinche Gallega',
    description: 'Go to Guachinche Ivan in La Laguna and take a rabbit',
    loc: {
      type: 'Point',
      coordinates: [-16.318302154541016, 28.481819102847485],
    },
    startTime: { hour: 9, minutes: 0 },
    endTime: { hour: 11, minutes: 15 },
    link: 'http://...',
    tags: ['Pescado'],
  },
  {
    category: 'food',
    color: 'green',
    locations: {
      country: 'España',
      city: 'Santa Cruz de Tenerife',
      zone: 'Añaza',
    },
    name: 'Pizza Izan',
    description: 'Go to Guachinche Ivan in La Laguna and take a rabbit',
    loc: {
      type: 'Point',
      coordinates: [-16.318302154541016, 28.481819102847485],
    },
    startTime: [9, 0],
    endTime: [11, 0],
    link: 'http://...',
    tags: ['Pizzería'],
  },
  {
    category: 'food',
    color: 'green',
    locations: {
      country: 'España',
      city: 'Santa Cruz de Tenerife',
      zone: 'Añaza',
    },
    name: 'Guachinche Ivan',
    description: 'Go to Guachinche Ivan in La Laguna and take a rabbit',
    loc: {
      type: 'Point',
      coordinates: [-16.318302154541016, 28.481819102847485],
    },
    startTime: [9, 0],
    endTime: [11, 0],
    link: 'http://...',
    tags: ['Comida rápida'],
  },
  {
    category: 'leisure',
    color: 'violet',
    locations: {
      country: 'España',
      city: 'Santa Cruz de Tenerife',
      zone: 'La Añaza',
    },
    name: 'Añaza Cinema',
    description: 'Go to the cinema and enjoy movies',
    loc: {
      type: 'Point',
      coordinates: [-16.318302154541016, 28.481819102847485],
    },
    startTime: { hour: 15, minutes: 0 },
    endTime: { hour: 16, minutes: 0 },
    link: 'http://...',
    tags: ['Urbano'],
  },
  {
    category: 'leisure',
    color: 'violet',
    locations: {
      country: 'España',
      city: 'Santa Cruz de Tenerife',
      zone: 'La Gallega',
    },
    name: 'Cinema Gallega',
    description: 'Go to the cinema and enjoy movies',
    loc: {
      type: 'Point',
      coordinates: [-16.318302154541016, 28.481819102847485],
    },
    startTime: { hour: 15, minutes: 0 },
    endTime: { hour: 16, minutes: 0 },
    link: 'http://...',
    tags: ['Tiendas'],
  },
  {
    category: 'leisure',
    color: 'violet',
    locations: {
      country: 'España',
      city: 'Santa Cruz de Tenerife',
      zone: 'Plaza',
    },
    name: 'Moro Cinema',
    description: 'Go to the cinema and enjoy movies',
    loc: {
      type: 'Point',
      coordinates: [-16.318302154541016, 28.481819102847485],
    },
    startTime: { hour: 15, minutes: 0 },
    endTime: { hour: 16, minutes: 0 },
    link: 'http://...',
    tags: ['Fiesta'],
  },
]);
db.createCollection('locations');

db.locations.insertMany([
  {
    country: 'España',
    loc: {
      type: 'Polygon',
      coordinates: [
        [
          [7.62451171875, 47.56170075451973],
          [13.842773437499998, 48.66194284607006],
          [14.128417968749998, 53.86548550842127],
          [9.184570312499998, 54.76267040025495],
          [5.9765625, 51.82219818336938],
          [7.62451171875, 47.56170075451973],
        ],
      ],
    },
    cities: [
      {
        name: 'Santa Cruz de Tenerife',
        loc: {
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
        zone: [
          {
            name: 'La Gallega',
            loc: {
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
          {
            name: 'Añaza',
            loc: {
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
            name: 'Plaza',
            loc: {
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
        loc: {
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
        zone: [
          {
            name: 'Parque Rural de Anaga',
            loc: {
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
          {
            name: 'Vega de las mercedes',
            loc: {
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
          {
            name: 'Centro Historico',
            loc: {
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
        ],
      },
    ],
  },
  {
    country: 'Alemania',
    loc: {
      type: 'Polygon',
      coordinates: [
        [
          [7.62451171875, 47.56170075451973],
          [13.842773437499998, 48.66194284607006],
          [14.128417968749998, 53.86548550842127],
          [9.184570312499998, 54.76267040025495],
          [5.9765625, 51.82219818336938],
          [7.62451171875, 47.56170075451973],
        ],
      ],
    },
    cities: [
      {
        name: 'Ulm',
        loc: {
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
        zone: [
          {
            name: 'Pfuhl',
            loc: {
              type: 'Polygon',
              coordinates: [
                [
                  [10.023050308227539, 48.40823770414505],
                  [10.040130615234375, 48.40185599006367],
                  [10.056953430175781, 48.40977603329015],
                  [10.04450798034668, 48.42293539160841],
                  [10.024423599243164, 48.418492352799724],
                  [10.023050308227539, 48.40823770414505],
                ],
              ],
            },
          },
          {
            name: 'Offenhausen',
            loc: {
              type: 'Polygon',
              coordinates: [
                [10.003395080566406, 48.39860784596984],
                [10.008544921875, 48.39564444588389],
                [10.0140380859375, 48.398037974743666],
                [10.03026008605957, 48.3987788060929],
                [10.026998519897461, 48.405160906249684],
                [10.003395080566406, 48.39860784596984],
              ],
            },
          },
          {
            name: 'Neu Ulm',
            loc: {
              type: 'Polygon',
              coordinates: [
                [10.010647773742676, 48.39307982571541],
                [9.995455741882324, 48.40604408024776],
                [9.977860450744627, 48.40048837572431],
                [9.977903366088867, 48.39561595081444],
                [9.992451667785643, 48.386696209807255],
                [10.010647773742676, 48.39307982571541],
              ],
            },
          },
        ],
      },
    ],
  },
]);

db.createCollection('tags');

db.tags.insertMany([
  {
    name: 'Urbano',
    category: ['leisure'],
  },
  {
    name: 'Fiesta',
    category: ['leisure'],
  },
  {
    name: 'Manga',
    category: ['leisure'],
  },
  {
    name: 'Tiendas',
    category: ['leisure'],
  },
  {
    name: 'Deportes',
    category: ['leisure'],
  },
  {
    name: 'Moda',
    category: ['leisure'],
  },
  {
    name: 'Parques',
    category: ['leisure'],
  },
  {
    name: 'Musica',
    category: ['leisure'],
  },
  {
    name: 'Carne',
    category: ['food'],
  },
  {
    name: 'Bufet',
    category: ['food'],
  },
  {
    name: 'Vegetariano',
    category: ['food'],
  },
  {
    name: 'Vegano',
    category: ['food'],
  },
  {
    name: 'Wok',
    category: ['food'],
  },
  {
    name: 'Mexicano',
    category: ['food'],
  },
  {
    name: 'Asiático',
    category: ['food'],
  },
  {
    name: 'Pescado',
    category: ['food'],
  },
  {
    name: 'Comida rápida',
    category: ['food'],
  },
  {
    name: 'Pizzería',
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
    category: ['lodging'],
  },
  {
    name: 'Céntrico',
    category: ['lodging'],
  },
  {
    name: 'Piso',
    category: ['lodging'],
  },
  {
    name: 'Relax',
    category: ['lodging'],
  },
  {
    name: 'Rural',
    category: ['lodging'],
  },
  {
    name: 'Urbano',
    category: ['lodging'],
  },
  {
    name: 'Deluxe',
    category: ['lodging'],
  },
  {
    name: 'Apartamento',
    category: ['lodging'],
  },
  {
    name: 'Hotel',
    category: ['lodging'],
  },
  {
    name: 'Caro',
    category: ['lodging'],
  },
  {
    name: 'familiar',
    category: ['lodging'],
  },
]);
