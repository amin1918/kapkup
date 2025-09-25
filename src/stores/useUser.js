import authservices from "@/services/authservices";
import { create } from "zustand";

export const useUser = create((set) => ({
    token: "",
    isAuthed: false,

    // Register a new user
    register: async (userInfo) => {
        try {
            const response = await authservices.register(userInfo);
            return response;
        } catch (error) {
            console.log("Register error:", error);
            throw error;
        }
    },

    // Login 
    login: async (userInfo) => {
        try {
            const response = await authservices.login(userInfo);
            if (response && response.data && response.data.token) {
                set({ token: response.data.token, isAuthed: true });
            }
            return response;
        } catch (error) {
            console.log("Login error:", error);
            throw error;
        }
    },

    // Logout
    logout: () => {
        authservices.logout();
        set({ token: "", isAuthed: false });
    },
    // initialize
    initialize: () => {
        const token = localStorage.getItem("token");
        if (token) {
            set({ token, isAuthed: true });
        } else {
            set({ token: "", isAuthed: false });
        }
    },
}));
