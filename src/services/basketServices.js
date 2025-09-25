import API from "./API";

// get basket
export async function basketAPI() {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("User not logged in. Redirecting to login...");
      window.location.href = "/login";
      return null;
    }

    const data = await API("/basket", {
      method: "GET",
    });

    return data;
  } catch (error) {
    console.error("Basket fetch error:", error);
    return null;
  }
}

// add
export async function addToBasket(templateId, quantity = 1) {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("User not logged in. Redirecting to login...");
      window.location.href = "/login";
      return null;
    }

    const data = await API("/basket/add", {
      method: "POST",
      body: JSON.stringify({ templateId, quantity }),
    });

    if (!data || !data.success) {
      console.error("Failed to add item to basket:", data?.message || "Unknown error");
    }

    return data;
  } catch (error) {
    console.error("Add to basket error:", error);
    return null;
  }
}

// increase
export async function removeFromBasket(templateId, quantity = 1) {
  try {
    const token = localStorage.getItem("token");
    if (!token) {
      console.warn("User not logged in. Redirecting to login...");
      window.location.href = "/login";
      return null;
    }

    const data = await API("/basket/remove", {
      method: "POST",
      body: JSON.stringify({ templateId, quantity }),
    });

    if (!data || !data.success) {
      console.error("Failed to remove item from basket:", data?.message || "Unknown error");
    }

    return data;
  } catch (error) {
    console.error("Remove from basket error:", error);
    return null;
  }
}
