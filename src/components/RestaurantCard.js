import { cloudinary } from "../utils/constants";
const RestaurantCard = ({ resDetails }) => {
 

   const {
     name,
     cuisines,
     avgRating,
     costForTwo,
     sla,
     cloudinaryImageId,

   } = resDetails.info;
 
  
   return (
     <div data-testid = "RestaurantCard" className="p-4 m-4 2xl:ml-12 w-[250px] bg-blue-100 h-[475px] rounded-lg hover:bg-slate-500 hoverr:shadow-lg"> 
       <div className="card-img">
         <img className="h-64" src={cloudinary + cloudinaryImageId} alt={name} />
       </div>
       <h3 className="font-bold text-lg py-4" >{name}</h3>
       <h4>{cuisines?.slice(0, 3).join(',')}</h4>
       <h4>{avgRating} ⭐️</h4>
       <h4>{costForTwo}</h4>
       <h4>{sla?.slaString}</h4>
     </div>
   );
 };
 
export const withPromoted = (RestaurantCard) => {
  return  (props) => {
    const discount = props.resDetails?.info?.aggregatedDiscountInfoV3?.header;
    const discount2 = props.resDetails?.info?.aggregatedDiscountInfoV3?.subHeader;
    return <div>
      <label className="2xl:ml-12 absolute bg-green-100 text-black font-bold p-2 m-2 rounded-lg">{discount + " " + discount2}
      </label>
      <RestaurantCard {...props}/>
    </div>
  }
}


 export default RestaurantCard;
 