import Cookies from "js-cookie";

export function setCookie(name, value, options = {}) {
  const deafualtOptions = {
    expires: 1,
    secure: true,
    sameSite: "strict",
    path: "/",
    ...options,
  };

  Cookies.set(name, value, deafualtOptions);
}

export function getCookie(name) {
  return Cookies.get(name);
}

export function removeCookie(name, options = {}) {
  const deafualtOptions = {
    path: "/",
    ...options,
  };
  Cookies.remove(name, deafualtOptions);
}

export function hasCookie(name) {
  return !!getCookie(name);
}
