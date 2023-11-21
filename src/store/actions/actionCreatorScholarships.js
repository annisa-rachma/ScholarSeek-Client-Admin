import { baseUrl } from "../../config/baseUrl";
import { scholarshipsByIdFetchSuccess, scholarshipsFetchSuccess } from "./actionType";


  export function fetchScholarships() {
    return async function (dispatch) {
      try {
        const response = await fetch(baseUrl+"/scholarships",{
          method: "GET",
          body: JSON.stringify(),
          headers: {
            access_token: localStorage.access_token,
            "Content-Type": "application/json",
          }
        });
        const resData = await response.json();
        if (!response.ok) throw resData;
        console.log(resData.scholarships);
        dispatch(scholarshipsFetchSuccess(resData.scholarships));
      } catch (err) {
        throw err;
      }
    };
  }

  export function fetchScholarshipById(slug) {
    console.log(slug);
    return async function (dispatch) {
      try {
        const response = await fetch(baseUrl + "/scholarships/" + slug,{
          method: "GET",
          headers: {
            access_token: localStorage.access_token,
            "Content-Type": "application/json",
          },
        });
        const resData = await response.json();
        console.log(resData,"<<<><><><");
        if (!response.ok) throw resData;
        dispatch(scholarshipsByIdFetchSuccess(resData));
      } catch (err) {
        throw err;
      }
    };
  }

  export function addScholarship(payload) {
    console.log(JSON.stringify(payload));
    return async function (dispatch) {
      try {
        const response = await fetch(baseUrl + "/scholarships", {
          method: "POST",
          body: JSON.stringify(payload),
          headers: {
            access_token: localStorage.access_token,
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        const resData = await response.json();
        if (!response.ok) throw resData;
        dispatch(fetchScholarships())
        return resData;
      } catch (err) {
        throw err;
      }
    };
  }

  export function editScholarship(payload, slug) {
    console.log(slug, payload);
    return async function (dispatch) {
      try {
        const response = await fetch(baseUrl + "/scholarships/" + slug,{
          method: "PUT",
          body: JSON.stringify(payload),
          headers: {
            access_token: localStorage.access_token,
            "Content-Type": "application/json",
          },
        });
        const resData = await response.json();
        console.log(resData);
        if (!response.ok) throw resData;
        dispatch(fetchScholarships());
      } catch (err) {
        throw err;
      }
    };
  }

  export function deleteScholarship(slug) {
    console.log(JSON.stringify(slug));
    return async function (dispatch) {
      try {
        const response = await fetch(baseUrl + "/scholarships/" + slug, {
          method: "DELETE",
          headers: {
            access_token: localStorage.access_token,
            "Content-Type": "application/json",
          },
        });
        console.log(response);
        const resData = await response.json();
        if (!response.ok) throw resData;
        dispatch(fetchScholarships())
        return resData;
      } catch (err) {
        throw err;
      }
    };
  }