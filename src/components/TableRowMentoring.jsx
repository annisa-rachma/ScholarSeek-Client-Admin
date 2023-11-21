import { useDispatch } from "react-redux";
// import ImagesPopup from "./ImagesPopup";
import { useState } from "react";
import Swal from "sweetalert2";

export default function TableRowMentor({ mentor, idx }) {
 
  return (
    <>
      <tr className="text-left ">
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {idx + 1}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {mentor.title}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {mentor.name}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {mentor.schedule}
            
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {mentor.hour}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {mentor.status}
        </td>
       
        
      </tr>
 
    </>
  );
}
