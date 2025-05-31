import RestaurantCard,{withPromoted} from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {useEffect, useState , useContext} from 'react' 
import {Link} from "react-router-dom";
import { CARDS_API } from "../utils/constants";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = ()=>{
    const [resList, setResList] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    
      
    useEffect(() => {
        fetchData();
    }, []);
    console.log(resList);
    const {defaultUser, setUserName} = useContext(UserContext);
    const fetchData = async () => {
        const data = await fetch (CARDS_API);
    

    const jsonData = await data.json();
        console.log(jsonData);
        setResList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };
    const status = useOnlineStatus();
    if(status === false) return <h1>Check your Internet Connection and Try again</h1>

    if(!resList || resList.length === 0){
        return <Shimmer/>
    }
    
    const PromotedRestaurantCard = withPromoted(RestaurantCard);

    return <div className="body">
        <div className="search-container flex">
        <div className="Search-Bar m-4 p-4 ">
            <input className=" border border-solid border-black mr-5" data-testid = "searchInput" type = "text" value = {searchText} onChange={(e) => {setSearchText(e.target.value)}} ></input>
            <button onClick={
                ()=> {
                    const filteredList = allRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setResList(filteredList);
                }
            } className="Search-btn bg-green-100 py-2 px-4  rounded-lg " >Search</button>
            
        </div>
        <div className="flex items-center">
        <button className=" bg-gray-100 py-2 px-4 m-2 " onClick={()=>{
                const filtered = allRestaurants.filter((res) => res.info.avgRating > 4.2);
                setResList(filtered);
                }}>Top Rated Restaurants</button>
             </div>
             <div ><input value={defaultUser} onChange={(e) => {setUserName(e.target.value)}} className="mt-8 py-2 border border-black" /></div>
             </div>
             
        <div className="res-container flex flex-wrap">
           
           {resList.map((restaurant) => (
            <Link  key={restaurant.info.id} to ={ "/restaurants/" + restaurant.info.id}>
           { restaurant.info.aggregatedDiscountInfoV3?
  <PromotedRestaurantCard resDetails={restaurant} /> :  <RestaurantCard  resDetails={restaurant} />}
           </Link>
        ))}
         
         
        </div>
    </div>
}

export default Body;