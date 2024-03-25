import React from 'react';
import dashboard_multi from "../images/dashboard_multi.png";

function Welcome({setNavItems}) {
  return (
    <div className="w-full xs:max-xl:w-full flex flex-col rounded-md xs:max-xl:rounded-xl overflow-hidden bg-slate-50 shadow shadow-slate-300 xs:max-xl:space-y-5">
    <div className="bg-[#8347E7] w-full h-36 xs:max-xl:h-auto overflow-hidden">
      <img
        src={dashboard_multi}
        className="h-full w-full object-cover xs:max-xl:object-cover overflow-hidden"
      />
    </div>
    <div className="pt-2 px-5">
      <p className="text-black font-bold text-xl">Welcome!</p>
      <p className="font-light text-base text-gray-600">
        iTrack helps you manage all customer payments related to your
        small business! Send Invoices and debt reminders while avoiding
        misleading double entries!
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
  )
}

export default Welcome