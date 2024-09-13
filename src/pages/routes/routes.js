// src/routes/appRoutes.js
import { createBrowserRouter } from "react-router-dom";
import App from "../../App";
import Layout from "../../components/layout";
import LoginPage from "../login/";
import ProductsPage from "../products";

const ROUTES = createBrowserRouter([
  {
    path: "/",
    element: (
      <Layout>
        <App />
      </Layout>
    ),
  },
  {
    path: "/products",
    element: <ProductsPage />,
  },
  {
    path: "/login",
    element: <LoginPage />,
  },
]);

export default ROUTES;
