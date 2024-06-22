import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import UsertContext from "../utils/UserContext";
import { useContext } from "react";
import { useSelector } from "react-redux";

// Named Export - {Title} name import
export const Title = () => {
  return (
    <Link to="/">
      <img
        className="h-28 p-2"
        src="https://yt3.ggpht.com/ytc/AKedOLSpK3T_2RxkMYb-pk9oENQB0NvYpeOdXRgQe8i5=s800-c-k-c0x00ffffff-no-rj"
        alt="logo"
      />
    </Link>
  );
};

const Header = () => {
  const { user } = useContext(UsertContext);
  const cartItems = useSelector((store) => store.cart.items);
  return (
    <div className="flex justify-between border-solid border-2 border-black m-2">
      <Title />
      <div className="nav-items">
        <ul className="flex py-10">
          <li className="px-3">
            <Link to="/">Home</Link>
          </li>
          <li className="px-3">
            <Link to="/about">About</Link>
          </li>
          <li className="px-3">
            <Link to={"/contact"}>Contact</Link>
          </li>
          <li className="px-3">
            <Link to={"/instamart"}>Instamart</Link>
          </li>
          <Link to={"/cart"}>
            <li className="px-3">Cart - {cartItems.length}</li>
          </Link>
        </ul>
      </div>
      <h1 className="py-9">{useOnline ? "🟢" : "🔴"}</h1>
      <span className="p-10 font-bold">{user.name}</span>
      <button className="pr-10">Login</button>
    </div>
  );
};

export default Header;
