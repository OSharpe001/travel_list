
const Item = ({ item, handleDeleteItem, handlePackedChange }) => {


    // console.log("ITEM.JSX PROPS 'handlePackedChange: ", handlePackedChange);
    // console.log("ITEM.JSX PROPS 'handleDeleteItem': ", handleDeleteItem);
    // const [packed, setPacked] = useState(item.packed);

    const handleDelete = () => {
        handleDeleteItem(item.id);
    };

    const togglePacked = () => {
      handlePackedChange(item.id);
    };

  return (
    <div>
        <li>
          <input type="checkbox" onClick={togglePacked}/>
            <span style={item.packed ? {textDecoration: "line-through"}: {textDecoration: "none"}}>
            {item.quantity} {item.description}
            </span>
            <button onClick={handleDelete}> ❌ </button>
        </li>
    </div>
  );
};

export default Item;