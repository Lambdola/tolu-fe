import React from 'react'

function Analytics({navRes}) {
  return (
    <div className="flex xs:max-xl:flex-col xs:max-xl:gap-3 items-center justify-between">
    <div className="xl:hidden w-full flex justify-evenly bg-red-40">
      {[
        {
          title: "Total Customers",
          data: navRes.dashboard.totalCustomers,
        },
        {
          title: "Total Payment",
          data: navRes.dashboard.totalPaid,
        },
      ].map((items) => {
        return (
          <div
            key={items.title}
            className="w-[45%] bg-slate-50 rounded-lg py-5 px-4 space-y-2"
          >
            <p className="font-medium text-sm">{items.title}</p>
            <p className="font-bold text-slate-500">{items.data}</p>
          </div>
        );
      })}
    </div>

    <div className="xl:hidden w-full flex justify-evenly bg-red-40">
      {[
        {
          title: "Total active Invoices",
          data: navRes.dashboard.totalInvoice,
        },
        {
          title: "Total Debt",
          data: navRes.dashboard.totalDebt,
        },
      ].map((items) => {
        return (
          <div
            key={items.title}
            className="w-[45%] h- bg-slate-50 rounded-lg py-5 px-4 space-y-2"
          >
            <p className="font-medium text-sm">{items.title}</p>
            {items.title === "Total Debt" ? (
              <p className="font-bold text-red-600">
                # {items.data?.toLocaleString("en-US")}
              </p>
            ) : (
              <p className="font-bold text-slate-500">{items.data}</p>
            )}
          </div>
        );
      })}
    </div>

    {[
      {
        title: "Total Customers",
        data: navRes.dashboard.totalCustomers,
      },
      {
        title: "Total Payment",
        data: navRes.dashboard.totalPaid,
      },
      {
        title: "Total active Invoices",
        data: navRes.dashboard.totalInvoice,
      },
      {
        title: "Total Debt",
        data: navRes.dashboard.totalDebt,
      },
    ].map((items) => {
      return (
        <div
          key={items.title}
          className="w-[23%] h-32 bg-slate-50 rounded-lg py-5 px-4 space-y-2 xs:max-xl:hidden"
        >
          <p className="font-light text-sm">{items.title}</p>
          {items.title === "Total Debt" ? (
            <p className="font-bold text-red-600">
              # {items.data?.toLocaleString("en-US")}
            </p>
          ) : (
            <p className="font-bold">{items.data}</p>
          )}
        </div>
      );
    })}
  </div>
  )
}

export default Analytics