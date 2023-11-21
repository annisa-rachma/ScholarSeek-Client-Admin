import { baseUrl } from "../../config/baseUrl";
  
export function loginFetch(payload) {
    return async function (dispatch) {
      try {
        const response = await fetch(baseUrl + "/login", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            "Content-Type": "application/json",
          },
        });
        //   console.log(response);
        
        const resData = await response.json();
        // console.log(resData);
        if (!response.ok) throw resData;
        localStorage.setItem("access_token", resData.access_token);
        return resData;
      } catch (err) {
        throw err;
      }
    };
  }
  export function registerFetch(payload) {
    return async function (dispatch) {
      try {
        const response = await fetch(baseUrl + "/register", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            access_token: localStorage.access_token,
            "Content-Type": "application/json",
          },
        });
        //   console.log(response);
        
        const resData = await response.json();
        // console.log(resData);
        if (!response.ok) throw resData;
        return resData;
      } catch (err) {
        throw err;
      }
    };
  }
