import { basketAPI } from "@/services/basketServices";
import axios from "axios";
import { create } from "zustand";

export const useBasket = create((set) => ({
    basket: null,
    



    fetchBasket: async () => {
        const data = await basketAPI();
        if (data && data.success) {
            set({ basket: data.data });
        }
    },
    handleAdd: async (id) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.warn("please login to add items to basket");
                return;
            }
            const res = await axios.post(
                "https://api.kapkup.com/api/basket/add",
                {
                    templateId: id,
                    quantity: 1
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            set({ basket: res.data.data })
        } catch (err) {
            console.error("Add to basket error:", err);
        }

    },
      handleDecrease: async (id) => {
        try {
            const token = localStorage.getItem("token");
            if (!token) {
                console.warn("please login to add items to basket");
                return;
            }
            const res = await axios.post(
                "https://api.kapkup.com/api/basket/remove",
                {
                    templateId: id,
                    quantity: 1
                },
                {
                    headers: {
                        Authorization: `Bearer ${token}`,
                        "Content-Type": "application/json"
                    }
                }
            );
            set({ basket: res.data.data })
        } catch (err) {
            console.error("Add to basket error:", err);
        }

    },
}));
