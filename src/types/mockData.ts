import { MockCity } from "./mockTypes";


export const mockData = 
[
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
}
]

