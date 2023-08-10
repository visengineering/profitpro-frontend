import moment from "moment";

const formatDate = (timestamp) => {
  return moment(timestamp).format("DD/MM/YYYY HH:mm:ss");
};

export default formatDate;
