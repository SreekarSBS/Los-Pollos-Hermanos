import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/appStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
it("Should render button component of Header", () => {
  render(
    <BrowserRouter>
      <Provider store={appStore}>
        <Header />
      </Provider>
    </BrowserRouter>
  );
  const button = screen.getByRole("button");
  expect(button).toBeInTheDocument();
});

it("testing the render of cart items",()=>{
    render(
        <BrowserRouter>
          <Provider store={appStore}>
            <Header />
          </Provider>
        </BrowserRouter>
      );

      const cartItems = screen.getByText(/Cart/);
      expect(cartItems).toBeInTheDocument();    
})
it("Should render Login button / component of Header", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByRole("button",{name : "Login"});
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button",{name : "Logout"});
    expect(logoutButton).toBeInTheDocument();
  });