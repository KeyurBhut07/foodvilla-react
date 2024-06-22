import { useEffect, useState } from "react";
import { FETCH_MENU_URL } from "../config";

const useResturant = (menuId) => {
  const [restroDeatils, setRestroDetails] = useState(null);

  useEffect(() => {
    getResturantInfo();
  }, []);

  // Get Restro Info Details
  const getResturantInfo = async () => {
    const data = await fetch(FETCH_MENU_URL + menuId);
    const restroDetails = await data.json();
    setRestroDetails(restroDetails.data);
  };

  return restroDeatils;
};

export default useResturant;
