import React, { lazy, Suspense, useState } from "react";
import ReactDOM from "react-dom/client";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Body from "./components/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./components/About";
import Error from "./components/Error";
import ResturantMenu from "./components/ResturantMenu";
import Contact from "./components/Contact";
import Profile from "./components/Profile";
import Shimmer from "./components/Shimmer";
import UsertContext from "./utils/UserContext";
import { Provider } from "react-redux";
import store from "./utils/store";
import Cart from "./components/Cart";
// import Instamart from "./components/Instamart";

// Lazy Loading
const Instamart = lazy(() => import("./components/Instamart"));

const App = () => {
  const [user, setUser] = useState({
    name: "Ritul Bhut",
    email: "rb@gmail.com",
  });
  return (
    <>
      <Provider store={store}>
        <UsertContext.Provider value={{ user }}>
          <Header />
          <Outlet />
          <Footer />
        </UsertContext.Provider>
      </Provider>
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: <About />,
        children: [
          {
            path: "profile",
            element: <Profile />,
          },
        ],
      },
      {
        path: "/contact",
        element: <Contact />,
      },
      {
        path: "/details/:menuId",
        element: <ResturantMenu />,
      },
      {
        path: "/instamart",
        element: (
          <Suspense fallback={<Shimmer />}>
            <Instamart />
          </Suspense>
        ),
      },
      {
        path: "/cart",
        element: <Cart />,
      },
    ],
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={router} />);

/*

------STRUCTURE OF MY APP-----

 Header
   - Logo
   - Nav Item
   - Cart

 Body 
   - Search bar
   - Resuturant List
      - Resutorat Card
         - Image
         - Name
         - Rating
         - Price
         - Cusines

 Footer
   - Link
   - CopyRight

*/
