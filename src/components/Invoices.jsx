import DeleteOutline from "@mui/icons-material/DeleteOutline";
import MoreVertOutlined from "@mui/icons-material/MoreVertOutlined";
import OpenInNew from "@mui/icons-material/OpenInNew";
import RemoveRedEyeOutlined from "@mui/icons-material/RemoveRedEyeOutlined";
import React from "react";

function Invoices({
  setCreateNewOptions,
  createNewOptions,
  navRes,
  showInvoice,
  setShowInvoice,
}) {
  return (
    <div>
      <div className="bg-blue-40 absolute top-0 left-0 h-full w-full overflow-scroll z-50 p-3 xs:max-xl:p-0">
        <div className="bg-gray-100 xs:max-xl:bg-white rounded-lg shadow shadow-slate-600 xs:max-xl:shadow-transparent overflow-scroll  xs:max-xl:w-full ">
          <div className="py-5 px-3 border-b border-slate-800 xs:max-xl:border-slate-300 xs:max-xl:absolute xs:max-xl:w-full">
            <p className="text-slate-700 text-xl font-semibold">Invoices</p>
          </div>
          <div className="flex xs:max-xl:bg-white bg-red-40 justify-between my-5 px-5 xs:max-xl:absolute xs:max-xl:mt-24">
            <div className="w-[30%] xs:max-xl:w-10 bg-red-30 flex items-center justify-center">
              <input
                type="search"
                className="xs:max-xl:hidden w-full py-2 xs:max-xl:w- xs:max-xl:h-5 px-5 bg-transparent border-[1px] border-slate-300 rounded-md text-xl"
                placeholder="Search Customers"
              />
              <input type="checkbox" className="xl:hidden" />
            </div>
            <div className="flex gap-5">
              <div>
                <button
                  onClick={() =>
                    setCreateNewOptions({
                      ...createNewOptions,
                      invoice: true,
                    })
                  }
                  className="p-2 w-40 xs:max-xl:w-32 xs:max-xl:max-w-sm rounded-md text-slate-200 font-normal bg-purple-700 hover:bg-green-600 active:bg-green-800 text-lg  xs:max-xl:text-sm"
                >
                  Create Invoice
                </button>
              </div>
              <div>
                <button className="p-2 w-40  xs:max-xl:w-28 rounded-md text-slate-200 font-normal bg-transparent border border-purple-900 xs:max-xl:border-slate-500 text-lg flex justify-between items-center">
                  <p className="text-black text-xl  xs:max-xl:text-sm">
                    Actions
                  </p>
                  <div className="w-5 h-5 bg-red-200  xs:max-xl:w-3  xs:max-xl:h-3"></div>
                </button>
              </div>
            </div>
          </div>

          <div className="xs:max-xl:bg-white bg-red-40 px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm xs:max-xl:mt-40">
            <div>
              <input type="checkbox" />
            </div>
            <div className="bg-red-20 w-[14%]  xs:max-xl:min-w-[8rem]">
              <p className="border-r border-slate-400 px-5 ">#ID</p>
            </div>
            <div className="bg-red-20 w-[25%]  xs:max-xl:min-w-[12rem]">
              <p className="border-r border-slate-400 px-5 ">CUSTOMER</p>
            </div>
            <div className="bg-red-20 w-[10%] xs:max-xl:min-w-[8rem]">
              <p className="border-r border-slate-400 px-5 ">TOTAL</p>
            </div>
            <div className="bg-red-20 w-[15%] xs:max-xl:min-w-[8rem]">
              <p className="border-r border-slate-400 px-5  ">ISSUED DATE</p>
            </div>
            <div className="bg-red-20 w-[15%] xs:max-xl:min-w-[10rem]">
              <p className="border-r border-slate-400 px-5 ">BALANCE</p>
            </div>
            <div className="bg-red-20 w-[10%] xs:max-xl:min-w-[8rem]">
              <p className="borde border-slate-400 px-5 ">ACTION</p>
            </div>
          </div>
          <div className="">
            {navRes.transaction.map((items, index) => {
              return (
                <div className="border-b-[1px] border-slate-300 px-5 py-3 flex justify-between items-center font-bold text-slate-600 text-sm bg-red-40">
                  {showInvoice && (
                    <div
                      onClick={() => setShowInvoice(false)}
                      className="absolute flex items-center justify-center bg-red-200 left-0 h-full w-full"
                    >
                      <div>
                        <div classNmae="flex justify-between bg-red-800">
                          <div>
                            <p>
                              Seller Name:{" "}
                              {JSON.parse(items.seller).businessName}{" "}
                            </p>
                            <p>
                              Seller Mail: {JSON.parse(items.seller).email}{" "}
                            </p>
                          </div>
                          <div>
                            <p>Invoice No: {items.invoiceId} </p>
                            <p>Date Issues: {items.dateIssued}</p>
                            <p>Date Due: {items.duePayDate} </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                  <div>
                    <input type="checkbox" />
                  </div>
                  <div className="bg-red-20  w-[14%]  xs:max-xl:min-w-[8rem]">
                    {/* <div className="w-5 h-5 rounded-full bg-red-400"></div> */}
                    <p className="border- border-slate-400 px-5">
                      {items.invoiceId}
                    </p>
                  </div>
                  <div className="bg-red-20 w-[25%] xs:max-xl:min-w-[12rem] flex items-center justify-start pl-2 xs:max-xl:pl-5 ">
                    <div className="w-5 aspect-square rounded-full bg-red-900"></div>
                    <div className="border- border-slate-400 pl-2 flex justify-center flex-col w-[70%] xs:max-xl:w-[90%] ">
                      <p className="truncate text-ellipsis">{items.customer}</p>
                      <p className=" bg-red-20">
                      
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-20 w-[10%]  xs:max-xl:min-w-[8rem] pl-3 xs:max-xl:pl-5">
                    <div className="">
                      <p className="font-mono text-red-60 text-lg">
                        # {items.amountTotal}
                      </p>
                    </div>
                  </div>
                  <div className="bg-red-20 w-[15%]  xs:max-xl:min-w-[8rem] ml-2 xs:max-xl:ml-0 pl-5">
                    <p className="border- border-slate-400 truncate text-ellipsis text-base ">
                      {items.dateIssued.split("-").reverse().join("-")}
                    </p>
                  </div>
                  <div className="bg-red-20 w-[15%]  xs:max-xl:min-w-[10rem] ml-3 xs:max-xl:ml-0">
                    <div className="border- border-slate-400 px-5">
                      {items.paidStatus === "paid" ? (
                        <span className="px-2 text-center py-1 bg-lime-200 text-green-500 text-sm rounded">
                          {items.paidStatus}
                        </span>
                      ) : (
                        <div className="flex items-center gap-3">
                          <p className="font-mono text-red-600 text-lg">
                            {items.debt}
                          </p>
                          <div
                            onClick={() => {
                              window.location.href = `${items.paymentLink}`;
                            }}
                          >
                            <OpenInNew className="text-blue-600" />
                          </div>
                        </div>
                      )}
                    </div>
                  </div>
                  <div className="bg-red-20 w-[10%]  xs:max-xl:min-w-[8rem]">
                    <div className="h-full flex  bg-blue-60 justify-between">
                      <div className="h-full w-full flex bg-blue-60 px-1 justify-between">
                        <div>
                          <DeleteOutline />
                        </div>
                        <div onClick={() => setShowInvoice(true)}>
                          <RemoveRedEyeOutlined />
                        </div>
                        <div>
                          <MoreVertOutlined />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Invoices;
