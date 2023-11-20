import { useEffect, useState } from "react";
import AddPopupScholarship from "../components/AddPopupScholarship";
import { useDispatch, useSelector } from "react-redux";
import { fetchScholarships } from "../store/actions/actionCreatorScholarships";
import TableRowScholarships from "../components/TableRowScholarship";

export default function Dashboard() {
  const [showAdd, setShowAdd] = useState(false)
  const [loading, setLoading] = useState(false)
  const scholarships = useSelector((state) => {
    return state.scholarshipReducer.scholarships;
  });
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      setLoading(true)
      await dispatch(fetchScholarships());
    } catch (error) {
      console.log(error);
    } 
    finally {
      setLoading(false)
    }
  };

  useEffect(() => {
     fetchData();
  }, []);

  const handleOnClose = () => setShowAdd(false)
  return (
    <>
      <div className=" grid grid-cols-2 py-8 pl-4 mr-4">
        <div className="text-4xl font-semibold">Scholarship List</div>
        <div className="grid justify-items-end">
          <div onClick={() => {setShowAdd(true)}} className="border cursor-pointer grid place-content-center border-black py-1 px-5 bg-black text-white hover:bg-[#242424] hover:text-white">
            + Create Scholarship
          </div>
        </div>
      </div>
      <div className="mt-8  p-8 pl-4 mr-4 h-[480px] overflow-y-scroll">
        <table className="border-t-[1px] border-black  w-[100%]">
          <thead>
            <tr className="text-center">
              <th className=" py-3 px-4 border-b-[1px] border-slate-600">NO</th>
              <th className=" py-3 px-4 border-b-[1px] border-slate-600">
                NAME
              </th>
              <th className=" py-3 px-4 border-b-[1px] border-slate-600">
                STATUS
              </th>
              <th className=" py-3 px-4 border-b-[1px] border-slate-600">
                UNIVERSITY
              </th>
              <th className=" py-3 px-4 border-b-[1px] border-slate-600">
                COUNTRY
              </th>
              <th className=" py-3 px-4 border-b-[1px] border-slate-600">
                DEGREES
              </th>
              <th className=" py-3 px-4 border-b-[1px] border-slate-600">
                FUNDED TYPE
              </th>
              {/* <th className=" py-3 px-4 border-b-[1px] border-slate-600">
                LINKS
              </th> */}
              <th className=" py-3 px-4 border-b-[1px] border-slate-600">
                ACTION
              </th>
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td>Loading...</td></tr>  }
            {!loading && scholarships?.map((scholarship, idx) => {
            return <TableRowScholarships key={idx} scholarship={scholarship} idx={idx} />;
          })}
          </tbody>
        </table>
      </div>

      <AddPopupScholarship onClose={handleOnClose} visible={showAdd}/>
    </>
  );
}
