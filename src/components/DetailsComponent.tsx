import type { Details } from './Details'

interface Item{
  item : Details | undefined;
}

const DetailsComponent = ( props : Item ) => {
  const item = props.item;
  if (typeof item === 'undefined'){
    return(<></>);
  } else {
    return(
      <div className='details'>
        <img src={item.avatar}/>
        <div className='details-header'>{item.name}</div>
        <div className='details-row'>City: {item.details.city}</div>
        <div className='details-row'>Company: {item.details.company}</div>
        <div className='details-row'>Position: {item.details.position}</div>
      </div>
    )
  }
}

export default DetailsComponent