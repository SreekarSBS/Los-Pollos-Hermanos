import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react"
import MOCK_DATA from "../mocks/RestaurantCardMock.json"
import RestaurantCard, { withPromoted } from "../RestaurantCard"

it("rendering of props in Restaurant Card component", ()=>{
    
    
    render(<RestaurantCard resDetails ={MOCK_DATA}/>)
    const RestName = screen.getByText("Pizza Hut")
    expect(RestName).toBeInTheDocument();
})


it("should render the HOC withPromoted", () => {
   const PromotedRestaurantCard = withPromoted(RestaurantCard)
    render(<PromotedRestaurantCard resDetails ={MOCK_DATA}/>)
    const discountLabel= screen.getByText("50% OFF UPTO ₹100")
    expect(discountLabel).toBeInTheDocument();
})