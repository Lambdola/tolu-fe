import React from 'react'
import Loading from './Loading';
import DeleteOutline from '@mui/icons-material/DeleteOutline';
import MoreVertOutlined from '@mui/icons-material/MoreVertOutlined';
{/* <MoreVertOutlined */}

function Transactions({loadingState, navRes, navBarState, setCreateNewOptions, createNewOptions, setNavItems,    }) {
  return (
    <div className="">
        {/* <DeleteOutline */}
    {loadingState && <Loading navBarState={navBarState} />}
    {navRes.transaction === "No Transaction Recorded" ||
    navRes.transaction === "" ? (
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
    ) : (
      <div>
        <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-50 p-3 xs:max-xl:p-0">
        
          <div className="bg-gray-100 xs:max-xl:bg-white rounded-lg shadow shadow-slate-600 xs:max-xl:shadow-transparent overflow-scroll  xs:max-xl:w-full ">
            <div className="py-5 px-3 border-b border-slate-800 xs:max-xl:border-slate-300 xs:max-xl:absolute xs:max-xl:w-full">
              <p className="text-slate-700 text-xl font-semibold">
                Transactions
              </p>
            </div>
            <div className="flex xs:max-xl:bg-white bg-red-40 justify-between my-5 px-5 xs:max-xl:absolute xs:max-xl:mt-24">
              <div className="w-[30%] xs:max-xl:w-10 bg-red-30 flex items-center justify-center">
                <input
                  type="search"
                  className="xs:max-xl:hidden w-full py-2 xs:max-xl:w- xs:max-xl:h-5 px-5 bg-transparent border-[1px] border-slate-300 rounded-md text-xl"
                  placeholder="Search Customers"
                />
                <input type="checkbox" className='xl:hidden' />
              </div>
              <div className="flex gap-5">
                <div>
                  <button
                    onClick={() => {
                      setNavItems("Invoices");
                      setCreateNewOptions({
                        ...createNewOptions,
                        invoice: true,
                      });
                    }}
                    className="p-2 w-40 xs:max-xl:w-32 xs:max-xl:max-w-sm rounded-md text-slate-200 font-normal bg-purple-700 hover:bg-green-600 active:bg-green-800 text-lg  xs:max-xl:text-sm"
                  >
                    New Transaction
                  </button>
                </div>
                <div> 
                  <button className="p-2 w-40  xs:max-xl:w-28 rounded-md text-slate-200 font-normal bg-transparent border border-purple-900 xs:max-xl:border-slate-500 text-lg flex justify-between items-center">
                    <p className="text-black text-xl  xs:max-xl:text-sm">Actions</p>
                    <div className="w-5 h-5 bg-red-200  xs:max-xl:w-3  xs:max-xl:h-3"></div>
                  </button>
                </div>
              </div>
            </div>
            {/* ======= */}
            <div className="xs:max-xl:bg-white bg-red-40 px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm xs:max-xl:mt-40">
              <div>
                <input type="checkbox" />
              </div>
              <div className="bg-red-20 w-[14%]  xs:max-xl:min-w-[8rem]">
                <p className="border-r border-slate-400 px-5 ">#ID</p>
              </div>
              <div className="bg-red-20 w-[20%]  xs:max-xl:min-w-[15rem]">
                <p className="border-r border-slate-400 px-5 ">
                  CUSTOMER
                </p>
              </div>
              <div className="bg-red-20 w-[20%]  xs:max-xl:min-w-[8rem]">
                <p className="border-r border-slate-400 px-5 ">
                  DESCRIPTION
                </p>
              </div>
              <div className="bg-red-20 w-[10%]  xs:max-xl:min-w-[8rem]">
                <p className="border-r border-slate-400 px-5 ">
                  TOTAL
                </p>
              </div>
              <div className="bg-red-20 w-[15%]  xs:max-xl:min-w-[8rem]">
                <p className="border-r border-slate-400 px-5 ">
                  DATE
                </p>
              </div>
              <div className="bg-red-20 w-[12%]  xs:max-xl:min-w-[8rem]">
                <p className="border-r border-slate-400 px-5 ">
                  STATUS
                </p>
              </div>
              <div className="bg-red-20 w-[10%]  xs:max-xl:min-w-[8rem]">
                <p className="border-r border-slate-400 px-5 ">
                  ACTION
                </p>
              </div>
            </div>
            <div className="overflow-scrol xs:max-xl:bg-white xs:max-xl:w-full">
              {navRes.transaction.map((items, index) => {
                return (
                  <div key={items.invoiceId} className="border-b-[1px] xs:max-xl:w-full xs:max-xl:border-transparent border-slate-300 px-5 py-2 flex justify-between items-center font-bold text-slate-600 text-sm">
                    <div>
                      <input type="checkbox" />
                    </div>
                    <div className="bg-red-20 w-[14%]  xs:max-xl:min-w-[8rem]">
                      {/* <div className="w-5 h-5 rounded-full bg-red-400"></div> */}
                      <p className="border- border-slate-400 px-5 text-lef">
                        {items.invoiceId}
                      </p>
                    </div>
                    <div className="bg-red-20 w-[20%]  xs:max-xl:w-auto flex items-center pl-3">
                      <div className="w-5 h-5 rounded-full bg-red-900">
                       
                      </div>
                      <div className="border- border-slate-400 pl-2 flex justify-center flex-col w-[90%] bg-blue-40">
                        {/* <p>{JSON.parse(items.customer).name}</p> */}
                        <p className="truncate text-ellipsis bg-red-20">
                          {items.customer}
                        </p>
                      </div>
                    </div>
                    <div className="bg-red-20 w-[20%]  xs:max-xl:min-w-[8rem] ml-3 pl-3">
                      <div className="">
                        <p>
                          {JSON.parse(items.products).length > 1 ? (
                            <p className="text-lg text-black font-semibold">
                              {JSON.parse(items.products).length}{" "}
                              items
                            </p>
                          ) : (
                            <p className="text-lg font-semibold">
                              {JSON.parse(items.products).length} item
                            </p>
                          )}
                        </p>
                        <div className="flex gap-1">
                          {JSON.parse(items.products).map((items) => (
                            <p className="p-[2px] rounded font-light text-black">
                              {items.itemName},
                            </p>
                          ))}
                        </div>
                      </div>
                    </div>
                    <div className="bg-red-20 w-[10%]  xs:max-xl:min-w-[8rem] ml-3 pl-1">
                      <p className="border- border-slate-400 truncate text-ellipsis text-base ">
                        #{items.amountTotal}
                      </p>
                    </div>
                    <div className="bg-red-20 w-[15%]  xs:max-xl:min-w-[8rem]  xs:max-xl:ml-0 xs:max-xl:p-0 ml-3 pl-2">
                      <p className="border- border-slate-400">
                        {items.dateIssued
                          .split("-")
                          .reverse()
                          .join("-")}
                      </p>
                    </div>
                    <div className="bg-red-20 w-[12%]  xs:max-xl:min-w-[8rem]">
                      <div className="border- border-slate-400 flex ml-3 ">
                        {items.paidStatus === "paid" ? (
                          <span className="px-2 text-center py-1 bg-lime-200 text-green-500 text-sm rounded">
                            {items.paidStatus}
                          </span>
                        ) : (
                          <span className="px-2 py-1 text-center bg-pink-200 text-red-500 text-sm rounded">
                            {items.paidStatus}
                          </span>
                        )}
                      </div>
                    </div>
                    <div className="bg-red-20 w-[10%]">
                      <div className="h-full flex  bg-blue-60  justify-between">
                        {items.paidStatus === "paid" ? (
                          <div className="h-full w-full flex bg-blue-60 px-4 justify-between">
                            <div>
                              <DeleteOutline />
                            </div>
                            <div>
                              <MoreVertOutlined className="text-slate-300" />
                            </div>{" "}
                          </div>
                        ) : (
                          <div className="h-full w-full flex bg-blue-60 px-4 justify-between">
                            <div>
                              <DeleteOutline />
                            </div>
                            <div>
                              <MoreVertOutlined />
                            </div>{" "}
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )}
  </div>
  )
}

export default Transactions