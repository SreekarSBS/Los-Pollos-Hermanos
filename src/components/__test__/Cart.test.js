import { act } from "react"
import { fireEvent, screen, render } from "@testing-library/react"
import appStore from "../../utils/appStore"
import MOCK_DATA from "../mocks/RestaurantMockMenu.json"
import "@testing-library/jest-dom";
import ResInfo from "../ResInfo"
import { Provider } from "react-redux";
import Header from "../Header"
import { BrowserRouter } from "react-router-dom";
import Cart from "../Cart"
global.fetch = jest.fn(()=> {
    return Promise.resolve({
        json : () => {
            return Promise.resolve(MOCK_DATA);
        }
    })
})

it("Check the functionality of a cart ", async()=> {
    await act( async() =>{ render(
    <BrowserRouter>
    <Provider store={appStore} >
        <Header/>
        <Cart/>
        <ResInfo/>
    </Provider>
    </BrowserRouter>
   )})
    const accordion = screen.getByText("Mango Specials (4)");
    expect(accordion).toBeInTheDocument();
    fireEvent.click(accordion)

    const items = screen.getAllByTestId("itemList")
    expect(items.length).toBe(4)
    
    expect(screen.getByText("Cart (0)")).toBeInTheDocument();

    const addBtn = screen.getAllByText("Add +");
    fireEvent.click(addBtn[1]);
    
    expect(screen.getByText("Cart (1)")).toBeInTheDocument();
    fireEvent.click(addBtn[3]);
    expect(screen.getByText("Cart (2)")).toBeInTheDocument();

    expect(screen.getAllByTestId("itemList").length).toBe(6);


    const clearCart = screen.getByRole("button" , {name : "Clear"});
    expect(clearCart).toBeInTheDocument()
    fireEvent.click(clearCart);
    expect(screen.getByText("Cart (0)")).toBeInTheDocument();
    expect(screen.getAllByTestId("itemList").length).toBe(4);
}) 