import React, { useEffect, useState } from "react";
import Loading from "./Loading";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";
import baseUrl from "../helpers/getEnvironment";
import postHook from "../fetchHooks/postHook";
import NoTransactions from "./NoTransactions";
import TransactionsTable from "./TransactionsTable";

function Transactions({
  loadingState,
  setLoadingState,
  navRes,
  setNavRes,
  navBarState,
  setCreateNewOptions,
  createNewOptions,
  setNavItems,
}) {

  const [transactionsTable, setTransactionsTable] = useState("loading");
  useEffect(() => {
    async function transactionsData() {

      try {
        let user = localStorage.getItem("currentUser");
        if (!user) return;
        user = JSON.parse(user);
        let url = baseUrl + "/itrack/transactions";
        let response = await postHook(url, { sellerEmail: user.email });
        if (response.sucess) {
          localStorage.setItem("transactions", JSON.stringify(data.message));
          setTransactionsTable(response.sucess);
        } else {
          setTransactionsTable("");
        }
      } catch (error) {
        setTransactionsTable("");
      }
    }
    transactionsData();
  }, []);
  return (
    <div>
      { transactionsTable === "loading" && <Loading />} 
      { transactionsTable === "" && <NoTransactions />}
      { (transactionsTable.length >= 1 && transactionsTable !== "loading") && <TransactionsTable transactionsTable={transactionsTable} />}
    </div>
  );
}

export default Transactions;
