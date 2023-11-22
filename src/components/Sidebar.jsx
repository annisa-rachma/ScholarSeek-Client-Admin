import Logo from "../assets/Logo.png"
import { MdOutlineHome } from "react-icons/md";
import { HiOutlineUserAdd } from "react-icons/hi";
import { RiLogoutBoxRLine } from "react-icons/ri";
import { SiSemanticscholar } from "react-icons/si";
import { BsThreads } from "react-icons/bs";
import { TbSocial } from "react-icons/tb";
import { PiUsersThreeBold } from "react-icons/pi";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import Swal from "sweetalert2";

export default function Sidebar() {
  const location = useLocation();
  const navigate = useNavigate();
  const [currentPage, setCurrentPage] = useState("");
  

  const handleLogout = () => {
    Swal.fire({
      title: "Ready to log out?",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        localStorage.clear();
        navigate("/login");
      }
    });
  };

  useEffect(() => {
    // Use a switch statement or if-else if conditions to set currentPage based on pathname
    switch (location.pathname) {
      case "/":
        setCurrentPage("dashboard");
        break;
      case "/scholarships":
        setCurrentPage("scholarships");
        break;
      case "/threads":
        setCurrentPage("threads");
        break;
      case "/mentoring":
        setCurrentPage("mentoring");
        break;
      case "/users":
        setCurrentPage("users");
        break;
      case "/register":
        setCurrentPage("register");
        break;
      default:
        setCurrentPage("/");
    }
  }, [location.pathname]);
  return (
    <>
      <div className="left-0 m-auto top-0 w-full h-[100vh] flex flex-col bg-gray-200 border-r-[1px] border-black">
        <div className="mt-12">
          <img src={Logo} alt="logo" className="w-45 mx-auto " />
        </div>

        <div className="mt-8 flex flex-col justify-center ">
          <div
            className={`w-[100%] h-16 m-auto font-medium mt-4  hover:bg-black hover:text-white ${
              currentPage === "dashboard" ? "bg-black text-white" : "text-black"
            }`}
          >
            <Link to={`/`}>
              <div className="w-[85%] h-16 border-b-[1px] mx-auto border-black grid content-center">
                <div className="flex-row flex ml-6">
                  <div>
                    <MdOutlineHome size="30px" />
                  </div>
                  <div className="ml-4 grid place-content-center">
                    Dashboard
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div
            className={`w-[100%] h-16 m-auto font-medium -mt-[1px]  hover:bg-black hover:text-white ${
              currentPage === "scholarships"
                ? "bg-black text-white"
                : "text-black"
            }`}
          >
            <Link to={`/scholarships`}>
              <div className="w-[85%] h-16 border-b-[1px] mx-auto border-black grid content-center">
                <div className="flex-row flex ml-6">
                  <div>
                    <SiSemanticscholar size="25px" />
                  </div>
                  <div className="ml-4 grid place-content-center">
                    Scholarship
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div
            className={`w-[100%] h-16 m-auto font-medium -mt-[1px]  hover:bg-black hover:text-white ${
              currentPage === "threads"
                ? "bg-black text-white"
                : "text-black"
            }`}
          >
            <Link to={`/threads`}>
              <div className="w-[85%] h-16 border-b-[1px] mx-auto border-black grid content-center">
                <div className="flex-row flex ml-6">
                  <div>
                    <BsThreads size="25px" />
                  </div>
                  <div className="ml-4 grid place-content-center">
                    Thread
                  </div>
                </div>
              </div>
            </Link>
          </div>
          <div
            className={`w-[100%] h-16 m-auto font-medium -mt-[1px]  hover:bg-black hover:text-white ${
              currentPage === "mentoring"
                ? "bg-black text-white"
                : "text-black"
            }`}
          >
            <Link to={`/mentoring`}>
              <div className="w-[85%] h-16 border-b-[1px] mx-auto border-black grid content-center">
                <div className="flex-row flex ml-6">
                  <div>
                    <TbSocial size="25px" />
                  </div>
                  <div className="ml-4 grid place-content-center">
                    Mentoring
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div
            className={`w-[100%] h-16 m-auto font-medium -mt-[1px]  hover:bg-black hover:text-white ${
              currentPage === "users"
                ? "bg-black text-white"
                : "text-black"
            }`}
          >
            <Link to={`/users`}>
              <div className="w-[85%] h-16 border-b-[1px] mx-auto border-black grid content-center">
                <div className="flex-row flex ml-6">
                  <div>
                    <PiUsersThreeBold size="25px" />
                  </div>
                  <div className="ml-4 grid place-content-center">
                    Users
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div
            className={`w-[100%] h-16 m-auto font-medium -mt-[1px]  hover:bg-black hover:text-white ${
              currentPage === "register" ? "bg-black text-white" : "text-black"
            }`}
          >
            <Link to={`/register`}>
              <div className="w-[85%] h-16 border-b-[1px] mx-auto border-black grid content-center">
                <div className="flex-row flex ml-6">
                  <div>
                    <HiOutlineUserAdd size="25px" />
                  </div>
                  <div className="ml-4 grid place-content-center">
                    Register Admin
                  </div>
                </div>
              </div>
            </Link>
          </div>

          <div className="w-[100%] h-16 m-auto font-medium -mt-[1px] hover:bg-black hover:text-white ">
            <div
              onClick={handleLogout}
              className="w-[85%] h-16 border-b-[1px] mx-auto border-black grid content-center"
            >
              <div className="flex-row flex ml-6">
                <div>
                  <RiLogoutBoxRLine size="24px" />
                </div>
                <div className="ml-4 grid place-content-center">Log out</div>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
}
