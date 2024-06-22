import { resulturantList } from "../config";
import ResuturantCard from "./RestuarantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";

const Body = () => {
  const [searchText, setSearchText] = useState("");
  const [resuturant, setResuturant] = useState([]);
  const [filterresuturant, setFilterResuturant] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const isOnline = useOnline();
  if (!isOnline) {
    return <h1>🔴 oops, You Are a Offline. Please Check Your Internet.</h1>;
  }

  async function getData() {
    const data = await fetch(
      "https://www.swiggy.com/dapi/restaurants/list/v5?lat=23.02760&lng=72.58710&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
    );
    const json = await data.json();
    setResuturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
    setFilterResuturant(
      json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle.restaurants
    );
  }

  return resuturant.length === 0 ? (
    <Shimmer />
  ) : (
    <>
      <div className="p-5 my-5">
        <input
          type="text"
          className="p-1 m-2 border-solid border-2 border-black"
          placeholder="Search"
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <button
          className="bg-black text-white p-2"
          onClick={() => {
            const data = filterData(searchText, resuturant);
            setFilterResuturant(data);
          }}
        >
          Search
        </button>
      </div>
      <div className="flex flex-wrap">
        {filterresuturant.map((resuturant) => {
          return (
            <Link
              key={resuturant.info.id}
              to={`/details/${resuturant.info.id}`}
            >
              <ResuturantCard key={resuturant.info.id} {...resuturant.info} />
            </Link>
          );
        })}
      </div>
    </>
  );
};

export default Body;
