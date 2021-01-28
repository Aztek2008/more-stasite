import React from "react";
import Layout from "../../components/Layout";
import style from "./ExplorePage.module.css";

function ExplorePage(props) {
  return (
    <Layout>
      <div className={style.mainContainer}>
        <h1>EXPLORE PAGE!</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          consequuntur fugiat molestias ducimus magni, nostrum nisi vel dolor,
          non blanditiis laborum in nulla deleniti assumenda eveniet voluptatem
          sit iste quis.
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis
          consequuntur fugiat molestias ducimus magni, nostrum nisi vel dolor,
          non blanditiis laborum in nulla deleniti assumenda eveniet voluptatem
          sit iste quis.
        </p>
      </div>
    </Layout>
  );
}

export default ExplorePage;
