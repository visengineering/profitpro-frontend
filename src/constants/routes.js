const URLPath = [
  {
    default: "/",
  },
  {
    salesRepresentative: "/salesRepresentative",
  },
  {
    salesRepresentativeid: (id) => `/salesRepresentative/${id}`,
  },
  {
    transcripts: (id) => `salesRepresentative/${id}/transcripts`,
  },
  {
    salesTranscriptsid: (id) => `salesRepresentative/${id}/transcripts/${id}`,
  },
  {
    activeUser: "/active-user",
  },
];

export { URLPath };
