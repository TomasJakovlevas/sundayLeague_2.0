import { GameCardHeader } from './GameCardHeader';
import { GameCardBody } from './GameCardBody';
import { GameCardList } from './GameCardList';

export const GameCardPreview = () => {
  return (
    <div>
      <div className='flex items-start py-3 gap-2 sm:gap-3 '>
        <GameCardHeader />
      </div>

      <div className='flex flex-col py-3 gap-2 sm:gap-3'>
        <GameCardBody hasButton />
        <GameCardList />
      </div>
    </div>
  );
};
