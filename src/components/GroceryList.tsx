import Grocery from './Grocery';

type GroceryListProps = {
    items: {id: string, text: string, isBought: boolean}[]
    buyItem: (id: string) => void
    deleteItem: (id: string) => void
    editItem: (id: string, text: string) => void
}

function GroceryList({items, buyItem, deleteItem, editItem}: GroceryListProps) {

    const listGroceries = items.map((grocery) => {
            return <Grocery 
                        key = {grocery.id} 
                        grocery={grocery} 
                        buyItem = {buyItem} 
                        deleteItem = {deleteItem} 
                        editItem = {editItem} 
                    />
            });

    return (
        <>
           <ul>{listGroceries}</ul>
        </>
    )

}

export default GroceryList;