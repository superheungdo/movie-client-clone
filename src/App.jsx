import { useSelector } from "react-redux";
import { ThemeProvider } from "@mui/material/styles";

import themeConfigs from "./configs/theme.configs";

const App = () => {
  const { themeMode } = useSelector((state) => state.themeMode);

  return (
    <ThemeProvider theme={themeConfigs.custom({ mode: themeMode })}>
      <div>App</div>
    </ThemeProvider>
  );
};

export default App;
