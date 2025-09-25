import API from "./API";

class AuthServices {
    async register(form) {
        try {
            const response = await API("/auth/register", {
                method: "POST",
                body: JSON.stringify(form),
            });
            return response;
        } catch (error) {
            console.log("Register error:", error);
            throw error;
        }
    }

    async login(userInfo) {
        try {
            const response = await API("/auth/login", {
                method: "POST",
                body: JSON.stringify(userInfo),
            });
            if (response && response.success && response.data.token) {
                localStorage.setItem("token", response.data.token);
            }
            return response;
        } catch (error) {
            console.log("Login error:", error);
            throw error;
        }
    }

    logout() {
        localStorage.removeItem("token");
        window.location.reload();
    }
}

export default new AuthServices();
