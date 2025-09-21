import axios from "axios";
import { create } from "zustand";

export const useUser = create((set) => ({
    token: "",
    isAuthed: false,

    register: async (userInfo) => {
        try {
            await axios.post(
                "https://api.kapkup.com/api/auth/register",
                userInfo,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                },
            )

        } catch (error) {
            console.log(error);
        }

    },
    login: async (userInfo) => {
        try {
            const { data } = await axios.post("https://api.kapkup.com/api/auth/login",
                userInfo,
                {
                    headers: {
                        "Content-Type": "application/json",
                    }
                }
            )
            const token = data.data.token
            if (token) {

                localStorage.setItem("token", token)
                set({ token: token, isAuthed: true })
            }

        } catch (error) {
            console.log(error);
        }

    },
    logout: () => {
        set({ isAuthed: false })
        localStorage.removeItem("token")
        set({ token: "", isAuthed: false })
        window.location.reload()


    },
    initialize :()=>{
        const token = localStorage.getItem("token");
        if (token){
            set({isAuthed:true, token: token})
        }else{
            set({token, isAuthed:false})
        }
    }


}))