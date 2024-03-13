import React from 'react'

function NewCustomer({newCustomer}) {
  return (
    <div className=" bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-50 p-3">
    <div className="relative h-16 bg-red-300 rounded-t-lg rainbo overflow-hidden">
      <div className="absolute top-0 -left-5 bg-emerald-400 w-[30%] h-full -skew-x-12"></div>
      <div className="absolute top-0 left-[28%] bg-emerald-300 w-[20%] h-full -skew-x-12"></div>
      <div className="absolute top-0 left-[48%] bg-orange-200 w-[10%] h-full -skew-x-12"></div>
      <div className="absolute top-0 left-[55%] bg-red-400 w-full h-full -skew-x-12"></div>
    </div>
    <div className="h-20 rounded-b-lg bg-red-60 shadow-md shadow-slate-400">
      <div className="absolute w-24 h-24 top-14 left-10 rounded-lg bg-white p-1">
        <div className="w-full h-full flex items-center justify-center overflow-hidden rounded-lg">
          <img src={newCustomer.imageUrl} />
        </div>
      </div>
      <div className="ml-32 p-4 h-full bg-yellow-30 flex justify-between">
        <div>
          <p className="text-lg font-bold">
            {newCustomer.lastName + "   " + newCustomer.firstName}
          </p>
          <div className="flex gap-5">
            <div className="flex bg-red-20">
              <div classsName="w-10 h-10 bg-red-300"></div>
              <p className="text-slate-400 text-base font-semibold">
                {newCustomer.country}{" "}
              </p>
            </div>
            <div className="flex bg-red-20">
              <div classsName="w-5 h-5 bg-red-300"></div>
              <p className="text-slate-400 text-base font-semibold">
                {newCustomer.country}{" "}
              </p>
            </div>
          </div>
        </div>
        <div className="bg-red-60 flex items-end">
          <button className="px-5 py-1 border-2 text-base font-semibold border-purple-800 rounded-lg">
            EDIT
          </button>
        </div>
      </div>
    </div>
    <div className="relative mt-5">
      <div className="absolute left-0 w-[25%] bg-red-40 top-0">
        <div className="py-2 px-2 rounded-lg bg-slate-100 shadow-md shadow-slate-400 space-y-2 ">
          <p className="monospace text-slate-400 text-sm">ABOUT</p>
          <div>
            <p className="text-slate-500 font-semibold">
              Full Name:{" "}
              {newCustomer.lastName + "   " + newCustomer.firstName}{" "}
            </p>
          </div>
          <div>
            <p className="text-slate-500 font-semibold">
              Status: ....{" "}
            </p>
          </div>
          <div>
            <p className="text-slate-500 font-semibold">
              Total Debt: ....{" "}
            </p>
          </div>
          <div>
            <p className="monospace text-slate-400 text-sm">
              CONTACTS
            </p>
          </div>
          <div>
            <p className="text-slate-500 font-semibold text-sm">
              Contacts: {newCustomer.phone}{" "}
            </p>
          </div>
          <div>
            <p className="text-slate-500 font-semibold text-sm">
              Email: {newCustomer.email}{" "}
            </p>
          </div>
          <div>
            <p className="monospace text-slate-400 text-sm">
              ADDRESS
            </p>
          </div>
          <div>
            <p className="text-slate-500 font-semibold text-sm">
              Location:{" "}
              {newCustomer.zipCode +
                ", " +
                newCustomer.state +
                ", " +
                newCustomer.country}{" "}
            </p>
          </div>
          <div>
            <p className="text-slate-500 font-semibold">
              Home: {newCustomer.address}{" "}
            </p>
          </div>
        </div>
      </div>

      <div className="absolute left-[30%] bg-red-500 h-full w-[50%]">
        <div className="w-full h-full bg-slate-700"></div>
      </div>
    </div>
  </div>
  )
}

export default NewCustomer