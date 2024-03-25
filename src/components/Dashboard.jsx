import React, { useEffect } from "react";

import postHook from "../fetchHooks/postHook";
import baseUrl from "../helpers/getEnvironment";
import Analytics from "./Analytics";
import QuickActions from "./QuickActions";
import Welcome from "./Welcome";

function Dashboard({ setNavItems, setNavRes, navRes, setDbItems, dbItems }) {
  useEffect(() => {
    async function dashboardData() {
      try {
        let url = baseUrl + "/itrack/dashboard";

        let response = await postHook(url, { sellerEmail: user.email });
        if (response.sucess) {
          setNavRes({ ...navRes, dashboard: response.sucess });
        }
      } catch (error) {
        console.log(error);
      }
    }
    dashboardData();
  }, []);
  return (
    <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-40 p-3">
      <div className="w-full h-full relative">
        <div className=" bg-yellow-30 gap-5 flex xs:max-xl:flex-col">
          <Welcome setNavItems={setNavItems} />
          <div className="w-[72%] xs:max-xl:w-full bg-red-30">
            <Analytics navRes={navRes} />
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
