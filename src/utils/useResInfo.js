import { useState, useEffect } from "react";
import { MENU_API } from "../utils/constants";
const useResInfo = (resId) => {
    const [restaurantInfo, setRestaurantInfo] = useState(null);
    useEffect(() => {
        fetchData();
    }, []);
    const fetchData = async () => {
        const data =
            await fetch(MENU_API + resId);
        const jsonData = await data.json();
        setRestaurantInfo(jsonData)
    }
    return restaurantInfo;
}
export default useResInfo;