import Item from "./Item";

const PackingList = ({ itemList, handleDeleteItem, handlePackedChange }) => {

  return (
    <div className="list">
        <ul>
            {itemList.map((item) => (
                <Item
                    item={item}
                    key={item.id}
                    handleDeleteItem={handleDeleteItem}
                    handlePackedChange={handlePackedChange}
                />
            ))}
        </ul>
    </div>
  );
};

export default PackingList;