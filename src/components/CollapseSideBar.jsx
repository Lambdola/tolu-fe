import React from 'react';
import itrack_logo from "../images/itrack_logo.png";
import drawer_handle from "../images/drawer_handle.png";
import dashboard_logo from "../images/dashboard_logo.png";
import customer_logo from "../images/customer_logo.png";
import transaction_logo from "../images/transaction_logo.png";
import invoice_logo from "../images/invoice_logo.png";
import createnew_logo from "../images/createnew_logo.png";

function CollapseSideBar({ navItems, setNavItems, setNavBarState }) {
    return (
      <div className="fixed z-20 left-0 top-0 h-full w-[5%] bg-slate-50">
        {/* name, logo */}
        <div className="relative border-b border-slate-900">
          <div className="relative w-[70%] mx-2 flex justify-start gap-[5%] bg-yellow-40 my-8 ">
            <div>
              <div className="flex items-center justify-center w-12 h-12 bg-blue-40 rounded-xl">
                <img src={itrack_logo} />
              </div>
            </div>
            {/* <p className="text-black text-[2rem]">iTrack</p> */}
          </div>
          <div
            onClick={() => setNavBarState("expand")}
            className="absolute -right-5 top-0  bg-red-40 h-full mt-[2%]"
          >
            <div className="flex items-center justify-center h-10 w-10 rounded-full bg-slate-50">
              <img src={drawer_handle} />
            </div>
          </div>
        </div>
  
        {/* items */}
        <ul className="mx-1 space-y-5 my-5 bg-red-30">
          <li
            onClick={() => setNavItems("Dashboard")}
            className={`relative flex items-center gap-[5%] p-2 rounded-lg `}
          >
            <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
              <img src={dashboard_logo} />
            </div>
            {/* <p className="text-md">Dashboard</p> */}
            {navItems === "Dashboard" && (
              <div className="absolute w-2 h-1/2 top-[25%] bg-purple-400 -right-1 rounded-l-lg "></div>
            )}
          </li>
          <li
            onClick={() => setNavItems("Customers")}
            className={`relative flex items-center gap-[5%] p-2 rounded-lg `}
          >
            <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
              <img src={customer_logo} />
            </div>
            {/* <p className="text-xl">Customers</p> */}
            {navItems === "Customers" && (
              <div className="absolute w-2 h-1/2 top-[25%] bg-purple-400 -right-1 rounded-l-lg "></div>
            )}
          </li>
          <li
            onClick={() => setNavItems("Transactions")}
            className={`relative flex items-center gap-[5%] p-2 rounded-lg `}
          >
            <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
              <img src={transaction_logo} />
            </div>
            {/* <p className="text-xl">Transactions</p> */}
            {navItems === "Transactions" && (
              <div className="absolute w-2 h-1/2 top-[25%] bg-purple-400 -right-1 rounded-l-lg "></div>
            )}
          </li>
          <li
            onClick={() => setNavItems("Invoices")}
            className={`relative flex items-center gap-[5%] p-2 rounded-lg `}
          >
            <div className="flex items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
              <img src={invoice_logo} />
            </div>
            {/* <p className="text-xl">Invoices</p> */}
            {navItems === "Invoices" && (
              <div className="absolute w-2 h-1/2 top-[25%] bg-purple-400 -right-1 rounded-l-lg "></div>
            )}
          </li>
          <li
            onClick={() => setNavItems("CreateNew")}
            className={`relative flex items-center gap-[5%] p-2 rounded-lg`}
          >
            <div className="flex ml-2 items-center justify-center relative w-9 h-9 bg-purple-40 rounded-xl">
              <img src={createnew_logo} />
            </div>
            {/* <p className="text-xl">Create New</p> */}
            {navItems === "CreateNew" && (
              <div className="absolute w-2 h-1/2 top-[25%] bg-purple-400 -right-1 rounded-l-lg "></div>
            )}
          </li>
        </ul>
      </div>
    );
  }

export default CollapseSideBar