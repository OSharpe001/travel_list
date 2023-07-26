import './App.css';
import Logo from "./components/Logo";
import Form from './components/Form';
import PackingList from './components/PackingList';
import Stats from './components/Stats';
import { useState } from 'react';

function App() {

  const initialItems = [
    { id: 1, description: "Passports", quantity: 2, packed: false },
    { id: 2, description: "Socks", quantity: 12, packed: false },
  ];

  const [itemList, setItemList] = useState(initialItems);

  const handleDeleteItem = (id) => {
    setItemList(item => itemList.filter((item)=>item.id !== id));
  };

  const handlePackedChange = (id) => {
    setItemList((item) => itemList.map((item) => item.id === id ? {
      ...item,
      packed: !item.packed
      }
      :
        item ));
  };

  // console.log("itemList: ", itemList);
  return (
    <div className="app">
      <Logo />
      <Form setItemList={setItemList} />
      <PackingList
        itemList={itemList}
        handleDeleteItem={handleDeleteItem}
        handlePackedChange={handlePackedChange}
      />
      <Stats itemList={itemList}/>
    </div>
  );
};

export default App;
