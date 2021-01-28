import React from "react";
import Layout from "../../components/Layout";
import style from "./GetReadyPage.module.css";

function GetReadyPage() {
  return (
    <Layout>
      <div className={style.mainContainer}>
        <h1>GET READY PAGE!</h1>
        <p>Get ready for the trip!!!</p>
      </div>
    </Layout>
  );
}

export default GetReadyPage;
