import "./styles/main.css";
import SaleRepresentativeTable from "./components/pages/sales-representative/SaleRepresentativeTable";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import TranscriptsTable from "./components/pages/transcripts/TranscriptsTable";
import Drawer from "./components/generic-components/drawer";
import Transcript from "./components/pages/transcripts/Transcript";
import SalesRepresentative from "./components/pages/sales-representative/SalesRepresentative";

function App() {
  const router = createBrowserRouter([
    {
      path: "",
      element: (
        <>
          <Drawer />
          <Outlet />
        </>
      ),
      children: [
        {
          path: "salesRepresentative",
          element: <SaleRepresentativeTable />,
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
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
