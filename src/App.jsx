import "./styles/main.scss";
import SaleRepresentativeList from "./components/pages/sales-representative/SaleRepresentativeList";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import TranscriptsTable from "./components/pages/transcripts/TranscriptsTable";
import SideMenu from "./components/shared-components/side-menu";
import TopBar from "./components/shared-components/top-bar";

import Transcript from "./components/pages/transcripts/Transcript";
import SalesRepresentative from "./components/pages/sales-representative/SalesRepresentative";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Dashboard from "./components/pages/dashboard/Dashboard";
import LoginPage from "./components/pages/login";
import ActiveUser from "./components/pages/activeUser/ActiveUser";
import OutletContext from "./components/shared-components/OutletContext";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <>
          <TopBar />
          <SideMenu />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "",
          element: <Dashboard />,
        },
        {
          path: "salesRepresentative",
          element: <SaleRepresentativeList />,
        },
        {
          path: "salesRepresentative/:id",
          element: <SalesRepresentative />,
        },
        {
          path: "salesRepresentative/:id/transcripts",
          element: <TranscriptsTable />,
        },
        {
          path: "salesRepresentative/:id/transcripts/:id",
          element: <Transcript />,
        },
        {
          path: "active-user",
          element: <ActiveUser />,
        },
      ],
    },
    {
      path: "login",
      element: <LoginPage />,
    },
  ]);
  return (
    <div>
      <ToastContainer />
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
