import {useState} from 'react';

type ShoppingFormProps = {
    addItem: (text: string) => void
}

function ShoppingForm({addItem}:ShoppingFormProps){
    const [errorMessage, setErrorMessage] = useState("");
    const [value, setValue] = useState("");

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        // make sure input has a value
        if (value === "") {
            setErrorMessage("Grocery item is empty");
            return;
        } else {
            // using function (addItem) passed as a prop
            addItem(value);
            // after adding clear input value
            setValue("");
        }
    }

    const handleChange = (evt: any) => {
        console.log(evt.type)
        if (errorMessage) setErrorMessage("");
        setValue(evt.target.value);
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="input"
                    value={value}
                    onChange={handleChange}
              
                />
                <button>Add Item</button>
            </form>
            <div className="error">{errorMessage}</div>
        </>
    )
}

export default ShoppingForm;