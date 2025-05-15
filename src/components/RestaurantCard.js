const RestaurantCard = ({ resDetails }) => {
   const {
     name,
     cuisines,
     avgRating,
     costForTwo,
     sla,
     cloudinaryImageId,
   } = resDetails.info;
 
   const cloudinary = "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";
 
   return (
     <div className="card">
       <div className="card-img">
         <img src={cloudinary + cloudinaryImageId} alt={name} />
       </div>
       <h3>{name}</h3>
       <h4>{cuisines?.slice(0, 3).join(',')}</h4>
       <h4>{avgRating} ⭐️</h4>
       <h4>{costForTwo}</h4>
       <h4>{sla?.slaString}</h4>
     </div>
   );
 };
 
 export default RestaurantCard;
 