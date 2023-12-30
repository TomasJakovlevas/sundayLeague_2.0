import { GameCardHeader } from './GameCardHeader';
import { GameCardBody } from './GameCardBody';
import { GameCardList } from './GameCardList';

export const GameCardPreview = () => {
  return (
    <div>
      <div className='flex items-start gap-3 flex border'>
        <GameCardHeader />
      </div>

      <div className='flex flex-col gap-3 border'>
        <GameCardBody />
        <GameCardList />
      </div>
    </div>
  );
};
