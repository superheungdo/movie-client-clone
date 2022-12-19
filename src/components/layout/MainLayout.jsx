import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

const MainLayout = () => {
  return (
    <>
      {/* global loading */}

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
