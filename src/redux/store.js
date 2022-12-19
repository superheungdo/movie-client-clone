import { configureStore } from "@reduxjs/toolkit";

import appStateSlice from "./features/appStateSlice";
import themeModeSlice from "./features/themeModeSlice";
import globalLoadingSlice from "./features/globalLoadingSlice";
import authModalSlice from "./features/authModalSlice";
import userSlice from "./features/userSlice";

const store = configureStore({
  reducer: {
    appState: appStateSlice,
    themeMode: themeModeSlice,
    globalLoading: globalLoadingSlice,
    authModal: authModalSlice,
    user: userSlice,
  },
});

export default store;
