import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import TableRowUser from "../components/TableRowUser";
import { fetchUsers } from "../store/actions/actionCreatorUser";

export default function Users() {
  const [loading, setLoading] = useState(false)
  const users = useSelector((state) => {
    return state.userReducer.users;
  });
  console.log(users);
  const dispatch = useDispatch();

  const fetchData = async () => {
    try {
      setLoading(true)
      await dispatch(fetchUsers());
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

  return (
    <>
      <div className=" grid grid-cols-2 py-8 pl-4 mr-4">
        <div className="text-4xl font-semibold">Threads List</div>
        {/* <div className="grid justify-items-end">
          <div onClick={() => {setShowAdd(true)}} className="border cursor-pointer grid place-content-center border-black py-1 px-5 bg-black text-white hover:bg-[#242424] hover:text-white">
            + Create Scholarship
          </div>
        </div> */}
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
                USERNAME
              </th>
              <th className=" py-3 px-4 border-b-[1px] border-slate-600">
                EMAIL
              </th>
              <th className=" py-3 px-4 border-b-[1px] border-slate-600">
                ROLE
              </th>
              <th className=" py-3 px-4 border-b-[1px] border-slate-600">
                AWARDEE VALIDATION
              </th>
          
            </tr>
          </thead>
          <tbody>
            {loading && <tr><td>Loading...</td></tr>  }
            {!loading && users?.map((user, idx) => {
            return <TableRowUser key={idx} user={user} idx={idx} />;
          })}
          </tbody>
        </table>
      </div>

      {/* <AddPopupScholarship onClose={handleOnClose} visible={showAdd}/> */}
    </>
  );
}
