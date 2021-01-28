import React from "react";
import MainNavigation from "../../components/MainNavigation";
import { CSSTransition } from "react-transition-group";

import style from "./TurkeyPage.module.css";

export default function TurkeyPage(props) {
  return (
    <CSSTransition
      in={true}
      appear={true}
      classNames={style}
      timeout={300}
      unmountOnExit
    >
      <div className={style.ContainerDims}>
        <p className={style.p}>Turkey</p>
        <MainNavigation props={props} />
      </div>
    </CSSTransition>
  );
}
