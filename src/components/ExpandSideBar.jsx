import React from "react";
import itrack_logo from "../images/itrack_logo.png";
import drawer_handle from "../images/drawer_handle.png";
import dashboard_logo from "../images/dashboard_logo.png";
import customer_logo from "../images/customer_logo.png";
import transaction_logo from "../images/transaction_logo.png";
import invoice_logo from "../images/invoice_logo.png";
import createnew_logo from "../images/createnew_logo.png";
import { useNavigate } from "react-router-dom";
let dotEnv = import.meta.env;

function ExpandSideBar({
  navItems,
  setNavItems,
  setNavBarState,
  getResponse,
  handleTransact,
  transactNav,
  setCustomersNav,
  handleCreateNew,
  customersNav,
}) {
  const navigate = useNavigate();

  return (
    <div className="fixed z-20 left-0 top-0 h-full w-[20%] bg-slate-50">
      {/* name, logo */}
      <div className="relative border-b-[1px] border-slate-200">
        <div className="relative w-[70%] ml-5 flex items-center justify-start gap-[5%] bg-yellow-40 my-8 ">
          <div>
            <div className="flex items-center justify-center w-12 h-12 bg-blue-400 rounded-xl cursor-pointer">
              <img src={itrack_logo} />
            </div>
          </div>
          <p className="text-black font-bold text-[1.8rem]">iTrack</p>
        </div>
        <div
          onClick={() => setNavBarState("collapse")}
          className="absolute -right-5 top-0  bg-red-40 h-full mt-[2%]"
        >
          <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-50">
            <img src={drawer_handle} />
          </div>
        </div>
      </div>

      <ul>
        
      </ul>

      {/* items */}
      <ul className="mx-5 space-y-5 my-5 bg-red-30">
        <li
          onClick={() => {
            navigate("/user/home");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-purple-200 p-2 rounded-lg ${
            !(navItems === "Dashboard") ? "bg-none" : "bg-purple-200"
          }`}
        >
          <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={dashboard_logo} />
          </div>
          <p className="text-xl font-light">Dashboard</p>
          {window.location.pathname.includes("home") && (
            <div className="absolute top-0 w-2 h-full bg-purple-400 -right-5 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => {
            navigate("/user/customers");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-purple-200 p-2 rounded-lg ${
            !(navItems === "Customers") ? "bg-none" : "bg-purple-200"
          }`}
        >
          <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={customer_logo} />
          </div>
          <p className="text-xl font-light">Customers</p>
          {window.location.pathname.includes("customers") && (
            <div className="absolute top-0 w-2 h-full bg-purple-400 -right-5 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => {
            navigate("/user/transactions");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-purple-200 p-2 rounded-lg ${
            !(navItems === "Transactions") ? "bg-none" : "bg-purple-200"
          }`}
        >
          <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={transaction_logo} />
          </div>
          <p className="text-xl font-light">Transactions</p>

          {window.location.pathname.includes("transactions") && (
            <div className="absolute top-0 w-2 h-full bg-purple-400 -right-5 rounded-l-lg "></div>
          )}
        </li>
        {window.location.pathname.includes("transactions") && (
          <div className="ml-5 space-y-5 bg-red-60 w-full">
            <div
              onClick={() => handleTransact("all")}
              className="flex gap-5 items-center"
            >
              {transactNav === "all" ? (
                <div className="relative w-4 h-4 p-1 flex items-center justify-center rounded-full bg-slate-300">
                  <div className="relative w-full h-full flex items-center justify-center rounded-full bg-purple-600"></div>
                </div>
              ) : (
                // <p className="font-light text-base">All</p>
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              )}
              {transactNav === "all" ? (
                <p className="font-bold text-base">All</p>
              ) : (
                <p className="font-light text-base">All</p>
              )}
            </div>
            <div
              onClick={() => handleTransact("unpaidDebts")}
              className="flex gap-5 items-center"
            >
              {transactNav === "unpaidDebts" ? (
                <div className="relative w-4 h-4 p-1 flex items-center justify-center rounded-full bg-slate-300">
                  <div className="relative w-full h-full flex items-center justify-center rounded-full bg-purple-600"></div>
                </div>
              ) : (
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              )}
              {transactNav === "unpaidDebts" ? (
                <p className="font-bold text-base">Unpaid Debts</p>
              ) : (
                <p className="font-light text-base">Unpaid Debts</p>
              )}
            </div>
            <div
              onClick={() => handleTransact("completedPayments")}
              className="flex gap-5 items-center"
            >
              {transactNav === "completedPayments" ? (
                <div className="relative w-4 h-4 p-1 flex items-center justify-center rounded-full bg-slate-300">
                  <div className="relative w-full h-full flex items-center justify-center rounded-full bg-purple-600"></div>
                </div>
              ) : (
                <div className="w-3 h-3 rounded-full bg-slate-300"></div>
              )}
              {transactNav === "completedPayments" ? (
                <p className="font-bold text-base">Completed Payments</p>
              ) : (
                <p className="font-light text-base">Completed Payments</p>
              )}
            </div>
          </div>
        )}
        <li
          onClick={() => {
            navigate("/user/invoices");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-purple-200 p-2 rounded-lg ${
            !(navItems === "Invoices") ? "bg-none" : "bg-purple-200"
          }`}
        >
          <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={invoice_logo} />
          </div>
          <p className="text-xl font-light">Invoices</p>
          {window.location.pathname.includes("invoices") && (
            <div className="absolute top-0 w-2 h-full bg-purple-400 -right-5 rounded-l-lg "></div>
          )}
        </li>
        <li
          onClick={() => {
            navigate("/user/create-new");
          }}
          className={`relative flex items-center gap-[5%] hover:bg-purple-200 p-2 rounded-lg ${
            !(navItems === "CreateNew") ? "bg-none" : "bg-purple-200"
          }`}
        >
          <div className="flex ml-2 items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
            <img src={createnew_logo} />
          </div>
          <p className="text-xl font-light">Create New</p>

          {navItems === "CreateNew1" && (
            <div>
              <div className="relative w-9 h-9 bg-purple-400 rounded-xl"></div>
              <p className="text-xl">Create New</p>
              <div className="absolute top-0 w-2 h-full bg-purple-400 -right-5 rounded-l-lg "></div>
            </div>
          )}

          {window.location.pathname.includes("create-new") && (
            <>
              <div className="absolute top-0 w-2 h-full bg-purple-400 -right-5 rounded-l-lg "></div>
              <div
                id="createNewDiv"
                className={`absolute top-0 w-2 h-full bg-red-60 -right-5 rounded-l-lg`}
              >
                <div className="relative left-2 bg-slate-200 w-60 shadow-md shadow-slate-600 rounded-md">
                  <div className="px-5 py-2 flex flex-col">
                    <div
                      onClick={() => {
                        handleCreateNew("createCustomer");
                      }}
                      className="py-3 text-left flex items-center gap-2 border-b border-slate-500"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-200"></div>
                      <p className="text-slate-700 hover:text-purple-800 hover:font-semibold font-medium">
                        <button>Create Customer</button>
                      </p>
                    </div>
                    <div className="group py-3 text-left flex items-center gap-2  bg-red-20 w-60">
                      <div className="w-10 h-10 rounded-full bg-red-200"></div>
                      <div className="text-slate-700 font-medium hover:text-purple-800 hover:font-semibold grou">
                        Create Invoice
                        <div className="absolute bg-slate-200 w-60 left-full top-16 hidden group-hover:block px-5 py-2 shadow-md shadow-slate-600 rounded-r-md ">
                          <div className="py-3 text-left flex items-center gap-2 border-b border-slate-500">
                            <div className="w-10 h-10 rounded-full bg-red-200"></div>
                            <p className="text-slate-700 font-medium">
                              <button>From Existing Debt</button>
                            </p>
                          </div>
                          <div className="py-3 text-left flex items-center gap-2">
                            <div className="w-10 h-10 rounded-full bg-red-200"></div>
                            <p className="text-slate-700 font-medium">
                              <button>New Invoice</button>
                            </p>
                          </div>
                        </div>
                      </div>

                      <div className="ml-5">=</div>
                    </div>
                    <div className="py-3 flex items-center gap-2 text-left border-t border-slate-500">
                      <div className="w-10 h-10 rounded-full bg-red-200"></div>
                      <p className="text-slate-700 font-medium hover:text-purple-800 hover:font-semibold">
                        Record Transaction
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </li>
      </ul>
    </div>
  );
}

export default ExpandSideBar;
