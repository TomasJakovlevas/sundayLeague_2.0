import { GameCardHeader } from './GameCardHeader';
import { GameCardBody } from './GameCardBody';
import { GameCardList } from './GameCardList';

export const GameCardPreview = () => {
  return (
    <div>
      <div className='flex items-start gap-3 flex py-3'>
        <GameCardHeader />
      </div>

      <div className='flex flex-col gap-3 py-3'>
        <GameCardBody />
        <GameCardList />
      </div>
    </div>
  );
};
