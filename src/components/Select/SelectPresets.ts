const presets = [
  {
    id: 'place',
    items: [
      {
        label: 'Vilnius',
        value: 'vilnius',
      },
      {
        label: 'Kaunas',
        value: 'haunas',
      },
      {
        label: 'Klaipeda',
        value: 'klaipeda',
      },
    ],
  },
  {
    id: 'category',
    items: [
      {
        label: 'Futbolas',
        value: 'futbolas',
      },
      {
        label: 'Krepsinis',
        value: 'krepsinis',
      },
      {
        label: 'Tinklinis',
        value: 'tinklinis',
      },
    ],
  },
];

export const getPreset = (id: string) =>
  presets.find((preset) => preset.id === id) || { id, items: [] };
