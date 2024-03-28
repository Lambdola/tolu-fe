import React, { useEffect, useState } from "react";
import baseUrl from "../helpers/getEnvironment";
import postHook from "../fetchHooks/postHook";
import NoCustomers from "./NoCustomers";
import CustomersTable from "./CustomersTable";
import Loading from "./Loading";

function Customers({
  navRes,
  setNavItems,
  setNewCustomer,
  setLoadingState,
  setNavRes,
}) {
  const [customers, setCustomers] = useState("");
  const [customersTable, setCustomersTable] = useState("loading");
  useEffect(() => {
    async function customersData() {
      setNewCustomer("");
      try {
        let user = localStorage.getItem("currentUser");
        if (!user) return;
        user = JSON.parse(user);
        let url = baseUrl + "/itrack/customers";
        let response = await postHook(url, { sellerEmail: user.email });
        if (response.sucess) {
          setCustomersTable(response.sucess);
        } else {
          setCustomersTable("");
        }
      } catch (error) {
        setCustomersTable("");
      }
    }
    customersData();
  }, []);
  return (
    <div>
      { customersTable === "loading" && <Loading />}
      { customersTable === "" && <NoCustomers />}
      { (customersTable.length >= 1 && customersTable !== "loading") && <CustomersTable customersTable={customersTable} />}
    </div>
  );
}

export default Customers;

