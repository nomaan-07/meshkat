import axios from "axios";
import { getCookie } from "../utils/cookies";

const baseURL = "https://meshkatdev.liara.run/api";

export async function signup(userData) {
  try {
    const response = await axios.post(`${baseURL}/auth/register`, userData, {
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(error?.message || "خطار در ارتباط با سرور");
  }
}

export async function verifyPhoneNumber(otp) {
  try {
    const token = getCookie("register_token");
    const response = await axios.post(
      `${baseURL}/auth/verify_number`,
      { otp },
      {
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error?.message || "خطا در ارتباط با سرور"
    );
  }
}

export async function resendOtp() {
  try {
    const token = getCookie("register_token");
    const response = await axios.post(`${baseURL}/auth/resend_otp`, undefined, {
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
    });
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error?.message || "خطا در ارتباط با سرور"
    );
  }
}

export async function login(userData) {
  try {
    const response = await axios.post(`${baseURL}/auth/login`, userData);
    return response.data;
  } catch (error) {
    throw new Error(
      error.response?.data?.message || error?.message || "خطا در ارتباط با سرور"
    );
  }
}
