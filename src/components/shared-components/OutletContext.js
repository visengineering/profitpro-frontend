import { useState } from "react";
import { Outlet } from "react-router-dom";

function OutletContext({ children, heading }) {
  return (
    <Outlet context={{ heading }}>
      {children}
      {/* <Outlet  /> */}
    </Outlet>
  );
}

export default OutletContext;
