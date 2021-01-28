import React from "react";

import AwesomeSlider from "react-awesome-slider";

import MainNavigation from "../MainNavigation";

import CoreStyles from "react-awesome-slider/src/core/styles.scss";
import AnimationStyles from "react-awesome-slider/src/hoc/animated-lettering/styles.scss";
// import TextAnimation from "./MainSlider.module.scss";
import cssStyles from "./MainSlider.module.css";

const slider = (
  <AwesomeSlider
    animation="animatedLettering"
    // cssModule={[CoreStyles, TextAnimation]}
    cssModule={[CoreStyles, AnimationStyles]}
    className={cssStyles.ContainerDims}
    fillParent={false}
    bullets={false}
  >
    <div
      pathName="norway"
      data-src="https://daauxcge0bfi7.cloudfront.net/photo/crop/51937ccbe6ca76c10a000081_720x460.jpg"
    >
      <p className={cssStyles.p}>Norway</p>
      <MainNavigation />
      {/* Tromsø */}
    </div>
    <div data-src="https://travelroom.lviv.ua/wp-content/uploads/2017/04/Marmaris3.jpg">
      <p className={cssStyles.p}>Turkey</p>
      <MainNavigation />
    </div>
    <div data-src="/path/to/image-2.jpg">
      <p className={cssStyles.p}>Somewhere else</p>
      <MainNavigation />
    </div>
  </AwesomeSlider>
);

export default slider;
