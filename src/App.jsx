import "./styles/main.scss";
import SaleRepresentativeList from "./components/pages/sales-representative/SaleRepresentativeList";
import {
  createBrowserRouter,
  Navigate,
  Outlet,
  RouterProvider,
} from "react-router-dom";
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
import { useEffect, useContext } from "react";
import { AppContext } from "./hooks/AppContext";
import { useSocket } from "./hooks/useSocket";

function App() {
  const { isAuthenticated } = useContext(AppContext);
  const { connectWithWebSocket } = useSocket();

  const data = {
    action: "join",
    client_type: "frontend",
    room_name: "Innovative Insights",
  };

  useEffect(() => {
    connectWithWebSocket();
  }, []);

  console.log("is authenticated = ", isAuthenticated);

  const router = createBrowserRouter([
    {
      path: "",
      element: isAuthenticated ? (
        <>
          <TopBar />
          <SideMenu />
          <Outlet />
        </>
      ) : (
        <Navigate to="/login" />
      ),
      children: [
        {
          path: "",
          element: <Dashboard heading="Dashboard" />,
        },
        {
          path: "salesRepresentative",
          element: <SaleRepresentativeList heading="Sales Representative" />,
        },
        {
          path: "salesRepresentative/:salesRepresentativeId",
          element: <SalesRepresentative heading="Sales Representative" />,
        },
        {
          path: "salesRepresentative/:salesRepresentativeId/transcripts",
          element: <TranscriptsTable heading="Conversation List" />,
        },
        {
          path: "salesRepresentative/:salesRepresentativeId/transcripts/:transcriptId",
          element: <Transcript heading="Conversation History" />,
        },
        {
          path: "active-user",
          element: <ActiveUser heading="Active Users List" />,
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
