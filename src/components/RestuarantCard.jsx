import { IMG_CDN_URL } from "../config";
const ResuturantCard = ({ name, cuisines, avgRating, cloudinaryImageId }) => {
  return (
    <div className="w-56 p-2 m-5 shadow-xl bg-orange-200">
      <img className="h-68 w-68 p-2" src={IMG_CDN_URL + cloudinaryImageId} />
      <h2 className="font-bold text-xl">{name}</h2>
      <h3>{cuisines.join(", ")}</h3>
      <h4>{avgRating} star</h4>
    </div>
  );
};

export default ResuturantCard;
