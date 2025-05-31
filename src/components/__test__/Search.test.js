import { fireEvent, render, screen } from "@testing-library/react"
import Body from "../Body"
import MOCK_DATA from "../mocks/mockResListData.json"
import { act } from "react"
import { BrowserRouter } from "react-router-dom"
import "@testing-library/jest-dom";
global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("testing the api fetch ", async() => {
   await act( async() => render(
    <BrowserRouter>
   <Body/>
   </BrowserRouter>
) )
const cardsBefore = screen.getAllByTestId("RestaurantCard");
expect(cardsBefore.length).toBe(20)
const searchBtn = screen.getByRole("button",{name : "Search"});
const searchInput = screen.getByTestId("searchInput");   // similar to e.target.value provided by the browser.
fireEvent.change(searchInput, {target : {value : "pizza"}})
fireEvent.click(searchBtn);
const num = screen.getAllByTestId("RestaurantCard");


expect(num.length).toBe(3);
}) 

it("should display the number of top rated restaurant cards accurately",async()=> {
    await act( async()=> render(
        <BrowserRouter>
            <Body/>
        </BrowserRouter>
    ))
    
    const topRatedBtn  = screen.getByRole("button",{name : "Top Rated Restaurants"})
    fireEvent.click(topRatedBtn)
    const filteredRestaurants = screen.getAllByTestId("RestaurantCard")
    expect(filteredRestaurants.length).toBe(16)
})