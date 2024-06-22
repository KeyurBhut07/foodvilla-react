import { useDispatch } from "react-redux";
import { IMG_CDN_URL } from "../config";
import { removeIteam } from "../utils/cartSlice";

const FoodItem = ({ name, description, price, imageId, id }) => {
  const dispatch = useDispatch();
  const handleRemove = (id) => {
    dispatch(removeIteam(id));
  };

  return (
    <div className="w-56 p-2 m-5 shadow-xl bg-orange-200">
      <img className="h-68 w-68 p-2" src={IMG_CDN_URL + imageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{description}</h3>
      <h4 className="font-bold text-sl"> Rupees : {price / 100}</h4>
      <button className="bg-white p-2" onClick={() => handleRemove(id)}>
        Remove Iteam
      </button>
    </div>
  );
};

export default FoodItem;
