import { baseUrl } from "../../config/baseUrl";
import { threadByIdFetchSuccess, threadsFetchSuccess } from "./actionType";

  export function fetchThreads() {
    return async function (dispatch) {
      try {
        const response = await fetch(baseUrl+"/threads",{
          method: "GET",
          body: JSON.stringify(),
          headers: {
            access_token: localStorage.access_token,
            "Content-Type": "application/json",
          }
        });
        const resData = await response.json();
        if (!response.ok) throw resData;
        // console.log(resData.datas);
        dispatch(threadsFetchSuccess(resData.datas));
      } catch (err) {
        throw err;
      }
    };
  }

  export function fetchThreadById(slug) {
    // console.log(slug);
    return async function (dispatch) {
      try {
        const response = await fetch(baseUrl + "/threads/" + slug,{
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
            "Content-Type": "application/json",
          },
        });
        const resData = await response.json();
        if (!response.ok) throw resData;
        dispatch(threadByIdFetchSuccess(resData));
      } catch (err) {
        throw err;
      }
    };
  }