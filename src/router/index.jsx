import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import Layout from "../components/Layout";
import Dashboard from "../views/Dashboard";
import Scholarships from "../views/Scholarships"
import RegisterAdmin from "../views/RegisterAdmin";
import Mentoring from "../views/Mentoring";
import Threads from "../views/Thread";
import Users from "../views/Users";

const router = createBrowserRouter([
  {
    loader : () => {
      if(localStorage.access_token) {
        return redirect("/")
      }
      return null
    },
    children : [
      {
        path : '/login',
        element : <LoginPage/>
      },
    ]
  },
  {
    element: <Layout />,
    loader : () => {
      if(!localStorage.access_token) {
        return redirect("/login")
      }
      return null
    },
    children: [
      {
        path: "/",
        element: <Dashboard />,
      },
      {
        path: "/scholarships",
        element: <Scholarships />,
      },
      {
        path: "/mentoring",
        element: <Mentoring />,
      },
      {
        path: "/threads",
        element: <Threads />,
      },
      {
        path: "/users",
        element: <Users />,
      },
      {
        path: "/register",
        element: <RegisterAdmin />,
      },
  
     
    ],
  },
]);

export default router;
