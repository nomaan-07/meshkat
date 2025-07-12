import axios from "axios";

const baseURL = "https://peaceful-kirch-o4ef0kgcy.liara.run/api";

export async function signup(userData) {
  try {
    const response = await axios.post(`${baseURL}/auth/register`, userData, {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error?.message || "خطار در ارتباط با سرور");
  }
}
