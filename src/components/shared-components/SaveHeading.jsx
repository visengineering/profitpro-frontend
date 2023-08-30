import { useEffect } from "react";
import { useHeading } from "../../hooks/useHeading";

const SaveHeading = ({ heading }) => {
  const { setHeading } = useHeading();

  useEffect(() => {
    setHeading(heading);
  }, []);

  return null;
};

export default SaveHeading;
