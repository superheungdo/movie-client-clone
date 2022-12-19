import { Outlet } from "react-router-dom";
import { Box } from "@mui/material";

import GlobalLoading from "../common/GlobalLoading";
import Footer from "../common/Footer";
import Topbar from "../common/Topbar";

const MainLayout = () => {
  return (
    <>
      {/* Global Loading */}
      <GlobalLoading />

      {/* Login Modal */}

      <Box display="flex" minHeight="100vh">
        {/* header */}
        <Topbar />

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
