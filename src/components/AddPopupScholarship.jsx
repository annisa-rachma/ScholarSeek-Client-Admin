import { useState, useEffect } from "react";
import { LiaWindowCloseSolid } from "react-icons/lia";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { addScholarship } from "../store/actions/actionCreatorScholarships";

export default function AddPopupScholarship({ visible, onClose }) {
  const dispatch = useDispatch();
  const [input, setInput] = useState({
    name: "",
    isFullyFunded: "",
    degrees: [],
    countries: [],
    registrationOpen: "",
    registrationDeadline: "",
    description: "",
    university: [],
    major: [],
    benefit: [],
    ageRequirement: "",
    gpaRequirement: "",
    englishTest: [],
    otherLangTest: [],
    standarizedTest: [],
    documents: [],
    links: "",
    others: [],
  });

  const handleChange = (event) => {
    const { name, value } = event.target;

    if (
      name === "degrees" ||
      name === "countries" ||
      name === "university" ||
      name === "major" ||
      name === "benefit" ||
      name === "englishTest" ||
      name === "otherLangTest" ||
      name === "standarizedTest" ||
      name === "documents" ||
      name === "others"
    ) {
      // Handle array input, split value by comma and trim each value
      const arrayValue = value.split(",").map((item) => item.trim());
      setInput({
        ...input,
        [name]: arrayValue,
      });
    } else {
      setInput({
        ...input,
        [name]: value,
      });
    }
  };

  console.log(input);

  const handleSubmit = async (event) => {
    try {
      event.preventDefault();
      await dispatch(addScholarship(input));
      console.log("add scholarship success");
      setInput({
        name: "",
        isFullyFunded: "",
        degrees: [],
        countries: [],
        registrationOpen: "",
        registrationDeadline: "",
        description: "",
        university: [],
        major: [],
        benefit: [],
        ageRequirement: "",
        gpaRequirement: "",
        englishTest: [],
        otherLangTest: [],
        standarizedTest: [],
        documents: [],
        links: "",
        others: [],
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
        <div className="bg-white p-6 w-[1000px]">
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

          <form onSubmit={handleSubmit} id="form-add" className="grid grid-cols-2 gap-4">
            <div className="col-span-1">
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">Name</label>
              <input
                type="text"
                value={input.name}
                name="name"
                onChange={handleChange}
                placeholder="Input name..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">isFullyFunded</label>
              <select
                value={input.isFullyFunded}
                name="isFullyFunded"
                id=""
                onChange={handleChange}
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              >
                <option value="" disabled>
                  Select isFullyFunded
                </option>
                <option value="Fully Funded">Fully Funded</option>
                <option value="Partial">Partial</option>
              </select>
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">
                Degrees (Separate with commas)
              </label>
              <input
                type="text"
                value={input.degrees.join(", ")} 
                name="degrees"
                onChange={handleChange}
                placeholder="Input degrees..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">
                Country (Separate with commas)
              </label>
              <input
                type="text"
                value={input.countries.join(", ")} 
                name="countries"
                onChange={handleChange}
                placeholder="Input country..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">Registration Open</label>
              <input
                type="date"
                value={input.registrationOpen}
                name="registrationOpen"
                onChange={handleChange}
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">
                Registration Deadline
              </label>
              <input
                type="date"
                value={input.registrationDeadline}
                name="registrationDeadline"
                onChange={handleChange}
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">Description</label>
              <input
                type="textarea"
                value={input.description}
                name="description"
                onChange={handleChange}
                placeholder="Input description..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">
                University (Separate with commas)
              </label>
              <input
                type="text"
                value={input.university.join(", ")} 
                name="university"
                onChange={handleChange}
                placeholder="Input university..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">
                Major (Separate with commas)
              </label>
              <input
                type="text"
                value={input.major.join(", ")} 
                name="major"
                onChange={handleChange}
                placeholder="Input major..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            </div>
            <div className="col-span-1">
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">
                Benefit (Separate with commas)
              </label>
              <input
                type="text"
                value={input.benefit.join(", ")} 
                name="benefit"
                onChange={handleChange}
                placeholder="Input benefit..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">Age Requirement</label>
              <input
                type="number"
                value={input.ageRequirement}
                name="ageRequirement"
                onChange={handleChange}
                placeholder="Input ageRequirement..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">GPA Requirement</label>
              <input
                type="number"
                value={input.gpaRequirement}
                name="gpaRequirement"
                onChange={handleChange}
                placeholder="Input gpaRequirement..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">
                English Test (Separate with commas)
              </label>
              <input
                type="text"
                value={input.englishTest.join(", ")} 
                name="englishTest"
                onChange={handleChange}
                placeholder="Input englishTest..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">
                Other Language Test (Separate with commas)
              </label>
              <input
                type="text"
                value={input.otherLangTest.join(", ")} 
                name="otherLangTest"
                onChange={handleChange}
                placeholder="Input otherLanguageTest..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>

            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">
                Standarized Test (Separate with commas)
              </label>
              <input
                type="text"
                value={input.standarizedTest.join(", ")} 
                name="standarizedTest"
                onChange={handleChange}
                placeholder="Input standarizedTest..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">
                Documents (Separate with commas)
              </label>
              <input
                type="text"
                value={input.documents.join(", ")} 
                name="documents"
                onChange={handleChange}
                placeholder="Input documents..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">
                Others (Separate with commas)
              </label>
              <input
                type="text"
                value={input.others.join(", ")} 
                name="others"
                onChange={handleChange}
                placeholder="Input others..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            <div className="flex flex-col mt-2">
              <label className="text-black text-md ">Links</label>
              <input
                type="number"
                value={input.links}
                name="links"
                onChange={handleChange}
                placeholder="Input links..."
                className="w-[100%] h-10 pl-4 mt-1 bg-white border border-black text-black text-md"
              />
            </div>
            </div>
           
            

            <div className="w-[100%] grid grid-cols-3 gap-2">
              <button
                type="submit"
                className="h-10 mt-3 col-start-3 bg-black text-md text-white border border-black grid content-center hover:bg-[#1b1b1b] hover:text-white"
              >
                Save
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
