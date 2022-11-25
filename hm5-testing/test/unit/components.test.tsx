/* 

@BUG_ID 4  @route /
Bug doesn't collapses navigation during initial page loading
when using mobile device

@BUG_ID 8
Bug shows incorrect color for success box after 

@BUG_ID 9  @route hw/store/catalog/:product_id
Bug shows incorrect size for "Add to cart" button  

*/

import { render, screen } from "@testing-library/react";
import { Application } from "../../src/client/Application";
import { BrowserRouter } from "react-router-dom";
import { ExampleApi, CartApi } from "../../src/client/api";
import { initStore } from "../../src/client/store";
import React from "react";
import { Provider } from "react-redux";
import { ProductDetails } from "../../src/client/components/ProductDetails";
import { Product } from "../../src/common/types";

describe("test components classname", () => {
  const basename = "/hw/store";
  const api = new ExampleApi(basename);
  const cart = new CartApi();
  const store = initStore(api, cart);

  it("navigation should be collapsed during initial page load", () => {
    const application = (
      <BrowserRouter basename="/">
        <Provider store={store}>
          <Application />
        </Provider>
      </BrowserRouter>
    );
    render(application);
    expect(screen.getByRole("navigation-menu").classList).toContain("collapse");
  });

  it("button should be properly sized", () => {
    const product = {
      description: "lol",
      material: "d",
      color: "g",
    } as Product;

    const productDetails = (
      <BrowserRouter basename="/">
        <Provider store={store}>
          <ProductDetails product={product} />
        </Provider>
      </BrowserRouter>
    );

    render(productDetails);
    expect(
      screen.getByRole("button", {
        name: /add to cart/i,
      }).classList
    ).toContain("btn-lg");
  });
});
