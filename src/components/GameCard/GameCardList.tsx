import { Divider } from '@nextui-org/react';
import { GameCardTable } from './GameCardTable';

export const GameCardList = () => {
  const timeStampDate = new Date();
  const columns = [
    {
      key: 'player',
      label: 'PLAYER',
    },

    {
      key: 'timeStamp',
      label: 'TIME',
      uiFit: true,
    },
    {
      key: 'priority',
      label: 'PRIORITY',
      uiFit: true,
    },
  ];
  const rows = [
    {
      key: '1',
      player: 'Tony Reichert',
      priority: true,
      timeStamp: timeStampDate.toLocaleTimeString('en', {
        year: '2-digit',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        hourCycle: 'h24',
      }),
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
