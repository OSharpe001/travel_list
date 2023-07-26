
const Stats = ({ itemList }) => {
  // console.log(itemList);

const numItems = itemList.length;

const numPacked = itemList.filter(item=> item.packed).length;

const percentPacked = (numPacked/numItems) * 100;
// console.log(Math.round(percentPacked));

  return (
    <footer className='stats'>
      {
        percentPacked === 100 ?
         <em>You're All Packed</em>
        :
         isNaN(percentPacked)
        ?
         <em>There's no items on the list. Are we done?</em>
        :
         <em>
          🎒 You have {numItems} items on your list and you have already packed {numPacked} (%{Math.round(percentPacked)})
        </em>
      }
    </footer>
  );
};

export default Stats;