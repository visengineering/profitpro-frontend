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
          path: "salesRepresentative/:salesRepresentativeId",
          element: <SalesRepresentative />,
        },
        {
          path: "salesRepresentative/:salesRepresentativeId/transcripts",
          element: <TranscriptsTable />,
        },
        {
          path: "salesRepresentative/:salesRepresentativeId/transcripts/:transcriptId",
          element: <Transcript />,
        },
      ],
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
