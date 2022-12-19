import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import GlobalLoading from "../common/GlobalLoading";
import Footer from "../common/Footer";

const MainLayout = () => {
  return (
    <>
      {/* Global Loading */}
      <GlobalLoading />

      {/* Login Mmodal */}

      <Box display="flex" minHeight="100vh">
        {/* header */}

        {/* main */}
        <Box component="main" flexGrow={1} overflow="hidden" minHeight="100vh">
          <Outlet />
        </Box>
      </Box>

      {/* footer */}
      <Footer />
    </>
  );
};

export default MainLayout;
