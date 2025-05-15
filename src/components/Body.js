import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import {useEffect, useState} from 'react'

const Body = ()=>{
    const [resList, setResList] = useState([]);
    const [searchText,setSearchText] = useState("");
    const [allRestaurants, setAllRestaurants] = useState([]);
    useEffect(() => {
        fetchData();
    }, []);

    const fetchData = async () => {
        const data = await fetch
        ("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5204303&lng=73.8567437&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    

    const jsonData = await data.json();
        console.log(jsonData);
        setResList(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setAllRestaurants(jsonData?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    };

    if(resList.length === 0){
        return <Shimmer/>
    }

    return <div className="body">
        <div className="search-container">
        <div className="Search-Bar">
            <input type = "text" value = {searchText} onChange={(e) => {setSearchText(e.target.value)}} ></input>
            <button onClick={
                ()=> {
                    const filteredList = allRestaurants.filter((res)=>res.info.name.toLowerCase().includes(searchText.toLowerCase()))
                    setResList(filteredList);
                }
            } className="Search-btn" >Search</button>
        </div>
        <div className="filter">
            <button onClick={()=>{
                const filtered = allRestaurants.filter((res) => res.info.avgRating > 4.2);
                setResList(filtered);
                }}>Top Rated Restaurants</button>
             </div>
             </div>
        <div className="res-container">
           
           {resList.map((restaurant) => (<RestaurantCard key={restaurant.info.id}  resDetails={restaurant}/>))}
         
         
        </div>
    </div>
}

export default Body;