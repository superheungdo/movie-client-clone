import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import GlobalLoading from "../common/GlobalLoading";

const MainLayout = () => {
  return (
    <>
      {/* global loading */}
      <GlobalLoading />

      {/* login modal */}

      <Box display="flex" minHeight="100vh">
        {/* header */}

        {/* main */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
        {/* --- */}
      </Box>

      {/* footer */}
    </>
  );
};

export default MainLayout;
