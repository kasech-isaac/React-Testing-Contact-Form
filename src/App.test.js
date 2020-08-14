import React from "react";
import { render } from "@testing-library/react";
import App from "./App";

test("renders App without crashing", () => {
 const container = render(<App />);
//  console.log(container)
 container.getByPlaceholderText(/Edd/i)
 container.getByPlaceholderText(/Burke/i)
 container.getByPlaceholderText(/bluebill1049@hotmail.com/i)
container.queryByLabelText('input[name="firstName"]')
container.queryByLabelText('input[name="lastname"]')
container.queryByLabelText('input[name="email"]')
container.queryByLabelText('input[name="message"]')


});
