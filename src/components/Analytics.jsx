import React, { useEffect, useState } from "react";
import baseUrl from "../helpers/getEnvironment";
import postHook from "../fetchHooks/postHook";

function Analytics() {
  const [analytics, setAnalytics] = useState({
    totalCustomers: 0,
    totalPaid: 0,
    totalInvoice: 0,
    totalDebt: 0,
    totalDebtCount: 0,
    totalPaidCount: 0,
  });

  const [analyticsState, setAnalyticsState] = useState(true);
  useEffect(() => {
    async function analyticsData() {
      try {
        let user = localStorage.getItem("currentUser");
        if (!user) return;
        user = JSON.parse(user);
        let url = baseUrl + "/itrack/analytics";
        let response = await postHook(url, { sellerEmail: user.email });
        
        if (response.sucess) {
          setAnalytics(response.sucess);
        }
        setAnalyticsState(false);
      } catch (error) {
        setAnalyticsState(false);
      
        console.log(error);
      }
    }
    analyticsData();
  }, []);

  return (
    <div className="flex xs:max-xl:flex-col xs:max-xl:gap-3 xs:max-xl:my-3 items-center justify-between">
      {/* mobile view */}
      <div className="xl:hidden w-full flex justify-evenly bg-red-40">
        {[
          {
            title: "Total Customers",
            data: analytics.totalCustomers,
          },
          {
            title: "Total Payment",
            data: analytics.totalPaid,
          },
        ].map((items) => {
          return (
            <div
              key={items.title}
              className="w-[45%] bg-slate-50 border border-slate-300 rounded-lg py-5 px-4 space-y-2"
            >
              <p className="font-medium text-sm">{items.title}</p>
              {analyticsState ? (
                <div>
                  {" "}
                  <div className="h-5 w-5 rounded-full border border-t-gray-600 border-l-gray-200 border-r-gray-200 border-b-gray-200 animate-spin"></div>{" "}
                </div>
              ) : (
                <p className="font-bold text-slate-500">{items.data}</p>
              )}
            </div>
          );
        })}
      </div>

      {/* mobile view */}
      <div className="xl:hidden w-full flex justify-evenly bg-red-40">
        {[
          {
            title: "Total Invoices",
            data: analytics.totalInvoice,
          },
          {
            title: "Total Debt",
            data: analytics.totalDebt,
          },
        ].map((items) => {
          return (
            <div
              key={items.title}
              className="w-[45%] h- bg-slate-50 border border-slate-300 rounded-lg py-5 px-4 space-y-2"
            >
              <p className="font-medium text-sm">{items.title}</p>
              {items.title === "Total Debt" ? (
                <div className="font-bold text-red-600 flex items-center gap-2">
                  {analyticsState ? (
                    <div>
                      {" "}
                      <div className="h-5 w-5 rounded-full border border-t-gray-600 border-l-gray-200 border-r-gray-200 border-b-gray-200 animate-spin"></div>{" "}
                    </div>
                  ) : (
                    <p className="font-bold text-red-500"># {items.data}</p>
                  )}
                </div>
              ) : analyticsState ? (
                <div>
                  {" "}
                  <div className="h-5 w-5 rounded-full border border-t-gray-600 border-l-gray-200 border-r-gray-200 border-b-gray-200 animate-spin"></div>{" "}
                </div>
              ) : (
                <p className="font-bold text-slate-500">{items.data}</p>
              )
              // <p className="font-bold text-slate-500">{items.data}</p>
              }
            </div>
          );
        })}
      </div>

      {/* desktop view */}
      {[
        {
          title: "Total Customers",
          data: analytics.totalCustomers,
        },
        {
          title: "Total Payment",
          data: analytics.totalPaid,
        },
        {
          title: "Total Invoices",
          data: analytics.totalInvoice,
        },
        {
          title: "Total Debt",
          data: analytics.totalDebt,
        },
      ].map((items) => {
        return (
          <div
            key={items.title}
            className="w-[23%] h-32 bg-slate-50  border border-slate-300 rounded-lg py-5 px-4 space-y-2 xs:max-xl:hidden"
          >
            <p className="font-light text-sm">{items.title}</p>
            {items.title === "Total Debt" ? (
              <div className="font-bold text-red-600 flex items-center gap-2">
                {analyticsState ? (
                  <div>
                    {" "}
                    <div className="h-5 w-5 rounded-full border border-t-gray-600 border-l-gray-200 border-r-gray-200 border-b-gray-200 animate-spin"></div>{" "}
                  </div>
                ) : (
                  <p className="font-bold text-red-500"># {items.data}</p>
                )}
              </div>
            ) : analyticsState ? (
              <div>
                {" "}
                <div className="h-5 w-5 rounded-full border border-t-gray-600 border-l-gray-200 border-r-gray-200 border-b-gray-200 animate-spin"></div>{" "}
              </div>
            ) : (
              <p className="font-bold text-slate-500">{items.data}</p>
            )}
          </div>
        );
      })}
    </div>
  );
}

export default Analytics;
