import BussinesStatus from "@/components/items/detailsPage/BussinesStatus";
import DetailsPhoto from "@/components/items/detailsPage/photo";
import { basketAPI } from "@/services/basketServices";
import axios from "axios";
import React from "react";

async function Details({ params }) {
  const { id } = await params; 
  console.log("Service ID:", id);

  let currentBusiness = null;
  let basket = null
  try {
    const { data } = await axios.get(
      "https://api.kapkup.com/api/businesses/getAllBusinessesOffers"
    );
    
    const success = data.data.success;

    if (success) {
      const businesses = data.data.data;
      currentBusiness = businesses.find((business) => business.slug === id);
    }
  } catch (error) {
    console.error("API Error:", error);
  }

  if (!currentBusiness) {
    return <p>Business not found.</p>;
  }


  const currentCoupons = currentBusiness.coupons || [];

  console.log("Current Business:", currentBusiness);

  return (
    <>
      <DetailsPhoto currentBusinessPhoto={currentBusiness?.media?.gallery} />
      <BussinesStatus currentBusiness={currentBusiness}  currentCoupons={currentCoupons} />
    </>
  );d
}

export default Details;
