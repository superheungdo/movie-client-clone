import React from "react";

import tmdbConfigs from "../api/configs/tmdb.configs";

import HeroSlide from "../components/common/HeroSlide";

const HomePage = () => {
  return (
    <>
      <HeroSlide
        mediaType={tmdbConfigs.mediaType.movie}
        mediaCategory={tmdbConfigs.mediaCategory.popular}
      />
    </>
  );
};

export default HomePage;
