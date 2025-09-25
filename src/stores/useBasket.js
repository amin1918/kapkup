import { basketAPI, addToBasket, removeFromBasket } from "@/services/basketServices";
import { create } from "zustand";

export const useBasket = create((set) => ({
    basket: null,

    // get basket
    fetchBasket: async () => {
        const data = await basketAPI();
        if (data && data.success) {
            set({ basket: data.data });
        } else {
            set({ basket: null });
        }
    },

    // add
    handleAdd: async (templateId) => {
        const res = await addToBasket(templateId, 1);
        if (res && res.success) {
            set({ basket: res.data });
        }
    },

    // increase
    handleDecrease: async (templateId) => {
        const res = await removeFromBasket(templateId, 1);
        if (res && res.success) {
            set({ basket: res.data });
        }
    },
}));
