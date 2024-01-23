import LeftColumn from './LeftColumn';
import CentralColumn from './CentralColumn';
import RightColumn from './RightColumn';

export default function Home(){
  return (
    <div className='home-page'>
      <LeftColumn />
      <CentralColumn />
      <RightColumn />
    </div>
  )
}