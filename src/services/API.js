const API_BASE_URL = "https://api.kapkup.com/api";

async function API(endpoint, options = {}) {
    const token = localStorage.getItem("token");

    const headers = {
        "Content-Type": "application/json",
        Authorization: token ? `Bearer ${token}` : "",
        ...options.headers,
    };

    try {
        const response = await fetch(`${API_BASE_URL}${endpoint}`, {
            ...options,
            headers,
        });

        if (response.status === 401) {
            localStorage.removeItem("token");
            window.location.href = "/login";
            throw new Error("Unauthorized (401)");
        }

        const text = await response.text();
        const data = text ? JSON.parse(text) : null;

        return data;
    } catch (error) {
        console.error("API error:", error);
        throw error;
    }
}

export default API;
