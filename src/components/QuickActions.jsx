import React from "react";
import user_octagon from "../images/user_octagon.png";
import buy_crypto from "../images/buy_crypto.png";
import transaction_minus from "../images/transaction_minus.png";
import logo_blue from "../images/logo_blue.png";

function QuickActions() {
  return (
    <div className="h-full bg-red-40 xs:max-xl:my-5  xs:max-xl:px-2">
      <p className="py-2 text-black font-bold text  xs:max-xl:text-base">
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
              className="relative w-[32%] xs:max-xl:flex xs:max-xl:items-start xs:max-xl:w-full h-[13.5rem] xs:max-xl:h-auto bg-slate-50  border border-slate-300 rounded-lg py-4 xs:max-xl:py-3"
            >
              <div className="flex justify-center items-center w-10 xs:max-xl:w-[20%] h-10 xs:max-xl:h-auto rounded bg-red-30 right-3 xs:max-xl:inset-0 absolute xs:max-xl:relative">
                <img
                  src={items.icon}
                  className="xs:max-xl:w-10 xs:max-xl:h-10 xs:max-xl:object-cover"
                />
              </div>
              <div className="xs:max-xl:w-[80%] rounded bg-red-40 left-3 right-3 absolute xs:max-xl:relative bottom-5 xs:max-xl:inset-0 ">
                <div>
                  <p className="font-bold text-base">{items.title}</p>
                  <div className="flex h-10 xs:max-xl:h-auto xs:max-xl:flex xs:max-xl:flex-col">
                    <div className="w-[80%] bg-red-80">
                      <p className="font-light text-red-90">{items.text}</p>
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
                          className="xs:max-xl:h-8 xs:max-xl:w-8 size"
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
                          className="xs:max-xl:h-8 xs:max-xl:w-8"
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
  );
}

export default QuickActions;
