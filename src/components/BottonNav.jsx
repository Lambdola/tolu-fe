import React from "react";
import dashboard_logo from "../images/dashboard_logo.png";
import customer_logo from "../images/customer_logo.png";
import transaction_logo from "../images/transaction_logo.png";
import invoice_logo from "../images/invoice_logo.png";
import createnew_logo from "../images/createnew_logo.png";
import { useNavigate } from "react-router-dom";

function BottonNav() {
  const navigate = useNavigate();
  return (
    <div className="fixed z-50 bottom-0 w-full bg-white">
      <ul className="flex justify-between p-3">
        {[
          { item: "/user/home", icon: dashboard_logo },
          { item: "/user/customers", icon: customer_logo },
          { item: "/user/transactions", icon: transaction_logo },
          { item: "/user/invoices", icon: invoice_logo },
          { item: "/user/create-new", icon: createnew_logo },
        ].map((tab) => {
          return (
            <li
              key={tab.item}
              onClick={() => navigate(tab.item)}
              className={`relative flex items-end justify-center rounded-lg w-10 h-10 `}
            >
              <div className="flex items-center justify-end bg-purple-40 rounded-xl">
                <img
                  src={tab.icon}
                  className={`${tab.item === "/user/invoices" && "h-7"}`}
                />
              </div>
              {window.location.pathname.includes(tab.item) && (
                <div
                  className={`absolute w-1/2 h-1 top-0 left-1 bg-purple-600 ${
                    tab.item === "/user/invoices" && "left-[9px]"
                  } rounded-l-lg`}
                ></div>
              )}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default BottonNav;
