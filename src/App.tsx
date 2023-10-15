import List from './components/List';
import DetailsComponent from './components/DetailsComponent';
import { Details } from "./components/Details";
import './App.css'
import { useState, useEffect } from 'react';

function App() {
  const [items, setItems] = useState([]);
  const [details, setDetails] = useState<Details[]>([]);
  const [selectedId, setSelectedId] = useState(0);
  const [currentDetails, setCurrentDetails] = useState<Details>();

  const getItems = () => {
    fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/users.json',{
      "method" : "GET"
    })
       .then((res) => res.json())
       .then((data) => {
          setItems(data);
       })
       .catch((err) => {
          console.log(err.message);
       });
  }

  useEffect(() => {
    getItems();
  }, []);

  const getDetails = () => {
    if(selectedId > 0)
      if(typeof details.find(el => el.id == selectedId) === 'undefined') {
        fetch('https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hooks-context/use-effect/data/'+selectedId+'.json',
        {
          "method" : "GET"
        })
        .then((res) => res.json())
        .then((data) => {
          console.log("Получил новый элемент из fetch");
          setDetails([...details, data]);
        })
        .catch((err) => {
            console.log(err.message);
        });
      } else {
        console.log("Достал сохранённый элемент из массива");
        setCurrentDetails(details.find(el => el.id == selectedId));
      } 
  }
  useEffect(getDetails, [selectedId, details]);

  const selectItem = (event : React.MouseEvent<HTMLElement>) => {
    const element = event.target;
    
    if (element instanceof Element) {
      const id = Number(element.getAttribute("data-uid"));
      if(typeof id === 'number'){    
        setSelectedId(id);       
      }      
    }    
  }

  return (
    <div className='container'>
      <List items={items} selectItem={selectItem} selectedId={selectedId}/>
      <DetailsComponent item={currentDetails}/>
    </div>
  )
}

export default App
