import React from "react";
import itrack_logo from "../images/itrack_logo.png";
import dashboard_logo from "../images/dashboard_logo.png";
import customer_logo from "../images/customer_logo.png";
import transaction_logo from "../images/transaction_logo.png";
import invoice_logo from "../images/invoice_logo.png";
import createnew_logo from "../images/createnew_logo.png";
import drawer_handle from "../images/drawer_handle.png";

function BottonNav({ navItems, setNavItems, setNavBarState }) {
  return (
    <div className="fixed z-50 bottom-0 w-full bg-white">
      <ul className=" bg-red-30 flex justify-between p-3">
        {[
          { item: "Dashboard", icon: dashboard_logo },
          { item: "Customers", icon: customer_logo },
          { item: "Transactions", icon: transaction_logo },
          { item: "Invoices", icon: invoice_logo },
          { item: "CreateNew", icon: createnew_logo },
        ].map((tab) => {
          return (
            <li
              onClick={() => setNavItems(tab.item)}
              className={`relative flex items-end justify-center rounded-lg bg-green-40 w-10 h-10 `}
            >
              <div className="flex items-center justify-end bg-purple-40 rounded-xl">
                <img src={tab.icon} className={`${tab.item === "Invoices" && "h-7"}`} />
              </div>
              {navItems === tab.item && (
                <div className="absolute w-1/2 h-1 top-0 left-1 bg-purple-600  rounded-l-lg "></div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BottonNav;
