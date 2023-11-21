import { useState } from "react";
import { useDispatch } from "react-redux";
import { editScholarship } from "../store/actions/actionCreatorScholarships";

export default function MyEditPopupScholarship({ slug }) {
  const dispatch = useDispatch();

  const [form, setForm] = useState({
    name: "",
    isFullyFunded: false,
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

  function handleChange(e) {
    const typeArrayInputs = ["countries", "degrees"];
    const typeBooleanInputs = ["isFullyFunded"];
    // INI KALO INPUTNYA ARRAY
    if (typeArrayInputs.includes(e.target.name)) {
      const arrayValue = e.target.value.split(",").map((item) => item.trim());
      setForm((prev) => {
        return {
          ...prev,
          [e.target.name]: [...arrayValue],
        };
      });
      // INI KALO INPUTNYA BOOLEAN
    } else if (typeBooleanInputs.includes(e.target.name)) {
      setForm((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.checked,
        };
      });
      console.log(e.target.value, "INI VALUE DARI", e.target.name);
      // INI YA SELAIN DARI ITU
    } else {
      setForm((prev) => {
        return {
          ...prev,
          [e.target.name]: e.target.value,
        };
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    try {
      await dispatch(editScholarship(slug, form));
      console.log("Edit scholarship success");
    } catch (err) {
      console.log(err);
    }
  }

  const inputs = [
    { id: "name", label: "Scholarship Name", type: "text" },
    { id: "isFullyFunded", label: "Fully Funded?", type: "checkbox" },
    { id: "registrationOpen", label: "Open Date", type: "date" },
    { id: "registrationDeadline", label: "Closing Date", type: "date" },
    { id: "countries", label: "Countries", type: "array" },
    { id: "degrees", label: "Degrees", type: "array" },
  ];

  return (
    <div className="fixed z-[50] bg-white w-[80%] h-[70vh] top-[50%] translate-y-[-50%] left-[50%] translate-x-[-50%] shadow-md p-6 flex flex-col gap-4">
      <form onSubmit={handleSubmit}>
        <h1 className="font-bold text-xl">Create New Product</h1>
        <div className="grid grid-cols-2 gap-4">
          {inputs.map((input) => {
            switch (input.type) {
              case "array":
              case "text":
                return (
                  <InputText
                    onChange={handleChange}
                    id={input.id}
                    label={input.label}
                    value={form[input.id]}
                    key={input.id}
                  />
                );
              case "checkbox":
                return (
                  <InputCheckbox
                    onChange={handleChange}
                    id={input.id}
                    label={input.label}
                    value={form[input.id]}
                    key={input.id}
                  />
                );
              case "date":
                return (
                  <InputDate
                    onChange={handleChange}
                    id={input.id}
                    label={input.label}
                    value={form[input.id]}
                    key={input.id}
                  />
                );
            }
          })}
        </div>
        <button className="bg-black text-white px-6 py-3 rounded-md">
          SUBMIT BUTTON
        </button>
      </form>
    </div>
  );
}

function InputText({ id, label, value, onChange }) {
  return (
    <div className="flex flex-col gap-2">
      <label htmlFor={id}>{label}</label>
      <input
        className=" shadow-md"
        type="text"
        value={value}
        id={id}
        name={id}
        onChange={onChange}
      />
    </div>
  );
}
function InputCheckbox({ id, label, value, onChange }) {
  return (
    <div className="flex gap-2 items-center">
      <input
        className=" shadow-md"
        onChange={onChange}
        type="checkbox"
        id={id}
        name={id}
        value={value}
      />
      <label htmlFor={id}>{label}</label>
    </div>
  );
}
function InputDate({ id, label, value, onChange }) {
  return (
    <div className="flex gap-2 items-center">
      <label htmlFor={id}>{label}</label>
      <input
        className=" shadow-md"
        type="date"
        value={value}
        id={id}
        name={id}
        onChange={onChange}
      />
    </div>
  );
}
