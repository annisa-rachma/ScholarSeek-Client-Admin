import { createBrowserRouter, redirect } from "react-router-dom";
import LoginPage from "../views/LoginPage";
import Layout from "../components/Layout";
import Dashboard from "../views/Dasboard";
import Scholarships from "../views/Scholarships"
import RegisterAdmin from "../views/RegisterAdmin";
import Mentoring from "../views/Mentoring";

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
      // {
      //   path: "/create-scholarships",
      //   element: <CreateScholarShip />,
      // },
      // {
      //   path: "/scholarships/:slug",
      //   element: <EditScholarship />,
      // },
      {
        path: "/register",
        element: <RegisterAdmin />,
      },
  
     
    ],
  },
]);

export default router;
