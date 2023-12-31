import { Divider } from '@nextui-org/react';
import { GameCardTable } from './GameCardTable';

export const GameCardList = () => {
  const columns = [
    {
      key: 'player',
      label: 'PLAYER',
    },

    {
      key: 'priority',
      label: 'PRIORITY',
    },
  ];
  const rows = [
    {
      key: '1',
      player: 'Tony Reichert',
      priority: true,
    },
    {
      key: '2',
      player: 'Zoey Lang',
      priority: true,
    },
    {
      key: '3',
      player: 'Jane Fisher',
      priority: true,
    },
    {
      key: '4',
      player: 'William Howard',
    },
    {
      key: '11',
      player: 'Tony Reichert',
      priority: true,
    },
    {
      key: '22',
      player: 'Zoey Lang',
      priority: true,
    },
    {
      key: '33',
      player: 'Jane Fisher',
      priority: true,
    },
    {
      key: '44',
      player: 'William Howard',
    },
    {
      key: '12',
      player: 'Tony Reichert',
      priority: true,
    },
    {
      key: '23',
      player: 'Zoey Lang',
      priority: true,
    },
    {
      key: '34',
      player: 'Jane Fisher',
      priority: true,
    },
    {
      key: '45',
      player: 'William Howard',
    },
    {
      key: '11a',
      player: 'Tony Reichert',
      priority: true,
    },
    {
      key: '2w',
      player: 'Zoey Lang',
      priority: true,
    },
    {
      key: '3e',
      player: 'Jane Fisher',
      priority: true,
    },
    {
      key: '4r',
      player: 'William Howard',
    },
  ];

  return (
    <div>
      <GameCardTable title='Active' columns={columns} rows={rows} />
      <Divider className='my-6' />
      <GameCardTable title='Queue' columns={columns} rows={rows} />
    </div>
  );
};
