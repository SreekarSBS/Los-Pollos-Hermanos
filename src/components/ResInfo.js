import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import useResInfo from "../utils/useResInfo";
import RestaurantCategory from "./RestaurantCategory";
import { useState } from "react";
const ResInfo = () => {
  const { resId } = useParams();
  const [showIndex, setShowIndex] = useState(null);
  const restaurantInfo = useResInfo(resId);
   if (restaurantInfo === null) return null;
  

  const { name, cuisines, costForTwoMessage } =
    restaurantInfo?.data?.cards?.[2]?.card?.card?.info;
  const itemCardsContainer = restaurantInfo?.data?.cards
    ?.find((c) => c.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR?.cards?.find(
      (c) => c.card?.card?.itemCards
    );

  const regularCards = restaurantInfo?.data?.cards?.find((c) => c.groupedCard)
    ?.groupedCard?.cardGroupMap?.REGULAR;

  const itemCards = itemCardsContainer?.card?.card?.itemCards;
  const categories = regularCards.cards.filter(
    (c) =>
      c.card?.card?.["@type"] ==
      "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
  );
  // console.log(categories);

  return (
    <div className="text-center  ">
      <h1 className="font-bold my-6 text-2xl">{name}</h1>
      <p className="mb-9">
        {cuisines.join(",")} {costForTwoMessage}
      </p>
      {/* <h2>Menu</h2> */}
      {/* <ul>
               {itemCards?.map((item,index)=> <li key={item.card.info.id || index}>{item.card.info.name} - {"Rs "}{((item.card.info.price) || (item.card.info.defaultPrice)) /100 }</li>)}
            </ul> */}

      {categories.map((item, i) => (
        <RestaurantCategory
          
          key={i}
          data={item?.card?.card}
          show={i == showIndex ? true : false}
          setShowIndex={() => setShowIndex( (prevIndex) => i == prevIndex ? null : i)}
        />
      ))}
    </div>
  );
};

export default ResInfo;
