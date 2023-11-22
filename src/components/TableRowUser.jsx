import { useDispatch } from "react-redux";
// import ImagesPopup from "./ImagesPopup";
import { useState } from "react";
import Swal from "sweetalert2";
import { fetchUserPatch } from "../store/actions/actionCreatorUser";

export default function TableRowUser({ user, idx }) {
 const dispatch = useDispatch()

  const [isAwardee, setIsAwardee] = useState(user.isAwardeeValidate);


  const handleChange = (e) => {
    const value = e.target.value === "true" ? true : false;
    // console.log(value);
    setIsAwardee(value);
    // Di sini, Anda dapat menambahkan logika untuk melakukan sesuatu
    // saat pilihan "Awardee" atau "Mentee" diubah
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, change it!",
    }).then((result) => {
      if (result.isConfirmed) {
        console.log(user.id,2222);
        dispatch(fetchUserPatch(user.id, value));
        Swal.fire(
          "Update!",
          "Your selected user has been updated.",
          "success"
        );
      }
    });
  };
  //console.log(user.id,'<<<<<<');
  // const handlePatch = () => {
  //   Swal.fire({
  //     title: "Are you sure?",
  //     text: "You won't be able to revert this!",
  //     icon: "warning",
  //     showCancelButton: true,
  //     confirmButtonColor: "#3085d6",
  //     cancelButtonColor: "#d33",
  //     confirmButtonText: "Yes, change it!",
  //   }).then((result) => {
  //     if (result.isConfirmed) {
  //       dispatch(fetchUserPatch(user.id));
  //       Swal.fire(
  //         "Update!",
  //         "Your selected user has been updated.",
  //         "success"
  //       );
  //     }
  //   });
  // };

  return (
    <>
      <tr className="text-center ">
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {idx + 1}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
        {`${user.firstName} ${user.lastName}`}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {user.username}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {user.email}
            
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {user.role}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {/* {user.isAwardeeValidate === true ? "Awardee" : "Mentee"} */}

          <select value={isAwardee} onChange={handleChange}>
            <option value={true}>Validate</option>
            <option value={false}>Not Validate</option>
          </select>
       
        </td>
        
      </tr>
 
    </>
  );
}
