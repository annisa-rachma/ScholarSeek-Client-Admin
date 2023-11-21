import { useState } from "react";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { registerFetch } from "../store/actions/actionCreatorLogin";

export default function RegisterAdmin() {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    linkedinUrl: "",
    description: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    setInput({
      ...input,
      [name]: value,
    });
  };

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await dispatch(registerFetch(input));
      setInput({
        firstName: "",
        lastName: "",
        email: "",
        password: "",
      });
      toast.success("Successfully register new admin", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
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

  const handleCancel = () => {
    setInput({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  return (
    <>
      <div className=" grid grid-cols-2 mt-6 mb-6 pl-4 pr-8">
        <div className="text-4xl font-semibold">Register New Admin</div>
      </div>
      <div className="p-8 pl-4 pr-8 pt-0 h-[480px]">
        <form onSubmit={handleSubmit} id="form-login" className="">
          <div className="flex flex-col mt-2">
            <label className="text-black text-md ">First Name</label>
            <input
              type="text"
              value={input.firstName}
              name="firstName"
              onChange={handleChange}
              placeholder="Enter firstName..."
              className="w-[100%] h-12 pl-4 mt-1 bg-white border border-black text-black text-md"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="text-black text-md ">Last Name</label>
            <input
              type="text"
              value={input.lastName}
              name="lastName"
              onChange={handleChange}
              placeholder="Enter lastName..."
              className="w-[100%] h-12 pl-4 mt-1 bg-white border border-black text-black text-md"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="text-black text-md ">Email</label>
            <input
              type="email"
              value={input.email}
              name="email"
              onChange={handleChange}
              placeholder="Enter email..."
              className="w-[100%] h-12 pl-4 mt-1 bg-white border border-black text-black text-md"
            />
          </div>
          <div className="flex flex-col mt-2">
            <label className="text-black text-md">Password</label>
            <input
              type="password"
              value={input.password}
              name="password"
              onChange={handleChange}
              placeholder="Enter password..."
              className="w-[100%] h-12 pl-4 mt-1 bg-white border border-black text-black text-md"
            />
          </div>

          <div className="w-[100%] grid grid-cols-2 mt-2 gap-8">
            <button
              onClick={handleCancel}
              type="button"
              className="h-12 mt-6 bg-white text-lg text-black border border-black grid content-center hover:bg-black hover:text-white"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="h-12 mt-6 bg-black text-lg text-white border border-black grid content-center hover:bg-[#1b1b1b] hover:text-white"
            >
              Save
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
