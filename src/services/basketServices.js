import axios from "axios";

export const basketAPI = async () => {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("please login to see your basket");
      return null;
    }

    const res = await axios.get("https://api.kapkup.com/api/basket", {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    return res.data;
  } catch (err) {
    console.error("Basket API Error:", err);
    return null;
  }
};
