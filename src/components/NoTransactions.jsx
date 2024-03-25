import React from 'react'

function NoTransactions() {
  return (
    <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll p-3">
    <div className="w-full h-full flex pt-[20%] justify-center">
      <div className="text-center space-y-2">
        <p className="font-black text-xl">No Transaction Yet</p>
        <p className="text-slate-600 font-normal">
          You have not created an invoice yet !
        </p>
        <div>
          <button
            onClick={() => {
              // setNavItems("Invoices");
              setCreateNewOptions({
                ...createNewOptions,
                invoice: true,
              });
            }}
            className="hover:bg-green-500 p-2 w-40 rounded-md text-slate-200 font-normal bg-purple-700 text-lg"
          >
            New Transaction
          </button>
        </div>
      </div>
    </div>
  </div>
  )
}

export default NoTransactions