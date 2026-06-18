import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { Contact } from "./routes/Contact.jsx";
import { ErrorPage } from "./routes/ErrorPage.jsx";
import { Home } from "./routes/Home.jsx";
import { Products } from "./routes/Products.jsx";
import { Info } from "./routes/Info.jsx";
import { Search } from "./routes/Search.jsx";

import { createBrowserRouter, RouterProvider, Router, Navigate } from "react-router-dom";

const router = createBrowserRouter([
  { path: "/",
     element: <App />,
     errorElement: <ErrorPage />, 
    children:[
      {
        path:"/",
        element:<Home/>,
      },
      {
        path: "/contact",
        element: <Contact />
      },
      { //rota dinamica, product parti fixa do url e o :id parametro dinamico da rota
        path:"products/:id",
        //"Quando a URL for /products/alguma-coisa, guarde essa alguma-coisa numa variável chamada id."
        element:<Products/>
      },
      { //path define a rota em que o url ira atender
        path:"products/:id/info",
        element:<Info/>
      }, 
      { // Criando Search
        path:"search",
        element:<Search/>,
      },
      {
        path:"teste",
        element:<Navigate to="/"/>
      }
    ]},
 // { path: "contact", element: <Contact /> },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
);
