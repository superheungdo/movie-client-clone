import HomePage from "../pages/HomePage";
import PersonDetail from "../pages/PersonDetail";
import FavoriteList from "../pages/FavoriteList";
import MediaDetail from "../pages/MediaDetail";
import MediaList from "../pages/MediaList";
import MediaSearch from "../pages/MediaSearch";
import PasswordUpdate from "../pages/PasswordUpdate";
import ReviewList from "../pages/ReviewList";
import ProtectedPage from "../components/common/ProtectedPage";

export const routesGen = {
  home: "/",
  person: (id) => `/person/${id}`,
  mediaSearch: "/search",
  mediaList: (type) => `/${type}`,
  mediaDetail: (type, id) => `/${type}/${id}`,
  passwordUpdate: "password-update",
  favoriteList: "/favorites",
  reviewList: "/reviews",
};

const routes = [
  {
    index: true,
    element: <HomePage />,
    state: "home",
  },

  {
    path: "/person/:personId",
    element: <PersonDetail />,
    state: "person.detail",
  },

  {
    path: "/search",
    element: <MediaSearch />,
    state: "search",
  },

  {
    path: "/:mediaType",
    element: <MediaList />,
  },

  {
    path: "/:mediaType/:mediaId",
    element: <MediaDetail />,
  },

  {
    path: "/password-update",
    element: (
      <ProtectedPage>
        <PasswordUpdate />
      </ProtectedPage>
    ),
    state: "password.update",
  },

  {
    path: "/favorites",
    element: (
      <ProtectedPage>
        <FavoriteList />
      </ProtectedPage>
    ),
    state: "favorites",
  },

  {
    path: "/reviews",
    element: (
      <ProtectedPage>
        <ReviewList />
      </ProtectedPage>
    ),
    state: "reviews",
  },
];

export default routes;
