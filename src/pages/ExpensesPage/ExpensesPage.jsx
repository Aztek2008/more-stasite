import React from "react";
import Layout from "../../components/Layout";
import style from "./ExpensesPage.module.css";

export default function ExpensesPage() {
  return (
    <Layout>
      <div className={style.mainContainer}>
        <h1>EXPENSES PAGE!</h1>
        <p>You will pay for this</p>
      </div>
    </Layout>
  );
}
