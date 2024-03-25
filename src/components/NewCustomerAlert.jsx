import React from 'react';
import customer_created from "../images/customer_created.png";

function NewCustomerAlert({newCustomer}) {
  return (
    <div className=" flex items-center justify-evenly absolute w-full h-14 rounded-lg z-50 bg-slate-50 shadow shadow-slate-400 top-10 right-80">
                <div className="w-[15%] bg-red-30 flex items-center justify-center">
                  <div className="w-2/3 h-1/2">
                    <img src={customer_created} />
                  </div>
                </div>
                <div className="w-[85%] bg-red-30 text-green-500">
                  <p className="text-[15px] font-bold">Customer created</p>
                  <p className="text-[11px]">
                    A new customer "
                    {newCustomer.firstName + " " + newCustomer.lastName}" has
                    been created{" "}
                  </p>
                </div>
              </div>
  )
}

export default NewCustomerAlert