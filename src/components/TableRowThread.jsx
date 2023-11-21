import { useDispatch } from "react-redux";
// import ImagesPopup from "./ImagesPopup";
import { useState } from "react";
import Swal from "sweetalert2";

export default function TableRowThread({ thread, idx }) {
 
  return (
    <>
      <tr className="text-left ">
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {idx + 1}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {thread.title}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {thread.content}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {`${thread.User?.firstName} ${thread.User?.lastName}`}
            
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {new Date(thread.createdAt).toLocaleDateString('en-US', { timeZone: 'UTC' })}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {thread.isActive === true ? "Active" : "Inactive"}
        </td>
       
        
      </tr>
 
    </>
  );
}
