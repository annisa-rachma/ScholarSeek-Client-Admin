import { useState, useEffect } from "react";
import { LiaWindowCloseSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addScholarship } from "../store/actions/actionCreatorScholarships";

export default function AddPopupScholarship({ visible, onClose }) {
  const dispatch = useDispatch();
//   const [input, setInput] = useState({
//     name: "",
//     description: "",
//     price: "",
//     mainImg: "",
//     categoryId: "",
//     imgUrl: [
//       {
//         imgUrl: "",
//       },
//     ],
//   });

 

//   const handleAddInput = () => {
//     if (input.imgUrl.length < 3) {
//       setInput({
//         ...input,
//         imgUrl: [
//           ...input.imgUrl,
//           {
//             imgUrl: "",
//           },
//         ],
//       });
//     }
//   };
//   const handleRemove = () => {
//     const updatedImgUrl = input.imgUrl.slice(0, -1);
//     return setInput({
//       ...input,
//       imgUrl: updatedImgUrl,
//     });
//   };

//   const handleChange = (event) => {
//     const { name, value } = event.target;

//     setInput({
//       ...input,
//       [name]: value,
//     });
//   };

//   const handleImageChange = (event, idx) => {
//     const { name, value } = event.target;
//     let newImages = [...input.imgUrl];
//     newImages[idx].imgUrl = value;
//     setInput({
//       ...input,
//       imgUrl: newImages,
//     });
//   };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await dispatch(addScholarship(input));
      console.log("add scholarship success");
      setInput({
        name: "",
        description: "",
        price: "",
        mainImg: "",
        categoryId: "",
        imgUrl: [
          {
            imgUrl: "",
          },
        ],
      });
      toast.success("Successfully added a new product", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      onClose();
    } catch (error) {
      toast.error(error.message, {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
    }
  };

  if (!visible) return null;

  return (
    <>
      <div className="fixed inset-0 bg-black bg-opacity-25 backdrop-blur-[2px] flex items-center justify-center">
        <div className="bg-white p-6 w-[500px]">
          <div className="flex flex-row justify-between">
            <h1 className="font-semibold text-center text-xl text-black">
              Create New Product
            </h1>
            <div className="">
              <LiaWindowCloseSolid
                onClick={onClose}
                size="25px"
                className="cursor-pointer hover:bg-slate-100"
              />
            </div>
          </div>

          <form onSubmit={handleSubmit} id="form-add" className="">
            <div>AddScholarship</div>
          </form>
        </div>
      </div>
    </>
  );
}
