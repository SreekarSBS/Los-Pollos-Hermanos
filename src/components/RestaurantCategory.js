
import ItemList from "./ItemList";

const RestaurantCategory = ({data , show, setShowIndex}) => {
  
   

    const showItems = () =>{
      setShowIndex() 
      
    }
    return <div>
          <ul>
                <li className="my-6">
                  <div className="bg-gray-100 w-6/12 m-auto   py-3 px-3 rounded-lg shadow-lg  ">
                  <span className="flex justify-between font-bold text-lg cursor-pointer " onClick={showItems}> 
                    {data.title} ({data.itemCards.length})
                  <div>{ show ? "⌃" : "⬇️"}</div>
                  </span>
                  
                  
                  { show && <ItemList items = {data.itemCards}/>}
                 
                  </div>
                </li>
              </ul> 
        
    </div>
}

export default RestaurantCategory;