import { baseUrl } from "../../config/baseUrl";
import { patchUserFetchSuccess, usersFetchSuccess } from "./actionType";

export function fetchUsers() {
  return async function (dispatch) {
    try {
      const response = await fetch(baseUrl + "/users", {
        method: "GET",
        body: JSON.stringify(),
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
      });
      const resData = await response.json();
      if (!response.ok) throw resData;
      // console.log(resData);
      dispatch(usersFetchSuccess(resData));
    } catch (err) {
      throw err;
    }
  };
}

export function fetchUserPatch(id, payload) {
  // console.log(id);
  console.log(payload, id, 11111111111);
  return async function (dispatch) {
    try {
      console.log(baseUrl, 1111);
      const response = await fetch(baseUrl + "/users/" + id, {
        method: "PATCH",
        body: JSON.stringify({isAwardeeValidate: payload}),
        headers: {
          access_token: localStorage.access_token,
          "Content-Type": "application/json",
        },
      });
      console.log(response);
      const resData = await response.json();
      if (!response.ok) throw resData;
      dispatch(patchUserFetchSuccess(resData));
    } catch (err) {
      throw err;
    }
  };
}
