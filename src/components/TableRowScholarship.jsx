import { useDispatch } from "react-redux";
// import ImagesPopup from "./ImagesPopup";
import { useState } from "react";
// import EditScholarship from "./EditScholarshipPopup";
import Swal from "sweetalert2";
import { deleteScholarship } from "../store/actions/actionCreatorScholarships";

export default function TableRowScholarships({ scholarship, idx }) {
  const dispatch = useDispatch();
  const [showImages, setShowImages] = useState(false);
  const [showClicked, setShowClicked] = useState(false);
  const [showEdit, setShowEdit] = useState(false);
  const [editClicked, setEditClicked] = useState(false);
  const handleDelete = () => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteScholarship(scholarship.slug));
        Swal.fire("Deleted!", "Your selected scholarship has been deleted.", "success");
      }
    });
  };
  const handleOnClose = () => setShowImages(false);
  const handleOnCloseEdit = () => setShowEdit(false);

  const handleShowImage = () => {
    setShowImages(true);
    setShowClicked(true);
  };

  const handleShowEdit = () => {
    setShowEdit(true);
    setEditClicked(true);
  };
  return (
    <>
      <tr className="text-left ">
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {idx + 1}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {scholarship.name}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {scholarship.isOpen === true ? "Open" : "Closed"}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {scholarship.university}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {scholarship.degrees.length > 1 ? scholarship.degrees.join(", ") : scholarship.degrees}
        </td>
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
        {scholarship.isFullyFunded === true ? "Fully Funded" : "Partial"}
        </td>
        {/* <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          {scholarship.links}
        </td> */}
        <td className=" py-3 px-4 border-b-[1px]  border-slate-300 ">
          <div className="flex flex-row gap-4">
            <button
              onClick={handleShowEdit}
              type="button"
              className="grid place-content-start"
            >
              <div className="border border-black py-1 px-3 bg-white text-black hover:bg-black hover:text-white">
                Edit
              </div>
            </button>
            <button
              onClick={handleDelete}
              type="button"
              className="grid place-content-start"
            >
              <div className="border border-black py-1 px-3 bg-white text-black hover:bg-black hover:text-white">
                Delete
              </div>
            </button>
          </div>
        </td>
      </tr>
      {/* {showClicked && (
        <ImagesPopup
          onClose={handleOnClose}
          visible={showImages}
          id={scholarship.id}
        />
      )} */}
      {/* {editClicked && (
        <Editscholarship
          onClose={handleOnCloseEdit}
          visible={showEdit}
          id={scholarship.id}
        />
      )} */}
    </>
  );
}
