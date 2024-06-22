import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { IMG_CDN_URL } from "../config";
import Shimmer from "./Shimmer";
import useResturant from "../utils/useRestaurant";
import { useDispatch } from "react-redux";
import { addIteam } from "../utils/cartSlice";

const ResturantMenu = () => {
  // get URL data Dyanamic
  const { menuId } = useParams();

  const restroDeatils = useResturant(menuId);
  const dispatch = useDispatch();

  const addFoodIteam = (itm) => {
    dispatch(addIteam(itm));
  };

  return !restroDeatils ? (
    <Shimmer />
  ) : (
    <>
      <div className="flex">
        <div>
          <h1>HI Resto Details Here... {menuId}</h1>
          <h2>{restroDeatils?.cards[2]?.card?.card?.info?.name}</h2>
          <img
            style={{ width: "500px", height: "500px" }}
            src={
              IMG_CDN_URL +
              restroDeatils?.cards[2]?.card?.card?.info?.cloudinaryImageId
            }
          />
          <h3>{restroDeatils?.cards[2]?.card?.card?.info?.city}</h3>
          <h3>{restroDeatils?.cards[2]?.card?.card?.info?.avgRating}</h3>
        </div>

        <div className="p-5">
          <h2>Menu</h2>
          {restroDeatils?.cards[4].groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards?.map(
            (itm, index) => (
              <>
                <li>
                  {itm?.card?.info?.name} -{" "}
                  <button
                    className="bg-black text-white p-1 m-2"
                    onClick={() => addFoodIteam(itm?.card?.info)}
                  >
                    Add
                  </button>
                </li>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default ResturantMenu;
