import { baseUrl } from "../../config/baseUrl";
import { mentoringByIdFetchSuccess, mentoringFetchSuccess } from "./actionType";


  export function fetchMentoring() {
    return async function (dispatch) {
      try {
        const response = await fetch(baseUrl+"/mentoring",{
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
        dispatch(mentoringFetchSuccess(resData.datas));
      } catch (err) {
        throw err;
      }
    };
  }

  export function fetchMentoringById(slug) {
    // console.log(slug);
    return async function (dispatch) {
      try {
        const response = await fetch(baseUrl + "/mentoring/" + slug,{
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
            "Content-Type": "application/json",
          },
        });
        const resData = await response.json();
        if (!response.ok) throw resData;
        dispatch(mentoringByIdFetchSuccess(resData));
      } catch (err) {
        throw err;
      }
    };
  }