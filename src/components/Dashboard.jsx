import React from 'react'
import dashboard_multi from '../images/dashboard_multi.png'
import user_octagon from '../images/user_octagon.png'
import buy_crypto from '../images/buy_crypto.png'
import transaction_minus from '../images/transaction_minus.png'
import logo_blue from '../images/logo_blue.png'


function Dashboard({setNavItems, navRes, setDbItems, dbItems}) {
  return (
    <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-40 p-3">
              <div className="w-full h-full relative">
                <div className=" bg-yellow-30 gap-5 flex xs:max-xl:flex-col">
                  {/* multi color design */}
                  <div className="w-[25%] xs:max-xl:w-full flex flex-col rounded-md xs:max-xl:rounded-xl overflow-hidden bg-slate-50 shadow shadow-slate-300 xs:max-xl:space-y-5">
                    <div className="bg-[#8347E7] h-36 xs:max-xl:h-auto overflow-hidden">
                      <img
                        src={dashboard_multi}
                        className="h-full w-full object-fit xs:max-xl:object-cover overflow-hidden"
                      />
                    </div>
                    <div className="pt-2 px-5">
                      <p className="text-black font-bold text-xl">Welcome!</p>
                      <p className="font-light text-base text-gray-600">
                        iTrack helps you manage all customer payments related to
                        your small business! Send Invoices and debt reminders
                        while avoiding misleading double entries!
                      </p>
                    </div>
                    <div className="py-4 px-5">
                      <div className="float-right w-1/2 xs:max-xl:w-auto">
                        <button
                          onClick={() => {
                            setNavItems("CreateNew");
                          }}
                          className="p-2 bg-[#8347E7] w-full text-slate-200 font-light xs:max-xl:text-sm xs:max-xl:rounded-md"
                        >
                          Create New Customer
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* analytics count; customers, paid, debt */}
                  <div className="w-[72%] xs:max-xl:w-full bg-red-30">
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
                              <p className="font-medium text-sm">
                                {items.title}
                              </p>
                              <p className="font-bold text-slate-500">
                                {items.data}
                              </p>
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
                              <p className="font-medium text-sm">
                                {items.title}
                              </p>
                              {items.title === "Total Debt" ? (
                                <p className="font-bold text-red-600">
                                  # {items.data?.toLocaleString("en-US")}
                                </p>
                              ) : (
                                <p className="font-bold text-slate-500">
                                  {items.data}
                                </p>
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

                    <div>
                      <p className="py-2 text-black font-bold text">
                        What would you like to get started with ?
                      </p>
                      <div className="flex xs:max-xl:flex-col xs:max-xl:gap-5  justify-between h-full relative">
                        {[
                          {
                            icon: user_octagon,
                            title: "New Customer",
                            text: "Quickly create profiles for your customers!",
                            path: "CreateNew",
                          },
                          {
                            icon: transaction_minus,
                            title: "Get Paid",
                            text: "Send an invoice to a owing customer!",
                            path: "Invoices",
                          },
                          {
                            icon: buy_crypto,
                            title: "Just made a sale ?",
                            text: "Quickly record transaction!",
                            path: "Invoices",
                          },
                        ].map((items) => {
                          return (
                            <div
                              key={items.title}
                              className="relative w-[32%] xs:max-xl:flex xs:max-xl:items-start xs:max-xl:w-full h-[13.5rem] xs:max-xl:h-auto bg-slate-50 rounded-lg py-4 xs:max-xl:py-3"
                            >
                              <div className="flex justify-center items-center w-10 xs:max-xl:w-[20%] h-10 xs:max-xl:h-auto rounded bg-red-30 right-3 xs:max-xl:inset-0 absolute xs:max-xl:relative">
                                <img
                                  src={items.icon}
                                  className="xs:max-xl:w-10 xs:max-xl:h-10 xs:max-xl:object-cover"
                                />
                              </div>
                              <div className="xs:max-xl:w-[80%] rounded bg-red-40 left-3 right-3 absolute xs:max-xl:relative bottom-5 xs:max-xl:inset-0 ">
                                <div>
                                  <p className="font-bold text-base">
                                    {items.title}
                                  </p>
                                  <div className="flex h-10 xs:max-xl:h-auto xs:max-xl:flex xs:max-xl:flex-col">
                                    <div className="w-[80%] bg-red-80">
                                      <p className="font-light text-red-90">
                                        {items.text}
                                      </p>
                                    </div>
                                    {items.title === "Just made a sale ?" ? (
                                      <div
                                        onClick={() => {
                                          setNavItems("CreateNew");
                                        }}
                                        className="flex justify-center items-center w-[20%] xs:max-xl:w-full bg-blue-40 xs:max-xl:flex xs:max-xl:justify-end xs:max-xl:px-5"
                                      >
                                        <img
                                          src={logo_blue}
                                          className="xs:max-xl:h-10 xs:max-xl:w-10"
                                        />
                                      </div>
                                    ) : (
                                      <div
                                        onClick={() => {
                                          setNavItems(items.path);
                                        }}
                                        className="flex justify-center items-center w-[20%] xs:max-xl:w-full bg-blue-40 xs:max-xl:flex xs:max-xl:justify-end xs:max-xl:px-5"
                                      >
                                        <img
                                          src={logo_blue}
                                          className="xs:max-xl:h-10 xs:max-xl:w-10"
                                        />
                                      </div>
                                    )}
                                  </div>
                                </div>
                              </div>
                            </div>
                          );
                        })}
                      </div>
                    </div>
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
                        dbItems === "Debts"
                          ? "border-purple-700"
                          : "border-transparent"
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
  )
}

export default Dashboard