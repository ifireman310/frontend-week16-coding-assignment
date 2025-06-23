import {useState} from "react";

type GroceryProps = {
    grocery: {id: string, text: string, isBought: boolean}
    buyItem: (id: string) => void
    deleteItem: (id: string) => void
    editItem: (id: string, text: string) => void
}

function Grocery({ grocery, buyItem, deleteItem, editItem }: GroceryProps) {

    const [edit, setEdit] = useState(false);
    const [error, setError] = useState(false);
    const [text, setText] = useState(grocery.text);

    /*
      - grocery contains local state:
           - edit (true or false): trigger rendering other elements
           - text (string): grocery text that will change if user decides to update grocery text
      - We need to conditionally render different elements:
           - <span>todo text</span> with two buttons (delete and edit) 
           OR
           - <input value = text (from state)> and two buttons (update and cancel)
    */

    const toggleEdit = () => {
        setEdit(!edit);
        // reset input text and error state, if cancelling edit
        setText(grocery.text)
        setError(false)    
    };
    
    const handleEdit = (evt: any) => {
        (evt.target.value === "") ? setError(true) : setError(false)        
        setText(evt.target.value);
    };
    
    const handleUpdate = (id: string, text: string) => {
        editItem(id, text);
        toggleEdit();
    };
    
      /*
      We need to conditionally render elements depending on user clicking the "edit" button or not
      When user clicks "edit":
          - triggers a change in state (edit) and will re-render the <Todo>
          - edit (state) will be true and will render the elements defined in the falsy (:) expression
      When component first renders:
          - edit (state) is false by default and renders the todo text in a <span>
      When user clicks "update":
          - triggers the handleUpdate function that executes the passed down function
          - toggles edit state adn sets state of local input        
     */
   
    return (
        <li>
             <input type="checkbox" checked = { grocery.isBought } onChange={() => buyItem(grocery.id)} />
             
              {/* ternary ? if truthy, renders text wrapped in <span> : if falsy, renders input field to edit */}
             
              {!edit ? (
                  <>
                      <span style={{ textDecoration: grocery.isBought ? "line-through" : "" }}> {grocery.text} </span>
                      <button onClick ={() => deleteItem(grocery.id)}>X</button>
                      <button onClick={() => toggleEdit()} disabled={grocery.isBought}>Edit</button>
                  </>   
              ) : (
                  <>
                      <input type="text" value={text}  onChange={handleEdit} />
                      <button disabled = {error} onClick={() => handleUpdate(grocery.id, text)}>Update</button>
                      <button onClick={() => toggleEdit()}> Cancel </button>
                 </>
              )} 
        </li>
    );
}

export default Grocery;