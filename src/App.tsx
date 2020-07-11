import React, { useState } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/Header";
import Home from "./components/Home";
import Base from "./components/Base";
import Toppings from "./components/Toppings";
import Order from "./components/Order";

function App() {
  const [pizza, setPizza] = useState<Pizza>({ base: "", toppings: [] });

  const addBase = (base: string) => {
    setPizza({ ...pizza, base });
  };

  const removeTopping = (topping: string) => {
    const newToppings = pizza.toppings.filter((t) => t !== topping);
    setPizza({ ...pizza, toppings: newToppings });
  };

  const addTopping = (topping: string) => {
    if (!pizza.toppings.includes(topping)) {
      const newToppings = [...pizza.toppings, topping];
      setPizza({ ...pizza, toppings: newToppings });
    } else {
      removeTopping(topping);
    }
  };

  return (
    <>
      <Header />
      <Switch>
        <Route path="/base">
          <Base addBase={addBase} pizza={pizza} />
        </Route>
        <Route path="/toppings">
          <Toppings addTopping={addTopping} pizza={pizza} />
        </Route>
        <Route path="/order">
          <Order pizza={pizza} />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </>
  );
}

export default App;
