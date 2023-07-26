import { useState } from 'react';

const Form = ({setItemList}) => {

    const [description, setDescription] = useState("");
    const [quantity, setQuantity] = useState(1);

    const handleQuantityChange = ({target}) => {
        setQuantity(parseInt(target.value));
    };

    const handleDescriptionChange = ({target}) => {
        setDescription(target.value);
    };

    // console.log(Date.now());

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log("FORM'S VALUES QUANTITIES: ", quantity, "FORM'S VALUES DESCRIPTION: ", description);

        // I SHOULD'VE CREATED THE NEW ID'S BY USING DATE.NOW()!! GREAT IDEA!
        setItemList((prev) => ([...prev, {id: Date.now(), description: description, quantity: quantity, packed: false}]));
        setDescription("");
        setQuantity(1);
    };

  return (
    <form className='add-form' onSubmit={handleSubmit} >
        <h3>What do you need for your 😍 trip?</h3>
        <select value={quantity} onChange={handleQuantityChange}>
            {Array.from({length: 20}, (_, i) => i + 1).map((num) => (
            <option value={num} key={num}> {num} </option>
            ) )}
        </select>
        <input
            type="text"
            placeholder="item"
            value={description}
            onChange={handleDescriptionChange}
        />
        <button>Add</button>
    </form>
  );
};

export default Form;