import { useDispatch } from "react-redux";
import { cloudinary } from "../utils/constants";
import { addItem } from "../utils/cartSlice";
const ItemList = ({ items }) => {
  console.log(items);
  const dispatch = useDispatch();
  const cartCount = (item) => {
    dispatch(addItem(item));
  }
  return (
    <div >
      {items.map((item) => {
        return (
          <div data-testid = "itemList" key={item.card.info.id} className="text-left py-2 ">
            <div className="flex justify-between">
            <div className="w-9/12" >
            <div className="font-bold">
                <div className="flex justify-between">
              {item.card.info.name}
             
              </div>
              <div className=" py-1 text-sm">
                {item.card.info.finalPrice ? (
                  <div className="flex">
                    <div className="line-through pr-2">
                      ₹ {item.card.info.defaultPrice ? item.card.info.defaultPrice/100 :  item.card.info.price/100 }
                    </div>
                    ₹ {item.card.info.finalPrice / 100}
                  </div>
                ) : item.card.info.defaultPrice ? 
                   <> ₹  { item.card.info.defaultPrice / 100}</>
                 : 
                   <> ₹{ item.card.info.price / 100} </>
                }
              </div>
            </div>
            <div>
              {item.card.info.ratings.aggregatedRating.rating
                ? item.card.info.ratings.aggregatedRating.rating + "⭐️"
                : ""}
              <div className="text-xs py-2"> {item.card.info.description} </div>
            </div>
           
          </div>
            <div className="w-[160px] h-[170px]  ">
            <div className="absolute flex  ">
              
                <button className="bg-green-100 ml-4 mt-[120px] h-8 rounded-lg w-[120px] hover:bg-fuchsia-200" onClick={() => cartCount(item)} >
                    Add +
                </button>
                
            </div>
                <img className="rounded-lg object-cover "  src = {cloudinary + item.card.info.imageId} /> 
                </div>
          </div>
          <hr />
          </div>
          
        );
      })}
    </div>
  );
};

export default ItemList;
