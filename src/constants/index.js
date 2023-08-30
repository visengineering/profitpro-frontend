import { urlPath } from "./routes";
const routes = [
  {
    path: urlPath.transcripts,
    pageTitle: "Conversation List",
    // component: "./components/pages/transcripts/TranscriptsTable",
  },
  {
    path: urlPath.salesRepresentative,
    pageTitle: "Sales Representative",
    // component: "./components/pages/sales-representative/SalesRepresentative",
  },
  {
    path: urlPath.salesRepresentativeid,
    pageTitle: "Sales Representative",
    // component: "./components/pages/sales-representative/SalesRepresentative",
  },
  {
    path: urlPath.activeUser,
    pageTitle: "Active Users List",
    // component: "./components/pages/sales-representative/SalesRepresentative",
  },
  {
    path: urlPath.default,
    pageTitle: "Dashboard",
    // component: "./components/pages/sales-representative/SalesRepresentative",
  },
  {
    path: urlPath.salesTranscriptsid,
    pageTitle: "Conversation history",
    // component: "./components/pages/sales-representative/SalesRepresentative",
  },
];

export { routes };
