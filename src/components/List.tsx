import type { Item } from './Item'

interface List{
  items : Item[];
  selectItem : React.MouseEventHandler<HTMLElement>;
  selectedId : number;
}

const List = ( props : List ) => {
  
  const list = props.items;
  const listView = list.map((item, key) => {
    const classCss = (item.id === props.selectedId) ? 'list-item selected' : 'list-item';
    return (
      <div className={classCss} key={key} data-id={key} data-uid={item.id} onClick={props.selectItem} >
        {item.name}
      </div>
    )
  });
  
  return(
    <div className='list'>{listView}</div>
  )
}

export default List