import React, { useEffect, useState } from "react";

import postHook from "../fetchHooks/postHook";
import baseUrl from "../helpers/getEnvironment";
import Analytics from "./Analytics";
import QuickActions from "./QuickActions";
import Welcome from "./Welcome";

function Dashboard({ setNavItems, setNavRes, navRes, setDbItems, dbItems }) {
  const [analytics, setAnalytics] = useState({
    totalCustomers: 0,
    totalPaid: 0,
    totalInvoice: 0,
    totalDebt: 0,
    totalDebtCount: 0,
    totalPaidCount: 0,
  });

  const [analyticsState, setAnalyticsState] = useState(true)
  // useEffect(() => {
  //   async function dashboardData() {
  //     try {
  //       let user = localStorage.getItem("currentUser");
  //       if (!user) return;
  //       user = JSON.parse(user);
  //       let url = baseUrl + "/itrack/dashboard";
  //       let response = await postHook(url, { sellerEmail: user.email });
  //       // alert("l");
  //       alert(JSON.stringify(response));
  //       if (response.sucess) {
  //         alert(JSON.stringify(response.sucess));
  //         setAnalytics(response.sucess);
  //       }
  //     } catch (error) {
  //       // alert("ola");
  //       console.log(error);
  //     }
  //   }
  //   dashboardData();
  // }, []);

  return (
    <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scrol z-40 p-3">
      <div className="w-full h-full relative">
        <div className=" bg-yellow-30 gap-5 flex xs:max-xl:flex-col">
          <div className="w-[30%] xs:max-xl:w-full">
            <Welcome setNavItems={setNavItems} />
          </div>

          <div className="w-[70%] h-full xs:max-xl:w-full bg-red-30">
            <Analytics analytics={analytics} />
            <QuickActions />
          </div>
        </div>

        <div className="w-full h-52 bg-red-30">
          <div className="relative flex justify-between bg-red-20 p-2">
            <div
              onClick={() => {
                setDbItems("Invoices");
              }}
              className={`w-[20%] border-b-2 py-1 ${
                dbItems === "Invoices"
                  ? "border-purple-700"
                  : "border-transparent"
              } flex justify-center gap-1 items-center`}
            >
              <p className="text-gray-400">Invoices</p>
              <div className="w-5 h-5 text-gray-400 bg-gray-200 rounded flex items-center justify-center">
                <p>{navRes.transaction.length}</p>
              </div>
            </div>
            <div
              onClick={() => {
                setDbItems("Transactions");
              }}
              className={`w-[20%] border-b-2 py-1 ${
                dbItems === "Transactions"
                  ? "border-purple-700"
                  : "border-transparent"
              } flex justify-center gap-1 items-center`}
            >
              <p className="text-gray-400">Transactions</p>
              <div className="w-5 h-5 text-gray-400 bg-gray-200 rounded flex items-center justify-center">
                <p>{navRes.transaction.length}</p>
              </div>
            </div>
            <div
              onClick={() => {
                setDbItems("Debts");
              }}
              className={`w-[20%] border-b-2 py-1 ${
                dbItems === "Debts" ? "border-purple-700" : "border-transparent"
              } flex justify-center gap-1 items-center`}
            >
              <p className="text-gray-400">Debts</p>
              <div className="w-5 h-5 text-gray-400 bg-gray-200 rounded flex items-center justify-center">
                <p>{navRes.dashboard.totalDebtCount}</p>
              </div>
            </div>
            <div
              onClick={() => {
                setDbItems("Payments");
              }}
              className={`w-[20%] border-b-2 py-1 ${
                dbItems === "Payments"
                  ? "border-purple-700"
                  : "border-transparent"
              } flex justify-center gap-1 items-center`}
            >
              <p className="text-gray-400">Payments</p>
              <div className="w-5 h-5 text-gray-400 bg-gray-200 rounded flex items-center justify-center">
                <p>{navRes.dashboard.totalPaidCount}</p>
              </div>
            </div>
          </div>
          {/* --------------------------------------------------------------------------------------- */}
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
